import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TierCardProps {
  tier: number;
  title: string;
  subtitle: string;
  description: string;
  action: string;
  color: "blue" | "teal" | "amber" | "gray";
}

const colorMap = {
  blue: {
    border: "border-t-4 border-t-[#0176D3]",
    badge: "bg-[#0176D3] text-white",
  },
  teal: {
    border: "border-t-4 border-t-teal-500",
    badge: "bg-teal-500 text-white",
  },
  amber: {
    border: "border-t-4 border-t-amber-500",
    badge: "bg-amber-500 text-white",
  },
  gray: {
    border: "border-t-4 border-t-gray-400",
    badge: "bg-gray-400 text-white",
  },
};

export function TierCard({
  tier,
  title,
  subtitle,
  description,
  action,
  color,
}: TierCardProps) {
  return (
    <Card className={`${colorMap[color].border} h-full`}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Badge className={`${colorMap[color].badge} text-xs`}>
            Tier {tier}
          </Badge>
          <span className="text-xs text-muted-foreground">{subtitle}</span>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <CardDescription className="text-sm">{description}</CardDescription>
        <div className="pt-2 border-t">
          <p className="text-xs font-medium text-[#0176D3]">{action}</p>
        </div>
      </CardContent>
    </Card>
  );
}
