import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";

export function InternalBadge() {
  return (
    <Badge
      variant="outline"
      className="border-amber-400 bg-amber-50 text-amber-700 text-xs font-medium gap-1"
    >
      <Lock className="h-3 w-3" />
      Internal Only
    </Badge>
  );
}
