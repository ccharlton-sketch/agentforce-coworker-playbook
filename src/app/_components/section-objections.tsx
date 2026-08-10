import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";
import { Settings, DollarSign, Lock, MessageSquare, Search, Zap, Edit, Network, BarChart } from "lucide-react";

const objections = [
  {
    icon: Edit,
    objection: '"Does Coworker take action and update records?"',
    response: (
      <>
        Out of the box, Coworker is read-only for all users — it searches and
        surfaces information but doesn&apos;t modify records. Most customers
        don&apos;t want this at first; they want enterprise search for their
        Salesforce org. Record update capability is rolling out over the
        next month and a half — Coworker will confirm with the user on each
        record update, so users can&apos;t accidentally update thousands of
        records at once and risk data quality loss.*
        <br />
        <span className="text-xs italic">
          *Currently, there is a pilot that customers can sign up for to
          give Coworker CRUD access — enabling it to take actions and update
          records on a user&apos;s behalf while still respecting their
          profiles and permissions.
        </span>
      </>
    ),
  },
  {
    icon: Network,
    objection: '"What connectors are available? What other systems can we connect?"',
    response:
      "Out of the box: CRM, Slack, and Google Drive. SharePoint is coming soon. Additionally, Data Cloud acts as a connector — and Data Cloud itself comes with 300+ connectors including Snowflake, Databricks, and more. Plus, Data Cloud's ingestion API can serve as a connector for systems that don't have an out-of-the-box integration.",
  },
  {
    icon: Settings,
    objection: '"Can we configure Coworker to understand our specific Salesforce org?"',
    response:
      "Yes, in two ways: (1) You may not need to. Coworker uses a ReAct framework that reasons and then takes actions. It automatically assesses all your Salesforce data and underlying metadata to find responses that match user intent. It understands your org structure out of the box. (2) Coworker Skills are coming. Admins will be able to configure custom skills to guide Coworker for common tasks and give tailored answers specific to your business processes.",
  },
  {
    icon: Lock,
    objection: '"I\'m worried about data security / what users can access"',
    response:
      "Coworker respects all existing Salesforce sharing rules, profiles, permission sets, and field-level security automatically. Users only see what they're already allowed to see. If permissions aren't configured properly, that's an org readiness conversation — which is valuable work in itself.",
  },
  {
    icon: Zap,
    objection: '"We already built Employee Agents — did we waste our time?"',
    response:
      "No. Coworker can be the master orchestrator behind Employee Agents. Employee Agents handle prescribed on-rails AI tasks that Coworker, being LLM-based, you may not want it to handle directly. Coworker delegates to Employee Agents to handle those on-rails tasks. Employee Agents are the specialized muscles. Coworker is the brain that knows when to use them. Without Employee Agents, Coworker can find and summarize but can't take action. You didn't waste time. You built the foundation that makes Coworker powerful.",
  },
  {
    icon: BarChart,
    objection: '"How do I track or report on Coworker usage?"',
    response: (
      <>
        Reporting is not yet a part of the Agentforce observability out-of-the-box dashboards. It will be built into Data Cloud session and intents in Agentforce Observability. In the meantime, our team has developed a reporting tool with queries and step-by-step instructions on using the STDM to get the analytics you need.{" "}
        <a
          href="https://ai-reporting-1d24e812f835.herokuapp.com/#usage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0176D3] hover:underline font-medium"
        >
          Access the guide here
        </a>.
      </>
    ),
  },
];

export function SectionObjections() {
  return (
    <SectionWrapper id="objections" alternate>
      <h2 className="text-3xl font-bold mb-2">Common objections & responses</h2>
      <p className="text-xs text-muted-foreground/60 mb-2 uppercase tracking-wide">
        Last updated: August 10, 2026
      </p>
      <p className="text-muted-foreground mb-8">
        The pushback you'll hear in the field and how to reframe it.
      </p>

      <div className="space-y-4">
        {objections.map((item) => (
          <Card key={item.objection} className="border-l-4 border-l-[#0176D3]">
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-50 shrink-0">
                  <item.icon className="h-5 w-5 text-red-600" />
                </div>
                <CardTitle className="text-base font-semibold text-red-600 leading-tight">
                  {item.objection}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="pl-12">
                <p className="text-sm font-medium text-[#032D60] mb-1">
                  How to respond:
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.response}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
