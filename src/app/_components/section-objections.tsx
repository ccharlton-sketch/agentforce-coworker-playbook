import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";
import { AlertCircle, Settings, DollarSign, Lock, MessageSquare, Search, Zap, Edit, Network } from "lucide-react";

const objections = [
  {
    icon: Edit,
    objection: '"Does Coworker take action and update records?"',
    response:
      "Out of the box, Coworker is read-only for all users — it searches and surfaces information but doesn't modify records. You can request to join a pilot that enables Coworker to take actions and update records on behalf of users (while still respecting their profiles and permissions). Most customers don't want this at first — they want enterprise search for their Salesforce org. But it's an option if you need it.",
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
      "Yes, in two ways: (1) You may not even need to — Coworker uses a ReAct framework that reasons and then takes actions. It automatically assesses all your Salesforce data and underlying metadata to find responses that best match user intent. It understands your org structure out of the box. (2) Coworker Skills are coming — admins will be able to configure custom skills to guide Coworker for common tasks and give tailored answers specific to your business processes.",
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
      "Absolutely not. Coworker can serve as the master orchestrator behind Employee Agents. Employee Agents handle prescribed on-rails AI tasks that Coworker, being LLM-based, you may not want it to handle directly. Instead, Coworker delegates to Employee Agents to handle those on-rails tasks. Employee Agents are the specialized muscles. Coworker is the brain that knows when to flex them. Without Employee Agents, Coworker can find and summarize but can't take action. You didn't waste time — you built the foundation that makes Coworker truly powerful.",
  },
  {
    icon: AlertCircle,
    objection: '"It\'s still in beta — should we just wait for GA?"',
    response:
      "The beta tag doesn't mean it's unstable. Coworker is live and fully capable — customers should not experience breakages or problems with the standard Coworker/enterprise search experience. What's coming in GA are more surfaces (Teams, web portals, desktop app) and additional connectors. At its core, the product is working far better than you'd expect from a typical beta. Auto-enablement starts August 4, 2026, so now is the time to turn it on, train champions, and build internal adoption.",
  },
];

export function SectionObjections() {
  return (
    <SectionWrapper id="objections" alternate>
      <h2 className="text-3xl font-bold mb-2">Common Objections & Responses</h2>
      <p className="text-xs text-muted-foreground/60 mb-2 uppercase tracking-wide">
        Last updated: July 30, 2026
      </p>
      <p className="text-muted-foreground mb-8">
        The pushback you'll hear in the field — and how to reframe it.
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
