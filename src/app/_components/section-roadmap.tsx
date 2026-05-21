import { SectionWrapper } from "./section-wrapper";
import { TimelineItem } from "./timeline-item";

const roadmapData = [
  {
    date: "Now",
    status: "available" as const,
    title: "Available Today (Beta)",
    items: [
      "Slack + CRM Lightning + Service Cloud Apps",
      "270+ Data 360 connectors",
      "Permission-aware connectors (Identity, Governance, Data Ingestion)",
      "Multi-Agent: Agentforce Agents",
      "Employee 360 Identity",
      "Intelligent Context + Enriched Metadata Graph",
      "Multi-step reasoning",
      "Prompt suggestions",
    ],
  },
  {
    date: "July 2026",
    status: "upcoming" as const,
    title: "July 2026",
    items: [
      "Microsoft Teams surface",
      "Web / Experience portals",
      "Web Search",
      "Federated Search Tools",
      "Notebooks",
      "Data QnA",
      "Employee Activity Graph",
      "Daily Digest",
    ],
  },
  {
    date: "Aug 2026",
    status: "upcoming" as const,
    title: "August 2026",
    items: ["Daily Digest (proactive insights delivered to you)"],
  },
  {
    date: "Oct 2026 (Dreamforce)",
    status: "future" as const,
    title: "Dreamforce / October 2026",
    items: [
      "Desktop app",
      "MCP tools",
      "Multi-Agent: 3P Agents",
      "Knowledge Graph",
      "Ambient Insights (User, Page & App Context)",
      "Co-Work (collaborative AI sessions)",
      "Self-learn tasks",
    ],
  },
];

export function SectionRoadmap() {
  return (
    <SectionWrapper id="roadmap">
      <h2 className="text-3xl font-bold mb-2">Roadmap</h2>
      <p className="text-muted-foreground mb-8">
        What&apos;s real today vs. what&apos;s coming. Set customer expectations accordingly.
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
            Comes with unlimited usage of Agentforce and Data 360 Querying
            credits.
          </p>
        </div>
        <div className="p-6 rounded-lg border bg-muted/30">
          <h4 className="font-semibold mb-2">Flex Credits (Top Up)</h4>
          <p className="text-sm text-muted-foreground">
            Usage-based metering of Agentforce and Data 360 Querying. For
            customers not on A4X / A1E.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
