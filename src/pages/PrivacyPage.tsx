import React from 'react';
import { Container } from '../components/layout/Container';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-background">
      <Container size="narrow">
        <div className="space-y-10 text-sm text-text-secondary leading-relaxed">
          <div>
            <span className="eyebrow block">LEGAL GOVERNANCE</span>
            <h1 className="text-3xl sm:text-5xl font-sans font-extrabold text-text-primary tracking-[-0.03em] mt-1">
              Privacy Policy
            </h1>
            <p className="text-xs text-text-secondary mt-2">
              Last updated: October 2026 • Brombeer AI / Brombeer IT Systems
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-lavender border border-violet-light/30 text-xs text-text-primary leading-relaxed">
            Brombeer AI, associated with Brombeer IT Systems, respects your privacy and is committed to handling personal information responsibly. This Privacy Policy explains how information may be collected, used, disclosed, and protected when you visit the Brombeer AI website or contact us about our services.
          </div>

          <section className="space-y-3">
            <h3 className="text-xl font-sans font-bold text-text-primary">1. Information We Collect</h3>
            <p>
              Depending on how you use the website, we may collect information that you provide directly, such as your name, business email address, company name, job title, country, and the details of your enquiry.
            </p>
            <p>
              Technical information may also be collected through website operations, security systems, and analytics tools, where enabled. This may include device and browser information, IP address, pages visited, and interaction data.
            </p>
            <p className="text-xs italic text-text-secondary/80 bg-white p-3 rounded-xl border border-border-subtle/40">
              Please do not submit confidential, classified, sensitive, or regulated information through a general website enquiry form.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-sans font-bold text-text-primary">2. How We Use Information</h3>
            <p>Information may be used to:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Respond to enquiries and requests</li>
              <li>Assess potential project requirements</li>
              <li>Communicate about relevant services</li>
              <li>Operate, maintain, and protect the website</li>
              <li>Improve website performance and user experience</li>
              <li>Meet applicable legal and contractual obligations</li>
              <li>Investigate security issues and prevent misuse</li>
            </ul>
            <p>
              We will use personal information for purposes consistent with applicable requirements and our actual business practices.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-sans font-bold text-text-primary">3. Cookies and Similar Technologies</h3>
            <p>
              The website may use necessary cookies or similar technologies to support its operation. Analytics or marketing technologies, if implemented, should be disclosed and managed in accordance with applicable requirements and user choices.
            </p>
            <p>
              Details about the actual cookies used should be provided in a separate cookie notice or relevant section of this policy.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-sans font-bold text-text-primary">4. Information Sharing</h3>
            <p>
              Information may be shared with authorized personnel and service providers who support website hosting, communications, security, analytics, or business operations, where necessary and appropriately controlled.
            </p>
            <p>
              Information may also be disclosed where required by law or in connection with legitimate business transactions, subject to applicable obligations.
            </p>
            <p>
              We do not intend to make personal enquiry information publicly available.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-sans font-bold text-text-primary">5. International Data Transfers</h3>
            <p>
              Depending on the service providers and infrastructure used, information may be processed or stored in countries other than the country from which it was submitted.
            </p>
            <p>
              Where applicable, international transfers should be handled in accordance with the relevant legal requirements and contractual safeguards.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-sans font-bold text-text-primary">6. Data Retention</h3>
            <p>
              Personal information should be retained only for as long as necessary for the purposes for which it was collected, subject to legal, contractual, and operational requirements. The actual retention periods depend on the category of information and the reason it is processed.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-sans font-bold text-text-primary">7. Data Security</h3>
            <p>
              We consider appropriate technical and organizational measures to protect information against unauthorized access, disclosure, alteration, or loss. No method of internet transmission or electronic storage can be guaranteed to be completely secure.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-sans font-bold text-text-primary">8. Your Privacy Rights</h3>
            <p>
              Depending on applicable law, you may have rights to request access to, correction of, deletion of, or other actions concerning your personal information. Requests will be handled according to the applicable legal requirements and any relevant exceptions.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-sans font-bold text-text-primary">9. Third-Party Websites and Services</h3>
            <p>
              The website may link to third-party websites or services. Their privacy practices are governed by their own policies.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-sans font-bold text-text-primary">10. Changes to This Policy</h3>
            <p>
              This Privacy Policy may be updated to reflect changes in website functionality, business practices, or legal requirements. The updated version should be published with a revised date.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border-subtle/30">
            <h3 className="text-xl font-sans font-bold text-text-primary">11. Contact Us</h3>
            <p>For privacy-related enquiries, contact:</p>
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