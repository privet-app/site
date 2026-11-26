import { Clip } from "@/components/clip";
import { Hangings } from "@/components/hangings";
import { Dock, GetPrivet } from "@/components/dock";
import { LegalLinks } from "@/components/paper";
import { Rise, Struck } from "@/components/reveal";
import { Shot } from "@/components/shot";
import { ThemeToggle } from "@/components/theme-toggle";
import { Wall } from "@/components/wall";

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

/**
 * The things a person says here, in the order the page shows them.
 *
 * A list rather than a block apiece, because there may be more of these to
 * come: a new one is another entry here, with its cutting, and the section
 * below gives it a place in the row.
 *
 * `name` is the app's own word for the thing — the room's tabs say ISSUES,
 * MOVIES and BOOKS — so the page and the product call it the same.
 * `clip` is the post cut out of the feed, and `height` is that file's own,
 * since a post is as tall as what was said and no two are alike.
 */
const WAYS = [
  {
    name: "Issues",
    title: <>Shower thoughts, with witnesses.</>,
    body: "No occasion needed. You say it, and the people who know you answer underneath.",
    clip: "thought",
    height: 587,
    alt: "A post that reads I should be the president of this country, with two friends answering underneath it",
  },
  {
    name: "Movies",
    title: <>Five stars, and a friend with notes.</>,
    body: "Mark a film and say one line about it. Somebody who knows you will have something to say about both.",
    clip: "review",
    height: 813,
    alt: "A review of La La Land marked five out of five that reads I feel like this movie is legit my camera roll, with a friend teasing her underneath it",
  },
  {
    name: "Books",
    title: <>A book you actually finished.</>,
    body: "The same for what you read. Expect to be asked whether you really got to the end.",
    clip: "book",
    height: 836,
    alt: "A review of Mother Mary Comes to Me by Arundhati Roy marked five out of five that reads I'm glad my mom gifted me this, with a friend asking underneath whether she really read the whole book",
  },
];

/**
 * What you say, as against what you hang.
 *
 * Every other section on the page is a column of words beside a phone. This
 * one has no phones in it: each example is the post itself, cut out of the
 * feed and laid down like a cutting on a desk, with a few words under it.
 * The three are different heights because the posts are, and they are set a
 * little out of line with each other so that reads as intended.
 */
function Expression() {
  return (
    <section className="border-t border-line py-20 sm:py-24">
      <Container>
        <Rise>
          <Micro className="text-acc">Your own voice</Micro>
          <h2 className="display mt-5 text-[clamp(2.75rem,7vw,5rem)]">
            Say what you think.
          </h2>
          <p className="mt-6 max-w-[56ch] text-[1.125rem] leading-[1.7] text-sub">
            The wall is what you hang. This is what you say: a passing
            thought, what a film did to you, a book you got to the end of.
            The people you have met read it, and some of them answer.
          </p>
        </Rise>

        <Rise index={1}>
          <div
            className="says mt-12 sm:mt-14"
            role="list"
            style={{ "--count": WAYS.length } as React.CSSProperties}
          >
            {WAYS.map((way) => (
              <div key={way.name} className="say" role="listitem">
                <Clip name={way.clip} alt={way.alt} height={way.height} />
                <div className="mt-6">
                  <Micro className="text-faint">{way.name}</Micro>
                  <h3 className="mt-3 font-serif text-[clamp(1.3rem,2.1vw,1.6rem)] leading-tight">
                    {way.title}
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-[1rem] leading-[1.65] text-sub">
                    {way.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Rise>
      </Container>
    </section>
  );
}

const BANNED = [
  "Ads",
  "Trackers",
  "Data brokers",
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
              Invite-only, iOS, free{" "}
              <mark className="marked">until we earn your trust</mark>. Your
              feed ends
              — you finish it, put down the phone and go see someone.
            </p>
          </Rise>
          {/* The one thing a reader who has already been handed a key comes
              here to do. In the masthead rather than at the foot, because a
              page they have to read to the end before it tells them where the
              app is, is a page that loses them halfway. `Dock` watches the
              foot of this link and takes it over from here down. */}
          <Rise index={5} className="mt-12">
            <GetPrivet />
          </Rise>
          <Dock />
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
                  Who the GOAT is, and why everyone else is wrong.
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

          {/* The evidence. It is not wrapped in a Rise: these are the pictures
              the section is about, so they are on the page from the start and
              their movement belongs to the stylesheet. */}
          <div className="mt-16 sm:mt-24">
            <Wall />
          </div>
        </Container>
      </section>

      {/* The same wall at the scale of one thing. It follows the board
          directly because it is the board's subject looked at closely, and
          it comes before the refusals so the two halves of the wall are read
          together. */}
      <section className="border-t border-line py-20 sm:py-24">
        <Container>
          <Rise>
            <Micro className="text-acc">On the wall</Micro>
            <h2 className="display mt-5 text-[clamp(2.5rem,6vw,4.25rem)]">
              The things themselves.
            </h2>
            <p className="mt-6 max-w-[52ch] text-[1.125rem] leading-[1.7] text-sub">
              A piece is drawn as the thing it is. These are some of what can
              go up.
            </p>
          </Rise>
          <div className="mt-12 sm:mt-14">
            <Hangings />
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
                <p className="mt-6 max-w-[46ch] text-[1.125rem] leading-[1.7] opacity-80">
                  What&rsquo;s on Privet stays between the people in it. You pay
                  for it, so you are never the thing being sold.
                </p>
              </Rise>
            </div>
          </div>
        </Container>
      </section>

      <TabSection
        kicker="Admittance"
        title={<>Somebody has to hand you their key.</>}
        body="Meet someone, trade keys. A key is handed over and then answered for — no requests, no search, no strangers, and no way in for anyone famous. The walls go both ways."
        screen={<Shot name="connect" alt="A member's key" />}
      />

      <TabSection
        kicker="The feed"
        title={<>It arrives now. And it still ends.</>}
        body="Your people post, you see it. In order, nothing ranked. Then it ends — because they ran out, not because a clock did."
        screen={<Shot name="issue" alt="The feed, open on a phone" />}
        flip
      />

      <Expression />

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
              do — one person bringing another, by hand.
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
            <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
              <LegalLinks />
              <Micro className="text-faint">Privet · Est. 2026</Micro>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
