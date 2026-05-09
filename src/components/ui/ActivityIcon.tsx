import { Bike, Palette, MountainSnow, Wind } from "lucide-react";

interface Props {
  icon: "horse" | "quad" | "camel" | "palette";
  className?: string;
}

/**
 * Lucide doesn't ship a horse or camel icon, so we map to evocative substitutes:
 * - horse  → Wind (movement, freedom)
 * - quad   → Bike (closest motor analogue)
 * - camel  → MountainSnow (desert/dune connotation)
 * - art    → Palette
 */
export function ActivityIcon({ icon, className }: Props) {
  const Icon =
    icon === "horse"
      ? Wind
      : icon === "quad"
      ? Bike
      : icon === "camel"
      ? MountainSnow
      : Palette;
  return <Icon className={className} strokeWidth={1.5} />;
}
