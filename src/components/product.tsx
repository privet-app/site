/**
 * The product, drawn. These are not decorations — they are the app's own
 * screens and objects, so that reading the page and seeing the thing happen
 * at the same time.
 */

/** A photograph inside its plate: 7px of card, a hairline, and the room's shadow. */
function Plate({
  src,
  ratio = "4 / 5",
  alt = "",
}: {
  src: string;
  ratio?: string;
  alt?: string;
}) {
  return (
    <div className="bg-card p-[7px] shadow-[0_10px_24px_rgba(0,0,0,0.13)] ring-1 ring-plate">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="block w-full object-cover"
        style={{ aspectRatio: ratio }}
        draggable={false}
      />
    </div>
  );
}

function Avatar({ letter }: { letter: string }) {
  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-plate font-serif text-[13px] text-sub">
      {letter}
    </span>
  );
}

/** The byline over an entry: who, when, and where — the place in maroon. */
function Byline({
  name,
  meta,
  place,
}: {
  name: string;
  meta: string;
  place?: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar letter={name[0]} />
      <div>
        <p className="font-serif text-[13.5px] leading-tight">{name}</p>
        <p className="micro mt-0.5 text-faint" style={{ fontSize: 8 }}>
          {meta}
          {place && <span className="text-acc"> · {place}</span>}
        </p>
      </div>
    </div>
  );
}

/** The footer under every entry: what kind of thing it is, and the two quiet
 *  things you can do about it. No counts. */
export function EntryFooter({ kind = "Photograph" }: { kind?: string }) {
  return (
    <div className="mt-3 flex items-center justify-between border-t border-line pt-2.5">
      <p className="micro text-faint" style={{ fontSize: 8 }}>
        {kind}
      </p>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <svg width={11} height={10} viewBox="0 0 15 14" aria-hidden>
            <path
              d="M7.5 13.2 C-1.6 6.9 2.2 0.4 7.5 3.7 C12.8 0.4 16.6 6.9 7.5 13.2 Z"
              fill="var(--acc)"
            />
          </svg>
          <span className="micro text-acc" style={{ fontSize: 8 }}>
            Quietly
          </span>
        </span>
        <span className="micro text-faint" style={{ fontSize: 8 }}>
          Reply
        </span>
      </div>
    </div>
  );
}

/** A photograph entry, as it appears in the feed. */
export function PhotoEntry({
  src,
  name,
  meta,
  place,
  caption,
}: {
  src: string;
  name: string;
  meta: string;
  place?: string;
  caption: string;
}) {
  return (
    <article>
      <Byline name={name} meta={meta} place={place} />
      <div className="mt-3">
        <Plate src={src} alt={caption} />
      </div>
      <p className="mt-3 font-serif text-[15px] italic leading-[1.45] text-it">
        {caption}
      </p>
      <EntryFooter />
    </article>
  );
}

/** A quote entry: a giant maroon opening mark, and a line set upright in serif. */
export function QuoteEntry({
  name,
  meta,
  text,
}: {
  name: string;
  meta: string;
  text: string;
}) {
  return (
    <article>
      <Byline name={name} meta={meta} />
      <div className="mt-3 flex gap-3">
        <span
          aria-hidden
          className="font-serif leading-[0.7] text-acc"
          style={{ fontSize: 46 }}
        >
          “
        </span>
        <p className="font-serif text-[19px] leading-[1.32] text-ink2">{text}</p>
      </div>
      <EntryFooter kind="Note" />
    </article>
  );
}

/** The iPhone the whole thing lives on. */
export function Phone({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[310px] rounded-[42px] bg-card p-2.5 shadow-[0_28px_60px_rgba(0,0,0,0.22)] ring-1 ring-plate ${className}`}
    >
      <div className="relative h-[600px] overflow-hidden rounded-[33px] bg-bg">
        {/* the island */}
        <span className="absolute left-1/2 top-2.5 z-10 h-[18px] w-[74px] -translate-x-1/2 rounded-full bg-ink opacity-90" />
        {children}
      </div>
    </div>
  );
}

/** The masthead every screen wears. */
function ScreenHead({ label }: { label: string }) {
  return (
    <div className="px-5 pt-11">
      <div className="flex items-baseline justify-between">
        <p className="font-serif text-[17px]">Privet</p>
        <p className="micro text-faint" style={{ fontSize: 7.5 }}>
          {label}
        </p>
      </div>
      <div className="rule-double mt-2.5" />
    </div>
  );
}

/** The feed: your friends, in order, ending. */
export function FeedScreen() {
  return (
    <div className="flex h-full flex-col">
      <ScreenHead label="Friday, 6 March" />
      <div className="flex-1 space-y-6 overflow-hidden px-5 pt-5">
        <PhotoEntry
          src="/scenes/scene-terrace.jpg"
          name="Maya"
          meta="This morning"
          place="Fort Kochi"
          caption="The terrace finally got its plants."
        />
        <QuoteEntry
          name="Lando"
          meta="Yesterday"
          text="Nobody tells you the quiet part is the good part."
        />
      </div>
    </div>
  );
}

/** The bottom of the feed. There is one, and it says so. */
export function EndScreen() {
  return (
    <div className="flex h-full flex-col">
      <ScreenHead label="Friday, 6 March" />
      <div className="flex-1 space-y-5 px-5 pt-5">
        <div className="space-y-3 opacity-45 blur-[2px]">
          {[0, 1].map((i) => (
            <div key={i} className="flex gap-2.5">
              <span className="h-8 w-8 shrink-0 rounded-full border border-plate" />
              <div className="flex-1 space-y-1.5 pt-1.5">
                <span className="block h-1.5 rounded-full bg-line2" style={{ width: `${78 - i * 16}%` }} />
                <span className="block h-1.5 w-1/3 rounded-full bg-line" />
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-line pt-9 text-center">
          <p className="micro text-acc">You’ve read everything</p>
          <p className="mx-auto mt-4 max-w-[24ch] font-serif text-[19px] italic leading-[1.4] text-it">
            Put it down — go and see someone.
          </p>
          <div className="rule-double mx-auto mt-8 w-24" />
          <p className="micro mt-4 text-faint" style={{ fontSize: 8 }}>
            Nothing more until tomorrow
          </p>
        </div>
      </div>
    </div>
  );
}

/** The member pass: the only door into the app. */
export function MemberPass({ scale = 1 }: { scale?: number }) {
  const u = (n: number) => n * scale;
  return (
    <div
      className="bg-card shadow-[0_18px_44px_rgba(0,0,0,0.18)] ring-1 ring-plate"
      style={{ width: u(228), padding: u(16) }}
    >
      <div className="flex items-baseline justify-between">
        <p className="micro text-acc" style={{ fontSize: u(7.5) }}>
          Privet
        </p>
        <p className="micro text-faint" style={{ fontSize: u(7.5) }}>
          Member pass
        </p>
      </div>
      <div className="rule-double" style={{ marginTop: u(8) }} />
      <div
        className="mx-auto grid place-items-center"
        style={{ marginTop: u(16), width: u(124), height: u(124), background: "#f3efe6" }}
      >
        <QrMark size={u(104)} />
      </div>
      <div className="rule-double" style={{ marginTop: u(16) }} />
      <div className="flex items-end justify-between" style={{ marginTop: u(9) }}>
        <div>
          <p className="font-serif leading-none" style={{ fontSize: u(19) }}>
            Maya Menon
          </p>
          <p className="micro text-faint" style={{ fontSize: u(7), marginTop: u(4) }}>
            Photographer
          </p>
        </div>
        <p className="micro text-sub" style={{ fontSize: u(7) }}>
          Nº 41
        </p>
      </div>
    </div>
  );
}

/** Three finder squares, a monogram in the middle: the mark people recognise. */
export function QrMark({ size = 104 }: { size?: number }) {
  const u = size / 25;
  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x * u} y={y * u} width={7 * u} height={7 * u} fill="none" stroke="#231e19" strokeWidth={1.5 * u} />
      <rect x={(x + 2.6) * u} y={(y + 2.6) * u} width={1.8 * u} height={1.8 * u} fill="#231e19" />
    </g>
  );
  const modules: [number, number][] = [
    [10, 1], [13, 3], [10, 5], [15, 6], [1, 11], [4, 13], [6, 10],
    [10, 22], [13, 20], [16, 23], [20, 11], [22, 14], [18, 16], [21, 19],
  ];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      {finder(0, 0)}
      {finder(18, 0)}
      {finder(0, 18)}
      {modules.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x * u} y={y * u} width={1.8 * u} height={1.8 * u} fill="#231e19" />
      ))}
      <circle cx={size / 2} cy={size / 2} r={4.2 * u} fill="#f3efe6" />
      <text
        x={size / 2}
        y={size / 2 + 3.1 * u}
        textAnchor="middle"
        fill="#7c2230"
        style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: 8 * u }}
      >
        M
      </text>
    </svg>
  );
}

/** What every other app puts a number on, and what this one shows instead. */
export function CountsCompare({
  struck,
}: {
  struck: (text: string, index: number) => React.ReactNode;
}) {
  return (
    <div className="bg-card p-6 ring-1 ring-line sm:p-7">
      <p className="micro text-faint">Everywhere else</p>
      <div className="mt-4 space-y-2 font-serif text-[clamp(1.15rem,2vw,1.4rem)] text-sub">
        {["1,240 likes", "89.2k views", "3,410 followers"].map((c, i) => (
          <p key={c}>{struck(c, i)}</p>
        ))}
      </div>

      <div className="rule-double my-7" />

      <p className="micro text-acc">Here</p>
      <div className="mt-4">
        <p className="font-serif text-[15px] italic leading-[1.45] text-it">
          The terrace finally got its plants.
        </p>
        <EntryFooter />
      </div>
      <p className="micro mt-5 text-faint" style={{ fontSize: 8 }}>
        A heart only they can see, or a voice note back
      </p>
    </div>
  );
}
