import { UseCase } from '../types';

export const USE_CASES: UseCase[] = [
  {
    id: 'knowledge-assistant',
    number: '01',
    title: 'Enterprise Knowledge Assistant',
    headline: 'Give Your Team a Better Way to Find Answers.',
    challenge: 'Employees spend up to 20% of their working hours searching across policies, technical wikis, manuals, and customer agreements, frequently relying on outdated versions or informal channels.',
    solution: 'An enterprise knowledge assistant powered by retrieval-augmented generation (RAG) that allows employees to query authorized documents in natural language with source-grounded citations.',
    steps: [
      'Ingest authorized internal document repositories and databases securely',
      'Chunk, vectorize, and index knowledge with role-based permission tags',
      'Retrieve relevant context snippets using hybrid semantic and keyword search',
      'Synthesize clear, conversational answers with clickable source citations',
      'Provide continuous evaluation, feedback capture, and audit telemetry'
    ],
    benefits: [
      'Up to 75% reduction in time spent searching for internal policies and technical docs',
      'Verified factual answers with direct links to the exact source paragraph',
      'Zero unauthorized data leaks through strict user-level permission filtering',
      'Consistent, standardized answers across global teams and offices'
    ],
    considerations: 'The system must respect source permissions, explicitly acknowledge uncertainty when evidence is insufficient, and prevent hallucinations.',
    iconName: 'BookOpen'
  },
  {
    id: 'document-processing',
    number: '02',
    title: 'Intelligent Document Processing',
    headline: 'Make Document-Heavy Workflows More Efficient.',
    challenge: 'Manual processing of invoices, claims, shipping manifests, and permits is expensive, error-prone, and creates substantial bottlenecks during volume spikes.',
    solution: 'End-to-end intelligent document processing combining multi-modal OCR, field parsing, and business rule validation with intuitive human verification.',
    steps: [
      'Receive multi-page documents via email, API, scanner, or upload portal',
      'Classify document type and segment pages automatically',
      'Extract structured key-value pairs, line items, and nested tables',
      'Validate extracted numbers and dates against core business rules and ERP records',
      'Route low-confidence fields to human review and export clean structured JSON'
    ],
    benefits: [
      'Up to 80% reduction in manual data entry turnaround time',
      'Near-instant processing of complex multi-page invoices and applications',
      'Automatic flagging of arithmetic discrepancies and missing fields',
      'Seamless automated ingest into ERP, accounting, and CRM systems'
    ],
    considerations: 'Performance varies with scan resolution, layout variations, and handwriting. Robust human review exception workflows are vital.',
    iconName: 'FileCheck'
  },
  {
    id: 'customer-service',
    number: '03',
    title: 'AI-Powered Service Assistant',
    headline: 'Help Customers Find What They Need Instantly.',
    challenge: 'Support teams are inundated with repetitive inquiries, leading to delayed response times and inconsistent customer experiences across touchpoints.',
    solution: 'Intelligent customer-facing service assistants that resolve routine inquiries using verified documentation and smoothly escalate complex cases to human agents.',
    steps: [
      'Interpret customer intent and sentiment in real time',
      'Query approved knowledge bases for authoritative, approved answers',
      'Generate empathetic, structured responses with clear next steps',
      'Execute authorized actions like checking order status or scheduling',
      'Seamlessly hand off conversation history to human staff when needed'
    ],
    benefits: [
      '24/7 immediate assistance for high-volume routine inquiries',
      'Consistently accurate answers strictly constrained to company policies',
      'Human support agents freed to focus on complex, high-value client needs',
      'Significant improvement in first-contact resolution rates'
    ],
    considerations: 'The system must never fabricate policy or make unauthorized financial commitments, and customers must always have a direct path to human help.',
    iconName: 'MessageSquare'
  },
  {
    id: 'inventory-intelligence',
    number: '04',
    title: 'Predictive Inventory Intelligence',
    headline: 'Make Inventory Planning Truly Data-Driven.',
    challenge: 'Traditional inventory planning struggles with seasonal volatility, supplier lead time variations, and demand swings, resulting in costly stockouts or bloated carrying costs.',
    solution: 'Machine learning models that analyze historical sales, lead times, promotional schedules, and external signals to forecast demand and detect stock anomalies.',
    steps: [
      'Consolidate historical transactions, vendor lead times, and inventory data',
      'Clean data and engineer time-series features (seasonality, trends, promotions)',
      'Train and cross-validate ensemble forecasting algorithms',
      'Deliver automated reorder point recommendations and anomaly alerts',
      'Monitor forecast accuracy in production and automatically retrain models'
    ],
    benefits: [
      '15–30% reduction in excess safety stock without impacting availability',
      'Early warning detection for stockout risks before critical thresholds',
      'Consistent data-driven purchasing recommendations for planners',
      'Improved supply chain resilience and lower working capital requirements'
    ],
    considerations: 'Forecasts are probabilistic projections. Planners should review edge-case recommendations, and models require ongoing monitoring against macroeconomic shifts.',
    iconName: 'BarChart3'
  },
  {
    id: 'quality-inspection',
    number: '05',
    title: 'Visual Quality Inspection',
    headline: 'Apply Computer Vision to Defined Inspection Tasks.',
    challenge: 'Human visual inspection on high-throughput assembly lines is subject to eye fatigue, inconsistent defect classification, and unavoidable oversights.',
    solution: 'High-speed computer vision systems that detect microscopic surface defects, cracks, missing components, and assembly misalignments in real time.',
    steps: [
      'Mount calibrated high-resolution cameras and structured lighting on the line',
      'Capture and preprocess images at line speed with low-latency edge inference',
      'Detect and segment defects against calibrated acceptable quality limits (AQL)',
      'Trigger automated rejection mechanisms for failing parts instantly',
      'Log inspection imagery and metrics for defect trend analysis and root-cause fixes'
    ],
    benefits: [
      'Sub-millisecond inspection cycle times that keep pace with high-speed lines',
      'Objective, consistent defect grading operating 24 hours a day',
      'Continuous historical visual archive for supplier and warranty verification',
      'Immediate alert triggers when defective part clusters occur'
    ],
    considerations: 'Lighting and camera positioning must be tightly controlled. High-consequence safety parts should maintain appropriate secondary verification.',
    iconName: 'CheckCircle2'
  },
  {
    id: 'workflow-intelligence',
    number: '06',
    title: 'Workflow Intelligence & Orchestration',
    headline: 'Reduce Repetitive Work Without Losing Control.',
    challenge: 'Complex business operations require coordinating multiple departments, systems, approvals, and data entries, resulting in prolonged turnaround times.',
    solution: 'Intelligent multi-step workflow automation combining LLMs for document understanding, rule engines for logic, and human approval checkpoints.',
    steps: [
      'Parse inbound trigger (email, document, CRM record, or webhook)',
      'Extract context, evaluate business prerequisites, and verify data integrity',
      'Prepare synthesized case file and recommend next action',
      'Present one-click approval interface to authorized human manager',
      'Execute confirmed downstream updates across connected enterprise systems'
    ],
    benefits: [
      'Up to 60% acceleration in multi-department casework turnaround',
      'Standardized handling of routine steps with audit-logged decision tracking',
      'Zero loss of managerial control over consequential decisions',
      'Reduced friction and manual copying across disparate enterprise systems'
    ],
    considerations: 'Each automated action must have strictly bounded permissions, retry logic, and fallback paths for unhandled edge cases.',
    iconName: 'GitFork'
  },
  {
    id: 'image-validation',
    number: '07',
    title: 'Intelligent Image Capture & Validation',
    headline: 'Improve Quality at the Point of Submission.',
    challenge: 'Users submitting photos for insurance claims, KYC compliance, permits, or inspections often submit blurry, poorly lit, or incorrectly framed images.',
    solution: 'On-device or real-time computer vision that checks image sharpness, glare, framing, and aspect ratio before submission, guiding users interactively.',
    steps: [
      'Access user camera stream with client-side guidance overlay',
      'Analyze image clarity, lighting uniformity, and border alignment in real time',
      'Provide instant visual prompts (e.g. "Move closer", "Reduce glare", "Hold still")',
      'Capture optimal frame automatically when quality thresholds are satisfied',
      'Transmit pre-validated, high-quality images to administrative systems'
    ],
    benefits: [
      'Over 90% reduction in rejected submissions and re-request cycles',
      'Faster end-to-end processing for insurance, onboarding, and licensing',
      'Lower customer frustration with clear, instant real-time guidance',
      'Consistent, high-resolution imagery for downstream automated processing'
    ],
    considerations: 'Image validation confirms technical photo suitability; it is distinct from identity verification and does not replace biometric compliance checks.',
    iconName: 'ScanLine'
  },
  {
    id: 'measurement-sizing',
    number: '08',
    title: 'AI-Assisted Measurement & Sizing',
    headline: 'Standardize Specialized Measurement Workflows.',
    challenge: 'Manual physical sizing and dimensional measurement for specialized garments, uniforms, or components is time-consuming and prone to measurement variance.',
    solution: 'Computer vision assisted measurement workflows that calculate dimensional landmarks from calibrated camera imagery against verified references.',
    steps: [
      'Capture reference-aligned images using standardized camera guidelines',
      'Identify key anatomical or component landmark points automatically',
      'Compute geometric distances and contours using validated reference metrics',
      'Compare calculated dimensions against specification sizing tables',
      'Output precise size recommendations directly into ordering systems'
    ],
    benefits: [
      'Standardized measurement results independent of manual measuring tape variance',
      'Accelerated sizing and outfitting for large organizations and workforces',
      'Fewer costly returns, re-tailoring cycles, and inventory mismatches',
      'Digitized sizing records for streamlined future reorders'
    ],
    considerations: 'Accuracy depends heavily on proper calibration markers, camera angles, and validation testing across diverse body types and environments.',
    iconName: 'Ruler'
  }
];