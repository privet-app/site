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
    <section className="mt-20">
      <Micro className="text-acc">{kicker}</Micro>
      <div className="rule-double mt-3 mb-7" />
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

const BANNED =
  "Notification badges · infinite scroll · autoplay · pull-to-refresh slot machine · like, follower and view counts · leaderboards · streak-pressure · growth nudges · guilt pings · any mechanic that rewards screen time.";

export default function Home() {
  return (
    <main className="mx-auto max-w-[36rem] px-7 pb-24 pt-16">
      {/* Masthead */}
      <header className="text-center">
        <Micro>Invite only · iOS first</Micro>
        <h1 className="mt-4 font-serif text-[64px] leading-[0.95] tracking-[-0.01em]">
          Privet
        </h1>
        <div className="rule-double mt-5" />
        <p className="mt-6 font-serif text-[22px] italic leading-[1.45] text-it">
          A calm, invite-only social app where you only see people you&rsquo;ve
          actually met &mdash; built for connection, not performance.
        </p>
      </header>

      <Section kicker="The problem">
        <p className="font-serif text-[20px] leading-[1.5] text-ink2">
          People are exhausted by algorithmic, influencer-driven,
          performance-obsessed social media. They want to stay close to the
          people they actually know without the FOMO, trends, ads, and
          overstimulation. There is no quiet, friends-only place left.
        </p>
      </Section>

      <Section kicker="Non-negotiable">
        <ol className="space-y-6">
          {PRINCIPLES.map(([title, body], i) => (
            <li key={title} className="flex gap-4">
              <span className="micro mt-[7px] shrink-0 text-faint tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-serif text-[24px] leading-tight">{title}</h2>
                <p className="mt-1 text-[15px] leading-[1.5] text-sub">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* The one sanctioned ornament: an opening quote mark, set at display
          size, for a line somebody wrote. */}
      <figure className="mt-20 flex gap-4">
        <span
          aria-hidden
          className="font-serif text-[56px] leading-[0.8] text-acc"
        >
          &ldquo;
        </span>
        <blockquote className="font-serif text-[26px] leading-[1.35] text-ink2">
          The walls go both ways. Fame doesn&rsquo;t get you a window in.
        </blockquote>
      </figure>

      <Section kicker="The first version">
        <ul className="space-y-3">
          {FIRST_VERSION.map((item) => (
            <li
              key={item}
              className="border-b border-line pb-3 text-[15px] leading-[1.5] text-sub last:border-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section kicker="Banned patterns">
        <p className="font-serif text-[20px] leading-[1.55] text-ink2">
          {BANNED}
        </p>
      </Section>

      <Section kicker="Price">
        <p className="font-serif text-[24px] leading-[1.4]">Free at launch.</p>
        <p className="mt-2 text-[15px] leading-[1.5] text-sub">
          A subscription later. Pricing follows value, not precedes it &mdash;
          free until the network is indispensable.
        </p>
      </Section>

      <footer className="mt-24">
        <div className="rule-double mb-6" />
        <div className="flex items-baseline justify-between gap-6">
          <p className="font-serif text-[19px] italic text-it">
            No filters, no trends, only friends.
          </p>
          <ThemeToggle />
        </div>
      </footer>
    </main>
  );
}
