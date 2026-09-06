import { Struck } from "./reveal";

/**
 * Four small drawings, one per mechanic. Each one exists to make a sentence
 * land faster than the sentence can — not to decorate it.
 */

function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-[15.5rem] items-center justify-center rounded-[3px] border border-line bg-card px-6 py-8 ${className}`}
    >
      {children}
    </div>
  );
}

/** The three finder squares are what makes a code read as a code. */
function CodeCard({ dim = false }: { dim?: boolean }) {
  const u = 58 / 24;
  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect
        x={x * u} y={y * u} width={7 * u} height={7 * u}
        fill="none" stroke="currentColor" strokeWidth={1.5 * u}
      />
      <rect x={(x + 2.6) * u} y={(y + 2.6) * u} width={1.8 * u} height={1.8 * u} fill="currentColor" />
    </g>
  );
  return (
    <div
      className={`grid place-items-center rounded-[3px] border bg-card p-3 ${
        dim ? "border-line text-faint" : "border-plate text-ink"
      }`}
    >
      <svg width={58} height={58} viewBox="0 0 58 58" aria-hidden>
        {finder(0, 0)}
        {finder(17, 0)}
        {finder(0, 17)}
        {[[13, 13], [17, 13], [13, 17], [17, 17]].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x * u} y={y * u} width={2 * u} height={2 * u} fill="currentColor" />
        ))}
      </svg>
    </div>
  );
}

/** Two codes, in the same room, joined. */
export function MeetDiagram() {
  return (
    <Panel>
      <div className="flex w-full max-w-[21rem] items-center">
        <CodeCard />
        <svg className="h-6 flex-1" viewBox="0 0 120 24" preserveAspectRatio="none" aria-hidden>
          <line
            className="draw"
            style={{ "--len": 120 } as React.CSSProperties}
            x1={0} y1={12} x2={120} y2={12}
            stroke="var(--acc)" strokeWidth={1.5}
          />
        </svg>
        <CodeCard />
      </div>
    </Panel>
  );
}

/** A feed with a bottom. */
export function FeedDiagram() {
  return (
    <Panel className="!items-stretch">
      <div className="w-full max-w-[19rem]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-3 border-b border-line py-3">
            <span className="h-6 w-6 shrink-0 rounded-full border border-plate" />
            <span className="flex-1 space-y-1.5">
              <span className="block h-1.5 rounded-full bg-line2" style={{ width: `${72 - i * 12}%` }} />
              <span className="block h-1.5 w-2/5 rounded-full bg-line" />
            </span>
          </div>
        ))}
        <div className="rule-double mt-6" />
        <p className="micro mt-3 text-center text-acc">That’s everything</p>
      </div>
    </Panel>
  );
}

/** The only two things there are to make. */
export function PostDiagram() {
  return (
    <Panel>
      <div className="flex w-full max-w-[21rem] items-stretch justify-center gap-4">
        <div className="flex-1 border border-plate bg-card p-1.5">
          <div className="grid h-[6.5rem] place-items-end overflow-hidden bg-line">
            <svg viewBox="0 0 120 60" className="w-full" aria-hidden>
              <circle cx={88} cy={16} r={7} fill="var(--line2)" />
              <path d="M0 60 L34 26 L60 52 L82 34 L120 60 Z" fill="var(--plate)" />
            </svg>
          </div>
          <p className="micro mt-2.5 pb-1 text-center text-faint">Photograph</p>
        </div>
        <div className="flex-1 border border-plate bg-card p-1.5">
          <div className="grid h-[6.5rem] place-items-center px-3">
            <span className="font-serif text-[56px] leading-none text-acc">“</span>
          </div>
          <p className="micro mt-2.5 pb-1 text-center text-faint">Quote</p>
        </div>
      </div>
    </Panel>
  );
}

/** What other apps put a number on. */
export function CountsDiagram() {
  const counters = ["1,240 likes", "89.2k views", "3,410 followers"];
  return (
    <Panel>
      <div className="w-full max-w-[19rem] text-center">
        <div className="space-y-2.5 font-serif text-[22px] text-sub">
          {counters.map((c, i) => (
            <p key={c}>
              <Struck index={i}>{c}</Struck>
            </p>
          ))}
        </div>
        <div className="rule-double my-6" />
        <div className="flex items-center justify-center gap-2.5">
          <svg width={15} height={14} viewBox="0 0 15 14" aria-hidden>
            <path
              d="M7.5 13.2 C-1.6 6.9 2.2 0.4 7.5 3.7 C12.8 0.4 16.6 6.9 7.5 13.2 Z"
              fill="var(--acc)"
            />
          </svg>
          <p className="micro text-faint">Only they know</p>
        </div>
      </div>
    </Panel>
  );
}
