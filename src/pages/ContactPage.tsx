import React, { useState } from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { CheckCircle2, AlertCircle, Send, Mail, MapPin, Globe } from 'lucide-react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.businessEmail || !formData.company || !formData.challenge || !formData.privacyAccepted) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#7650E8', '#9E7EFF', '#C8B8FA'],
        });
      } catch (err) {
        // fallback
      }
    }, 900);
  };

  return (
    <div className="py-12 sm:py-20 bg-background">
      <Container size="narrow">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="eyebrow inline-block">PAGE 9: CONTACT US</span>
            <h1 className="text-3xl sm:text-5xl font-serif text-text-primary tracking-tight">
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
                <h3 className="text-2xl font-serif text-text-primary">
                  Enquiry Received
                </h3>
                <p className="text-text-secondary text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Brombeer AI. Your enquiry has been received. Our team will review the information and contact you if your request is within our service scope.
                </p>
                <div className="pt-4">
                  <Button
                    onClick={() => {
                      setStatus('idle');
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
                  <h3 className="text-xl font-serif text-text-primary">
                    Tell Us About Your Project
                  </h3>
                  <p className="text-xs text-text-secondary mt-1">
                    Share a few details about your requirements. The more context you provide, the easier it will be to understand the opportunity.
                  </p>
                </div>

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2 border border-red-200">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>We could not submit your enquiry. Please check the required fields and ensure the privacy checkbox is marked.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-primary">
                      Full Name *
                    </label>
                    <input
                      type="text"
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
                  <div className="grid grid-cols-3 gap-3">
                    {['Email', 'Phone', 'Video Call'].map((method) => (
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white border border-[#6853A5]/12 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-surface-lavender text-violet-primary flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="text-text-secondary font-mono block">DIRECT EMAIL</span>
                <a href="mailto:contact@brombeersystems.com" className="font-semibold text-text-primary hover:text-violet-primary">
                  contact@brombeersystems.com
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#6853A5]/12 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-surface-lavender text-violet-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="text-text-secondary font-mono block">HEADQUARTERS</span>
                <span className="font-semibold text-text-primary">
                  Abu Dhabi, UAE
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#6853A5]/12 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-surface-lavender text-violet-primary flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="text-text-secondary font-mono block">COMPANY SITE</span>
                <a href="https://brombeersystems.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-text-primary hover:text-violet-primary">
                  brombeersystems.com ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};