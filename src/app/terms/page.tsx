import type { Metadata } from "next";

import { Head, Paper } from "@/components/paper";

export const metadata: Metadata = {
  title: "Terms · Privet",
  description:
    "The rules of the house: who gets in, what is not tolerated, and what happens when something is reported.",
};

export default function TermsPage() {
  return (
    <Paper
      kicker="Terms"
      title="The rules of the house."
      standfirst="Short, because there are not many. You get in by being brought in, you answer for what you say, and anything objectionable is dealt with by a person within a day."
      updated="16 October 2026"
    >
      <Head>Getting in</Head>
      <p>
        There is no sign-up. Somebody already inside shows you their pass, in
        person, and then answers for you. You must be 13 or older, and older
        where your country says so. One account per person.
      </p>

      <Head>What is not tolerated</Head>
      <p>
        <strong>
          Objectionable content and abusive behaviour are not tolerated on
          Privet.
        </strong>{" "}
        That means, plainly: harassment or bullying, hate speech and slurs,
        threats and incitement to violence, sexual content involving children in
        any form, non-consensual intimate images, encouragement of self-harm,
        impersonation, spam and scams, and anything illegal where you or the
        person reading it lives.
      </p>
      <p>
        It applies to everything you put into the app &mdash; posts, comments,
        the notes in the margin of somebody&rsquo;s wall, direct messages and
        voice notes, the photographs you hang, and the name and line on your own
        plate.
      </p>

      <Head>Reporting, and what we do about it</Head>
      <p>
        Press and hold anything somebody else made and the app offers to report
        it. Pick what is wrong with it, add anything the list does not cover, and
        send. The person you reported is not told that you did.
      </p>
      <p>
        <strong>
          A person reads every report and acts on it within 24 hours.
        </strong>{" "}
        Acting means removing the content, barring the account, or both, where
        the content breaks these rules. Accounts that post the things listed
        above are removed from Privet.
      </p>

      <Head>Shutting a door</Head>
      <p>
        You can also end a connection yourself, at any time, without asking
        anybody and without the other person being told. Two ways, both in the
        app:
      </p>
      <ul>
        <li>
          <strong>Forget them.</strong> They come off your corridor. What either
          of you said stays where it was said; what changes is that neither can
          reach the other. It is not permanent &mdash; if you meet again, you can
          trade keys again.
        </li>
        <li>
          <strong>Shut the door.</strong> The same, and the connection cannot be
          made again however you meet, until you open it from{" "}
          <strong>SETTINGS → SHUT DOORS</strong>. Neither of you sees anything
          the other says anywhere, including under the posts of people you both
          know.
        </li>
      </ul>

      <Head>What you make is yours</Head>
      <p>
        Everything you post stays yours. You give us permission to store it and
        show it to the people on your corridor, which is what the app does, and
        nothing else &mdash; we do not use it to advertise, train anything, or
        show it to anybody you have not let in. Delete your account and it goes
        with you.
      </p>

      <Head>What you can expect from us</Head>
      <p>
        Privet is a small thing run by people, not a utility. It can be down, it
        can lose a day to a bug, and it is provided as it is, without a
        guarantee that it will keep working or keep existing. If we ever have to
        close it, we will say so with enough notice for you to take your things.
      </p>

      <Head>Ending it</Head>
      <p>
        You can delete your account at any moment from{" "}
        <strong>SETTINGS → ACCOUNT</strong>, and everything of yours goes with it.
        We can close an account that breaks these rules, and we will say why.
      </p>

      <Head>Asking us about it</Head>
      <p>
        Write to <a href="mailto:support@privet.app">support@privet.app</a>. A
        person reads it.
      </p>
    </Paper>
  );
}
