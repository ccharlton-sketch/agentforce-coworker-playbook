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
      "Customers are confused — major deal friction. We articulate that Coworker orchestrates agents, not replaces them. Without us, customers stall deals or abandon agent builds.",
  },
  {
    icon: Shield,
    title: "MCP Intersection",
    description:
      "The conversation can collide with MCP. Customers need guidance on how Coworker, Employee Agents, and MCP-connected tools work together — not compete.",
  },
  {
    icon: Database,
    title: "Data Cloud Dependency",
    description:
      "Coworker is built on Data 360. Customers underestimate governance — permissions, data masking, identity mapping are real prerequisites. We assess readiness.",
  },
  {
    icon: Brain,
    title: "AI Expertise Required",
    description:
      "This surfaces reasoning, orchestration, and harness concepts. You want AI experts who understand how agentic AI actually works — not just product features.",
  },
  {
    icon: Sparkles,
    title: "Not a Magic Button",
    description:
      "The deck makes it look easy. Reality: proper guidance and consultation is what makes or breaks adoption. We're the difference between a failed pilot and successful rollout.",
  },
  {
    icon: DollarSign,
    title: "Pricing Complexity",
    description:
      "A4X/A1E vs. Flex Credits, consumption visibility, interaction with existing entitlements — needs a technical-commercial conversation only we can lead.",
  },
];

export function SectionWhyOurTeam() {
  return (
    <SectionWrapper id="why-our-team" internal>
      <h2 className="text-3xl font-bold mb-2">Why Our Team Must Lead</h2>
      <p className="text-muted-foreground mb-8">
        The Agentforce SE/TA team is uniquely positioned to have this
        conversation. Here&apos;s why no one else should.
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
