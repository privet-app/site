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
  screen,
  flip = false,
}: {
  kicker: string;
  title: React.ReactNode;
  body: string;
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
  "Ads",
  "Reels",
  "Influencers",
  "Infinite scroll",
  "Like counts, follower counts, view counts",
  "Leaderboards",
  "Streak pressure",
];

const NEXT = [
  {
    when: "Now",
    title: "Version one, on iOS",
    body: "Meet, connect, post, read to the end, put it down. Nothing else ships until that loop feels right.",
  },
  {
    when: "Next",
    title: "Walls that sound like a person",
    body: "The music, the books, the films you’d actually tell a friend about.",
  },
  {
    when: "Later",
    title: "A subscription, once it’s earned",
    body: "Pricing follows value, it doesn’t precede it. A subscription, never ads — the business model should be you.",
  },
];

export default function Home() {
  return (
    <div>
      <div className="theme-dock">
        <ThemeToggle />
      </div>

      {/* The masthead, as the app opens on it */}
      <section className="flex min-h-[92svh] flex-col border-b border-line">
        <Container className="flex flex-1 flex-col items-center justify-center py-20 text-center">
          <Rise>
            <Micro className="text-acc">Est. 2026 · By introduction only</Micro>
          </Rise>
          <Rise index={1}>
            <h1 className="display mt-8 text-[clamp(4.5rem,16vw,12rem)]">
              Privet
            </h1>
          </Rise>
          <Rise index={2}>
            <div className="rule-double mt-7 w-[min(26rem,74vw)]" />
          </Rise>
          <Rise index={3}>
            <p className="mt-10 max-w-[17ch] font-serif text-[clamp(2rem,4.6vw,3.25rem)] italic leading-[1.22] text-ink2">
              A paper of the people you actually know.
            </p>
          </Rise>
          <Rise index={4}>
            <p className="mt-11 max-w-[44ch] text-[1.0625rem] leading-[1.7] text-sub">
              Invite-only, iOS, free until we earn your trust. Your feed ends
              — you finish it, put down the phone and go see someone.
            </p>
          </Rise>
        </Container>
      </section>

      {/* THE WALL — the room you decorate, and the reason any of this is
          worth having. It leads, and it takes the whole width. */}
      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <div className="grid gap-5 md:grid-cols-[9rem_1fr] md:gap-12">
            <Rise>
              <Micro className="text-acc md:pt-4">The wall</Micro>
            </Rise>
            <div>
              <Rise>
                <h2 className="display text-[clamp(2.75rem,7vw,5rem)]">
                  A wall, not a grid.
                </h2>
              </Rise>
              <Rise index={1}>
                <p className="mt-8 max-w-[50ch] text-[clamp(1.15rem,1.9vw,1.35rem)] leading-[1.65] text-ink2">
                  A room you decorate, not a grid of everything you ever posted.
                  The things you love, hung beside the people you love.
                </p>
                <p className="mt-6 max-w-[44ch] font-serif text-[clamp(1.3rem,2.3vw,1.7rem)] italic leading-[1.45] text-it">
                  The song on repeat. The film you&rsquo;d defend to the death.
                  Who the GOAT is — loudly, and forever.
                </p>
              </Rise>
              <Rise index={2}>
                <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
                  {[
                    "Photographs",
                    "Quotes",
                    "Records",
                    "Books",
                    "Films",
                    "Ticket stubs",
                    "Postcards",
                    "Notes",
                  ].map((thing) => (
                    <Micro key={thing} className="text-faint">
                      {thing}
                    </Micro>
                  ))}
                </div>
              </Rise>
            </div>
          </div>

          <div className="wall-pair mt-16 sm:mt-20">
            <Rise>
              <div className="hung-a">
                <Shot
                  name="wall-top"
                  alt="The top of a wall: polaroids on a light string, a record, framed photographs"
                />
              </div>
            </Rise>
            <Rise index={1}>
              <div className="hung-b">
                <Shot
                  name="wall-media"
                  alt="The far end of the wall: film posters, books, a film strip, a cassette"
                />
              </div>
            </Rise>
          </div>
        </Container>
      </section>

      {/* WHAT IT IS NOT — the one place the page raises its voice, and it
          comes early, because the refusals are the product. */}
      <section className="on-acc py-28 sm:py-36">
        <Container>
          <div className="grid gap-6 md:grid-cols-[10rem_1fr] md:gap-12">
            <Rise>
              <p className="micro opacity-70 md:pt-4">What it is not</p>
            </Rise>
            <div>
              <Rise>
                <h2 className="display max-w-[16ch] text-[clamp(2.75rem,7vw,5rem)]">
                  Things Privet will never have.
                </h2>
              </Rise>
              <Rise index={1}>
                <p className="mt-8 max-w-[46ch] text-[1.125rem] leading-[1.7] opacity-85">
                  Not missing features. Refusals.
                </p>
              </Rise>
              <ul className="mt-12 grid gap-x-12 gap-y-5 border-y border-[color-mix(in_srgb,var(--acc-ink)_28%,transparent)] py-12 sm:grid-cols-2">
                {BANNED.map((item, i) => (
                  <li
                    key={item}
                    className="font-serif text-[clamp(1.45rem,2.7vw,2rem)] leading-[1.35]"
                  >
                    <Struck index={i}>{item}</Struck>
                  </li>
                ))}
              </ul>
              <Rise index={2}>
                <p className="mt-12 max-w-[46ch] text-[1.125rem] leading-[1.7] opacity-80">
                  If it exists to keep you here longer, it doesn&rsquo;t go in.
                </p>
              </Rise>
            </div>
          </div>
        </Container>
      </section>

      <TabSection
        kicker="Admittance"
        title={<>You both have to be in the room.</>}
        body="Meet someone, trade passes. No requests, no search, no strangers — and no way in for anyone famous. The walls go both ways."
        screen={<Shot name="connect" alt="A member pass, with its code" />}
      />

      <TabSection
        kicker="The feed"
        title={<>It arrives now. And it still ends.</>}
        body="Your people post, you see it. In order, nothing ranked. Then it ends — because they ran out, not because a clock did."
        screen={<Shot name="issue" alt="The feed, open on a phone" />}
        flip
      />

      <TabSection
        kicker="Correspondence"
        title={<>Ordered by warmth, not by unread.</>}
        body="Voice notes, calls, text. Nothing else. Ordered by how close you are, not by what you haven’t opened."
        screen={
          <Shot name="hallway" alt="The hallway, doors ordered by warmth" />
        }
      />

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
              No waitlist, no request button. Privet grows the way friendships
              do — one person bringing another, in the same room.
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
            <Micro className="text-faint">Privet · Est. 2026</Micro>
          </div>
        </Container>
      </footer>
    </div>
  );
}
