import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SectionWrapper } from "./section-wrapper";
import {
  AlertTriangle,
  Ban,
  Clock,
  DollarSign,
  Eye,
  FlaskConical,
  Monitor,
} from "lucide-react";

const catches = [
  {
    icon: FlaskConical,
    title: "Beta Product",
    description:
      "Outages and changes should be expected. Customers cannot make buying decisions based on beta products. Set this expectation clearly upfront.",
    severity: "high" as const,
  },
  {
    icon: Ban,
    title: "No Record Updates or Web Search (Yet)",
    description:
      "Actions and record updates are locked behind Employee Agents callable from Coworker. Web search is coming but not available today.",
    severity: "high" as const,
  },
  {
    icon: Clock,
    title: "Autonomy is Oversold",
    description:
      "\"Works while you're away\" is future state. The Plan & Act UX is awkward — toggling between records isn't smooth. Without Employee Agents, it's read-only.",
    severity: "medium" as const,
  },
  {
    icon: Eye,
    title: "Observability — Coming via Agentforce Observability",
    description:
      "Coworker will be built into Agentforce Observability, which is a positive. However, we don't yet know what that experience looks like in practice. Customers who need detailed audit trails or usage analytics will ask — acknowledge it's coming but set expectations that details are TBD.",
    severity: "medium" as const,
  },
  {
    icon: DollarSign,
    title: "Cost Risk for Non-A1/A4X",
    description:
      "Pricing will be based on flex credit/token usage rather than per-action, which gives more flexibility. But flex-only customers can still blow through consumption quickly. Use Coworker as a driver toward committed SKUs, not a standalone play.",
    severity: "medium" as const,
  },
  {
    icon: AlertTriangle,
    title: "Context Window & LLM Details",
    description:
      "Coworker is believed to have a 200k token context window and runs on Claude as the underlying LLM. There is currently no ability to adjust or swap the LLM behind the scenes, though it is roadmapped. Our team needs awareness of these constraints to consult and troubleshoot properly.",
    severity: "low" as const,
  },
  {
    icon: Monitor,
    title: "UX Gaps",
    description:
      "Toggling between records within the Coworker interface is awkward. Users can always open another screen, but the in-context experience needs work.",
    severity: "low" as const,
  },
];

const severityStyles = {
  high: "border-red-200 bg-red-50/50 [&>svg]:text-red-600",
  medium: "border-amber-200 bg-amber-50/50 [&>svg]:text-amber-600",
  low: "border-blue-200 bg-blue-50/50 [&>svg]:text-blue-600",
};

export function SectionCatches() {
  return (
    <SectionWrapper id="catches" internal>
      <h2 className="text-3xl font-bold mb-2">Catches & Gotchas</h2>
      <p className="text-xs text-muted-foreground/60 mb-2 uppercase tracking-wide">
        Last updated: May 27, 2026
      </p>
      <p className="text-muted-foreground mb-8">
        What to know before the customer conversation. Set expectations early —
        don&apos;t let the deck oversell.
      </p>

      <div className="space-y-4">
        {catches.map((item) => (
          <Alert
            key={item.title}
            className={severityStyles[item.severity]}
          >
            <item.icon className="h-5 w-5" />
            <AlertTitle className="font-semibold">{item.title}</AlertTitle>
            <AlertDescription className="text-sm mt-1">
              {item.description}
            </AlertDescription>
          </Alert>
        ))}
      </div>
    </SectionWrapper>
  );
}
