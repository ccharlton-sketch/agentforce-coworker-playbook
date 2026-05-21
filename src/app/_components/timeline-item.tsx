interface TimelineItemProps {
  date: string;
  status: "available" | "upcoming" | "future";
  title: string;
  items: string[];
}

const statusStyles = {
  available: {
    dot: "bg-green-500",
    line: "border-green-300",
    badge: "bg-green-100 text-green-700",
    label: "Available Now",
  },
  upcoming: {
    dot: "bg-[#0176D3]",
    line: "border-[#0176D3]/30",
    badge: "bg-blue-100 text-[#0176D3]",
    label: "Coming Soon",
  },
  future: {
    dot: "bg-purple-500",
    line: "border-purple-300",
    badge: "bg-purple-100 text-purple-700",
    label: "Future",
  },
};

export function TimelineItem({ date, status, title, items }: TimelineItemProps) {
  const styles = statusStyles[status];

  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Connector line */}
      <div className="absolute left-[11px] top-6 bottom-0 w-px border-l-2 border-dashed last:hidden ${styles.line}" />
      {/* Dot */}
      <div
        className={`absolute left-0 top-1.5 h-6 w-6 rounded-full ${styles.dot} flex items-center justify-center`}
      >
        <div className="h-2.5 w-2.5 rounded-full bg-white" />
      </div>
      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h4 className="font-semibold text-base">{title}</h4>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${styles.badge}`}
          >
            {date}
          </span>
        </div>
        <ul className="space-y-1">
          {items.map((item) => (
            <li
              key={item}
              className="text-sm text-muted-foreground flex items-start gap-2"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
