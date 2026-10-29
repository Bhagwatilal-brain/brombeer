import { Solution } from '../types';

export const SOLUTIONS: Solution[] = [
  {
    id: 'generative-ai',
    number: '01',
    title: 'Generative AI & Large Language Models',
    shortTitle: 'Generative AI & LLMs',
    tagline: 'Put Generative AI to Work.',
    description: 'Make information more accessible and turn natural-language interactions into productive business experiences. We develop AI-powered assistants, content-generation tools, conversational interfaces, and specialized language-model applications grounded in your enterprise data.',
    capabilities: [
      'Generative AI application development',
      'Large language model integration',
      'Retrieval-augmented generation (RAG)',
      'Enterprise knowledge assistants',
      'Intelligent content generation',
      'Summarization and information extraction',
      'Prompt design and evaluation',
      'Guardrails and output validation'
    ],
    exampleApplications: [
      'Summarizing lengthy technical and financial reports',
      'Drafting internal communications and standardized documentation',
      'Searching complex policy, regulatory, and procedure documents',
      'Extracting structured key-value data from unstructured text',
      'Assisting knowledge workers with routine information workflows',
      'Supporting customer-service teams with grounded draft responses'
    ],
    approach: 'We identify the target workflow, determine which data the model may access, choose a suitable architecture, establish evaluation criteria, and test the application against realistic examples before deployment.',
    ctaText: 'Build a Generative AI Solution',
    iconName: 'Sparkles',
    badge: 'Enterprise LLM'
  },
  {
    id: 'ai-agents',
    number: '02',
    title: 'AI Agents & Intelligent Automation',
    shortTitle: 'AI Agents & Automation',
    tagline: 'Connect Intelligence with Action.',
    description: 'Move beyond repetitive manual workflows with intelligent systems that interpret requests, query approved tools, retrieve facts, and coordinate defined multi-step business tasks with human oversight.',
    capabilities: [
      'Task-oriented AI agent development',
      'Multi-step workflow orchestration',
      'AI-assisted service operations',
      'Human-in-the-loop approvals',
      'Agent evaluation and monitoring',
      'Tool and API integration'
    ],
    exampleApplications: [
      'Routing inbound enterprise service requests',
      'Preparing multi-source case summaries for human decision-makers',
      'Collecting information across ERP, CRM, and internal databases',
      'Assisting with procurement and vendor documentation',
      'Coordinating recurring administrative processes across teams'
    ],
    approach: 'We first determine whether an AI agent is appropriate or whether a simpler deterministic automation is more reliable. We then define permissions, approved actions, escalation conditions, and audit logs.',
    ctaText: 'Automate a Business Workflow',
    iconName: 'Bot',
    badge: 'Autonomous Systems'
  },
  {
    id: 'enterprise-knowledge',
    number: '03',
    title: 'Enterprise AI & Knowledge Intelligence',
    shortTitle: 'Enterprise Knowledge',
    tagline: 'Make Organizational Knowledge Easier to Find.',
    description: 'Help employees find trusted, verified information across documents, internal wikis, manuals, and connected operational systems with source-grounded citations and strict access control.',
    capabilities: [
      'Enterprise semantic search',
      'Internal knowledge assistants',
      'Document-grounded question answering',
      'Knowledge extraction and classification',
      'Role-aware authorization filters',
      'Enterprise system indexing pipelines'
    ],
    exampleApplications: [
      'HR policy and benefits assistants',
      'Internal technical-support and troubleshooting knowledge bases',
      'Operations and standard operating procedure (SOP) search',
      'Contract and legal clause discovery',
      'Engineering and product documentation discovery'
    ],
    approach: 'We map authorized data sources, establish strict role-based access controls, organize continuous retrieval pipelines, and verify answers with clickable citations while preventing hallucinations.',
    ctaText: 'Build an Enterprise Assistant',
    iconName: 'Database',
    badge: 'Knowledge Retrieval'
  },
  {
    id: 'computer-vision',
    number: '04',
    title: 'Computer Vision & Image Intelligence',
    shortTitle: 'Computer Vision',
    tagline: 'Turn Visual Data into Useful Information.',
    description: 'Enable software to interpret visual information and support image-based workflows, from high-precision defect identification to automated document verification and visual quality assurance.',
    capabilities: [
      'Image classification and recognition',
      'Object detection and tracking',
      'Image-quality assessment and validation',
      'Visual inspection workflows',
      'Document-image analysis and verification',
      'Edge device and camera integration'
    ],
    exampleApplications: [
      'Product and industrial component defect inspection',
      'User photo and ID submission quality validation',
      'Visual inventory and warehouse stock monitoring',
      'Defect classification in high-throughput lines',
      'Specialized measurement and dimensional analysis'
    ],
    approach: 'We assess the target operational environment, camera hardware, lighting variability, acceptable error tolerances, and human-in-the-loop fallback procedures before model deployment.',
    ctaText: 'Explore Computer Vision',
    iconName: 'Eye',
    badge: 'Visual AI'
  },
  {
    id: 'predictive-analytics',
    number: '05',
    title: 'Machine Learning & Predictive Analytics',
    shortTitle: 'Predictive Analytics',
    tagline: 'Anticipate Patterns. Make Better Decisions.',
    description: 'Turn operational and historical data into forecasts, risk indicators, and decision-support tools that help teams anticipate demand shifts, reduce downtime, and allocate resources efficiently.',
    capabilities: [
      'Predictive modeling & regression',
      'Time-series workload and demand forecasting',
      'Anomaly and fraud detection',
      'Classification and scoring algorithms',
      'Operational risk and trend analysis',
      'Model drift monitoring and retraining'
    ],
    exampleApplications: [
      'Supply chain and retail inventory demand forecasting',
      'Critical equipment predictive maintenance planning',
      'Transaction anomaly and risk pattern detection',
      'Customer churn and behavior segmentation',
      'Capacity planning and workforce scheduling'
    ],
    approach: 'We rigorously audit historical data quality, establish rigorous evaluation baselines, train on out-of-sample data, and continuously track model drift in production.',
    ctaText: 'Explore Predictive AI',
    iconName: 'TrendingUp',
    badge: 'Forecasting'
  },
  {
    id: 'document-intelligence',
    number: '06',
    title: 'Document Intelligence & Data Extraction',
    shortTitle: 'Document Intelligence',
    tagline: 'From Unstructured Documents to Structured Workflows.',
    description: 'Eliminate manual data entry by extracting, validating, and structuring information from invoices, contracts, health records, and complex forms with precision optical recognition and language models.',
    capabilities: [
      'Intelligent document processing (IDP)',
      'OCR and contextual key-value extraction',
      'Automated document classification',
      'Business rule field validation',
      'Cross-document comparison',
      'Human-in-the-loop review workbench'
    ],
    exampleApplications: [
      'Invoice and purchase-order reconciliation',
      'Permit, license, and public-sector application forms',
      'Medical records and claims documentation',
      'Lease agreements and legal contract extraction',
      'Logistics bills of lading and shipping manifests'
    ],
    approach: 'We define custom validation schemas, benchmark across noisy document scans, handle layout variations, and route low-confidence fields to intuitive human review interfaces.',
    ctaText: 'Improve Document Processing',
    iconName: 'FileText',
    badge: 'Document IDP'
  },
  {
    id: 'ai-app-development',
    number: '07',
    title: 'AI-Powered Application Development',
    shortTitle: 'AI Application Dev',
    tagline: 'Build Applications with Intelligence at Their Core.',
    description: 'Transform intelligent models into polished, enterprise-grade software products. We engineer custom web platforms, mobile applications, and internal dashboards tailored to your workflows.',
    capabilities: [
      'Custom enterprise web platforms',
      'Mobile AI interfaces and native experiences',
      'Enterprise AI portals and dashboards',
      'Secure backend and microservice APIs',
      'Workflow engine and database integration',
      'End-to-end testing and production deployment'
    ],
    exampleApplications: [
      'AI-assisted employee operational portals',
      'Intelligent customer-facing self-service portals',
      'Interactive executive decision-support dashboards',
      'Collaborative knowledge discovery platforms',
      'Domain-specific analytical web tools'
    ],
    approach: 'We architect for security, responsive UX, fast response latency, scalable infrastructure, model lifecycle management, and clear operational cost transparency.',
    ctaText: 'Develop an AI Application',
    iconName: 'Layout',
    badge: 'Full-Stack AI'
  },
  {
    id: 'ai-consulting',
    number: '08',
    title: 'AI Consulting & Strategy',
    shortTitle: 'AI Strategy & Consulting',
    tagline: 'Start with the Right Problem.',
    description: 'Make informed, confident investments in artificial intelligence. We help leadership evaluate feasibility, assess technical readiness, design architecture blueprints, and implement responsible governance.',
    capabilities: [
      'AI opportunity discovery and mapping',
      'Business value and ROI prioritization',
      'Data readiness and infrastructure audits',
      'Proof-of-concept (PoC) rapid validation',
      'Model selection and benchmark evaluation',
      'Responsible AI governance frameworks'
    ],
    exampleApplications: [
      'Identifying high-impact automation initiatives',
      'Enterprise generative AI feasibility studies',
      'Evaluating private cloud vs. managed LLM providers',
      'Establishing responsible AI policies and risk guidelines',
      'Planning multi-year AI transformation roadmaps'
    ],
    approach: 'We evaluate initiatives across business value, data availability, implementation complexity, risk, and organizational readiness so you invest with total clarity.',
    ctaText: 'Plan Your AI Roadmap',
    iconName: 'Compass',
    badge: 'Advisory'
  }
];