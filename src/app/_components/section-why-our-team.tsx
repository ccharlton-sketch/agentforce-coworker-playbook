import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";
import {
  Brain,
  Database,
  DollarSign,
  Network,
  Shield,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: Network,
    title: "Coworker vs. Employee Agent Complexity",
    description:
      "Customers are confused — Coworker orchestrates agents, not replaces them. Without clarity here, deals stall or customers abandon agent builds entirely.",
  },
  {
    icon: Shield,
    title: "MCP Intersection",
    description:
      "The conversation can collide with MCP. Coworker, Employee Agents, and MCP-connected tools need to work together — not compete.",
  },
  {
    icon: Database,
    title: "Data Cloud Dependency",
    description:
      "Coworker uses Data 360 as a foundation and requires it enabled for observability and LLM Gateways. This is a prerequisite customers don\u2019t expect.",
  },
  {
    icon: Brain,
    title: "AI Expertise Required",
    description:
      "This surfaces reasoning, orchestration, and harness concepts. Understanding how agentic AI actually works matters — not just product features.",
  },
  {
    icon: Sparkles,
    title: "Not a Magic Button",
    description:
      "The deck makes it look easy. Reality: proper guidance and consultation is what makes or breaks adoption versus a failed pilot.",
  },
  {
    icon: DollarSign,
    title: "Pricing Complexity",
    description:
      "A4X/A1E vs. Flex Credits, consumption visibility, interaction with existing entitlements — this needs a technical-commercial conversation.",
  },
];

export function SectionWhyOurTeam() {
  return (
    <SectionWrapper id="why-our-team" internal>
      <h2 className="text-3xl font-bold mb-2">Why Our Team Is the Right One to Lean In</h2>
      <p className="text-muted-foreground mb-8">
        We&apos;ve experienced the Employee Agent frustrations firsthand. We can handle the delicate conversation
        around using Coworker in tandem — and this still drives consumption.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <Card key={reason.title} className="h-full">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#0176D3]/10">
                  <reason.icon className="h-5 w-5 text-[#0176D3]" />
                </div>
                <CardTitle className="text-sm font-semibold leading-tight">
                  {reason.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
