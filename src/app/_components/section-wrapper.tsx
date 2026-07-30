interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  alternate?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  alternate = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 py-16 px-6 md:px-10 ${
        alternate ? "bg-amber-50/40" : "bg-white"
      } ${className}`}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}
