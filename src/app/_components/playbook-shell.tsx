"use client";

import { useEffect, useRef, useState } from "react";
import { StickyNav } from "./sticky-nav";

const sectionIds = [
  "hero",
  "why-our-team",
  "employee-vs-coworker",
  "account-targets",
  "benefits",
  "catches",
  "roadmap",
];

interface PlaybookShellProps {
  children: React.ReactNode;
  hideInternal?: boolean;
}

export function PlaybookShell({ children, hideInternal = false }: PlaybookShellProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className={hideInternal ? "hide-internal" : ""}>
      <StickyNav activeSection={activeSection} />
      <main className="lg:ml-60">
        <div className="scroll-smooth">{children}</div>
      </main>

      {hideInternal && (
        <style>{`
          .hide-internal [data-internal="true"] {
            display: none;
          }
        `}</style>
      )}
    </div>
  );
}
