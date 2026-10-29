export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Solution {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  capabilities: string[];
  exampleApplications: string[];
  approach: string;
  ctaText: string;
  iconName: string;
  badge?: string;
}

export interface Industry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  challenge: string;
  applications: string[];
  focus: string;
  iconName: string;
}

export interface UseCase {
  id: string;
  number: string;
  title: string;
  headline: string;
  challenge: string;
  solution: string;
  steps: string[];
  benefits: string[];
  considerations: string;
  iconName: string;
}

export interface ProcessPhase {
  number: string;
  name: string;
  tagline: string;
  description: string;
  activities: string[];
  deliverable: string;
}

export interface ResponsiblePrinciple {
  number: string;
  title: string;
  description: string;
  measures: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  author: string;
  keyTakeaway: string;
}

export interface ContactFormData {
  fullName: string;
  businessEmail: string;
  company: string;
  jobTitle?: string;
  country: string;
  areaOfInterest: string;
  challenge: string;
  preferredContact?: string;
  privacyAccepted: boolean;
}