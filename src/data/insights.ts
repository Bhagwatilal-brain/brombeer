import { InsightArticle } from '../types';

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'enterprise-rag-architecture',
    title: 'Architecting Enterprise RAG: Beyond Naive Vector Search',
    category: 'Generative AI',
    readTime: '6 min read',
    date: 'October 2026',
    excerpt: 'How leading enterprises combine semantic embeddings, BM25 keyword matching, re-ranking models, and metadata filtering to achieve zero-hallucination document intelligence.',
    author: 'Brombeer AI Research',
    keyTakeaway: 'Hybrid retrieval with document chunk re-ranking yields a 42% improvement in factual answer accuracy compared to naive vector search.'
  },
  {
    id: 'ai-agents-with-guardrails',
    title: 'Autonomous Agents with Guardrails: Bounding Risk in Workflow Automation',
    category: 'Intelligent Automation',
    readTime: '8 min read',
    date: 'September 2026',
    excerpt: 'A practical framework for deploying multi-step autonomous AI agents while maintaining deterministic constraints, human approvals, and complete auditability.',
    author: 'Brombeer AI Engineering',
    keyTakeaway: 'Sandboxing tool execution and enforcing approval gates on state-changing actions enables organizations to reap agentic speed without compliance exposure.'
  },
  {
    id: 'computer-vision-industrial-tolerances',
    title: 'High-Speed Computer Vision for Sub-Millimeter Industrial Quality Assurance',
    category: 'Computer Vision',
    readTime: '5 min read',
    date: 'August 2026',
    excerpt: 'Overcoming lighting variance, camera vibration, and edge inference latency in real-world manufacturing environments.',
    author: 'Brombeer AI Systems',
    keyTakeaway: 'Edge-optimized vision models can inspect up to 120 parts per second with precision exceeding 99.4% on high-speed industrial lines.'
  },
  {
    id: 'responsible-ai-governance-framework',
    title: 'Responsible AI Governance: Moving from Generic Principles to Operational Safeguards',
    category: 'Responsible AI',
    readTime: '7 min read',
    date: 'July 2026',
    excerpt: 'Why high-level ethical guidelines fail in production, and how engineering teams build automated tests, role-based controls, and human-in-the-loop workflows.',
    author: 'Brombeer AI Governance',
    keyTakeaway: 'Practical AI governance must live inside CI/CD pipelines as automated tests, not solely in legal PDFs.'
  }
];