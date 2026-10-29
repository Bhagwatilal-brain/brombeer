import { Industry } from '../types';

export const INDUSTRIES: Industry[] = [
  {
    id: 'government',
    name: 'Government & Public Sector',
    tagline: 'More Accessible Information. More Efficient Services.',
    description: 'Public-sector organizations manage complex information, formal procedures, and high volumes of administrative work. AI can improve information discovery and support service delivery when implemented with strict privacy and auditability.',
    challenge: 'High administrative backlogs, complex regulatory inquiries, manual document routing, and citizens struggling to navigate fragmented public information.',
    applications: [
      'Citizen-service natural-language information assistants',
      'Internal policy and legislative procedure semantic search',
      'Intelligent document classification and application form processing',
      'Administrative casework workflow automation',
      'Audit-trailed operational reporting and analytics'
    ],
    focus: 'We emphasize controlled access, strict data sovereignty, explainability, and human accountability. AI empowers public servants without removing oversight from consequential civic decisions.',
    iconName: 'Landmark'
  },
  {
    id: 'defence-security',
    name: 'Defence & Security',
    tagline: 'Intelligent Support for Complex Operations.',
    description: 'Defence and security environments require uncompromising security, strict authorization boundaries, and dependable operational support across logistics, knowledge retrieval, and asset readiness.',
    challenge: 'Disconnected field data, complex maintenance logistics, classified document retrieval challenges, and mission-critical equipment reliability.',
    applications: [
      'Logistics and inventory supply chain intelligence',
      'Secure internal knowledge retrieval and technical manuals',
      'Document workflow parsing and verification',
      'Administrative process and compliance automation',
      'Asset readiness and maintenance analytics',
      'Operational decision-support briefings'
    ],
    focus: 'Solutions are engineered around authorization boundaries, air-gapped/secure deployment options, immutable audit logging, and definitive human command. We do not assume general-purpose AI is suitable for classified environments without rigorous specific validation.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'healthcare',
    name: 'Healthcare Operations',
    tagline: 'Support Better Information Flow Across Healthcare Operations.',
    description: 'Healthcare organizations manage complex patient records, compliance mandates, and operational scheduling. Thoughtfully designed AI frees staff from administrative burdens.',
    challenge: 'Severe clinical documentation overload, fragmented electronic health records, repetitive scheduling queries, and manual claims reconciliation.',
    applications: [
      'Medical record extraction and document processing',
      'Administrative clinical knowledge assistants',
      'Automated patient appointment and routing workflows',
      'Hospital operational capacity analytics',
      'Healthcare interoperability (HL7/FHIR) assistance',
      'Research and clinical trial documentation discovery'
    ],
    focus: 'Patient privacy, HIPAA/GDPR alignment, role-based authorization, and clinical safety are paramount. Clinical decision support requires explicit validation and human clinician oversight.',
    iconName: 'Activity'
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    tagline: 'Improve Visibility Across the Supply Chain.',
    description: 'Logistics operations rely on accurate schedules, inventory visibility, rapid customs clearance, and timely exception handling across global routes.',
    challenge: 'Volatile freight demand, customs documentation bottlenecks, stockout risks, warehouse congestion, and slow manual shipment reconciliation.',
    applications: [
      'Machine learning inventory and demand forecasting',
      'Automated shipping manifest and bill-of-lading processing',
      'Warehouse anomaly detection and stock replenishment',
      'Procurement workflow and vendor quote analysis',
      'Operational logistics knowledge assistants'
    ],
    focus: 'We tie AI directly into ERP and WMS platforms with quantifiable KPIs: reduction in forecast error, document turnaround time, exception resolution speed, and stock accuracy.',
    iconName: 'Truck'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial Operations',
    tagline: 'Apply AI Where Quality and Reliability Matter.',
    description: 'Industrial enterprises deploy computer vision and predictive models to maintain continuous line throughput, enforce microscopic quality tolerances, and prevent unscheduled downtime.',
    challenge: 'Unplanned equipment failures, subjective manual visual quality checks, production bottlenecks, and fragmented operational shift reporting.',
    applications: [
      'High-speed computer-vision defect inspection',
      'Acoustic and sensor-based predictive maintenance',
      'Production line throughput anomaly detection',
      'Work instruction and maintenance SOP search',
      'Real-time scrap reduction and quality reporting'
    ],
    focus: 'We evaluate factory floor lighting variability, edge compute constraints, and the operational impact of false alarms, validating models against real factory conditions.',
    iconName: 'Factory'
  },
  {
    id: 'enterprise-services',
    name: 'Enterprise & Professional Services',
    tagline: 'Help Knowledge Workers Work More Effectively.',
    description: 'Legal, financial, consulting, and corporate teams spend thousands of hours synthesizing documents, drafting proposals, and verifying facts across disparate corporate repositories.',
    challenge: 'Scattered organizational knowledge, repetitive RFP and report drafting, manual contract review, and slow internal service desk resolution.',
    applications: [
      'Enterprise knowledge assistants with source citations',
      'Contract clause search and comparison',
      'Automated RFP response and proposal drafting',
      'Internal IT and HR tier-1 service assistants',
      'Executive research and briefing synthesis'
    ],
    focus: 'We build with fine-grained access control, factual verification, source document citations, and clear boundaries to protect confidentiality and intellectual property.',
    iconName: 'Briefcase'
  }
];