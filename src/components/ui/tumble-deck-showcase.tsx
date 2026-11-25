"use client"

import * as React from "react"
import gsap from "gsap"

/*
 * Tumble Deck Showcase — a stack of website screenshots standing on edge, one
 * behind the other. The front card tips forward on its bottom edge and lands
 * flat on the floor, the deck slides up to the line, the next one falls. It is
 * scroll-driven: the wheel, a trackpad or a drag scrubs the deck, and it never
 * runs out — after the last card the first one is standing behind it again,
 * both ways.
 *
 * Pure CSS 3D (one perspective, every card hinged on the same floor line) with
 * a single number driving it — the deck position, which may run any distance. A
 * small pool of card elements is recycled along it: slot j always holds the
 * virtual card k ≡ j (mod pool), showing image k mod n, and a slot is only
 * re-pointed while it is invisible (under the floor pile or past the back).
 */

export type TumbleCard = {
  src: string
  alt?: string
  title?: string
  category?: string
  badge?: string
  metric?: string
  metricLabel?: string
  description?: string
  href?: string
}

export type TumbleDeckShowcaseHandle = {
  step: (dir: 1 | -1) => void
  goTo: (targetIndex: number) => void
}

export type TumbleDeckShowcaseProps = {
  cards: TumbleCard[]
  /** Any CSS length. Default 100svh. */
  height?: number | string
  /** Card width ÷ height. Images are cropped to it from the top. */
  aspect?: number
  /** Wheel / trackpad travel (px) that tips one card. */
  scrollPerCard?: number
  /** How many upright cards show behind the front one. */
  depth?: number
  background?: string
  className?: string
  style?: React.CSSProperties
  ariaLabel?: string
  onIndexChange?: (index: number) => void
}

// #region pose
export const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)

/** Euclidean modulo: card k of an endless deck shows image wrap(k, n). */
export const wrap = (k: number, n: number) => (n ? ((k % n) + n) % n : 0)

/**
 * Hinge angle (deg, CSS rotateX) of a card `t` of the way through its fall.
 * 0 stands upright, -90 lies flat towards the viewer. Gravity eases in, then
 * the card kicks once off the floor and settles.
 */
export function fallAngle(t: number): number {
  const u = clamp01(t)
  const land = 0.78
  if (u <= land) {
    const k = u / land
    return -90 * k * k * k
  }
  const k = (u - land) / (1 - land)
  return -90 + 6 * Math.sin(Math.PI * k) * (1 - k)
}

/** How far the deck has slid forward, in card gaps, at deck position `pos`. */
export function deckAdvance(pos: number): number {
  const i = Math.floor(pos)
  const f = pos - i
  const k = clamp01((f - 0.28) / 0.6)
  return i + k * k * (3 - 2 * k)
}

export type Pose = { angle: number; z: number; lift: number; opacity: number; flat: boolean }

/**
 * Pose of virtual card `k` when the deck is at `pos` (card k is at the front
 * when pos = k). Both may run past the number of images, and below zero.
 */
export function cardPose(k: number, pos: number, depth: number): Pose {
  const t = pos - k
  // Floor cards lie a hair apart, the newest highest. Relative to the front
  // index so the pile doesn't creep upward as the loop runs on.
  const lift = (k - Math.floor(pos) + 3) * 0.6
  if (t >= 1) {
    // On the floor. Only the two latest show.
    return { angle: -90, z: 0, lift, opacity: t < 3 ? 1 : 0, flat: true }
  }
  if (t > 0) return { angle: fallAngle(t), z: 0, lift, opacity: 1, flat: false }
  const rel = k - deckAdvance(pos)
  const opacity = clamp01(depth + 1 - rel)
  return { angle: 0, z: -Math.max(rel, 0), lift: 0, opacity, flat: false }
}
// #endregion

export const TumbleDeckShowcase = React.forwardRef<TumbleDeckShowcaseHandle, TumbleDeckShowcaseProps>(
  function TumbleDeckShowcase(
    {
      cards,
      height = "700px",
      aspect = 2.0,
      scrollPerCard = 220,
      depth = 5,
      background = "transparent",
      className,
      style,
      ariaLabel = "Website showcase",
      onIndexChange,
    },
    ref
  ) {
    const rootRef = React.useRef<HTMLDivElement>(null)
    const sceneRef = React.useRef<HTMLDivElement>(null)
    const cardRefs = React.useRef<(HTMLDivElement | null)[]>([])
    const imgRefs = React.useRef<(HTMLImageElement | null)[]>([])
    const overlayRefs = React.useRef<(HTMLDivElement | null)[]>([])
    const badgeRefs = React.useRef<(HTMLSpanElement | null)[]>([])
    const metricRefs = React.useRef<(HTMLSpanElement | null)[]>([])
    const titleRefs = React.useRef<(HTMLHeadingElement | null)[]>([])
    const descRefs = React.useRef<(HTMLParagraphElement | null)[]>([])

    const slotK = React.useRef<number[]>([])
    const state = React.useRef({ pos: 0 })
    const lastReported = React.useRef<number>(-1)
    const geo = React.useRef({ h: 320, gap: 50 })
    const n = cards.length
    // Two on the floor, the falling one, the front one, `depth` behind, one fading in.
    const pool = n ? depth + 5 : 0

    const paint = React.useCallback(() => {
      const { pos } = state.current
      const { gap } = geo.current
      const base = Math.floor(pos) - 2

      // Check current front card index
      if (n > 0) {
        const curIdx = wrap(Math.round(pos), n)
        if (curIdx !== lastReported.current) {
          lastReported.current = curIdx
          onIndexChange?.(curIdx)
        }
      }

      cardRefs.current.forEach((el, j) => {
        const img = imgRefs.current[j]
        if (!el || !img || j >= pool) return
        const k = base + wrap(j - base, pool)
        const t = pos - k

        if (slotK.current[j] !== k) {
          slotK.current[j] = k
          const c = cards[wrap(k, n)]
          img.src = c.src
          img.alt = c.alt ?? ""

          // Update rich metadata overlay if element exists
          const hasOverlay = Boolean(c.title || c.badge || c.category || c.metric || c.description)
          if (overlayRefs.current[j]) {
            overlayRefs.current[j]!.style.display = hasOverlay ? "flex" : "none"
          }
          if (badgeRefs.current[j]) {
            const badgeText = c.badge || c.category || ""
            badgeRefs.current[j]!.textContent = badgeText
            badgeRefs.current[j]!.style.display = badgeText ? "inline-flex" : "none"
          }
          if (metricRefs.current[j]) {
            const metricText = c.metric ? (c.metricLabel ? `${c.metric} • ${c.metricLabel}` : c.metric) : ""
            metricRefs.current[j]!.textContent = metricText
            metricRefs.current[j]!.style.display = metricText ? "inline-flex" : "none"
          }
          if (titleRefs.current[j]) {
            titleRefs.current[j]!.textContent = c.title || ""
            titleRefs.current[j]!.style.display = c.title ? "block" : "none"
          }
          if (descRefs.current[j]) {
            descRefs.current[j]!.textContent = c.description || ""
            descRefs.current[j]!.style.display = c.description ? "-webkit-box" : "none"
          }
        }

        // Fade overlay out gracefully as the card tilts onto the floor so the floor card acts as sleek artwork
        if (overlayRefs.current[j]) {
          const overlayOpacity = t > 0.15 ? Math.max(0, 1 - (t - 0.15) * 3) : 1
          overlayRefs.current[j]!.style.opacity = String(overlayOpacity)
        }

        const p = cardPose(k, pos, depth)
        el.style.transform = `translate3d(0, ${-p.lift}px, ${p.z * gap}px) rotateX(${p.angle}deg)`
        el.style.opacity = String(p.opacity)
        el.style.visibility = p.opacity > 0 ? "visible" : "hidden"
        // Light falls from above: a card darkens a touch as it tips away from it.
        const shade = p.flat ? 0.08 : (-p.angle / 90) * 0.08
        el.style.setProperty("--td-shade", String(shade))
      })
    }, [depth, pool, cards, n, onIndexChange])

    // New images: re-point every slot on the next paint.
    React.useLayoutEffect(() => {
      slotK.current = []
    }, [cards])

    // Fit: Larger, commanding card dimensions that fill the stage generously
    React.useLayoutEffect(() => {
      const root = rootRef.current
      const scene = sceneRef.current
      if (!root || !scene) return
      const fit = () => {
        const W0 = root.clientWidth
        const H0 = root.clientHeight
        const wFrac = W0 < 480 ? 0.96 : W0 < 768 ? 0.92 : W0 < 1024 ? 0.88 : 0.82
        // Make card height generously large (up to 50% of viewport/container height)
        const h = Math.max(90, Math.min((W0 * wFrac) / aspect, H0 * 0.50, 750))
        const w = h * aspect
        const top = H0 / 2 - 0.58 * h
        geo.current = { h, gap: 0.22 * h }
        scene.style.perspective = `${6 * h}px`
        scene.style.perspectiveOrigin = `50% ${top - 1.66 * h}px`
        root.style.setProperty("--td-w", `${w}px`)
        root.style.setProperty("--td-h", `${h}px`)
        root.style.setProperty("--td-top", `${top}px`)
        paint()
      }
      fit()
      const ro = new ResizeObserver(fit)
      ro.observe(root)
      return () => ro.disconnect()
    }, [aspect, paint])

    // Scroll-driven. Wheel, trackpad and drag push a target position; the deck
    // eases after it every frame and, once the input goes quiet, settles on the
    // nearest whole card so nothing is left half-fallen. No autoplay.
    const api = React.useRef<{ step: (dir: 1 | -1) => void; goTo: (targetIndex: number) => void }>({
      step: () => {},
      goTo: () => {},
    })
    const dragged = React.useRef(false)

    React.useEffect(() => {
      const root = rootRef.current
      if (!root || n === 0) return
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const s = state.current
      let target = s.pos
      let running = false
      let idle: ReturnType<typeof setTimeout> | undefined
      let acc = 0

      const follow = () => {
        const dt = gsap.ticker.deltaRatio(60) / 60
        s.pos += (target - s.pos) * (1 - Math.exp(-dt * 9))
        if (Math.abs(target - s.pos) < 2e-3) {
          s.pos = target
          gsap.ticker.remove(follow)
          running = false
        }
        paint()
      }
      const push = (to: number) => {
        // A hard fling still travels card by card instead of skipping the deck.
        target = Math.max(Math.round(s.pos) - 3, Math.min(Math.round(s.pos) + 3, to))
        if (reduce) {
          s.pos = target
          paint()
        } else if (!running) {
          running = true
          gsap.ticker.add(follow)
        }
      }
      // Settle on a whole card, leaning the way the input was heading.
      const settle = (bias = 0) =>
        push(bias > 0 ? Math.floor(target + 0.7) : bias < 0 ? Math.ceil(target - 0.7) : Math.round(target))

      api.current.step = (dir) => push(Math.round(target) + dir)
      api.current.goTo = (targetIndex: number) => {
        const curWrapped = wrap(Math.round(target), n)
        let diff = targetIndex - curWrapped
        if (diff > n / 2) diff -= n
        else if (diff < -n / 2) diff += n
        push(Math.round(target) + diff)
      }

      const onWheel = (e: WheelEvent) => {
        e.preventDefault()
        const scale = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? root.clientHeight : 1
        const d = (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) * scale
        if (reduce) {
          // No scrubbing: whole cards only, one per `scrollPerCard` of travel.
          acc += d
          while (Math.abs(acc) >= scrollPerCard) {
            const dir = Math.sign(acc)
            acc -= dir * scrollPerCard
            push(target + dir)
          }
          return
        }
        push(target + d / scrollPerCard)
        clearTimeout(idle)
        idle = setTimeout(() => settle(Math.sign(d)), 140)
      }

      let drag: { id: number; y: number; travel: number; last: number } | null = null
      const onDown = (e: PointerEvent) => {
        if (e.button !== 0) return
        drag = { id: e.pointerId, y: e.clientY, travel: 0, last: 0 }
        dragged.current = false
        clearTimeout(idle)
      }
      const onMove = (e: PointerEvent) => {
        if (!drag || e.pointerId !== drag.id) return
        const dy = drag.y - e.clientY
        drag.y = e.clientY
        drag.travel += Math.abs(dy)
        if (dy) drag.last = Math.sign(dy)
        if (drag.travel > 6 && !dragged.current) {
          dragged.current = true
          root.setPointerCapture(e.pointerId)
        }
        // Drag up = scroll down = the deck moves on. One card per card height.
        if (dragged.current && !reduce) push(target + dy / (geo.current.h * 1.1))
      }
      const onUp = (e: PointerEvent) => {
        if (!drag || e.pointerId !== drag.id) return
        if (dragged.current) {
          if (reduce) push(Math.round(target) + (drag.last || 0))
          else settle(drag.last)
        }
        drag = null
      }

      root.addEventListener("wheel", onWheel, { passive: false })
      root.addEventListener("pointerdown", onDown)
      root.addEventListener("pointermove", onMove)
      root.addEventListener("pointerup", onUp)
      root.addEventListener("pointercancel", onUp)
      paint()
      return () => {
        clearTimeout(idle)
        gsap.ticker.remove(follow)
        root.removeEventListener("wheel", onWheel)
        root.removeEventListener("pointerdown", onDown)
        root.removeEventListener("pointermove", onMove)
        root.removeEventListener("pointerup", onUp)
        root.removeEventListener("pointercancel", onUp)
      }
    }, [n, scrollPerCard, paint])

    React.useImperativeHandle(ref, () => ({
      step: (dir: 1 | -1) => api.current.step(dir),
      goTo: (targetIndex: number) => api.current.goTo(targetIndex),
    }))

    const onKey = (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " " || e.key === "Enter") {
        e.preventDefault()
        api.current.step(1)
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault()
        api.current.step(-1)
      }
    }

    return (
      <div
        ref={rootRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={onKey}
        onClick={() => {
          if (!dragged.current) api.current.step(1)
        }}
        className={["td-root relative w-full touch-none overflow-hidden outline-none select-none", className]
          .filter(Boolean)
          .join(" ")}
        style={{ height, background, ...style }}
      >
        <style>{`
          .td-scene { position: absolute; inset: 0; transform-style: preserve-3d; }
          .td-card {
            position: absolute; left: 50%; top: var(--td-top);
            width: var(--td-w); height: var(--td-h); margin-left: calc(var(--td-w) / -2);
            transform-origin: 50% 100%; transform-style: preserve-3d;
            backface-visibility: visible; will-change: transform;
            border-radius: 20px; overflow: hidden; cursor: grab;
            background: #111014;
            box-shadow: 0 30px 65px -14px rgba(40, 22, 77, 0.42), 0 0 0 1px rgba(118, 80, 232, 0.25);
            transition: box-shadow 0.25s ease;
          }
          .td-card:hover {
            box-shadow: 0 36px 75px -12px rgba(118, 80, 232, 0.45), 0 0 0 1px rgba(118, 80, 232, 0.5);
          }
          .td-card:active {
            cursor: grabbing;
          }
          .td-card img {
            display: block; width: 100%; height: 100%; max-width: none;
            object-fit: cover; object-position: 50% 50%; pointer-events: none;
          }
          .td-card::after {
            content: ""; position: absolute; inset: 0; pointer-events: none;
            background: #000; opacity: var(--td-shade, 0);
            transition: opacity 0.1s ease;
          }
          .td-root:focus-visible { box-shadow: inset 0 0 0 2px var(--color-primary, #7650E8); }

          .td-card-overlay {
            position: absolute; inset: 0;
            display: flex; flex-direction: column; justify-content: space-between;
            padding: 1.5rem 1.75rem;
            background: linear-gradient(
              180deg,
              rgba(17, 16, 20, 0.8) 0%,
              rgba(17, 16, 20, 0.12) 35%,
              rgba(17, 16, 20, 0.5) 60%,
              rgba(17, 16, 20, 0.96) 100%
            );
            color: #FFFFFF; pointer-events: none; border-radius: 20px;
            z-index: 2;
            transition: opacity 0.15s ease-out;
          }
          @media (min-width: 640px) {
            .td-card-overlay { padding: 2rem 2.25rem; }
          }
          .td-card-header {
            display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;
          }
          .td-card-badge {
            display: inline-flex; align-items: center; gap: 0.375rem;
            padding: 0.35rem 0.85rem; border-radius: 9999px;
            background: rgba(255, 255, 255, 0.22);
            backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 0.75rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
            color: #FFFFFF; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          }
          .td-card-metric {
            display: inline-flex; align-items: center;
            padding: 0.35rem 0.85rem; border-radius: 9999px;
            background: rgba(118, 80, 232, 0.92);
            backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(200, 184, 250, 0.6);
            font-family: "DM Sans", -apple-system, sans-serif;
            font-size: 0.75rem; font-weight: 700; color: #FFFFFF;
          }
          .td-card-footer {
            display: flex; flex-direction: column; gap: 0.4rem;
          }
          .td-card-title {
            font-family: "DM Sans", -apple-system, sans-serif;
            font-size: 1.35rem; font-weight: 800; line-height: 1.2;
            color: #FFFFFF; letter-spacing: -0.025em;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
          }
          @media (min-width: 640px) {
            .td-card-title { font-size: 1.75rem; }
          }
          @media (min-width: 1024px) {
            .td-card-title { font-size: 2.1rem; }
          }
          .td-card-desc {
            font-family: "DM Sans", -apple-system, sans-serif;
            font-size: 0.875rem; line-height: 1.45; color: rgba(255, 255, 255, 0.92);
            display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
            overflow: hidden; text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
            max-width: 90%;
          }
          @media (min-width: 640px) {
            .td-card-desc { font-size: 1rem; }
          }
        `}</style>
        <div ref={sceneRef} className="td-scene">
          {Array.from({ length: pool }, (_, j) => (
            <div
              key={j}
              ref={(el) => {
                cardRefs.current[j] = el
              }}
              className="td-card"
            >
              <img
                ref={(el) => {
                  imgRefs.current[j] = el
                }}
                alt=""
                width={840}
                height={Math.round(840 / aspect)}
                draggable={false}
                decoding="async"
              />
              <div
                ref={(el) => {
                  overlayRefs.current[j] = el
                }}
                className="td-card-overlay"
                style={{ display: "none" }}
              >
                <div className="td-card-header">
                  <span
                    ref={(el) => {
                      badgeRefs.current[j] = el
                    }}
                    className="td-card-badge"
                  />
                  <span
                    ref={(el) => {
                      metricRefs.current[j] = el
                    }}
                    className="td-card-metric"
                  />
                </div>
                <div className="td-card-footer">
                  <h3
                    ref={(el) => {
                      titleRefs.current[j] = el
                    }}
                    className="td-card-title"
                  />
                  <p
                    ref={(el) => {
                      descRefs.current[j] = el
                    }}
                    className="td-card-desc"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <span className="sr-only" aria-live="polite">
          {n} pages. Scroll, drag, click or press the arrow keys to flip through them.
        </span>
      </div>
    )
  }
)

export default TumbleDeckShowcase
