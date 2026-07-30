import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SectionWrapper } from "./section-wrapper";
import { AlertCircle, CheckCircle, XCircle, Info } from "lucide-react";

export function SectionAugust4Alert() {
  return (
    <SectionWrapper id="august-4-alert" alternate>
      <Alert className="border-blue-600 bg-blue-50/50 [&>svg]:text-blue-600 mb-6">
        <AlertCircle className="h-5 w-5" />
        <AlertTitle className="text-lg font-bold">
          Auto-Enablement Begins August 4, 2026
        </AlertTitle>
        <AlertDescription className="text-sm mt-2">
          <p className="mb-3">
            Agentforce Coworker will be automatically enabled starting{" "}
            <strong>August 4–11, 2026</strong> for eligible customer orgs. This
            document helps you communicate what's happening, who's affected, and
            how customers can opt out if needed.
          </p>
        </AlertDescription>
      </Alert>

      <div className="grid gap-6 md:grid-cols-2 mb-6">
        {/* Who Gets Enabled */}
        <div className="border rounded-lg p-6 bg-green-50/30">
          <div className="flex items-start gap-3 mb-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <h3 className="font-semibold text-base">Who Gets Auto-Enabled</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              ✅ Customers with <strong>Unmetered/User-Based AI licenses</strong>{" "}
              (A4X, A4Sales/Service, A1E, EE with Foundations + Flex Credits)
            </li>
            <li>
              ✅ Only users with the <strong>User-based AI Entitlement</strong>{" "}
              permission set assigned
            </li>
            <li>
              ✅ CRM data enabled by default (Accounts, Contacts, Opportunities,
              Cases, etc.)
            </li>
            <li className="text-xs italic mt-3">
              Note: Slack and Data 360 sources are optional — admins must
              configure those separately
            </li>
          </ul>
        </div>

        {/* Who's Excluded */}
        <div className="border rounded-lg p-6 bg-red-50/30">
          <div className="flex items-start gap-3 mb-3">
            <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
            <h3 className="font-semibold text-base">Excluded Orgs</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>❌ Generative AI disabled orgs</li>
            <li>❌ Multi-data space / multi-org configurations</li>
            <li>❌ HIPAA, HLS, or government orgs</li>
            <li>❌ Flex-only orgs without Unmetered User-Based AI</li>
          </ul>
        </div>
      </div>

      {/* Opt-Out Options */}
      <div className="border rounded-lg p-6 bg-amber-50/30 mb-6">
        <div className="flex items-start gap-3 mb-3">
          <Info className="h-5 w-5 text-amber-600 mt-0.5" />
          <h3 className="font-semibold text-base">Opt-Out Options</h3>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-1">
              Before August 4:
            </p>
            <p>
              Use the opt-out link in the admin notification email, or go to{" "}
              <code className="bg-white px-1.5 py-0.5 rounded text-xs">
                Setup → Agentforce Coworker → Opt Out of Auto Activation
              </code>
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">After August 4:</p>
            <p>
              Toggle it on/off anytime from{" "}
              <code className="bg-white px-1.5 py-0.5 rounded text-xs">
                Agentforce Coworker Setup
              </code>
            </p>
          </div>
        </div>
      </div>

      {/* Data Residency Warning */}
      <Alert className="border-orange-600 bg-orange-50/50 [&>svg]:text-orange-600">
        <AlertCircle className="h-5 w-5" />
        <AlertTitle className="font-semibold">
          Important: Data Residency Requirements
        </AlertTitle>
        <AlertDescription className="text-sm mt-1">
          Customers with data residency requirements (regulated industries
          needing Japan-region data stay) should be proactively advised to opt
          out before August 4. There's currently a potential US-region fallback
          during outages/overload. A toggle to disable fallback is in
          development with no ETA.
        </AlertDescription>
      </Alert>

      {/* Resources */}
      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
        <h4 className="font-semibold text-sm mb-2">Customer-Facing Resources</h4>
        <ul className="space-y-1 text-sm">
          <li>
            <a
              href="https://help.salesforce.com/s/articleView?id=005388192&type=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ❓ August 4 Auto-Enablement FAQ
            </a>
          </li>
          <li>
            <a
              href="https://developer.salesforce.com/docs/data/ask-agentforce/guide/ask-agentforce-a-setup-home.html#set-up-ask-agentforce-beta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              📖 Official Setup Instructions
            </a>
          </li>
          <li>
            <a
              href="https://salesforce.vidyard.com/watch/zWp6pXw6kW2eVhHfeUmANC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ▶️ Watch the Demo
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/presentation/d/1yTs6djUG9LgBLrfmMy1g0zAM8V4ArK6vwsGAPMvHTIQ/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              📊 Full Pitch Deck
            </a>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
}
