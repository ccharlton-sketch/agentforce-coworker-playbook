"use client";

import { Menu, X, ChevronLeft } from "lucide-react";
import { useState } from "react";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "august-4-alert", label: "August 10 Auto-Enable" },
  { id: "employee-vs-coworker", label: "Agents vs. Coworker" },
  { id: "account-targets", label: "Account Targets" },
  { id: "benefits", label: "Why Customers Care" },
  { id: "objections", label: "Common Objections" },
  { id: "catches", label: "Catches" },
  { id: "roadmap", label: "Roadmap" },
];

interface StickyNavProps {
  activeSection: string;
  onSidebarToggle?: (hidden: boolean) => void;
}

export function StickyNav({ activeSection, onSidebarToggle }: StickyNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopHidden, setDesktopHidden] = useState(false);

  const toggleDesktopSidebar = () => {
    const newState = !desktopHidden;
    setDesktopHidden(newState);
    onSidebarToggle?.(newState);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md border"
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Desktop show/hide toggle */}
      <button
        onClick={toggleDesktopSidebar}
        className={`hidden lg:block fixed top-4 z-50 p-2 rounded-lg bg-white shadow-md border transition-all duration-200 ${
          desktopHidden ? "left-4" : "left-64"
        }`}
        aria-label="Toggle sidebar"
      >
        {desktopHidden ? <Menu className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
      </button>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 h-full w-60 bg-white border-r shadow-sm z-40 pt-20 px-4 transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${desktopHidden ? "lg:-translate-x-full" : "lg:translate-x-0"}`}
      >
        <div className="mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Playbook
          </h2>
        </div>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                  activeSection === section.id
                    ? "bg-[#0176D3]/10 text-[#0176D3] font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <span>{section.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
