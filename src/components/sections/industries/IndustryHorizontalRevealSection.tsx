"use client";

import React from "react";
import { HorizontalFeatureReveal, HorizontalPanel } from "../../ui/horizontal-feature-reveal";

const LOGISTICS_PANELS: HorizontalPanel[] = [
  {
    id: "demand-forecasting",
    badge: "PREDICTIVE MODELING",
    title: "Demand Forecasting",
    description:
      "Analyze historical order flows, seasonal demand fluctuations, and macroeconomic variables to predict inventory needs, reduce stockouts, and right-size replenishment cycles.",
    statValue: "-32%",
    statLabel: "Forecast Variance Error",
    tags: ["Demand Sensing", "Stockout Guard", "Lead-Time ML", "SKU Balancing"],
    image: "/images/solutions/architecture/warehouse-native.jpg",
    accent: "#7650E8",
  },
  {
    id: "inventory-anomaly",
    badge: "ANOMALY DETECTION",
    title: "Inventory Anomaly Detection",
    description:
      "Continuous telemetry surveillance across warehouse racks to detect phantom inventory, shrinkage patterns, barcode discrepancies, and mispick clusters in real time.",
    statValue: "99.4%",
    statLabel: "Inventory Accuracy",
    tags: ["RFID / Barcode", "Shrinkage Guard", "Discrepancy Triage", "Cycle Counts"],
    image: "/images/use-cases/inventory-intelligence.jpg",
    accent: "#6366F1",
  },
  {
    id: "intelligent-doc-processing",
    badge: "DOCUMENT AI",
    title: "Intelligent Document Processing",
    description:
      "Multi-modal vision ingestion parses complex multi-page bills of lading, airway bills, customs declarations, and hazardous material manifests across 18 languages.",
    statValue: "14ms",
    statLabel: "Doc Extraction Time",
    tags: ["Bills of Lading", "18 Languages", "Customs Forms", "Zero Cloud Retain"],
    image: "/images/use-cases/document-processing.jpg",
    accent: "#8B5CF6",
  },
  {
    id: "shipment-order-extraction",
    badge: "DATA EXTRACTION",
    title: "Shipment and Order Information Extraction",
    description:
      "Automated extraction from unstructured PDF purchase orders, vendor invoices, and delivery confirmations with direct ERP and TMS database synchronization.",
    statValue: "99.8%",
    statLabel: "First-Pass Ingestion",
    tags: ["EDI Connectors", "ERP Writeback", "Delivery Receipts", "Purchase Orders"],
    image: "/images/industry_solutions/Lavender Port_ Cranes and Cargo.png",
    accent: "#7650E8",
  },
  {
    id: "procurement-workflow",
    badge: "WORKFLOW AUTOMATION",
    title: "Procurement Workflow Support",
    description:
      "Streamline vendor quotation evaluations, purchase order approval chains, and supplier contract covenants with automated compliance checks and audit logging.",
    statValue: "4.5x",
    statLabel: "Approval Cycle Velocity",
    tags: ["PO Approvals", "Vendor Scoring", "Contract Covenants", "RFQ Triage"],
    image: "/images/use-cases/workflow-intelligence.jpg",
    accent: "#6366F1",
  },
  {
    id: "warehouse-analytics",
    badge: "FACILITY TELEMETRY",
    title: "Warehouse Analytics",
    description:
      "Spatial flow analytics optimize forklift pick-and-pack corridors, pallet slotting layouts, dock door turnaround times, and labor distribution across facility zones.",
    statValue: "-26%",
    statLabel: "Pick Travel Distance",
    tags: ["Slotting AI", "Pick & Pack", "Dock Turnaround", "Labor Heatmaps"],
    image: "/images/industry_solutions/Futuristic Lavender Robotic Assembly Line.png",
    accent: "#8B5CF6",
  },
  {
    id: "supply-chain-assistants",
    badge: "KNOWLEDGE ASSISTANT",
    title: "Supply-Chain Knowledge Assistants",
    description:
      "Provide logistics dispatchers with instant natural-language search over carrier service agreements, cross-border tariffs, and customs compliance guidelines.",
    statValue: "Instant",
    statLabel: "SLA & Policy Retrieval",
    tags: ["Carrier SLAs", "Tariff Matching", "Internal Ops Chat", "Trade Rules"],
    image: "/images/use-cases/knowledge-assistant.jpg",
    accent: "#7650E8",
  },
  {
    id: "operational-reporting",
    badge: "EXECUTIVE REPORTING",
    title: "Operational Reporting",
    description:
      "Synthesize disparate transportation feeds, exception events, and warehouse metrics into daily executive summaries, OTIF scorecards, and demurrage alerts.",
    statValue: "Zero",
    statLabel: "Manual Reporting Hours",
    tags: ["OTIF Scorecards", "Executive Briefs", "Demurrage Alerts", "Exception Logs"],
    image: "/images/industry_solutions/Lavender High-Rise Boardroom Panorama.png",
    accent: "#6366F1",
  },
];

export const IndustryHorizontalRevealSection: React.FC = () => {
  return (
    <section id="logistics-horizontal-reveal" className="relative w-full">
      <HorizontalFeatureReveal
        panels={LOGISTICS_PANELS}
        eyebrow="4. LOGISTICS & SUPPLY CHAIN"
        heading="Improve Visibility Across the Supply Chain."
        subheading="Logistics operations depend on accurate information, coordinated workflows, inventory visibility, and timely decisions. AI can help organizations identify patterns and process information more efficiently."
        focusTitle="System Connectivity & Performance Metrics"
        focusText="We connect AI capabilities to existing business systems and define relevant measures such as forecast error, processing time, exception rates, and inventory accuracy."
        ctaText="Explore Supply-Chain AI"
        ctaHref="/contact"
      />
    </section>
  );
};

export default IndustryHorizontalRevealSection;
