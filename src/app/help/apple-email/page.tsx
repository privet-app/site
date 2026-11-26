import type { Metadata } from "next";

import { Mail, Paper } from "@/components/paper";
import { Leg, Shot, Shots } from "@/components/walk";

export const metadata: Metadata = {
  title: "No email on your Apple Account · Privet",
  description:
    "Privet does not open an account without an email address. Three steps, with pictures: add an address to your Apple Account, clear Privet's old sign-in, open the app again.",
};

/**
 * Where the app's refusal sends somebody. `Trouble.helpURL` points here.
 *
 * Read by one person in one state: locked out, mid-sign-up, probably on the
 * phone the instructions are about. So the pictures carry the walk and the
 * words get out of the way — every paragraph here is one somebody has to
 * read before they can act, and the first draft had eleven of them.
 *
 * Our page rather than Apple's, which says what a phone-number account is and
 * stops. The half that decides whether somebody gets in is step two: an
 * address is handed to an app on the FIRST authorisation ever, so one added
 * after that first refused attempt stays invisible until Privet is cleared
 * from Sign in with Apple. Somebody who does only the obvious half is refused
 * a second time by the same card, and gives up.
 */
export default function AppleEmailPage() {
  return (
    <Paper
      kicker="If you cannot get in"
      title="For safety, we don&rsquo;t let anyone in without an email address."
      standfirst="Your Apple Account doesn&rsquo;t have one yet. Three steps, about a minute."
      updated="27 November 2026"
    >
      <div className="legal">
        <p>
          It&rsquo;s how we know an account belongs to a real person, how we
          reach you if something goes wrong, and how someone we&rsquo;ve thrown
          out can&rsquo;t just walk back in. None of this deletes anything or
          touches your phone.
        </p>
      </div>

      <div className="rule-double my-12" />

      <Leg n="Step one" title="Put an address on your Apple Account.">
        <div className="legal">
          <p>Any email you actually check. Apple sends a code to confirm it.</p>
        </div>
        <Shots>
          <Shot
            step={1}
            src="/help/apple-email/1-settings.png"
            alt="The iPhone Settings screen, with your name and photograph in a card at the top."
            ring={{ left: 3.6, top: 20.1, width: 92.5, height: 8.8 }}
          >
            Open <strong>Settings</strong>, tap your name.
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
            Tap <strong>Add Email or Phone Number</strong>, then{" "}
            <strong>Email Address</strong>.
          </Shot>
        </Shots>
      </Leg>

      <Leg n="Step two" title="Clear Privet's old sign-in.">
        <div className="legal">
          <p>
            Apple only ever hands an app your address <strong>once</strong>, and
            Privet already used its go. Skip this and step one won&rsquo;t help.
          </p>
        </div>
        <Shots>
          <Shot
            step={4}
            src="/help/apple-email/4-settings.png"
            alt="The iPhone Settings screen again, with your name in the card at the top."
            ring={{ left: 3.6, top: 20.1, width: 92.5, height: 8.8 }}
          >
            Back in <strong>Settings</strong>, tap your name.
          </Shot>
          <Shot
            step={5}
            src="/help/apple-email/5-apple-account.png"
            alt="The Apple Account screen scrolled to the bottom of its second group, where Sign in with Apple sits under Media and Purchases."
            ring={{ left: 3.6, top: 90.2, width: 92.5, height: 4.9 }}
          >
            Scroll down, tap <strong>Sign in with Apple</strong>.
          </Shot>
          <Shot
            step={6}
            src="/help/apple-email/6-apps-list.png"
            alt="An alphabetical list of apps that use Sign in with Apple, with Privet among them."
            ring={{ left: 3.6, top: 58.5, width: 92.5, height: 4.6 }}
          >
            Tap <strong>Privet</strong>.
          </Shot>
          <Shot
            step={7}
            src="/help/apple-email/7-privet.png"
            alt="The Privet entry, showing the Apple Account and email it was used with, above a red Delete button."
            ring={{ left: 3.6, top: 44.4, width: 92.5, height: 5.1 }}
          >
            Tap <strong>Delete</strong>. Safe — you don&rsquo;t have a Privet
            account yet.
          </Shot>
        </Shots>
      </Leg>

      <Leg n="Step three" title="Open Privet again.">
        <div className="legal">
          <p>
            Close it properly, open it, and tap{" "}
            <strong>Continue with Apple</strong>. Share or hide your address —
            either one gets you in.
          </p>
          <p>
            Still stuck? Write to <Mail /> and we&rsquo;ll sort it.
          </p>
        </div>
      </Leg>
    </Paper>
  );
}
