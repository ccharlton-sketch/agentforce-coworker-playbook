import { PlaybookShell } from "./_components/playbook-shell";
import { SectionHero } from "./_components/section-hero";
import { SectionAugust4Alert } from "./_components/section-august-4-alert";
import { SectionEmployeeVsCoworker } from "./_components/section-employee-vs-coworker";
import { SectionAccountTargets } from "./_components/section-account-targets";
import { SectionBenefits } from "./_components/section-benefits";
import { SectionObjections } from "./_components/section-objections";
import { SectionCatches } from "./_components/section-catches";
import { SectionRoadmap } from "./_components/section-roadmap";

export const dynamic = "force-static";

export default function CoworkerPlaybookPage() {
  return (
    <PlaybookShell>
      <SectionHero />
      <SectionAugust4Alert />
      <SectionEmployeeVsCoworker />
      <SectionAccountTargets />
      <SectionBenefits />
      <SectionObjections />
      <SectionCatches />
      <SectionRoadmap />
    </PlaybookShell>
  );
}
