import { InternalBadge } from "./internal-badge";

interface SectionWrapperProps {
  id: string;
  internal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({
  id,
  internal = false,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      data-internal={internal ? "true" : undefined}
      className={`relative scroll-mt-20 py-16 px-6 md:px-10 ${
        internal
          ? "border-l-4 border-amber-400 bg-amber-50/40"
          : ""
      } ${className}`}
    >
      {internal && (
        <div className="absolute top-4 right-4">
          <InternalBadge />
        </div>
      )}
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}
