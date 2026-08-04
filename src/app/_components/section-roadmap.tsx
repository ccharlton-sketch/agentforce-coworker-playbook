import { SectionWrapper } from "./section-wrapper";
import { TimelineItem } from "./timeline-item";

const roadmapData = [
  {
    date: "Now (GA — Aug 2026)",
    status: "available" as const,
    title: "Available Today (GA)",
    items: [
      "Salesforce CRM, Slack, and Service Cloud Apps",
      "270+ Data 360 / Enterprise Sources",
      "Permission-aware connectors (Identity, Governance, Data Ingestion)",
      "Open-ended Q&A",
      "Create & Update CRM Records*",
      "Delegate to Agentforce Agents",
      "Employee 360 Identity",
      "Intelligent Context + Enriched Metadata Graph",
      "Multi-step reasoning",
      "Prompt suggestions",
      "Salesforce Global Search",
      "Salesforce Mobile App",
      "Salesforce Governance",
      "Consumption in Digital Wallet",
      "Microsoft Teams (Pilot) — Nominate customers to surface Coworker in Teams and query Salesforce data + delegate to agents without leaving Teams",
    ],
    footnote: "*Slowly rolling out feature.",
  },
  {
    date: "Sept 2026 (Dreamforce)",
    status: "upcoming" as const,
    title: "Coming Next — Dreamforce / September 2026",
    items: [
      "History",
      "Google Workspace",
      "Bring your personal context",
      "Agentforce Skills",
      "Schedule Tasks — AgentIQ",
      "Microsoft Teams — Ground Coworker with Teams conversations and files (separate from the pilot above)",
      "Native Mobile App",
      "Headless — APIs and MCP",
      "Coworker Insights & Observability",
    ],
    footnote: "*Subject to change.",
  },
  {
    date: "Dec 2026",
    status: "future" as const,
    title: "Future Direction — December 2026",
    items: [
      "Microsoft 365 Sources",
      "Web Search",
      "MCP-based Connections",
      "Create Salesforce Apps / Pages",
      "Proactive Insights",
      "Daily Digests",
      "Experience Sites",
      "Agentforce Testing Center",
    ],
    footnote: "*Subject to change.",
  },
];

export function SectionRoadmap() {
  return (
    <SectionWrapper id="roadmap" alternate>
      <h2 className="text-3xl font-bold mb-2">Roadmap</h2>
      <p className="text-xs text-muted-foreground/60 mb-2 uppercase tracking-wide">
        Last updated: August 4, 2026
      </p>
      <p className="text-muted-foreground mb-8">
        What&apos;s real today vs. what&apos;s coming.
      </p>

      <div className="max-w-2xl">
        {roadmapData.map((item) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </div>

      {/* Pricing reminder */}
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="p-6 rounded-lg border bg-[#0176D3]/5">
          <h4 className="font-semibold mb-2">Included in A4X / A1E</h4>
          <p className="text-sm text-muted-foreground">
            Unlimited usage of Agentforce and Data 360 Querying
            credits.
          </p>
        </div>
        <div className="p-6 rounded-lg border bg-muted/30">
          <h4 className="font-semibold mb-2">Flex credits (top up)</h4>
          <p className="text-sm text-muted-foreground">
            Usage-based metering of Agentforce and Data 360 Querying. For
            customers not on A4X / A1E.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
