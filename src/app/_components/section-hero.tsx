import { Badge } from "@/components/ui/badge";

export function SectionHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#032D60] via-[#0176D3] to-[#1B96FF] py-24 px-6 md:px-10"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
            Agentforce SE/TA Team
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
            Core SEs
          </Badge>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Agentforce Coworker
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light mb-2">
          Plan of Attack
        </p>
        <p className="text-base md:text-lg text-white/70 max-w-2xl mt-6">
          The playbook for bringing Agentforce Coworker to every customer.
          Targeting strategy, narrative framing, and field-tested guidance from
          the team that builds and architects these solutions.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 text-sm text-white/60">
          <span>7 sections</span>
          <span className="text-white/30">|</span>
          <span>Internal + customer-shareable</span>
          <span className="text-white/30">|</span>
          <span>Updated May 2026</span>
        </div>
      </div>
    </section>
  );
}
