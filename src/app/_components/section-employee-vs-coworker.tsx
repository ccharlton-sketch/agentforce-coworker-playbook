import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";

export function SectionEmployeeVsCoworker() {
  return (
    <SectionWrapper id="employee-vs-coworker">
      <h2 className="text-3xl font-bold mb-2">
        Employee Agents vs. Agentforce Coworker
      </h2>
      <p className="text-muted-foreground mb-8">
        The #1 question from customers. Here&apos;s the definitive answer.
      </p>

      {/* Key framing callout */}
      <div className="mb-10 rounded-xl bg-gradient-to-r from-[#0176D3]/5 to-[#1B96FF]/5 border border-[#0176D3]/20 p-6 md:p-8">
        <p className="text-lg md:text-xl font-semibold text-[#032D60] mb-2">
          Agentforce Coworker is your <span className="text-[#0176D3]">first</span> agent — not your last.
        </p>
        <p className="text-muted-foreground">
          Employee Agents are your 2nd, 3rd, and 4th agents that make Coworker
          smarter and more capable over time. We are NOT shelving the work
          customers have already done.
        </p>
      </div>

      {/* Comparison */}
      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card className="border-t-4 border-t-[#0176D3]">
          <CardHeader>
            <CardTitle className="text-lg">Agentforce Coworker</CardTitle>
            <p className="text-sm text-muted-foreground">
              The Brain / Orchestrator
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm font-medium text-[#0176D3]">
              &ldquo;Conversational Experience for Salesforce + Data Cloud + Slack&rdquo;
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0176D3] shrink-0" />
                Open-ended, conversational, multi-turn
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0176D3] shrink-0" />
                Searches across all connected data (300+ sources)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0176D3] shrink-0" />
                Orchestrates Employee Agents to take action
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0176D3] shrink-0" />
                One interface across Lightning, Slack, Teams, Mobile
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0176D3] shrink-0" />
                End users just talk — don&apos;t need to know agents exist
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-purple-500">
          <CardHeader>
            <CardTitle className="text-lg">Employee Agents</CardTitle>
            <p className="text-sm text-muted-foreground">
              The Muscles / Specialists
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm font-medium text-purple-600">
              On-rails, rules-driven business processes with AI
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                Specific, guided, deterministic workflows
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                Execute business rules and processes
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                Can update records, trigger actions
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                Called by Coworker — users don&apos;t interact directly
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                Still powerful for service teams and structured use cases
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* The key insight */}
      <div className="mb-10 rounded-lg bg-muted/50 p-6 border">
        <h3 className="font-semibold mb-3">The Key Insight for Customers</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Without Employee Agents:</strong>{" "}
            Coworker is smart search + summarization (Find + Catch Up). It can
            answer questions and surface information, but can&apos;t take action.
          </p>
          <p>
            <strong className="text-foreground">With Employee Agents:</strong>{" "}
            Coworker becomes the full autonomous loop (Find + Catch Up + Plan &
            Act). Actions and record updates are locked behind Employee Agents
            that Coworker calls.
          </p>
          <p className="pt-2 border-t text-foreground font-medium">
            &ldquo;You didn&apos;t waste time building Employee Agents. You built the
            specialized muscles. Coworker is the brain that now knows when to
            flex them.&rdquo;
          </p>
        </div>
      </div>

      {/* When Coworker isn't the right fit */}
      <div className="rounded-xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/10 p-6 md:p-8">
        <h3 className="font-semibold text-lg mb-3">
          When Coworker Isn&apos;t the Right Play (And That&apos;s OK)
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Coworker respects user roles and permissions — it&apos;s not unfettered
          access. But some orgs haven&apos;t fully implemented those controls through
          profiles, permission sets, and field-level security. Until that
          foundation is solid, Coworker may expose more than intended.
        </p>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
            <p>
              <strong className="text-foreground">Permissions not fully configured:</strong>{" "}
              Coworker honors roles and FLS, but many orgs rely on UI-level hiding
              or tribal knowledge rather than proper field-level security. That
              gap becomes visible with conversational AI.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
            <p>
              <strong className="text-foreground">Org readiness:</strong>{" "}
              If an org&apos;s data model, permissions, or metadata aren&apos;t structured
              to support open-ended AI access, the conversation becomes about
              getting AI-ready — which is valuable work in itself.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
            <p>
              <strong className="text-foreground">Predictability over flexibility:</strong>{" "}
              Some teams need deterministic, on-rails workflows — not open-ended
              exploration. Employee Agents deliver exactly that.
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-amber-500/20">
          <strong className="text-foreground">The play here:</strong>{" "}
          Employee Agents remain the answer for customers who want Agentforce use
          cases that are predictable, scoped, and deterministic. Help these
          customers get their org and data AI-ready so Coworker becomes viable
          down the road.
        </p>
      </div>
    </SectionWrapper>
  );
}
