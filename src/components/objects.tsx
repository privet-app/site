/**
 * Small drawn marks used in the reading column. The wall's own furniture
 * lives in `wall/pieces.tsx`; these are the two things the text needs.
 */

/**
 * The member pass, reduced to the mark people actually recognise: three finder
 * squares — square within square — and four modules standing in for the data.
 */
export function QrMark({ size = 64 }: { size?: number }) {
  const u = size / 24;
  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect
        x={x * u}
        y={y * u}
        width={7 * u}
        height={7 * u}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6 * u}
      />
      <rect x={(x + 2.6) * u} y={(y + 2.6) * u} width={1.8 * u} height={1.8 * u} fill="currentColor" />
    </g>
  );
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="text-ink"
    >
      {finder(0, 0)}
      {finder(17, 0)}
      {finder(0, 17)}
      {[
        [13, 13],
        [17, 13],
        [13, 17],
        [17, 17],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x * u} y={y * u} width={2 * u} height={2 * u} fill="currentColor" />
      ))}
    </svg>
  );
}

/** A pin in the plaster, a short thread, and whatever hangs off it. */
export function OnANail({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="pin" aria-hidden />
      <span className="thread" aria-hidden />
      {children}
    </div>
  );
}
