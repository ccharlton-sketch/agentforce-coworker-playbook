import { PlaybookShell } from "./_components/playbook-shell";
import { SectionHero } from "./_components/section-hero";
import { SectionWhyOurTeam } from "./_components/section-why-our-team";
import { SectionEmployeeVsCoworker } from "./_components/section-employee-vs-coworker";
import { SectionAccountTargets } from "./_components/section-account-targets";
import { SectionBenefits } from "./_components/section-benefits";
import { SectionCatches } from "./_components/section-catches";
import { SectionRoadmap } from "./_components/section-roadmap";

interface PageProps {
  searchParams: Promise<{ view?: string }>;
}

export default async function CoworkerPlaybookPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const hideInternal = params.view === "external";

  return (
    <PlaybookShell hideInternal={hideInternal}>
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
