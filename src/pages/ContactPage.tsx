import React, { useState } from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { CheckCircle2, AlertCircle, Send, Mail, Globe, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ContactFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessEmail: '',
    company: '',
    jobTitle: '',
    country: 'United Arab Emirates',
    areaOfInterest: 'Generative AI',
    challenge: '',
    preferredContact: 'Email',
    privacyAccepted: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.businessEmail ||
      !formData.company ||
      !formData.challenge ||
      !formData.privacyAccepted
    ) {
      setErrorMessage('Please fill in all required fields and ensure the privacy checkbox is marked.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = new FormData();
      payload.append('access_key', '16a0f47e-5fd6-427b-8b13-238e6d360f44');
      payload.append('subject', `New AI Project Enquiry: ${formData.fullName} (${formData.company})`);
      payload.append('from_name', 'Brombeer AI Website');
      payload.append('name', formData.fullName);
      payload.append('email', formData.businessEmail);
      payload.append('company', formData.company);
      payload.append('job_title', formData.jobTitle || 'Not specified');
      payload.append('country', formData.country);
      payload.append('area_of_interest', formData.areaOfInterest);
      payload.append('preferred_contact', formData.preferredContact || 'Email');
      payload.append('message', formData.challenge);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#7650E8', '#9E7EFF', '#C8B8FA'],
          });
        } catch {
          // fallback
        }
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'We could not submit your enquiry. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('A network error occurred. Please verify your connection, call +971 (02) 884 4561, or email contact@brombeersystems.com directly.');
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-background">
      <Container className="max-w-5xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="eyebrow inline-block">CONTACT US</span>
            <h1 className="text-3xl sm:text-5xl font-sans font-extrabold text-text-primary tracking-tight">
              Let’s Talk About Your AI Project.
            </h1>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Have an idea, a business challenge, or a process you would like to improve? Tell us what you are trying to achieve. The Brombeer AI team can help you explore suitable AI approaches, identify the information needed to assess feasibility, and determine a practical next step.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#6853A5]/15 shadow-xl shadow-violet-primary/5">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-surface-lavender text-violet-primary flex items-center justify-center mx-auto border border-violet-light/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-sans font-bold text-text-primary">
                  Thank You for Connecting With Us!
                </h3>
                <p className="text-text-secondary text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                  Thank you for contacting Brombeer AI. We have received your message and will connect with you soon.
                </p>
                <div className="pt-4">
                  <Button
                    onClick={() => {
                      setStatus('idle');
                      setErrorMessage('');
                      setFormData({
                        fullName: '',
                        businessEmail: '',
                        company: '',
                        jobTitle: '',
                        country: 'United Arab Emirates',
                        areaOfInterest: 'Generative AI',
                        challenge: '',
                        preferredContact: 'Email',
                        privacyAccepted: false,
                      });
                    }}
                    variant="secondary"
                    size="sm"
                  >
                    Submit Another Request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-sans font-bold text-text-primary">
                    Tell Us About Your Project
                  </h3>
                  <p className="text-xs text-text-secondary mt-1">
                    Share a few details about your requirements. The more context you provide, the easier it will be to understand the opportunity.
                  </p>
                </div>

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2 border border-red-200">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage || 'We could not submit your enquiry. Please check the required fields and ensure the privacy checkbox is marked.'}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-primary">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sarah Al Hashimi"
                      className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-[#FAF9FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-primary/30 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-primary">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.businessEmail}
                      onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                      placeholder="e.g. sarah@enterprise.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-[#FAF9FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-primary/30 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-primary">
                      Company or Organization *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Logistics"
                      className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-[#FAF9FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-primary/30 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-primary">
                      Job Title (optional)
                    </label>
                    <input
                      type="text"
                      name="job_title"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      placeholder="e.g. Chief Technology Officer"
                      className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-[#FAF9FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-primary/30 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-primary">
                      Country or Region *
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="United Arab Emirates"
                      className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-[#FAF9FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-primary/30 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-primary">
                      Area of Interest *
                    </label>
                    <select
                      name="area_of_interest"
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-[#FAF9FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-primary/30 text-sm"
                    >
                      <option>Generative AI</option>
                      <option>AI Agents & Automation</option>
                      <option>Enterprise AI & Knowledge Assistants</option>
                      <option>Computer Vision</option>
                      <option>Machine Learning & Predictive Analytics</option>
                      <option>Document Intelligence</option>
                      <option>AI Application Development</option>
                      <option>AI Consulting & Strategy</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-primary">
                    Tell Us About Your Challenge *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    placeholder="Describe your operational workflow, challenges, or the AI capability you are looking to build..."
                    className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-[#FAF9FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-primary/30 text-sm resize-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-primary">
                    Preferred Contact Method (optional)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Email', 'Phone'].map((method) => (
                      <button
                        type="button"
                        key={method}
                        onClick={() => setFormData({ ...formData, preferredContact: method })}
                        className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                          formData.preferredContact === method
                            ? 'bg-violet-primary text-white border-violet-primary'
                            : 'bg-[#FAF9FF] text-text-secondary border-border-subtle hover:bg-white'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    checked={formData.privacyAccepted}
                    onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-violet-primary focus:ring-violet-primary/30 border-border-subtle"
                  />
                  <label htmlFor="privacy" className="text-xs text-text-secondary leading-snug">
                    By submitting this form, you acknowledge that your information will be handled in accordance with our{' '}
                    <a href="/privacy" className="text-violet-primary hover:underline">
                      Privacy Policy
                    </a>. Please do not submit confidential, classified, sensitive, or regulated data through this form.
                  </label>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'submitting'}
                    icon={<Send className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    {status === 'submitting' ? 'Submitting Enquiry...' : 'Submit Your Enquiry'}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Direct Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 pt-4">
            {/* 1. Direct Email */}
            <div className="p-3.5 sm:p-4 lg:p-5 rounded-2xl bg-white border border-[#6853A5]/14 shadow-sm hover:border-violet-primary/35 hover:shadow-md hover:shadow-violet-primary/5 transition-all flex items-center gap-2.5 sm:gap-3 lg:gap-3.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl bg-[#F4EFFC] text-violet-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-violet-primary" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] sm:text-[10.5px] lg:text-[11px] font-mono font-medium text-text-secondary/80 uppercase tracking-wider block mb-0.5 whitespace-nowrap">
                  DIRECT EMAIL
                </span>
                <a
                  href="mailto:contact@brombeersystems.com"
                  className="font-semibold text-[11.5px] sm:text-[12px] lg:text-[13px] text-text-primary hover:text-violet-primary transition-colors block whitespace-nowrap"
                  title="contact@brombeersystems.com"
                >
                  contact@brombeersystems.com
                </a>
              </div>
            </div>

            {/* 2. Direct Phone */}
            <div className="p-3.5 sm:p-4 lg:p-5 rounded-2xl bg-white border border-[#6853A5]/14 shadow-sm hover:border-violet-primary/35 hover:shadow-md hover:shadow-violet-primary/5 transition-all flex items-center gap-2.5 sm:gap-3 lg:gap-3.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl bg-[#F4EFFC] text-violet-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-violet-primary" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] sm:text-[10.5px] lg:text-[11px] font-mono font-medium text-text-secondary/80 uppercase tracking-wider block mb-0.5 whitespace-nowrap">
                  DIRECT PHONE
                </span>
                <a
                  href="tel:+97128844561"
                  className="font-semibold text-[11.5px] sm:text-[12px] lg:text-[13px] text-text-primary hover:text-violet-primary transition-colors block whitespace-nowrap"
                  title="+971 (02) 884 4561"
                >
                  +971 (02) 884 4561
                </a>
              </div>
            </div>

            {/* 3. Company Site */}
            <div className="p-3.5 sm:p-4 lg:p-5 rounded-2xl bg-white border border-[#6853A5]/14 shadow-sm hover:border-violet-primary/35 hover:shadow-md hover:shadow-violet-primary/5 transition-all flex items-center gap-2.5 sm:gap-3 lg:gap-3.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl bg-[#F4EFFC] text-violet-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                <Globe className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-violet-primary" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] sm:text-[10.5px] lg:text-[11px] font-mono font-medium text-text-secondary/80 uppercase tracking-wider block mb-0.5 whitespace-nowrap">
                  COMPANY SITE
                </span>
                <a
                  href="https://brombeersystems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[11.5px] sm:text-[12px] lg:text-[13px] text-text-primary hover:text-violet-primary transition-colors inline-flex items-center gap-1 whitespace-nowrap"
                >
                  <span>brombeersystems.com</span>
                  <span className="text-violet-primary text-xs">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};