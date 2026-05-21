import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SectionWrapper } from "./section-wrapper";
import { TierCard } from "./tier-card";

const tiers = [
  {
    tier: 1,
    title: "A1 Sales / A4 Sales",
    subtitle: "Go now",
    description:
      "These customers bought Agentforce expecting \"ChatGPT for Salesforce\" and got Employee Agents (on-rails, guided). They're frustrated because the product didn't match their expectation. Coworker IS what they thought they were buying.",
    action: "Turn it on. Solve the frustration. Inform their next agent builds.",
    color: "blue" as const,
  },
  {
    tier: 2,
    title: "Pre-commits",
    subtitle: "Handle with care",
    description:
      "Enable Coworker, but the consumption-only conversation needs delicacy. These users are already frustrated with the tool — Coworker can change the narrative.",
    action:
      "Enable carefully. Address consumption implications upfront.",
    color: "teal" as const,
  },
  {
    tier: 3,
    title: "A1 Service / A4 Service",
    subtitle: "Different conversation",
    description:
      "Service teams tend to have more structured, on-rails use cases. Employee Agents are still powerful for them. Coworker is additive, not the primary solve.",
    action: "Position as additive. Don't displace existing agent work.",
    color: "amber" as const,
  },
  {
    tier: 4,
    title: "Flex-only Customers",
    subtitle: "Introduce with caution",
    description:
      "Show them Coworker, but be aware of consumption costs. These customers could have trouble keeping costs under control without a committed SKU.",
    action: "Use as vehicle to drive toward A1/A4X commitment.",
    color: "gray" as const,
  },
];

const decisions = [
  {
    situation: "Building Employee Agents for general purpose / sales",
    recommendation: "Agentforce Coworker",
  },
  {
    situation: "No internal agents at all",
    recommendation: "Agentforce Coworker",
  },
  {
    situation: "Service teams with structured workflows",
    recommendation: "Employee Agents OR Coworker",
  },
  {
    situation: "Flex-only customers",
    recommendation: "Introduce Coworker → drive toward A1/A4X",
  },
];

export function SectionAccountTargets() {
  return (
    <SectionWrapper id="account-targets" internal>
      <h2 className="text-3xl font-bold mb-2">Account Targets</h2>
      <p className="text-muted-foreground mb-8">
        Everyone with the right SKU is fair game — but priority matters.
        Here&apos;s who to go to first.
      </p>

      {/* Tier Cards */}
      <div className="grid gap-4 md:grid-cols-2 mb-12">
        {tiers.map((tier) => (
          <TierCard key={tier.tier} {...tier} />
        ))}
      </div>

      {/* Decision Framework */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Decision Framework</h3>
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">
                  Customer Situation
                </TableHead>
                <TableHead className="font-semibold">Recommendation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {decisions.map((d) => (
                <TableRow key={d.situation}>
                  <TableCell className="text-sm">{d.situation}</TableCell>
                  <TableCell className="text-sm font-medium text-[#0176D3]">
                    {d.recommendation}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Prerequisites reminder */}
      <div className="mt-8 p-4 rounded-lg bg-muted/30 border text-sm">
        <p className="font-medium mb-2">Eligibility Prerequisites (from deck)</p>
        <ul className="space-y-1 text-muted-foreground">
          <li>
            <strong>Edition:</strong> Enterprise, Unlimited, or Agentforce 1
          </li>
          <li>
            <strong>SKUs:</strong> A4X, A1E, or Foundations Flex
          </li>
          <li>
            <strong>Nice-to-have:</strong> Already deployed Employee Agents +
            activated Data 360
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
}
