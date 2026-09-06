import { Hung, Struck } from "@/components/hung";
import { OnANail, QrMark } from "@/components/objects";
import { Vinyl } from "@/components/wall/pieces";
import { WallStage } from "@/components/wall/stage";
import { ThemeToggle } from "@/components/theme-toggle";

/** Uppercase, wide-tracked micro-label — the workhorse of the whole aesthetic. */
function Micro({
  children,
  className = "text-faint",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`micro ${className}`}>{children}</p>;
}

/** A section, named by exactly one kicker. The accent marks structure; the
 *  rest of the section is ink. */
function Section({
  kicker,
  children,
}: {
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-24">
      <Hung>
        <Micro className="text-acc">{kicker}</Micro>
        <div className="rule-double mt-3 mb-8" />
      </Hung>
      {children}
    </section>
  );
}

const PRINCIPLES = [
  ["Friends only", "No creators, no strangers, no public figures."],
  [
    "In-person to connect",
    "You must meet someone and exchange a profile QR code. That’s the only way in.",
  ],
  ["No discovery", "No explore, no search, no reels, no recommendations."],
  ["Finite, not infinite", "The feed ends. No bottomless scroll."],
  ["No performance", "No vanity metrics, no filters, no trends."],
  [
    "Calm over capture",
    "Success is closing the app to go see someone, not time-on-app.",
  ],
];

const FIRST_VERSION = [
  "iOS only, invite-only — existing users invite new ones.",
  "QR-based, in-person-only friend connection.",
  "A single chronological, finite home feed.",
  "Two kinds of thing to post: photographs with a caption, and quotes.",
  "A profile with two tabs: posts and quotes.",
  "Messages: text, voice notes and calls only.",
  "Quiet reactions only — a private heart, a voice reply. No counts.",
];

const BANNED = [
  "Notification badges",
  "Infinite scroll",
  "Autoplay",
  "The pull-to-refresh slot machine",
  "Like, follower and view counts",
  "Leaderboards",
  "Streak-pressure",
  "Growth nudges",
  "Guilt pings",
  "Any mechanic that rewards screen time",
];

const ASKEW = ["askew-a", "askew-b", "askew-c"];

export default function Home() {
  return (
    <div className="wall">
      {/* The room itself */}
      <WallStage />

      <main className="mx-auto max-w-[38rem] px-7 pb-20 pt-4">
        {/* The tagline, under the room */}
        <header className="text-center">
          <Hung>
            <p className="font-serif text-[22px] italic leading-[1.45] text-it">
              A calm, invite-only social app where you only see people you’ve
              actually met — built for connection, not performance.
            </p>
          </Hung>

          {/* The splash's one gesture, at the splash's own pace: each refusal
              struck through in maroon, then the thing that is left. */}
          <div className="mt-10 font-serif text-[32px] leading-[1.4]">
            <p>
              <Struck index={7}>No filters.</Struck>
            </p>
            <p>
              <Struck index={15}>No trends.</Struck>
            </p>
            <Hung index={13}>
              <p className="italic text-acc">Only friends.</p>
            </Hung>
          </div>
        </header>

        <Section kicker="The problem">
          <Hung>
            <p className="font-serif text-[20px] leading-[1.5] text-ink2">
              People are exhausted by algorithmic, influencer-driven,
              performance-obsessed social media. They want to stay close to the
              people they actually know without the FOMO, trends, ads, and
              overstimulation. There is no quiet, friends-only place left.
            </p>
          </Hung>
        </Section>

        {/* Six nails, six answers */}
        <Section kicker="Non-negotiable">
          <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
            {PRINCIPLES.map(([title, body], i) => (
              <li key={title}>
                <Hung index={i} className={ASKEW[i % ASKEW.length]}>
                  <OnANail>
                    <div className="card w-full px-5 py-4">
                      <h2 className="font-serif text-[23px] leading-tight">
                        {title}
                      </h2>
                      <div
                        className="my-3 h-px"
                        style={{
                          background:
                            "color-mix(in srgb, var(--card-ink) 14%, transparent)",
                        }}
                      />
                      <p className="text-[14.5px] leading-[1.5] text-sub">
                        {body}
                      </p>
                    </div>
                  </OnANail>
                </Hung>
              </li>
            ))}
          </ul>
        </Section>

        {/* The one sanctioned ornament: an opening quote mark, set at display
            size, for a line somebody wrote. The record beside it is the
            cheapest way to say "a wall holds more than photographs". */}
        <div className="mt-24 flex items-start gap-7">
          <Hung className="shrink-0 pt-2">
            <Vinyl diameter={104} labelText="both ways" />
          </Hung>
          <Hung index={1}>
            <figure className="flex gap-4">
              <span
                aria-hidden
                className="font-serif text-[56px] leading-[0.8] text-acc"
              >
                “
              </span>
              <blockquote className="font-serif text-[26px] leading-[1.35] text-ink2">
                The walls go both ways. Fame doesn’t get you a window in.
              </blockquote>
            </figure>
          </Hung>
        </div>

        <Section kicker="The first version">
          <Hung className="askew-c">
            <div className="plate">
              <ul className="bg-card px-6 py-2">
                {FIRST_VERSION.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-3.5 text-[15px] leading-[1.5] text-sub last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Hung>
        </Section>

        <Section kicker="Banned patterns">
          <ul className="columns-1 gap-x-8 sm:columns-2">
            {BANNED.map((item, i) => (
              <li
                key={item}
                className="mb-2.5 break-inside-avoid font-serif text-[19px] leading-[1.5] text-ink2"
              >
                <Struck index={i}>{item}</Struck>
              </li>
            ))}
          </ul>
        </Section>

        <Section kicker="Price">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <Hung>
              <p className="font-serif text-[30px] leading-[1.2]">
                Free at launch.
              </p>
              <p className="mt-2 max-w-[22rem] text-[15px] leading-[1.5] text-sub">
                A subscription later. Pricing follows value, not precedes it —
                free until the network is indispensable.
              </p>
            </Hung>
            <Hung index={1} className="askew-b">
              <div className="plate">
                <div className="grid place-items-center bg-card p-5">
                  <QrMark />
                  <p className="micro mt-4 text-faint">In person, or not at all</p>
                </div>
              </div>
            </Hung>
          </div>
        </Section>

        <footer className="mt-28">
          <div className="rule-double mb-6" />
          <div className="flex items-baseline justify-between gap-6">
            <p className="font-serif text-[19px] italic text-it">
              There are no strangers here.
            </p>
            <ThemeToggle />
          </div>
        </footer>
      </main>

      {/* the bottom of the room */}
      <div className="baseboard" />
    </div>
  );
}
