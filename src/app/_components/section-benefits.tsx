import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";
import { StatCallout } from "./stat-callout";
import { MessageSquare, Search, TrendingUp, Zap, Sparkles, Target } from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "One Place for All Answers",
    description:
      "Salesforce + Data Cloud + Slack today, with more connectors coming. No more bouncing between apps to find what you need.",
  },
  {
    icon: Zap,
    title: "Zero Training, Zero Setup",
    description:
      "Users already know how to chat. No adoption curve. No \"learn Salesforce navigation.\" It just works.",
  },
  {
    icon: TrendingUp,
    title: "Changes the Agentforce Narrative",
    description:
      "For customers seeking broader value from A1/A4, Coworker expands what's possible. Real example: a COO went from exploring limited use cases to rolling out enterprise-wide.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Interface to Everything",
    description:
      "End users won't even know they're using Employee Agents. They just ask a question, and the right thing happens.",
  },
];

export function SectionBenefits() {
  return (
    <SectionWrapper id="benefits">
      <h2 className="text-3xl font-bold mb-2">Why customers should care</h2>
      <p className="text-xs text-muted-foreground/60 mb-2 uppercase tracking-wide">
        Last updated: July 30, 2026
      </p>
      <p className="text-muted-foreground mb-10">
        The expectation has shifted. Coworker meets it.
      </p>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10 p-8 rounded-xl bg-gradient-to-r from-[#0176D3]/5 to-[#1B96FF]/5 border border-[#0176D3]/10">
        <StatCallout value="1,200" label="App toggles per day eliminated" />
        <StatCallout value="0" label="Training hours required" />
        <div className="col-span-2 md:col-span-1">
          <StatCallout value="300+" label="Connected data sources" />
        </div>
      </div>

      {/* The new expectation */}
      <div className="mb-10 space-y-4">
        <Card className="border-l-4 border-l-[#0176D3] bg-gradient-to-r from-[#0176D3]/5 to-transparent">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#0176D3]/10 shrink-0">
                <Sparkles className="h-6 w-6 text-[#0176D3]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">The new expectation</h3>
                <p className="text-muted-foreground">
                  Users are conditioned by ChatGPT, Claude, Gemini, and other consumer AI tools.
                  When they ask a question or want to resolve something, they <strong>expect the tool to try</strong>, not throw an error message or say "I can't help with that." The tool gives its best answer. That's the bar.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#0176D3]">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#0176D3]/10 shrink-0">
                <Target className="h-6 w-6 text-[#0176D3]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Coworker is your first agent</h3>
                <p className="text-muted-foreground">
                  Coworker surfaces insights and information from your Salesforce org, Google Drive, Slack,
                  and more. It takes its best shot at understanding what the user wants.
                  It's the conversational layer that brings everything together without requiring users to know where data lives or how to query it. For prescriptive,
                  on-rails business process tasks, you still have Employee Agents.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Benefit cards */}
      <div className="grid gap-4 md:grid-cols-2 mb-10">
        {benefits.map((benefit) => (
          <Card key={benefit.title} className="h-full">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[#0176D3]/10 shrink-0">
                  <benefit.icon className="h-5 w-5 text-[#0176D3]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Example utterances */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Example use cases</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Real questions users can ask. All of this data lives in Salesforce but now has a conversational interface.
        </p>
        <div className="space-y-3">
          <div className="p-4 rounded-lg border bg-muted/30">
            <p className="text-sm font-medium text-[#032D60] mb-1">Account Briefing</p>
            <p className="text-sm text-muted-foreground italic">
              "Give me a briefing on Acme account before my meeting tomorrow: recent activity, open cases, key contacts."
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/30">
            <p className="text-sm font-medium text-[#032D60] mb-1">Unblocking Stalled Opportunities</p>
            <p className="text-sm text-muted-foreground italic">
              "What's going on with my customer Acme, and how can I potentially progress some of the deals forward, or why is the deal not progressing?"
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/30">
            <p className="text-sm font-medium text-[#032D60] mb-1">Pipeline Management</p>
            <p className="text-sm text-muted-foreground italic">
              "Summarize my top deals at risk for this quarter" or "What opportunities do I have that have no activity in the last 30 days?"
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
