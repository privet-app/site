import {
  CountsDiagram,
  FeedDiagram,
  MeetDiagram,
  PostDiagram,
} from "@/components/diagrams";
import { Rise, Struck } from "@/components/reveal";
import { ThemeToggle } from "@/components/theme-toggle";

function Micro({
  children,
  className = "text-faint",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`micro ${className}`}>{children}</p>;
}

/** A section, named by exactly one kicker. The accent marks structure and
 *  state, and nothing else. */
function Section({
  kicker,
  title,
  children,
  id,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="border-t border-line py-20 sm:py-28">
      <div className="grid gap-5 md:grid-cols-[9rem_1fr] md:gap-12">
        <Rise>
          <Micro className="text-acc md:pt-3">{kicker}</Micro>
        </Rise>
        <div>
          <Rise>
            <h2 className="display max-w-[20ch] text-[clamp(2rem,4.6vw,3.25rem)]">
              {title}
            </h2>
          </Rise>
          {children}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: "01",
    title: "You have to meet.",
    body: "The only way to become friends on Privet is to stand in front of someone and trade profile codes. No requests, no suggestions, no search, no strangers. If you haven’t met, you can’t connect — and neither can anyone else, however famous they are.",
    diagram: <MeetDiagram />,
  },
  {
    n: "02",
    title: "The feed ends.",
    body: "One feed, your friends only, in the order things actually happened. Nothing ranked, nothing recommended, no bottomless scroll. You reach the end — and then you’re done for the day.",
    diagram: <FeedDiagram />,
  },
  {
    n: "03",
    title: "Two things to post.",
    body: "A photograph with a caption, or a quote — a line of text worth keeping. No filters, no stickers, no trends. Your profile holds them in two tabs, and that is the whole surface area.",
    diagram: <PostDiagram />,
  },
  {
    n: "04",
    title: "Nothing is counted.",
    body: "Reactions are private: a quiet heart, or a voice note back. No like counts, no follower counts, no view counts — not for you, not for anyone. Messages are text, voice notes and calls.",
    diagram: <CountsDiagram />,
  },
];

const BANNED = [
  "Notification badges",
  "Infinite scroll",
  "Autoplay",
  "The pull-to-refresh slot machine",
  "Like, follower and view counts",
  "Leaderboards",
  "Streaks",
  "Growth nudges",
  "Guilt pings",
  "Ads, ever",
];

const NEXT = [
  {
    when: "Now",
    title: "Version one, on iOS",
    body: "Invite-only and free. Meet, connect, post, read to the end, put it down. Nothing else ships until that loop feels right.",
  },
  {
    when: "Next",
    title: "Profiles that sound like a person",
    body: "More than posts and quotes — the music, the books, the films you’d actually tell a friend about.",
  },
  {
    when: "Later",
    title: "A subscription, once it’s earned",
    body: "Free until the network is indispensable. Pricing follows value, it doesn’t precede it — and it’s a subscription rather than ads, because the business model should be you.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-[68rem] px-6 sm:px-10">
      {/* Masthead */}
      <header className="flex items-center justify-between py-7">
        <Micro className="text-ink">Privet</Micro>
        <Micro>Est. 2026</Micro>
      </header>

      {/* The one thing to understand */}
      <section className="flex min-h-[78svh] flex-col justify-center pb-16 md:pl-[10.5rem]">
        <Rise>
          <h1 className="display max-w-[15ch] text-[clamp(3rem,8.6vw,6.5rem)]">
            Only the people you’ve actually met.
          </h1>
        </Rise>
        <Rise index={2}>
          <p className="mt-10 max-w-[48ch] text-[clamp(1.05rem,1.7vw,1.3rem)] leading-[1.65] text-sub">
            Privet is a calm, invite-only social app for staying close to your
            friends instead of performing for an audience. You get in by meeting
            someone in person and trading codes. There is no other way in.
          </p>
        </Rise>
        <Rise index={4}>
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3">
            {["Invite only", "iOS first", "Free at launch"].map((fact) => (
              <Micro key={fact} className="text-faint">
                {fact}
              </Micro>
            ))}
          </div>
        </Rise>
      </section>

      <Section kicker="Why" title="Social media stopped being social.">
        <div className="mt-8 max-w-[54ch] space-y-7">
          <Rise index={1}>
            <p className="text-[1.125rem] leading-[1.7] text-sub">
              People are exhausted by algorithmic, influencer-driven,
              performance-obsessed feeds — the FOMO, the trends, the ads, the
              constant low-grade overstimulation. What they actually want is to
              stay close to the people they already know.
            </p>
          </Rise>
          <Rise index={2}>
            <p className="font-serif text-[clamp(1.4rem,2.6vw,1.9rem)] leading-[1.35] text-ink2">
              There is no quiet, friends-only place left. So we’re building one.
            </p>
          </Rise>
        </div>
      </Section>

      <Section
        kicker="How it works"
        title="Four decisions. Everything else follows."
      >
        <div className="mt-16 space-y-20 sm:space-y-24">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              className="grid items-center gap-10 sm:gap-14 md:grid-cols-2"
            >
              <Rise className={i % 2 ? "md:order-2" : undefined}>
                <Micro className="text-acc">{step.n}</Micro>
                <h3 className="display mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)]">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-[46ch] text-[1.125rem] leading-[1.7] text-sub">
                  {step.body}
                </p>
              </Rise>
              <Rise index={1} className={i % 2 ? "md:order-1" : undefined}>
                {step.diagram}
              </Rise>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="The constitution" title="Things Privet will never have.">
        <ul className="mt-10 grid gap-x-12 gap-y-4 border-y border-line py-9 sm:grid-cols-2">
          {BANNED.map((item, i) => (
            <li
              key={item}
              className="font-serif text-[clamp(1.2rem,2.1vw,1.5rem)] leading-[1.5] text-ink2"
            >
              <Struck index={i}>{item}</Struck>
            </li>
          ))}
        </ul>
        <Rise index={2}>
          <p className="mt-12 max-w-[46ch] text-[1.125rem] leading-[1.7] text-sub">
            If a mechanic exists to make you stay longer, it doesn’t go in.
            Success is you closing the app to go and see someone.
          </p>
        </Rise>
      </Section>

      <Section kicker="What we’re building" title="Small, on purpose, in this order.">
        <ol className="mt-14 space-y-px">
          {NEXT.map((stage, i) => (
            <li key={stage.when}>
              <Rise index={i}>
                <div className="grid gap-4 border-t border-line py-8 md:grid-cols-[8rem_1fr]">
                  <p
                    className={`font-serif text-[1.5rem] leading-none ${
                      i === 0 ? "text-acc" : "text-faint"
                    }`}
                  >
                    {stage.when}
                  </p>
                  <div>
                    <h3 className="font-serif text-[clamp(1.3rem,2.4vw,1.75rem)] leading-tight">
                      {stage.title}
                    </h3>
                    <p className="mt-3 max-w-[52ch] text-[1.125rem] leading-[1.7] text-sub">
                      {stage.body}
                    </p>
                  </div>
                </div>
              </Rise>
            </li>
          ))}
        </ol>
      </Section>

      <Section kicker="Getting in" title="You can’t sign up.">
        <Rise index={1}>
          <p className="mt-8 max-w-[50ch] text-[1.125rem] leading-[1.7] text-sub">
            There’s no waitlist and no request button, and there won’t be one.
            Privet grows the way friendships do — one person bringing another,
            in the same room. If you’re meant to be here, someone will show you
            their code.
          </p>
        </Rise>
      </Section>

      <footer className="border-t border-line py-12">
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <p className="font-serif text-[1.25rem] italic text-it">
            There are no strangers here.
          </p>
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
}
