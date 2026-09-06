import { Rise, Struck } from "@/components/reveal";
import { Shot } from "@/components/shot";
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

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[72rem] px-6 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

/** One tab of the app: what it is, said at the app's own scale, beside it. */
function TabSection({
  kicker,
  title,
  body,
  note,
  screen,
  flip = false,
}: {
  kicker: string;
  title: React.ReactNode;
  body: string;
  note: string;
  screen: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16">
          <div className={flip ? "md:order-2" : undefined}>
            <Rise>
              <Micro className="text-acc">{kicker}</Micro>
              <h2 className="display mt-5 text-[clamp(2.5rem,6vw,4.25rem)]">
                {title}
              </h2>
              <p className="mt-7 max-w-[42ch] text-[1.125rem] leading-[1.7] text-sub">
                {body}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="dash" />
                <Micro className="text-faint">{note}</Micro>
              </div>
            </Rise>
          </div>
          <Rise index={1} className={flip ? "md:order-1" : undefined}>
            {screen}
          </Rise>
        </div>
      </Container>
    </section>
  );
}

const BANNED = [
  "Notification badges",
  "Infinite scroll",
  "Autoplay",
  "The pull-to-refresh slot machine",
  "Like, follower and view counts",
  "Leaderboards",
  "Streaks you can lose",
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
    title: "Walls that sound like a person",
    body: "Beyond posts and quotes — the music, the books, the films you’d actually tell a friend about.",
  },
  {
    when: "Later",
    title: "A subscription, once it’s earned",
    body: "Free until the network is indispensable. Pricing follows value, it doesn’t precede it — and it’s a subscription rather than ads, because the business model should be you.",
  },
];

export default function Home() {
  return (
    <div>
      {/* The masthead, and today's cover as the app opens on it */}
      <section className="border-b border-line py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-14 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
            <div className="hero-settle text-center md:text-left">
              <Rise>
                <Micro className="text-acc">Est. 2026 · By introduction only</Micro>
              </Rise>
              <Rise index={1}>
                <h1 className="display mt-7 text-[clamp(4rem,11vw,8.5rem)]">
                  Privet
                </h1>
              </Rise>
              <Rise index={2}>
                <div className="rule-double mx-auto mt-6 w-[min(22rem,80%)] md:mx-0" />
              </Rise>
              <Rise index={3}>
                <p className="mx-auto mt-9 max-w-[20ch] font-serif text-[clamp(1.75rem,3.6vw,2.6rem)] italic leading-[1.25] text-ink2 md:mx-0">
                  A daily paper of the people you actually know.
                </p>
              </Rise>
              <Rise index={4}>
                <p className="mx-auto mt-10 max-w-[44ch] text-[1.0625rem] leading-[1.7] text-sub md:mx-0">
                  Invite-only, iOS, free at launch. Your friends&rsquo; day
                  arrives once as one issue — you read it to the end, and then
                  it&rsquo;s done.
                </p>
              </Rise>
              <Rise index={5}>
                <div className="mt-9 flex items-center justify-center gap-3 md:justify-start">
                  <span className="dash" />
                  <Micro className="text-faint">Someone has to let you in</Micro>
                </div>
              </Rise>
            </div>
            <Rise index={2}>
              <Shot
                name="cover"
                alt="Today's cover: the issue has arrived"
                priority
              />
            </Rise>
          </div>
        </Container>
      </section>

      <TabSection
        kicker="The daily issue"
        title={<>Your friends, once a day. Then it stops.</>}
        body="Everything your friends posted arrives as one issue, in the order it actually happened. Nothing ranked, nothing recommended, and nothing more when you reach the end. A five-minute read, and then you put it down."
        note="Delivered at seven. One nudge, never after six."
        screen={<Shot name="issue" alt="The daily issue, open on a phone" />}
      />

      <TabSection
        kicker="Admittance"
        title={
          <>
            You both have to be in the room.
          </>
        }
        body="The only way to become friends is to stand in front of someone and trade passes. No requests, no search, no suggestions, no strangers — and no window in for anyone famous either. The walls go both ways."
        note="Both of you have to be there. That’s the point."
        screen={<Shot name="connect" alt="A member pass, with its code" />}
        flip
      />

      <TabSection
        kicker="Correspondence"
        title={<>Ordered by warmth, not by unread.</>}
        body="Messages are voice notes, calls and text — nothing else. People sit in the order of how close you actually are, not of what you haven’t opened, and a friendship going cold is a quiet line of type rather than a red dot."
        note="No read receipts · no typing dots · no last seen"
        screen={<Shot name="hallway" alt="The hallway, doors ordered by warmth" />}
      />

      <TabSection
        kicker="The wall"
        title={<>A wall, not a grid.</>}
        body="Your profile is a room you decorate — framed photographs, the plate by your door, a line pinned to the plaster. It’s built to read like a person on day one, not like a feed of everything you’ve ever posted."
        note="Walls never start empty."
        screen={<Shot name="wall" alt="A decorated wall: framed photographs and the plate by the door" />}
        flip
      />

      {/* The one place the page raises its voice */}
      <section className="on-acc py-24 sm:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-[10rem_1fr] md:gap-12">
            <Rise>
              <p className="micro opacity-70 md:pt-4">The constitution</p>
            </Rise>
            <div>
              <Rise>
                <h2 className="display max-w-[16ch] text-[clamp(2.5rem,6vw,4.25rem)]">
                  Things Privet will never have.
                </h2>
              </Rise>
              <ul className="mt-12 grid gap-x-12 gap-y-4 border-y border-[color-mix(in_srgb,var(--acc-ink)_28%,transparent)] py-10 sm:grid-cols-2">
                {BANNED.map((item, i) => (
                  <li
                    key={item}
                    className="font-serif text-[clamp(1.25rem,2.2vw,1.6rem)] leading-[1.45]"
                  >
                    <Struck index={i}>{item}</Struck>
                  </li>
                ))}
              </ul>
              <Rise index={2}>
                <p className="mt-12 max-w-[46ch] text-[1.125rem] leading-[1.7] opacity-80">
                  If a mechanic exists to make you stay longer, it doesn’t go
                  in. Success is you closing the app to go and see someone.
                </p>
              </Rise>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-[10rem_1fr] md:gap-12">
            <Rise>
              <Micro className="text-acc md:pt-4">What we’re building</Micro>
            </Rise>
            <div>
              <Rise>
                <h2 className="display max-w-[16ch] text-[clamp(2.5rem,6vw,4.25rem)]">
                  Small, on purpose, in this order.
                </h2>
              </Rise>
              <ol className="mt-14">
                {NEXT.map((stage, i) => (
                  <li key={stage.when}>
                    <Rise index={i}>
                      <div className="grid gap-4 border-t border-line py-8 md:grid-cols-[9rem_1fr]">
                        <p
                          className={`font-serif text-[1.75rem] leading-none ${
                            i === 0 ? "text-acc" : "text-faint"
                          }`}
                        >
                          {stage.when}
                        </p>
                        <div>
                          <h3 className="font-serif text-[clamp(1.4rem,2.6vw,1.9rem)] leading-tight">
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
            </div>
          </div>
        </Container>
      </section>

      {/* The door, closed */}
      <section className="border-t border-line py-24 text-center sm:py-32">
        <Container>
          <Rise>
            <Micro className="text-acc">Getting in</Micro>
            <h2 className="display mx-auto mt-6 max-w-[14ch] text-[clamp(2.5rem,6.6vw,4.5rem)]">
              You can’t sign up.
            </h2>
            <p className="mx-auto mt-8 max-w-[46ch] text-[1.125rem] leading-[1.7] text-sub">
              There’s no waitlist and no request button, and there won’t be one.
              Privet grows the way friendships do — one person bringing another,
              in the same room. If you’re meant to be here, someone will show
              you their code.
            </p>
          </Rise>
        </Container>
      </section>

      <footer className="border-t border-line py-12">
        <Container>
          <div className="flex flex-wrap items-baseline justify-between gap-6">
            <p className="font-serif text-[1.25rem] italic text-it">
              There are no strangers here.
            </p>
            <ThemeToggle />
          </div>
        </Container>
      </footer>
    </div>
  );
}
