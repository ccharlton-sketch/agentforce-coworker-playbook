import { PlaybookShell } from "./_components/playbook-shell";
import { SectionHero } from "./_components/section-hero";
import { SectionWhyOurTeam } from "./_components/section-why-our-team";
import { SectionEmployeeVsCoworker } from "./_components/section-employee-vs-coworker";
import { SectionAccountTargets } from "./_components/section-account-targets";
import { SectionBenefits } from "./_components/section-benefits";
import { SectionCatches } from "./_components/section-catches";
import { SectionRoadmap } from "./_components/section-roadmap";

export const dynamic = "force-static";

export default function CoworkerPlaybookPage() {
  return (
    <PlaybookShell>
      <SectionHero />
      <SectionWhyOurTeam />
      <SectionEmployeeVsCoworker />
      <SectionAccountTargets />
      <SectionBenefits />
      <SectionCatches />
      <SectionRoadmap />
    </PlaybookShell>
  );
}
