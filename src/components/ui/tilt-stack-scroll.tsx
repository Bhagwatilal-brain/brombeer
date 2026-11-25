"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Sparkles } from "lucide-react"

export type TiltStackCard = {
  number?: string
  title: string
  /** Small line above the title, e.g. "TACTICAL AIR-GAP · ZERO EGRESS". */
  kicker?: string
  description: string
  image: string
  alt?: string
  /** Short chips under the copy. */
  tags?: string[]
  /** Big figure on the right, e.g. "<80ms". */
  price?: string
  priceNote?: string
  cta?: string
  href?: string
  /** Tint for the chip dots and the button. */
  accent?: string
}

export type TiltStackScrollProps = {
  cards: TiltStackCard[]
  eyebrow?: string
  heading?: string
  subheading?: string
  /** Height of the sticky stage; the section scrolls one stage per card. */
  height?: string
  /** Settle on the nearest card when scrolling stops. */
  snap?: boolean
  className?: string
}

// #region pose
export const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v)
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

export type Pose = { y: number; scale: number; rx: number; rz: number; shade: number; opacity: number }

/** Where card i sits when the scroll is at p (0 = first card, n-1 = last).
 *  A card slides up tilted and turned, lands flat, then tips back and shrinks
 *  as later cards land on it. y is a percentage of the card's own height. */
export function pose(p: number, i: number, reduced: boolean): Pose {
  const enter = i === 0 ? 1 : clamp(p - (i - 1), 0, 1)
  const depth = clamp(p - i, 0, 3)
  if (reduced)
    return { y: 0, scale: 1, rx: 0, rz: 0, shade: Math.min(depth, 1) * 0.5, opacity: enter >= 1 ? 1 : enter }
  const e = easeOut(enter)
  return {
    y: (1 - e) * 115 - depth * 1.5,
    scale: (1 - depth * 0.05) * (0.94 + 0.06 * e),
    rx: (1 - e) * 14 - depth * 5,
    rz: (1 - e) * (i % 2 ? 3 : -3),
    shade: Math.min(depth, 2) * 0.28,
    opacity: depth > 2.6 ? clamp((3 - depth) / 0.4, 0, 1) : 1,
  }
}

export const toTransform = (q: Pose) =>
  "translate3d(0," + q.y.toFixed(3) + "%,0) perspective(1400px) rotateX(" + q.rx.toFixed(3) + "deg) rotateZ(" + q.rz.toFixed(3) + "deg) scale(" + q.scale.toFixed(4) + ")"

export const pad2 = (n: number) => (n < 10 ? "0" : "") + n
// #endregion

const CSS =
  ".tss-track{position:relative;width:100%}" +
  ".tss-stage{position:relative;width:100%;height:calc(100vh - 84px);min-height:560px;display:flex;flex-direction:column;justify-content:center;box-sizing:border-box;padding:clamp(20px,3vh,36px) 24px clamp(24px,3vh,36px);overflow:hidden;background:var(--color-background);color:var(--color-foreground)}" +
  ".tss-head{position:relative;z-index:10;width:100%;max-width:960px;margin:0 auto clamp(14px,2vh,22px);text-align:center;flex:none}" +
  ".tss-deck{position:relative;width:100%;max-width:1040px;margin:0 auto;height:340px;min-height:320px;max-height:380px}" +
  "@media (min-width:1280px){.tss-deck{height:370px;max-height:400px}}" +
  ".tss-card{position:absolute;inset:0;border-radius:26px;overflow:hidden;transform-origin:50% 0;will-change:transform;backface-visibility:hidden;" +
  "background:linear-gradient(135deg,#ffffff 0%,#fdfcff 50%,#f6f2ff 100%);border:1px solid #dfd8f5;border-bottom:3px solid #cec3f2;" +
  "box-shadow:0 20px 50px -20px rgba(118,80,232,.16),0 1px 0 rgba(255,255,255,.9) inset;padding:clamp(18px,2.5vw,32px) clamp(20px,3.5vw,48px);color:#111014}" +
  ".tss-card-bevel{pointer-events:none;position:absolute;inset-inline:2.5rem;top:0;height:1.5px;background:linear-gradient(90deg,transparent 0%,rgba(149,129,239,0.55) 50%,transparent 100%)}" +
  ".tss-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:clamp(18px,2.5vw,36px);align-items:center;height:100%;position:relative;z-index:10}" +
  ".tss-left{grid-column:span 6;display:flex;align-items:flex-start;gap:clamp(12px,1.8vw,22px)}" +
  ".tss-number{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:clamp(28px,3vw,40px);color:#9581EF;line-height:1;padding-top:2px;flex-shrink:0;user-select:none;font-variant-numeric:tabular-nums}" +
  ".tss-info{display:flex;flex-direction:column}" +
  ".tss-title{font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:clamp(17px,1.6vw,22px);line-height:1.25;letter-spacing:-.02em;color:#7650E8;margin:0 0 8px}" +
  ".tss-desc{font-family:'DM Sans',sans-serif;font-weight:400;font-size:clamp(12px,1vw,14px);line-height:1.5;color:#665D82;margin:0}" +
  ".tss-right{grid-column:span 6}" +
  ".tss-img-wrap{position:relative;aspect-ratio:16/9;max-height:210px;width:100%;border-radius:18px;overflow:hidden;border:1px solid #E1DFEF;background:#F8F6FF;box-shadow:0 18px 42px -16px rgba(118,80,232,.2)}" +
  ".tss-img-wrap img{width:100%;height:100%;object-fit:cover;display:block}" +
  ".tss-shade{position:absolute;inset:0;z-index:20;background:#2E1A6B;opacity:0;pointer-events:none;border-radius:26px}" +
  "@media (max-width:768px){" +
  ".tss-stage{padding:14px 12px 16px;height:auto;min-height:540px}" +
  ".tss-deck{height:360px}" +
  ".tss-card{padding:16px;border-radius:20px}" +
  ".tss-grid{display:flex;flex-direction:column;gap:10px;justify-content:center}" +
  ".tss-left{gap:10px}" +
  ".tss-number{font-size:22px}" +
  ".tss-title{font-size:15px;margin-bottom:4px}" +
  ".tss-desc{font-size:11.5px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}" +
  ".tss-img-wrap{aspect-ratio:16/9;max-height:130px}" +
  "}" +
  "@media (prefers-reduced-motion:reduce){.tss-card{transition:none}}"

export default function TiltStackScroll({
  cards,
  eyebrow,
  heading = "Tactical Edge Inference Under. Extreme Electronic Jamming.",
  subheading,
  height = "calc(100vh - 84px)",
  snap = false,
  className = "",
}: TiltStackScrollProps) {
  const track = useRef(null as HTMLDivElement | null)
  const stage = useRef(null as HTMLElement | null)
  const els = useRef([] as (HTMLElement | null)[])
  const shades = useRef([] as (HTMLDivElement | null)[])
  const n = cards.length

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    let reduced = mq.matches
    let p = 0

    const paint = () => {
      for (let i = 0; i < n; i++) {
        const el = els.current[i]
        if (!el) continue
        const q = pose(p, i, reduced)
        el.style.transform = toTransform(q)
        el.style.opacity = String(q.opacity)
        const sh = shades.current[i]
        if (sh) sh.style.opacity = String(q.shade)
      }
    }

    // GSAP ScrollTrigger with rock-solid PINNING
    const trigger = ScrollTrigger.create({
      trigger: track.current,
      start: "top 84px",
      end: "bottom bottom",
      pin: stage.current,
      pinSpacing: false,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        p = self.progress * Math.max(n - 1, 0)
        paint()
      },
      snap: snap && !reduced && n > 1 ? { snapTo: 1 / (n - 1), duration: { min: 0.25, max: 0.6 }, delay: 0.1, ease: "power2.inOut" } : undefined,
    })
    paint()

    // Refresh ScrollTrigger after DOM has settled
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh()
      paint()
    }, 150)

    const on = () => {
      reduced = mq.matches
      paint()
    }
    mq.addEventListener("change", on)
    return () => {
      clearTimeout(refreshTimer)
      mq.removeEventListener("change", on)
      trigger.kill()
    }
  }, [n, snap])

  // Split heading cleanly into base + signature Brombeer gradient accent
  const renderHeading = (text: string) => {
    // If text has periods (e.g. "Sentence one. Sentence two.")
    if (text.includes(".")) {
      const parts = text.split(".").map(s => s.trim()).filter(Boolean)
      if (parts.length >= 2) {
        return (
          <>
            <span>{parts[0]}. </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary via-[#6366F1] to-violet-deep">
              {parts.slice(1).join(". ")}.
            </span>
          </>
        )
      }
    }
    const words = text.split(" ")
    if (words.length <= 3) {
      return (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary via-[#6366F1] to-violet-deep">
          {text}
        </span>
      )
    }
    const cutoff = Math.max(words.length - 3, 2)
    const firstPart = words.slice(0, cutoff).join(" ")
    const secondPart = words.slice(cutoff).join(" ")
    return (
      <>
        <span>{firstPart}{" "}</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary via-[#6366F1] to-violet-deep">
          {secondPart}
        </span>
      </>
    )
  }

  return (
    <div
      ref={track}
      className={"tss-track " + className}
      style={{ height: "calc(100vh + " + Math.max(n - 1, 1) * 80 + "vh)" }}
    >
      <style>{CSS}</style>
      <section
        ref={stage}
        className="tss-stage"
        aria-roledescription="carousel"
        aria-label={heading}
      >
        {/* Brombeer Brand Styled Header with Generous White Space Above & Below */}
        <header className="tss-head text-center">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#6853A5]/20 shadow-xs text-xs font-semibold text-violet-primary mb-3">
              <Sparkles className="w-3.5 h-3.5 text-violet-primary" />
              <span className="font-mono uppercase text-[11px] tracking-wider">
                {eyebrow}
              </span>
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.16] text-center mx-auto">
            {renderHeading(heading)}
          </h2>
          {subheading && (
            <p className="text-[#666371] text-xs sm:text-sm font-dm leading-relaxed mt-2 max-w-2xl mx-auto text-center">
              {subheading}
            </p>
          )}
        </header>

        {/* 3D Stacking Deck - Fits 100% inside stage without overflowing */}
        <div className="tss-deck">
          {cards.map((c, i) => (
            <article
              key={c.title + i}
              className="tss-card"
              ref={(el) => {
                els.current[i] = el
              }}
              style={{ zIndex: i + 1, ["--tss-accent" as string]: c.accent ?? "#7650E8" }}
              aria-roledescription="slide"
              aria-label={pad2(i + 1) + " of " + pad2(n) + ": " + c.title}
            >
              {/* Crisp Top-Edge 3D Bevel Light Line */}
              <div aria-hidden="true" className="tss-card-bevel" />

              {/* Clean Split Content: Left (Number + Heading + Subtext), Right (Image) */}
              <div className="tss-grid">
                {/* LEFT COLUMN */}
                <div className="tss-left">
                  <span className="tss-number">
                    {c.number ?? pad2(i + 1)}
                  </span>

                  <div className="tss-info">
                    <h3 className="tss-title">
                      {c.title}
                    </h3>
                    <p className="tss-desc">
                      {c.description}
                    </p>
                  </div>
                </div>

                {/* RIGHT COLUMN: Image */}
                <div className="tss-right">
                  <div className="tss-img-wrap">
                    <img
                      src={c.image}
                      alt={c.alt ?? c.title}
                      draggable={false}
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              </div>
              <div
                className="tss-shade"
                ref={(el) => {
                  shades.current[i] = el
                }}
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
