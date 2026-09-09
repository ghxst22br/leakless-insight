import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-xl",
          tone === "ink" ? "ink-panel" : "bg-primary-foreground/10",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M12 3.2c3.6 3.4 5.6 6.1 5.6 8.7A5.6 5.6 0 0 1 12 17.5a5.6 5.6 0 0 1-5.6-5.6c0-2.6 2-5.3 5.6-8.7Z"
            stroke="currentColor"
            strokeWidth="1.6"
            className="text-accent"
          />
          <path
            d="m8.6 15.6 7.2-7.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="text-accent"
          />
        </svg>
      </span>
      <span
        className={cn(
          "font-display text-lg font-semibold tracking-tight",
          tone === "light" && "text-primary-foreground",
        )}
      >
        Leak<span className="text-accent">Less</span>
      </span>
    </span>
  );
}
