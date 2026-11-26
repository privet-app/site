import type { Metadata } from "next";

import { Mail, Paper } from "@/components/paper";
import { Leg, Shot, Shots } from "@/components/walk";

export const metadata: Metadata = {
  title: "No email on your Apple Account · Privet",
  description:
    "Privet does not open an account without an email address, and some Apple Accounts are made with a mobile number and carry none. Three steps, with pictures: add an address, clear Privet's old sign-in, open the app again.",
};

/**
 * Where the app's refusal sends somebody.
 *
 * `Trouble.helpURL` in the iOS app points here. It used to point at Apple's
 * own page, which says what a phone-number Apple Account is and nothing about
 * what to do about Privet — and the half that matters is the second step,
 * which Apple has no reason to mention: Apple hands an app an address once,
 * on the first authorisation ever, so an account made after that first
 * attempt is invisible until the app is cleared and asked again.
 */
export default function AppleEmailPage() {
  return (
    <Paper
      kicker="If you cannot get in"
      title="For safety, Privet does not open an account without an email address."
      standfirst="Your Apple Account was made with a mobile number and carries none, so Apple has no address to pass on. Apple can add one in about a minute. Three steps, in order."
      updated="27 November 2026"
    >
      <div className="legal">
        <p>
          <strong>Why we insist.</strong> This is a house you are let into by
          somebody who already knows you, and that only means anything if an
          account belongs to a person. An address is the one thing tying yours
          to somebody outside this app: it is how we reach you when something
          is wrong with your account, how we answer you when you write to us,
          and how a member who is thrown out for hurting somebody is not simply
          back by morning. An account with nothing behind it is an account
          nobody can answer for — not us, and not the member who vouched for
          you.
        </p>
        <p>
          In India — and in Brazil, mainland China and Mexico — Apple lets you
          make an Apple Account with a mobile number and no email at all. It
          works everywhere else, so most people never find out they have one.
          Signing in to Privet is where it shows up.
        </p>
        <p>
          Nothing below deletes anything or costs anything, and none of it
          touches your photographs, your messages or your phone.
        </p>
      </div>

      <div className="rule-double my-12" />

      <Leg n="Step one" title="Put an address on your Apple Account.">
        <div className="legal">
          <p>
            Any address you already read will do — the one you use for
            everything else is the right answer. Apple sends a code to it to
            check it is yours.
          </p>
        </div>
        <Shots>
          <Shot
            step={1}
            src="/help/apple-email/1-settings.png"
            alt="The iPhone Settings screen, with your name and photograph in a card at the top."
            ring={{ left: 3.6, top: 20.1, width: 92.5, height: 8.8 }}
          >
            Open <strong>Settings</strong> and tap your own name, at the very
            top.
          </Shot>
          <Shot
            step={2}
            src="/help/apple-email/2-apple-account.png"
            alt="The Apple Account screen, listing Personal Information, Sign-In and Security, Payment and Shipping, and Subscriptions."
            ring={{ left: 3.6, top: 45.0, width: 92.5, height: 5.6 }}
          >
            Tap <strong>Sign-In &amp; Security</strong>.
          </Shot>
          <Shot
            step={3}
            src="/help/apple-email/3-sign-in-and-security.png"
            alt="The Sign-In and Security screen, showing email addresses and phone numbers with a blue Add Email or Phone Number row beneath them."
            ring={{ left: 3.6, top: 33.8, width: 92.5, height: 4.6 }}
          >
            Tap <strong>Add Email or Phone Number</strong>, choose{" "}
            <strong>Email Address</strong>, and do as Apple asks. Come back
            here once it is confirmed.
          </Shot>
        </Shots>
      </Leg>

      <Leg n="Step two" title="Clear Privet's old sign-in.">
        <div className="legal">
          <p>
            This is the step nobody expects, and skipping it is why the second
            attempt fails the same way the first one did. Apple gives an app
            your address <strong>once</strong> — on the first time you ever use
            Sign in with Apple with it — and never again. Privet has already
            had its one turn and got nothing, so Apple has to be told to start
            over.
          </p>
          <p>
            It removes nothing. You have no Privet account yet, there is
            nothing on your phone to lose, and all it does is let Apple treat
            your next sign-in as a first one.
          </p>
        </div>
        <Shots>
          <Shot
            step={4}
            src="/help/apple-email/4-settings.png"
            alt="The iPhone Settings screen again, with your name in the card at the top."
            ring={{ left: 3.6, top: 20.1, width: 92.5, height: 8.8 }}
          >
            Back in <strong>Settings</strong>, tap your name again.
          </Shot>
          <Shot
            step={5}
            src="/help/apple-email/5-apple-account.png"
            alt="The Apple Account screen scrolled to the bottom of its second group, where Sign in with Apple sits under Media and Purchases."
            ring={{ left: 3.6, top: 90.2, width: 92.5, height: 4.9 }}
          >
            Scroll down and tap <strong>Sign in with Apple</strong>.
          </Shot>
          <Shot
            step={6}
            src="/help/apple-email/6-apps-list.png"
            alt="An alphabetical list of apps that use Sign in with Apple, with Privet among them."
            ring={{ left: 3.6, top: 58.5, width: 92.5, height: 4.6 }}
          >
            Find <strong>Privet</strong> in the list and tap it.
          </Shot>
          <Shot
            step={7}
            src="/help/apple-email/7-privet.png"
            alt="The Privet entry, showing the Apple Account and email it was used with, above a red Delete button."
            ring={{ left: 3.6, top: 44.4, width: 92.5, height: 5.1 }}
          >
            Tap <strong>Delete</strong>, and confirm. Red, and harmless: it
            ends Apple&rsquo;s memory of the attempt, nothing else.
          </Shot>
        </Shots>
      </Leg>

      <Leg n="Step three" title="Open Privet again.">
        <div className="legal">
          <p>
            Close Privet properly first — swipe up from the bottom of the
            screen, hold, and flick the app away — then open it from the home
            screen. Tap <strong>Continue with Apple</strong>, and this time
            Apple will ask what to do with your address.
          </p>
          <p>
            Either answer works. <strong>Share My Email</strong> gives us the
            address you just added. <strong>Hide My Email</strong> gives us a
            forwarding address from Apple instead, and we never see the real
            one. You are in either way.
          </p>
          <p>
            If it still will not have you, write to <Mail /> and say what the
            screen said. Somebody reads that address.
          </p>
        </div>
      </Leg>
    </Paper>
  );
}
