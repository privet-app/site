/**
 * The app's own screens, rebuilt from the build in `privet-in-testing`.
 * Same masthead rule, same maroon kicker over an oversized serif headline,
 * same plates and passes, same floating glass tab bar.
 */

type Tab = "issue" | "hallway" | "connect" | "profile";

/* ── chrome ──────────────────────────────────────────────────────────────── */

/** "Privet" on the left, where you are on the right, and the double rule. */
function Masthead({ right }: { right: string }) {
  return (
    <div className="px-[26px] pt-[46px]">
      <div className="flex items-baseline justify-between">
        <p className="font-serif text-[21px] leading-none">Privet</p>
        <p className="micro text-sub" style={{ fontSize: 8.5 }}>
          {right}
        </p>
      </div>
      <div className="rule-double mt-3.5" />
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="micro text-acc" style={{ fontSize: 9, letterSpacing: 2.4 }}>
      {children}
    </p>
  );
}

/** The headline is the screen. */
function Headline({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-3.5 font-serif text-[52px] leading-[0.94] tracking-[-0.015em]">
      {children}
    </h3>
  );
}

function Deck({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-[15px] leading-[1.5] text-sub">{children}</p>
  );
}

const ICONS: Record<Tab, React.ReactNode> = {
  issue: (
    <svg width={19} height={19} viewBox="0 0 19 19" fill="none" aria-hidden>
      <rect x={1.5} y={3.5} width={16} height={12} stroke="currentColor" strokeWidth={1.4} />
      <rect x={4} y={6} width={5} height={4} fill="currentColor" />
      <path d="M11 6.5h4.5M11 9h4.5M4 12h11.5" stroke="currentColor" strokeWidth={1.3} />
    </svg>
  ),
  hallway: (
    <svg width={19} height={19} viewBox="0 0 19 19" fill="none" aria-hidden>
      <path
        d="M2.5 8.2c0-3 3.1-5.2 7-5.2s7 2.2 7 5.2-3.1 5.3-7 5.3a9.6 9.6 0 0 1-2.4-.3l-3.6 2 .8-3A4.9 4.9 0 0 1 2.5 8.2Z"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
    </svg>
  ),
  connect: (
    <svg width={19} height={19} viewBox="0 0 19 19" fill="none" aria-hidden>
      {[
        [2, 2],
        [11.5, 2],
        [2, 11.5],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width={5.5} height={5.5} stroke="currentColor" strokeWidth={1.4} />
          <rect x={x + 2} y={y + 2} width={1.5} height={1.5} fill="currentColor" />
        </g>
      ))}
      {[
        [11.5, 11.5],
        [15, 11.5],
        [11.5, 15],
        [15, 15],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={1.7} height={1.7} fill="currentColor" />
      ))}
    </svg>
  ),
  profile: (
    <svg width={19} height={19} viewBox="0 0 19 19" fill="none" aria-hidden>
      <circle cx={9.5} cy={6.2} r={3.2} stroke="currentColor" strokeWidth={1.4} />
      <path d="M3.4 16.2a6.1 6.1 0 0 1 12.2 0" stroke="currentColor" strokeWidth={1.4} />
    </svg>
  ),
};

const TABS: { id: Tab; label: string }[] = [
  { id: "issue", label: "THE ISSUE" },
  { id: "hallway", label: "HALLWAY" },
  { id: "connect", label: "CONNECT" },
  { id: "profile", label: "PROFILE" },
];

function TabBar({ active }: { active: Tab }) {
  return (
    <div className="tabbar">
      <div className="tabbar-pill">
        {TABS.map((tab) => (
          <span key={tab.id} className={`tab ${tab.id === active ? "tab-on" : ""}`}>
            {ICONS[tab.id]}
            <span className="tab-label">{tab.label}</span>
          </span>
        ))}
      </div>
      <span className="tabbar-add text-sub">
        <svg width={22} height={22} viewBox="0 0 22 22" aria-hidden>
          <path d="M11 4v14M4 11h14" stroke="currentColor" strokeWidth={1.5} />
        </svg>
      </span>
    </div>
  );
}

export function Screen({
  tab,
  masthead,
  children,
  className = "",
}: {
  tab: Tab;
  masthead: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`screen ${className}`}>
      <Masthead right={masthead} />
      {children}
      <TabBar active={tab} />
    </div>
  );
}

/* ── the screens ─────────────────────────────────────────────────────────── */

/** The issue: today's paper, and how much of it you've read. */
export function IssueScreen() {
  return (
    <Screen tab="issue" masthead="Fri · 6th March 2026">
      <div className="px-[26px] pt-8">
        <Kicker>The daily issue · Nº 55</Kicker>
        <Headline>Today</Headline>
        <Deck>
          Unhurried moments from the people you actually know. Read to the end —
          then put it down.
        </Deck>

        {/* twelve mornings, one square each */}
        <div className="mt-6 flex items-center gap-2.5">
          <span className="flex gap-1">
            {Array.from({ length: 7 }, (_, i) => (
              <span
                key={i}
                className="h-[11px] w-[11px]"
                style={
                  i < 6
                    ? { background: "var(--ink)" }
                    : { border: "1px solid var(--line2)" }
                }
              />
            ))}
          </span>
          <span className="micro text-faint" style={{ fontSize: 8 }}>
            Twelve mornings in a row
          </span>
        </div>

        <div className="mt-7 border-t border-line pt-5">
          <div className="flex items-center gap-3">
            <span
              className="h-9 w-9 shrink-0 bg-line"
              style={{ outline: "1px solid var(--plate)" }}
            />
            <div>
              <p className="font-serif text-[15px] leading-tight">Maya</p>
              <p className="micro mt-1 text-faint" style={{ fontSize: 8 }}>
                6:40am · <span className="text-acc">Fort Kochi</span>
              </p>
            </div>
          </div>
          <div className="plate mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/scenes/scene-terrace.jpg"
              alt="The terrace"
              className="block aspect-[4/5] w-full object-cover"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </Screen>
  );
}

/** Connect: the pass, and the only button on the screen. */
export function ConnectScreen() {
  return (
    <Screen tab="connect" masthead="Membership">
      <div className="px-[26px] pt-8">
        <Kicker>Admittance · By introduction only</Kicker>
        <Headline>
          In person,
          <br />
          or not at all.
        </Headline>
        <Deck>
          No requests, no search, no strangers. You are added only when you’ve
          stood in the same room and traded passes.
        </Deck>

        <div className="mt-7 bg-card" style={{ outline: "1px solid var(--plate)" }}>
          <div className="flex items-baseline justify-between border-b border-line px-4 py-3">
            <p className="micro" style={{ fontSize: 8.5 }}>
              Privet
            </p>
            <p className="micro text-acc" style={{ fontSize: 8.5 }}>
              Member pass
            </p>
          </div>
          <div className="grid place-items-center py-7">
            <QrMark size={132} />
          </div>
          <div className="flex items-end justify-between border-t border-line px-4 py-3">
            <div>
              <p className="font-serif text-[17px] leading-none">Maya Menon</p>
              <p className="micro mt-1.5 text-faint" style={{ fontSize: 7.5 }}>
                Neighbour
              </p>
            </div>
            <div className="text-right">
              <p className="micro text-sub" style={{ fontSize: 8 }}>
                Nº 55
              </p>
              <p className="micro mt-1.5 text-faint" style={{ fontSize: 7.5 }}>
                Issued 2026
              </p>
            </div>
          </div>
        </div>

        <div className="pill mt-6">
          <span className="micro" style={{ fontSize: 10 }}>
            Scan a code
          </span>
        </div>
      </div>
    </Screen>
  );
}

/** The hallway: doors, ordered by warmth, with nothing to badge. */
export function HallwayScreen() {
  const people = [
    ["Maya", "Spoke this morning", false],
    ["Ravi", "Spoke yesterday", false],
    ["Anjali", "Two days quiet", false],
    ["Lando", "Six quiet weeks · say something small", true],
  ] as const;

  return (
    <Screen tab="hallway" masthead="Doors">
      <div className="px-[26px] pt-8">
        <Kicker>Correspondence</Kicker>
        <Headline>
          Doors,
          <br />
          not an inbox.
        </Headline>
        <Deck>
          Ordered by warmth, not by unread. Voice notes and calls first, and
          nothing to clear.
        </Deck>

        <div className="mt-7">
          {people.map(([name, warmth, cold]) => (
            <div key={name} className="flex items-center gap-3.5 border-t border-line py-3.5">
              <span
                className="h-11 w-11 shrink-0 rounded-full bg-line"
                style={{ outline: "1px solid var(--plate)" }}
              />
              <div>
                <p className="font-serif text-[20px] leading-none">{name}</p>
                <p
                  className={`micro mt-2 ${cold ? "text-acc" : "text-faint"}`}
                  style={{ fontSize: 7.5 }}
                >
                  {warmth}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="micro mt-6 text-faint" style={{ fontSize: 7.5 }}>
          No read receipts · no typing dots · no last seen
        </p>
      </div>
    </Screen>
  );
}

/** The wall: a framed photograph, the plate by the door, and what’s pinned. */
export function WallScreen() {
  return (
    <Screen tab="profile" masthead="Settings">
      <div className="relative px-[26px] pt-7">
        {/* the framed photograph */}
        <div
          className="w-[62%] p-2.5"
          style={{
            background: "linear-gradient(to bottom right, #35302b, #17140f)",
            boxShadow: "0 18px 36px rgba(0,0,0,0.28)",
          }}
        >
          <div className="p-2.5" style={{ background: "var(--mat)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/scenes/scene-street.jpg"
              alt="Monica"
              className="block aspect-[4/5] w-full object-cover"
              draggable={false}
            />
          </div>
        </div>

        {/* the nameplate, overlapping it, screwed down at four corners */}
        <div
          className="absolute right-[26px] top-[210px] w-[68%] bg-card px-6 py-4 text-center"
          style={{
            outline: "1px solid var(--plate)",
            boxShadow: "0 14px 30px rgba(0,0,0,0.16)",
          }}
        >
          <div className="rule-double absolute inset-x-2.5 top-1.5" />
          <div className="rule-double absolute inset-x-2.5 bottom-1.5" />
          {[
            { top: 6, left: 6 },
            { top: 6, right: 6 },
            { bottom: 6, left: 6 },
            { bottom: 6, right: 6 },
          ].map((pos, i) => (
            <span
              key={i}
              className="absolute h-[5px] w-[5px] rounded-full"
              style={{
                ...pos,
                background: "radial-gradient(circle at 35% 30%, #d8bc84, #8f7444)",
              }}
            />
          ))}
          <p className="micro text-acc" style={{ fontSize: 7.5 }}>
            Chef · Apt. 20
          </p>
          <p className="mt-1.5 font-serif text-[27px] leading-none">Maya Menon</p>
          <p className="micro mt-2 text-sub" style={{ fontSize: 7.5 }}>
            Fort Kochi
          </p>
        </div>

        {/* the pinned quote, taped up */}
        <div
          className="relative mt-[86px] bg-card px-6 py-5 text-center"
          style={{ boxShadow: "0 10px 24px rgba(0,0,0,0.12)" }}
        >
          <span
            className="absolute left-1/2 top-[-9px] h-5 w-16 -translate-x-1/2"
            style={{
              background: "#e8d9b8",
              opacity: 0.72,
              backgroundImage:
                "repeating-linear-gradient(38deg, rgba(255,255,255,0.25) 0 2.5px, transparent 2.5px 7.5px)",
            }}
          />
          <p className="micro text-acc" style={{ fontSize: 7.5, letterSpacing: 3 }}>
            Pinned
          </p>
          <p className="mt-2.5 font-serif text-[17px] italic leading-[1.4] text-ink2">
            “Welcome to the real world. It sucks. You’re gonna love it.”
          </p>
        </div>

        {/* the wall's own tabs */}
        <div className="mt-6 flex items-center gap-6 border-b border-line pb-2.5">
          <span className="micro relative pb-2.5 text-ink" style={{ fontSize: 9 }}>
            The wall
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-acc" />
          </span>
          <span className="micro text-faint" style={{ fontSize: 9 }}>
            Issues
          </span>
          <span className="micro text-faint" style={{ fontSize: 9 }}>
            Media
          </span>
          <span className="micro ml-auto text-acc" style={{ fontSize: 9 }}>
            Archive →
          </span>
        </div>
      </div>
    </Screen>
  );
}

/** Three finder squares and a monogram: the mark people recognise. */
export function QrMark({ size = 132 }: { size?: number }) {
  const u = size / 25;
  const ink = "var(--ink)";
  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x * u} y={y * u} width={7 * u} height={7 * u} fill="none" stroke={ink} strokeWidth={1.5 * u} />
      <rect x={(x + 2.6) * u} y={(y + 2.6) * u} width={1.8 * u} height={1.8 * u} fill={ink} />
    </g>
  );
  const modules: [number, number][] = [
    [10, 1], [12, 2], [14, 3], [10, 4], [13, 5], [16, 6], [11, 6],
    [1, 11], [3, 12], [5, 13], [2, 14], [6, 10], [4, 16], [1, 17],
    [10, 21], [12, 23], [15, 20], [17, 22], [13, 19],
    [20, 10], [22, 12], [19, 14], [23, 16], [21, 18], [18, 21], [22, 22],
  ];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      {finder(0, 0)}
      {finder(18, 0)}
      {finder(0, 18)}
      {modules.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x * u} y={y * u} width={1.8 * u} height={1.8 * u} fill={ink} />
      ))}
      <circle cx={size / 2} cy={size / 2} r={4.4 * u} fill="var(--bg)" />
      <text
        x={size / 2}
        y={size / 2 + 3.2 * u}
        textAnchor="middle"
        fill={ink}
        style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: 8.5 * u }}
      >
        M
      </text>
    </svg>
  );
}
