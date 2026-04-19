import { cn } from "@/lib/utils";

/** Wordmark bez pozadine — boje iz Tailwind brenda; skalira se samo visinom (`className`). */
export function LogoWordmark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 80"
      fill="none"
      className={cn("block w-auto max-w-full", className)}
      aria-hidden
      focusable="false"
      overflow="visible"
      preserveAspectRatio="xMinYMid meet"
    >
      <text
        x="0"
        y="56"
        style={{
          fontFamily: "var(--font-heading, 'Space Grotesk'), ui-sans-serif, system-ui, sans-serif",
          fontSize: "46px",
          fontWeight: 700,
          letterSpacing: "-0.035em"
        }}
      >
        <tspan fill="#0a2d2c">Adria </tspan>
        <tspan fill="#226361">SmartPass</tspan>
      </text>
    </svg>
  );
}
