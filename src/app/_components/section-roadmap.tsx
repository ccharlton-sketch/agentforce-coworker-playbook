import { SectionWrapper } from "./section-wrapper";
import { TimelineItem } from "./timeline-item";
import { Lock } from "lucide-react";

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
      "History**",
      "Agentforce Skills**",
      "Microsoft Teams (Pilot) — Nominate customers to surface Coworker in Teams and query Salesforce data + delegate to agents without leaving Teams",
    ],
    footnote: "*Slowly rolling out feature. **GA, but still rolling out — some sandboxes/orgs may get it sooner than others.",
  },
  {
    date: "Sept 2026 (Dreamforce)",
    status: "upcoming" as const,
    title: "Coming Next — Dreamforce / September 2026",
    items: [
      "Google Workspace",
      "Bring your personal context",
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
        Last updated: August 10, 2026
      </p>

      {/* Internal-only resources */}
      <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg max-w-2xl">
        <div className="flex items-center gap-2 mb-2">
          <Lock className="h-4 w-4 text-amber-700" />
          <h4 className="font-semibold text-sm text-amber-800">
            Internal only — do not share with customers
          </h4>
        </div>
        <ul className="space-y-1 text-sm">
          <li>
            <a
              href="https://docs.google.com/presentation/d/15LH__5fFe9-nZHwDpeSbnLAr7cfxWgoHQWpDlms9ThE/edit?slide=id.g3f5764a8378_0_3560#slide=id.g3f5764a8378_0_3560"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              📊 Upcoming Coworker Releases (slide deck)
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/spreadsheets/d/1E4Il4Z8oYMi6NL5iH8Y4j_Yj0XVNYA1kpeA86SUDtY8/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              📋 Coworker Global Product Priority List (roadmap sheet)
            </a>
          </li>
        </ul>
      </div>

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
