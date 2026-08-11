// Placeholder wordmark. Swap the <svg> for the real Wozku asset when it lands; the API stays the same.

export function WozkuMark({
  showWordmark = true,
  className,
}: {
  showWordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="size-[18px] shrink-0 text-violet-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path d="M2 4 L7 20 L12 9 L17 20 L22 4" />
      </svg>
      {showWordmark && (
        <span className="font-(family-name:--app-font-heading) text-[15px] font-bold tracking-[-0.02em] text-foreground">
          Wozku
        </span>
      )}
      <span className="sr-only">Wozku</span>
    </span>
  );
}
