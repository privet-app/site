/**
 * Objects that hang on the wall. All drawn procedurally — the app draws its
 * own furniture too, and a drawing costs nothing to ship and re-colours with
 * the room.
 */

/** The publish seal, off the app's own icon: a double circle pressed in maroon. */
export function Seal({ size = 76 }: { size?: number }) {
  return (
    <div
      aria-hidden
      className="grid place-items-center rounded-full bg-acc"
      style={{ width: size, height: size }}
    >
      <div
        className="grid place-items-center rounded-full"
        style={{
          width: size - 10,
          height: size - 10,
          border: `1px solid color-mix(in srgb, var(--acc-ink) 55%, transparent)`,
        }}
      >
        <span
          className="font-serif leading-none text-acc-ink"
          style={{ fontSize: size * 0.46 }}
        >
          P
        </span>
      </div>
    </div>
  );
}

/**
 * A record. The one non-rectangle on the wall, and the cheapest way to say
 * "different kinds of thing" rather than "several photographs". Its spindle
 * is the piece's one solid dot — without it the disc is a coin.
 */
export function Vinyl({ size = 92 }: { size?: number }) {
  const r = size / 2;
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="drop-shadow-[0_8px_9px_var(--node-shadow)]"
    >
      <circle cx={r} cy={r} r={r} fill="#15120f" />
      {[0.86, 0.74, 0.62, 0.5].map((f) => (
        <circle
          key={f}
          cx={r}
          cy={r}
          r={r * f}
          fill="none"
          stroke="#ffffff"
          strokeOpacity={0.07}
          strokeWidth={1}
        />
      ))}
      <circle cx={r} cy={r} r={r * 0.34} fill="var(--acc)" />
      <circle cx={r} cy={r} r={r * 0.06} fill="#15120f" />
    </svg>
  );
}

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
