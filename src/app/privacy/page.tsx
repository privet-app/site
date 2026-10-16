import type { Metadata } from "next";

import { Head, Paper } from "@/components/paper";

export const metadata: Metadata = {
  title: "Privacy · Privet",
  description:
    "What Privet collects, why, who can see it, and how to take it all back.",
};

export default function PrivacyPage() {
  return (
    <Paper
      kicker="Privacy"
      title="What we keep, and who can see it."
      standfirst="Privet has no advertising, no analytics that follow you, and nothing to sell. What it keeps is what the app needs to work, and the people who can see it are the people you have met."
      updated="16 October 2026"
    >
      <Head>What we collect</Head>
      <p>
        Only what the product is made of. When you join, Privet holds your{" "}
        <strong>email address</strong> and, after the first screen, the{" "}
        <strong>name, line and city</strong> you put on your own plate. From
        then on it holds what you make: your posts, the pieces on your wall,
        the photographs you hang, what you say under somebody&rsquo;s line, and
        the messages and voice notes you send through a door.
      </p>
      <p>
        It holds one thing you did not type: a record of{" "}
        <strong>who let you in</strong>, because somebody vouched for you in
        person and that is how the door works. It also holds a device token for
        each phone you allow notifications on, which is how a banner reaches it.
      </p>

      <Head>What we do not do</Head>
      <ul>
        <li>No advertising, anywhere, ever.</li>
        <li>
          No third-party analytics, no advertising identifier, no tracking
          across other apps or websites. Our app&rsquo;s privacy manifest
          declares no tracking at all, and no tracking domains.
        </li>
        <li>Nothing is sold, rented or shared with a data broker.</li>
        <li>
          No public profiles, no search, no discovery. There is no link that
          opens your room to somebody who has not met you.
        </li>
      </ul>

      <Head>Who can see it</Head>
      <p>
        Your corridor: the people you have actually met and answered the door
        for, and nobody else. Your wall, your column and your room are refused
        to anybody not on it. Who <em>else</em> you know is kept even from the
        people on your corridor &mdash; a visitor to your room sees only the
        friends the two of you have in common, worked out on the server, never
        your list.
      </p>
      <p>
        Photographs are kept in private storage and handed out one at a time
        through links that expire. A key on its own loads nothing.
      </p>

      <Head>Who processes it for us</Head>
      <p>
        Privet runs on infrastructure we rent and nothing more: a managed
        Postgres database, a managed Redis cache, object storage for pictures,
        and Apple&rsquo;s own push service to deliver notifications. We use an
        error reporter to find crashes, with authorization headers and cookies
        stripped before anything is sent. Sign-in is through Apple or Google,
        who tell us an email address and nothing else about you.
      </p>

      <Head>How long we keep it</Head>
      <p>
        As long as your account exists. When you delete your account &mdash;
        from <strong>SETTINGS → ACCOUNT → Delete my account</strong>, in the app,
        without asking anybody &mdash; your room, your wall, your posts, your
        messages and every photograph go with it, for everybody, and that cannot
        be undone. What survives is somebody else&rsquo;s membership: the person
        you let in stays in, with no record of who opened the door.
      </p>
      <p>
        A report somebody filed about content is kept after the account it was
        about is gone, with the subject removed. It is the record of what was
        dealt with, which is the thing that lets us answer for how we handled it.
      </p>

      <Head>Children</Head>
      <p>
        Privet is not for children. You must be 13 or older to have an account,
        and older where your country says so.
      </p>

      <Head>Asking us about it</Head>
      <p>
        Write to{" "}
        <a href="mailto:support@privet.app">support@privet.app</a> and a person
        will answer. You can ask for a copy of what we hold, ask us to correct
        it, or ask us to delete it &mdash; though the fastest way to the last one
        is the button in the app, which does it immediately.
      </p>
    </Paper>
  );
}
