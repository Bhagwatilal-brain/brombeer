import React from 'react';
import { Container } from '../components/layout/Container';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-background">
      <Container size="narrow">
        <div className="space-y-10 text-sm text-text-secondary leading-relaxed">
          <div>
            <span className="eyebrow block">TERMS OF USE</span>
            <h1 className="text-3xl sm:text-5xl font-outfit font-extrabold text-text-primary tracking-[-0.03em] mt-1">
              Terms and Conditions
            </h1>
            <p className="text-xs text-text-secondary mt-2">
              Last updated: October 2026 • Brombeer AI / Brombeer IT Systems
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-lavender border border-violet-light/30 text-xs text-text-primary leading-relaxed">
            These Terms and Conditions govern your use of the Brombeer AI website. By accessing the website, you agree to comply with these terms.
          </div>

          <section className="space-y-3">
            <h3 className="text-xl font-serif text-text-primary">1. Website Information</h3>
            <p>
              The website provides general information about AI technologies, services, capabilities, and potential applications. Website content does not constitute a binding proposal, guarantee of project suitability, or commitment to deliver a particular result.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-serif text-text-primary">2. Services and Project Agreements</h3>
            <p>
              AI consulting, development, integration, and other services are subject to separate agreements where applicable. Project scope, deliverables, fees, milestones, timelines, acceptance criteria, support arrangements, and other commercial conditions should be specified in the relevant written agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-serif text-text-primary">3. Intellectual Property</h3>
            <p>
              Unless otherwise stated, the website's text, branding, graphics, design, and other original content are protected by applicable intellectual-property laws. You may not reproduce, distribute, modify, or commercially exploit website content without appropriate authorization, except where permitted by law.
            </p>
            <p>
              Ownership and licensing of project-specific software, models, data, and deliverables will be determined by the relevant project agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-serif text-text-primary">4. Acceptable Use</h3>
            <p>
              You agree not to use the website unlawfully, attempt unauthorized access, interfere with its operation, introduce malicious code, or misuse its forms and communication channels.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-serif text-text-primary">5. AI Information and Limitations</h3>
            <p>
              Information about AI capabilities is provided for general informational purposes. AI technologies have limitations and may produce inaccurate, incomplete, or unsuitable outputs.
            </p>
            <p>
              Any AI solution must be evaluated for its intended purpose, operating conditions, and risk profile. Suitability should not be inferred solely from general website descriptions.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-serif text-text-primary">6. Third-Party Technologies</h3>
            <p>
              AI projects may involve third-party models, platforms, APIs, infrastructure, or software. Their availability, licensing, terms, and performance may be subject to the relevant providers' conditions. The applicable responsibilities and dependencies should be defined in each project agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-serif text-text-primary">7. Website Availability</h3>
            <p>
              We may update, modify, suspend, or discontinue parts of the website where necessary for operational, technical, or other legitimate reasons. We do not guarantee uninterrupted access to the website.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-serif text-text-primary">8. Limitation of Liability</h3>
            <p>
              To the extent permitted by applicable law, website information is provided without a guarantee that it will be complete, current, or suitable for every purpose. Any limitation of liability relating to paid services must be specified in the relevant agreement and must comply with applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-serif text-text-primary">9. Privacy</h3>
            <p>
              Use of the website is also subject to the applicable Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-serif text-text-primary">10. Governing Law and Disputes</h3>
            <p>
              The governing law, competent courts, and dispute-resolution arrangements should be specified following legal review of the registered entity and intended business operations.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-serif text-text-primary">11. Changes to These Terms</h3>
            <p>
              We may update these Terms and Conditions as the website and services evolve. The current version should display the date of its latest approved revision.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border-subtle/30">
            <h3 className="text-xl font-serif text-text-primary">12. Contact</h3>
            <p>For questions about these terms, contact:</p>
            <div className="p-4 rounded-xl bg-white border border-border-subtle/40 space-y-1 text-xs">
              <p><strong>Email:</strong> contact@brombeersystems.com</p>
              <p><strong>Legal Entity:</strong> Brombeer IT Systems</p>
              <p><strong>Address:</strong> Abu Dhabi, United Arab Emirates</p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};