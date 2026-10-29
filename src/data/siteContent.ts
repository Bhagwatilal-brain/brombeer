import { ProcessPhase, ResponsiblePrinciple } from '../types';

export const TRUST_VALUE_POINTS = [
  {
    title: 'Business-first AI strategy',
    description: 'We prioritize real operational needs and proven ROI over technical novelty.',
  },
  {
    title: 'Solutions tailored to your workflows',
    description: 'Customized to your organizational structure, data formats, and team skills.',
  },
  {
    title: 'Integration with existing systems',
    description: 'Seamlessly connected with your current ERP, CRM, and cloud infrastructure.',
  },
  {
    title: 'Security-conscious implementation',
    description: 'Strict authorization, encryption, data sovereignty, and tenant isolation.',
  },
  {
    title: 'Human oversight & responsible AI',
    description: 'Consequential decisions and edge cases remain under authorized human control.',
  },
  {
    title: 'Continuous improvement & optimization',
    description: 'Ongoing performance telemetry, drift detection, and cost surveillance.',
  },
];

export const WHY_BROMBEER_PILLARS = [
  {
    number: '01',
    title: 'Built Around Your Business',
    description: 'We begin with your objectives, users, workflows, and constraints. The solution follows the problem, not the other way around.',
  },
  {
    number: '02',
    title: 'Designed for Integration',
    description: 'AI should work with the systems your organization already depends on. We design solutions with integration, interoperability, and maintainability in mind.',
  },
  {
    number: '03',
    title: 'Responsible by Design',
    description: 'We consider privacy, security, access control, explainability, testing, and human oversight as part of the implementation approach.',
  },
  {
    number: '04',
    title: 'From Concept to Implementation',
    description: 'We help move promising AI ideas into practical applications through structured discovery, prototyping, development, integration, and deployment planning.',
  },
  {
    number: '05',
    title: 'Focused on Measurable Value',
    description: 'We establish relevant success measures with stakeholders so the project can be evaluated against business outcomes rather than technical novelty alone.',
  },
];

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    number: '01',
    name: 'Discover',
    tagline: 'Understand the Problem Before Choosing the Technology.',
    description: 'We work with stakeholders to understand the current process, identify pain points, and define the business objective.',
    activities: [
      'Stakeholder discussions & executive alignment',
      'Workflow and operational process review',
      'User requirements & operational constraints audit',
      'Initial data-source availability assessment',
      'Problem definition & opportunity identification',
    ],
    deliverable: 'A documented problem statement and initial opportunity assessment.',
  },
  {
    number: '02',
    name: 'Define',
    tagline: 'Determine Whether AI Is the Right Approach.',
    description: 'Not every problem needs AI. We assess whether an AI-based solution is appropriate compared with conventional software, rules-based automation, or process improvement.',
    activities: [
      'Use-case prioritization against business impact',
      'Technical feasibility assessment',
      'Data readiness, quality, and labeling review',
      'Risk, regulatory compliance, and dependency analysis',
      'Baseline metric definition & scope definition',
    ],
    deliverable: 'A prioritized use case and a proposed implementation scope.',
  },
  {
    number: '03',
    name: 'Design',
    tagline: 'Plan the Solution Around Your Environment.',
    description: 'We develop a technical approach that considers functionality, data flows, model selection, integration, user experience, security, and operational constraints.',
    activities: [
      'Solution architecture specification',
      'Model and platform evaluation',
      'Data-flow and latency engineering',
      'Integration planning with existing enterprise systems',
      'Role-based access-control and governance design',
      'Evaluation criteria and guardrail specification',
    ],
    deliverable: 'A proposed solution architecture and delivery plan.',
  },
  {
    number: '04',
    name: 'Prototype',
    tagline: 'Test the Idea Before Scaling It.',
    description: 'A proof of concept can help establish whether the proposed approach is technically feasible and useful for the intended workflow.',
    activities: [
      'Representative test-data preparation',
      'Interactive prototype and workflow development',
      'Model or workflow evaluation and stress testing',
      'Stakeholder feedback & hands-on evaluation workshops',
      'Error and limitation analysis',
      'Initial cost-per-transaction and performance assessment',
    ],
    deliverable: 'A prototype evaluation with findings, limitations, and recommended next steps.',
  },
  {
    number: '05',
    name: 'Build & Integrate',
    tagline: 'Develop the Solution for Its Intended Use.',
    description: 'Once the approach has been validated and approved, we develop the application and integrate it with the required systems and workflows.',
    activities: [
      'Production-grade application development',
      'Model integration and endpoint orchestration',
      'API and enterprise database connectivity',
      'User interface and human review workbench development',
      'Security penetration testing & access-control implementation',
      'Testing, compliance audit, and acceptance support',
    ],
    deliverable: 'An implementation aligned with the agreed scope and acceptance criteria.',
  },
  {
    number: '06',
    name: 'Deploy & Improve',
    tagline: 'Make Performance and Accountability Part of the Lifecycle.',
    description: 'AI systems require appropriate operational oversight. We plan for evaluation, monitoring, maintenance, and improvement according to the solution’s risk and requirements.',
    activities: [
      'Phased deployment planning & operational rollout',
      'User acceptance and operational readiness training',
      'Real-time telemetry, monitoring, and audit logging',
      'Model drift and output-quality evaluation',
      'Incident, fallback, and exception handling',
      'Maintenance and continuous optimization planning',
    ],
    deliverable: 'A deployment and ongoing-operation plan appropriate to the solution.',
  },
];

export const PRINCIPLES = [
  {
    title: 'Purpose Before Technology',
    description: 'We start with a business need and select technology accordingly.',
  },
  {
    title: 'Evidence Before Scale',
    description: 'We test assumptions and evaluate performance before recommending wider deployment.',
  },
  {
    title: 'Integration Before Isolation',
    description: 'We consider how the solution will operate within existing workflows and systems.',
  },
  {
    title: 'Human Accountability',
    description: 'We define which actions can be automated and which require human review or approval.',
  },
  {
    title: 'Continuous Evaluation',
    description: 'We consider changing data, model performance, operating costs, and user feedback over time.',
  },
];

export const RESPONSIBLE_PRINCIPLES: ResponsiblePrinciple[] = [
  {
    number: '01',
    title: 'Privacy and Data Protection',
    description: 'We consider what information an AI application needs, how it will be processed, who can access it, and how it will be retained or removed.',
    measures: [
      'Data minimization and zero-retention API policies where required',
      'Appropriate access controls and tenant data isolation',
      'Secure data flows with private cloud or on-premise deployment options',
      'Alignment with applicable contractual, UAE, and international data regulations',
    ],
  },
  {
    number: '02',
    title: 'Security and Access Control',
    description: 'AI applications should respect the same authorization boundaries as the systems and data they interact with.',
    measures: [
      'Authenticated access and least-privilege permission tokens',
      'Secure API integrations with end-to-end encryption in transit and at rest',
      'Controlled tool execution and prompt-injection guardrails',
      'Comprehensive logging and testing for inappropriate data exposure',
    ],
  },
  {
    number: '03',
    title: 'Accuracy and Evaluation',
    description: 'AI outputs can be incomplete, misleading, or incorrect. We identify relevant failure modes and establish evaluation methods suited to the use case.',
    measures: [
      'Curated representative test datasets and benchmark regression suites',
      'Factual-grounding checks and source verification',
      'Confidence calibration thresholds and explicit uncertainty disclosure',
      'Structured validation rules and human review for ambiguous outputs',
    ],
  },
  {
    number: '04',
    title: 'Human Oversight',
    description: 'Not every task should be fully automated. For important or consequential workflows, we build review checkpoints and escalation paths.',
    measures: [
      'Approval checkpoints for consequential or high-risk business actions',
      'Escalation paths for low-confidence or anomalous inputs',
      'Intuitive human review workbenches for validation and correction',
      'Unambiguous ability to challenge, override, or roll back outputs',
    ],
  },
  {
    number: '05',
    title: 'Transparency and Traceability',
    description: 'Users should understand when AI is being used and what role it plays in a workflow.',
    measures: [
      'Auditable recording of all system and agent actions',
      'Clickable source references and grounded citations for every factual statement',
      'Clear indicators identifying AI-generated content and recommendations',
      'Explicit disclosure of model capabilities and known operational boundaries',
    ],
  },
  {
    number: '06',
    title: 'Monitoring and Improvement',
    description: 'AI performance may change as data, usage patterns, models, and surrounding systems evolve.',
    measures: [
      'Continuous telemetry monitoring output consistency and latency',
      'Token consumption and compute budget surveillance',
      'Automated data drift and concept drift detection mechanisms',
      'Structured user feedback capture loops for ongoing model refinement',
    ],
  },
];

export const SUCCESS_METRICS = [
  { label: 'Turnaround Time', desc: 'Time required to complete an end-to-end operational workflow.' },
  { label: 'Manual Effort', desc: 'Substantial reduction in manual keystrokes and repetitive tasks.' },
  { label: 'Extraction Accuracy', desc: 'Verified 95%+ precision across diverse document formats and scans.' },
  { label: 'Factual Reliability', desc: 'Answer relevance grounded in verified enterprise source passages.' },
  { label: 'Forecast Precision', desc: 'Quantifiable reduction in demand variance and inventory forecasting error.' },
  { label: 'Exception Rate', desc: 'Intelligent triage with only edge cases routed to human review.' },
  { label: 'User Adoption', desc: 'Active team engagement, workflow adoption, and user satisfaction.' },
  { label: 'Cost Per Task', desc: 'Predictable, controlled compute cost per completed business transaction.' },
  { label: 'Uptime & Latency', desc: 'Enterprise SLAs with high system availability and rapid response times.' },
];

export const ABOUT_CONTENT = {
  headline: 'Practical AI. Purposeful Engineering.',
  intro: 'Brombeer AI is the AI-focused digital solutions initiative of Brombeer IT Systems, dedicated to helping organizations explore, develop, and implement artificial intelligence in ways that address real business challenges. We bring an engineering-led perspective to AI, connecting intelligent models with applications, enterprise data, and business workflows.',
  story: 'Artificial intelligence is changing how organizations interact with information, automate work, and develop digital services. But meaningful implementation takes more than adopting a new model or platform. It requires an understanding of the problem, the data, the users, the surrounding systems, and the controls needed to operate responsibly.\n\nBrombeer AI brings AI capabilities into that wider engineering context. Our focus is on identifying appropriate use cases, designing fit-for-purpose architectures, and developing solutions that can integrate with real business operations.\n\nAs part of Brombeer IT Systems, the AI initiative builds on the broader technology focus of the company while giving artificial intelligence its own dedicated proposition, capabilities, and customer experience.',
  mission: 'To help organizations use artificial intelligence to solve practical problems, improve access to information, and build more effective digital workflows.',
  vision: 'To contribute to a future where AI is implemented thoughtfully, integrated responsibly, and measured by the value it creates for people and organizations.',
  standFor: [
    {
      title: 'Business Relevance',
      description: 'We prioritize use cases with a clear purpose and a defined path to value.',
    },
    {
      title: 'Engineering Excellence',
      description: 'We consider architecture, integration, testing, maintainability, and operational requirements as part of AI delivery.',
    },
    {
      title: 'Responsible Innovation',
      description: 'We recognize the importance of privacy, security, transparency, and human accountability.',
    },
    {
      title: 'Collaboration',
      description: 'We work with stakeholders to understand requirements, validate assumptions, and develop solutions suited to the people who will use them.',
    },
    {
      title: 'Continuous Learning',
      description: 'AI technologies evolve rapidly. We emphasize ongoing evaluation, practical experimentation, and informed technology choices.',
    },
  ],
  relationship: 'Brombeer AI represents the company’s dedicated focus on artificial intelligence and AI-enabled digital solutions.\n\nBrombeer IT Systems provides the broader company context, including its general technology services and software-development orientation. The AI website is intended to help customers discover AI-specific capabilities, use cases, and engagement opportunities.',
};