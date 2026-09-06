/**
 * The things that hang on the wall.
 *
 * Ported from the iOS app's `WallNodes.swift` — same geometry, same gradients,
 * same shadows, same copy. Where the app branches on `theme.isNight`, the
 * branch lives in a CSS variable instead, so a piece re-colours with the room
 * rather than being rebuilt.
 */

/** Photograph cropped to a box, dimmed to match room light. */
export function WallPhoto({
  src,
  w,
  h,
  alt = "",
}: {
  src: string;
  w: number;
  h: number;
  alt?: string;
}) {
  return (
    <div className="relative overflow-hidden" style={{ width: w, height: h }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={w}
        height={h}
        className="h-full w-full object-cover"
        draggable={false}
      />
      {/* the room's light lying over the print */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "#1a1006", opacity: "var(--photo-dim)" }}
      />
      {/* faint glass sheen */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom right, var(--glass-sheen), transparent 50%)",
        }}
      />
    </div>
  );
}

const WOOD = "linear-gradient(to bottom right, var(--wood-light), var(--wood-dark))";

/**
 * A framed photograph: mat, frame, the stroke where glass meets frame, and two
 * shadows — a wide soft one and a tight contact one.
 */
export function FramedPhoto({
  src,
  w,
  h,
  style = "wood",
  mat = 10,
  alt = "",
}: {
  src: string;
  w: number;
  h: number;
  style?: "wood" | "black" | "thin";
  mat?: number;
  alt?: string;
}) {
  const frameW = style === "thin" ? 5 : 12;
  const fill =
    style === "wood"
      ? WOOD
      : style === "black"
        ? "linear-gradient(to bottom, #35302b, #17140f)"
        : "var(--plate)";

  return (
    <div
      className="relative"
      style={{
        padding: frameW,
        background: fill,
        boxShadow:
          "0 8px 9px var(--node-shadow), 0 2px 2.5px color-mix(in srgb, var(--node-shadow) 60%, transparent)",
      }}
    >
      <div style={{ padding: mat, background: "var(--paper-white)" }}>
        <WallPhoto src={src} w={w} h={h} alt={alt} />
      </div>
      {/* the frame's own edge */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ border: "0.8px solid var(--frame-stroke)" }}
      />
      {/* inner lip shadow where glass meets frame */}
      <div
        className="pointer-events-none absolute"
        style={{
          inset: frameW - 0.5,
          border: "1.2px solid rgba(0,0,0,0.28)",
        }}
      />
    </div>
  );
}

/** A wooden clothespin, with its spring. */
export function Clothespin() {
  return (
    <div
      className="relative"
      style={{
        width: 9,
        height: 26,
        borderRadius: 1.6,
        background: "linear-gradient(to right, var(--wood-light), var(--wood-dark))",
        boxShadow: "0 1.5px 1.5px color-mix(in srgb, var(--node-shadow) 70%, transparent)",
      }}
    >
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: 8,
          width: 6,
          height: 6,
          borderRadius: "50%",
          border: "1.2px solid #8f8a80",
        }}
      />
    </div>
  );
}

/** A polaroid, caption written in the room's own hand. */
export function Polaroid({
  src,
  caption,
  photoSize = 128,
  pinned = false,
}: {
  src: string;
  caption: string;
  photoSize?: number;
  pinned?: boolean;
}) {
  return (
    <div
      className="relative"
      style={{
        background: "var(--paper-white)",
        border: "0.6px solid rgba(0,0,0,0.08)",
        boxShadow: "0 6px 7px var(--node-shadow)",
      }}
    >
      {pinned && (
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: -17 }}>
          <Clothespin />
        </div>
      )}
      <div style={{ padding: 9, paddingBottom: 0 }}>
        <WallPhoto src={src} w={photoSize} h={photoSize} alt={caption} />
      </div>
      <div
        className="flex items-center justify-center px-1.5 text-center font-serif italic"
        style={{ height: 34, fontSize: 12.5, color: "#4a4237" }}
      >
        {caption}
      </div>
    </div>
  );
}

/** A strip of washi tape: translucent, faintly striped, never quite square. */
export function WashiTape({
  width = 64,
  tint = "#e8d9b8",
  angle = 0,
}: {
  width?: number;
  tint?: string;
  angle?: number;
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width,
        height: 20,
        background: tint,
        opacity: 0.62,
        transform: `rotate(${angle}deg)`,
        border: "0.5px solid rgba(0,0,0,0.05)",
        boxShadow: "0 1px 1px rgba(0,0,0,0.10)",
        backgroundImage:
          "repeating-linear-gradient(38deg, rgba(255,255,255,0.20) 0 2.5px, transparent 2.5px 7.5px)",
      }}
    />
  );
}

/** An unframed print held to the wall with two strips of tape. */
export function WashiPrint({
  src,
  w,
  h,
  caption,
  tapeTint = "#e8d9b8",
}: {
  src: string;
  w: number;
  h: number;
  caption?: string;
  tapeTint?: string;
}) {
  return (
    <div
      className="relative"
      style={{
        padding: 6,
        background: "var(--paper-white)",
        boxShadow: "0 5px 6px var(--node-shadow)",
      }}
    >
      <WallPhoto src={src} w={w} h={h} alt={caption ?? ""} />
      {caption && (
        <div
          className="flex items-center justify-center font-serif italic"
          style={{ height: 24, fontSize: 11.5, color: "#4a4237" }}
        >
          {caption}
        </div>
      )}
      <div className="absolute" style={{ left: -20, top: -8 }}>
        <WashiTape width={62} tint={tapeTint} angle={-44} />
      </div>
      <div className="absolute" style={{ right: -20, bottom: -8 }}>
        <WashiTape width={62} tint={tapeTint} angle={-44} />
      </div>
    </div>
  );
}

/** A sticky note, taped down because the glue gave up. */
export function StickyNote({
  text,
  signature,
  size = 128,
}: {
  text: string;
  signature: string;
  size?: number;
}) {
  return (
    <div
      className="relative flex flex-col"
      style={{
        width: size,
        height: size,
        padding: 13,
        color: "#45392a",
        background:
          "linear-gradient(to bottom right, var(--sticky), color-mix(in srgb, var(--sticky) 86%, transparent))",
        boxShadow: "0 5px 5px color-mix(in srgb, var(--node-shadow) 80%, transparent)",
      }}
    >
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: -8 }}>
        <WashiTape width={58} tint="#d8cdb4" angle={-3} />
      </div>
      <p className="font-serif italic" style={{ fontSize: 14.5, lineHeight: 1.15 }}>
        {text}
      </p>
      <p className="micro mt-auto" style={{ fontSize: 8, opacity: 0.6 }}>
        {signature}
      </p>
    </div>
  );
}

/**
 * A record. Seven groove rings, two wide bands, and two soft wedges of light
 * raking across them. Push it and it takes one and a half lazy turns.
 */
export function Vinyl({
  diameter = 150,
  label = "#7c2230",
  labelText = "for the fire escape",
  spins = 0,
}: {
  diameter?: number;
  label?: string;
  labelText?: string;
  spins?: number;
}) {
  const r = diameter / 2;
  const rings = Array.from({ length: 7 }, (_, i) => ({
    i,
    inset: r * (0.14 + i * 0.105),
  }));

  return (
    <div
      style={{
        width: diameter,
        height: diameter,
        borderRadius: "50%",
        boxShadow: "0 9px 10px var(--node-shadow)",
        transform: `rotate(${spins * 540}deg)`,
        transition: "transform 2.2s cubic-bezier(0.12, 0.8, 0.3, 1)",
      }}
      className="relative"
    >
      {/* the disc */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 50% 50%, #23211f ${r * 0.2}px, #0b0a09 ${r}px)`,
        }}
      />
      <svg
        className="absolute inset-0"
        width={diameter}
        height={diameter}
        viewBox={`0 0 ${diameter} ${diameter}`}
        aria-hidden
      >
        {rings.map(({ i, inset }) => (
          <circle
            key={i}
            cx={r}
            cy={r}
            r={r - inset}
            fill="none"
            stroke="#ffffff"
            strokeOpacity={i % 3 === 0 ? 0.1 : 0.05}
            strokeWidth={0.7}
          />
        ))}
        {/* wide groove bands */}
        <circle
          cx={r} cy={r} r={r - r * 0.3} fill="none"
          stroke="#000000" strokeOpacity={0.55} strokeWidth={r * 0.045}
        />
        <circle
          cx={r} cy={r} r={r - r * 0.52} fill="none"
          stroke="#000000" strokeOpacity={0.45} strokeWidth={r * 0.04}
        />
      </svg>
      {/* two soft light wedges, like light raking the grooves */}
      <div
        className="absolute rounded-full"
        style={{
          inset: r * 0.06,
          background:
            "conic-gradient(from -40deg, transparent 0%, var(--vinyl-sheen-a) 7%, transparent 16%, transparent 50%, var(--vinyl-sheen-b) 57%, transparent 66%, transparent 100%)",
        }}
      />
      {/* centre label */}
      <div
        className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
        style={{
          width: diameter * 0.36,
          height: diameter * 0.36,
          background: `linear-gradient(to bottom right, ${label}, color-mix(in srgb, ${label} 82%, transparent))`,
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            inset: diameter * 0.017,
            border: "0.6px solid rgba(255,255,255,0.25)",
          }}
        />
        <div
          className="flex flex-col items-center text-white"
          style={{ gap: diameter * 0.02, transform: `translateY(${-diameter * 0.075}px)` }}
        >
          <span
            className="font-sans font-bold"
            style={{
              fontSize: diameter * 0.052,
              letterSpacing: diameter * 0.016,
              opacity: 0.92,
            }}
          >
            PRIVET
          </span>
          <span
            className="overflow-hidden text-ellipsis whitespace-nowrap font-serif italic"
            style={{
              fontSize: diameter * 0.05,
              opacity: 0.85,
              maxWidth: diameter * 0.3,
            }}
          >
            {labelText}
          </span>
        </div>
        {/* spindle hole */}
        <div
          className="absolute rounded-full"
          style={{
            width: diameter * 0.035,
            height: diameter * 0.035,
            background: "#0b0a09",
            border: "0.5px solid rgba(255,255,255,0.3)",
          }}
        />
      </div>
    </div>
  );
}

/** A gig poster, printed by Privet Records. */
export function Poster({
  act = "Smelly\nCat",
  no = "Nº 20",
  place = "Central Perk, tonight",
  night = "TWO SETS · NO COVER CHARGE",
}: {
  act?: string;
  no?: string;
  place?: string;
  night?: string;
}) {
  return (
    <div
      className="relative flex flex-col items-center bg-card"
      style={{
        width: 250,
        height: 355,
        border: "1px solid var(--plate)",
        boxShadow: "0 9px 10px var(--node-shadow)",
      }}
    >
      <div
        className="pointer-events-none absolute"
        style={{ inset: 7, border: "1.5px solid color-mix(in srgb, var(--ink) 55%, transparent)" }}
      />
      <p className="micro text-acc" style={{ marginTop: 24, fontSize: 7.5, letterSpacing: 2.6 }}>
        Privet Records Presents
      </p>
      <div className="rule-double" style={{ width: 150, marginTop: 10 }} />
      <p
        className="whitespace-pre-line text-center font-serif"
        style={{ fontSize: 46, lineHeight: 0.92, marginTop: 16 }}
      >
        {act}
      </p>
      <p className="font-serif italic text-it" style={{ fontSize: 14, marginTop: 8 }}>
        {place}
      </p>
      <p className="my-auto font-serif text-acc" style={{ fontSize: 52 }}>
        {no}
      </p>
      <p className="micro text-faint" style={{ marginBottom: 18, fontSize: 6.5, letterSpacing: 1.8 }}>
        {night}
      </p>
    </div>
  );
}

const SCREW =
  "radial-gradient(circle at 35% 30%, #d8bc84, #8f7444)";

/** The plate that hangs by your door, screwed down at four corners. */
export function Nameplate({
  name = "Privet",
  kicker = "Invite only · iOS first",
  place = "Est. 2026",
  fills = false,
  scale = 1,
}: {
  name?: string;
  kicker?: string;
  place?: string;
  fills?: boolean;
  /** The plate is one design; on the hero wall you are simply standing closer. */
  scale?: number;
}) {
  return (
    <div
      className={`relative bg-card text-center ${fills ? "w-full" : "inline-block"}`}
      style={{
        padding: `${15 * scale}px ${30 * scale}px`,
        border: "1px solid var(--plate)",
        boxShadow: "0 6px 7px var(--node-shadow)",
      }}
    >
      <div
        className="rule-double absolute"
        style={{ top: 5 * scale, left: 10 * scale, right: 10 * scale }}
      />
      <div
        className="rule-double absolute"
        style={{ bottom: 5 * scale, left: 10 * scale, right: 10 * scale }}
      />
      {[
        { top: 5, left: 5 },
        { top: 5, right: 5 },
        { bottom: 5, left: 5 },
        { bottom: 5, right: 5 },
      ].map((pos, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute rounded-full"
          style={{
            ...Object.fromEntries(
              Object.entries(pos).map(([k, v]) => [k, v * scale]),
            ),
            width: 5 * scale,
            height: 5 * scale,
            background: SCREW,
          }}
        />
      ))}
      <p
        className="micro text-acc"
        style={{ fontSize: 7.5 * scale, letterSpacing: 2.6 * scale }}
      >
        {kicker}
      </p>
      <h1
        className="font-serif leading-none"
        style={{ fontSize: 31 * scale, marginTop: 6 * scale }}
      >
        {name}
      </h1>
      <p
        className="micro text-sub"
        style={{
          fontSize: 7.5 * scale,
          letterSpacing: 2.2 * scale,
          fontWeight: 600,
          marginTop: 6 * scale,
        }}
      >
        {place}
      </p>
    </div>
  );
}

/** The pinned quote, framed in wood and hanging from a brass nail by a string. */
export function PinnedQuote({ quote }: { quote: string }) {
  const w = 296;
  return (
    <div className="relative" style={{ width: w + 18, paddingTop: 34 }}>
      {/* two taut string lines up to a little brass nail */}
      <svg
        className="absolute left-0 top-0"
        width={w + 18}
        height={36}
        viewBox={`0 0 ${w + 18} 36`}
        aria-hidden
      >
        <path
          d={`M 26 34 L ${w / 2 + 9} 2 M ${w - 8} 34 L ${w / 2 + 9} 2`}
          stroke="var(--string)"
          strokeWidth={1.1}
          fill="none"
        />
      </svg>
      <span
        aria-hidden
        className="absolute rounded-full"
        style={{
          left: w / 2 + 6,
          top: 0,
          width: 6,
          height: 6,
          background: "radial-gradient(circle at 35% 30%, #e0c68e, #7a6238)",
        }}
      />
      <div
        style={{
          marginLeft: 9,
          padding: 9,
          width: w,
          background: WOOD,
          border: "0.8px solid var(--frame-stroke)",
          boxShadow: "0 8px 9px var(--node-shadow)",
        }}
      >
        <div className="bg-card text-center" style={{ padding: 20 }}>
          <p className="micro text-acc" style={{ fontSize: 7.5, letterSpacing: 3 }}>
            Pinned
          </p>
          <p
            className="mt-2.5 font-serif italic text-ink2"
            style={{ fontSize: 17.5, lineHeight: 1.4 }}
          >
            “{quote}”
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * A drooping string of warm bulbs. The wire sags with each span's reach, the
 * way a real string hangs off a row of nails, and at night the bulbs glow and
 * gently twinkle.
 */
export function FairyLights({
  pins,
  bulbCount,
  width,
  height,
}: {
  pins: [number, number][];
  bulbCount: number;
  width: number;
  height: number;
}) {
  const spans = pins.slice(0, -1).map((a, i) => {
    const b = pins[i + 1];
    const reach = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const sag = Math.min(Math.max(reach * 0.3, 12), 34);
    return { a, b, c: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2 + sag] as [number, number], reach };
  });

  const total = spans.reduce((sum, s) => sum + s.reach, 0) || 1;
  const d =
    `M ${pins[0][0]} ${pins[0][1]} ` +
    spans.map((s) => `Q ${s.c[0]} ${s.c[1]} ${s.b[0]} ${s.b[1]}`).join(" ");

  const quad = (a: number[], c: number[], b: number[], t: number) => {
    const m = 1 - t;
    return [
      m * m * a[0] + 2 * m * t * c[0] + t * t * b[0],
      m * m * a[1] + 2 * m * t * c[1] + t * t * b[1],
    ];
  };

  const bulbs: { x: number; y: number; k: number }[] = [];
  spans.forEach((s) => {
    const n = Math.max(1, Math.round((bulbCount * s.reach) / total));
    for (let k = 0; k < n; k++) {
      const [x, y] = quad(s.a, s.c, s.b, (k + 1) / (n + 1));
      bulbs.push({ x, y, k: bulbs.length });
    }
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden
      className="overflow-visible"
    >
      <defs>
        <radialGradient id="bulb-glow">
          <stop offset="0%" stopColor="#ffd79a" stopOpacity={0.55} />
          <stop offset="100%" stopColor="#ffd79a" stopOpacity={0} />
        </radialGradient>
      </defs>
      <path d={d} stroke="var(--wire)" strokeOpacity={0.85} strokeWidth={1.8} fill="none" />
      {pins.map(([x, y], i) => (
        <circle key={`tack-${i}`} cx={x} cy={y} r={2.6} fill="url(#bulb-glow)" />
      ))}
      {bulbs.map(({ x, y, k }) => (
        <g key={k} className="bulb" style={{ ["--twinkle-delay" as string]: `${(k * 1.73) % 3}s` }}>
          <circle cx={x} cy={y + 5} r={9} fill="url(#bulb-glow)" className="bulb-halo" />
          <path
            d={`M ${x} ${y} L ${x} ${y + 2.5}`}
            stroke="var(--wire)"
            strokeWidth={1.2}
          />
          <ellipse cx={x} cy={y + 5.6} rx={2.9} ry={3.6} fill="#ffcf8a" className="bulb-glass" />
        </g>
      ))}
    </svg>
  );
}
