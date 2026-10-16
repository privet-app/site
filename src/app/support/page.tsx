import type { Metadata } from "next";

import { Head, Mail, Paper } from "@/components/paper";

export const metadata: Metadata = {
  title: "Support · Privet",
  description:
    "How to reach a person about Privet: one address, read by somebody, answered within a day.",
};

export default function SupportPage() {
  return (
    <Paper
      kicker="Support"
      title="Write to us."
      standfirst="One address. A person reads it, and answers."
      updated="16 October 2026"
    >
      <Head>The address</Head>
      <p>
        <Mail />
      </p>
      <p>
        Anything at all: something is broken, something is wrong, you cannot get
        in, you want your account gone, you want to know what we hold about you.
        Reports of content or behaviour are read and acted on within 24 hours.
        Everything else gets an answer from a person, usually the same day.
      </p>

      <Head>The things people ask first</Head>
      <ul>
        <li>
          <strong>How do I join?</strong> You cannot sign yourself up. Somebody
          already inside shows you their pass, in person, and answers the door
          for you. There is no waitlist and no request button.
        </li>
        <li>
          <strong>Somebody is out of order.</strong> Press and hold whatever they
          said and the app offers to report it, or to shut the door on them. They
          are not told either way.
        </li>
        <li>
          <strong>I want somebody off my corridor.</strong> Open their room and
          use FORGET in the corner of their plate. It is quiet, it is not
          permanent, and they are not told.
        </li>
        <li>
          <strong>I want my account gone.</strong>{" "}
          <strong>SETTINGS → ACCOUNT → Delete my account</strong>. It takes your
          room, your wall, your posts and every photograph with it, for
          everybody, and cannot be undone.
        </li>
        <li>
          <strong>My pictures will not load.</strong> Usually a line, not a
          picture. Pull to refresh, and write to us if it persists.
        </li>
      </ul>

      <Head>If you have found something dangerous</Head>
      <p>
        A security problem, or content that puts somebody in immediate danger:
        write to the same address and say so in the subject. It goes to the top
        of the pile.
      </p>
    </Paper>
  );
}
