import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";
import { StatCallout } from "./stat-callout";
import { MessageSquare, Search, TrendingUp, Zap } from "lucide-react";

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
      "For customers with buyer's remorse on A1/A4, Coworker flips the script. Real example: a COO went from regretting the purchase to going deeper in.",
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
      <h2 className="text-3xl font-bold mb-2">Why Customers Should Care</h2>
      <p className="text-muted-foreground mb-10">
        The productivity angle that actually resonates in the field.
      </p>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 p-8 rounded-xl bg-gradient-to-r from-[#0176D3]/5 to-[#1B96FF]/5 border border-[#0176D3]/10">
        <StatCallout value="1,200" label="App toggles per day eliminated" />
        <StatCallout value="0" label="Training hours required" />
        <div className="col-span-2 md:col-span-1">
          <StatCallout value="300+" label="Connected data sources" />
        </div>
      </div>

      {/* Benefit cards */}
      <div className="grid gap-4 md:grid-cols-2">
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

      {/* The problem framing */}
      <div className="mt-10 p-6 rounded-lg border bg-muted/30">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">The problem isn&apos;t AI — it&apos;s context.</strong>{" "}
          Public AI (ChatGPT, etc.) is still an outsider to your company. It
          doesn&apos;t know your deals, your cases, your customers, your internal
          docs. Agentforce Coworker is the insider.
        </p>
      </div>
    </SectionWrapper>
  );
}
