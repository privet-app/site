import Link from "next/link";

/**
 * The one address a person reads.
 *
 * Here rather than in each of the three pages, because it is also in
 * `ios/release/metadata.yml` and `ios/Sources/ProfileViews.swift` and a fourth
 * copy is the one that would be missed. Not on `privet.app`: that domain is
 * registered to somebody else and parked, so mail to it goes nowhere — and a
 * contact address that bounces is worse than none, both for Guideline 1.2 and
 * for the member who wrote to it.
 */
export const SUPPORT_MAIL = "io.taufeeq.ahmed@gmail.com";

/**
 * The number, for the things that cannot wait for a reply.
 *
 * Written once here for the same reason as the address above. In full
 * international form, because a support number a reader has to guess the
 * country code for is a number they do not ring.
 */
export const SUPPORT_PHONE = "+91 89190 49647";

/**
 * Where the app is got.
 *
 * The listing, not a redirect through anything: a link that counts clicks is
 * a link that can go down, and this one is printed on the page people are
 * sent to when somebody hands them a key. The `/in/` is Apple's own regional
 * path and it forwards a reader in another country to their own store rather
 * than refusing them.
 */
export const APP_STORE_URL =
  "https://apps.apple.com/in/app/privet-app/id6811027919";

/** The address as a link, written the same way everywhere it appears. */
export function Mail() {
  return <a href={`mailto:${SUPPORT_MAIL}`}>{SUPPORT_MAIL}</a>;
}

/** The number as a link, so a phone dials it rather than asking to be copied. */
export function Phone() {
  return (
    <a href={`tel:${SUPPORT_PHONE.replace(/\s/g, "")}`}>{SUPPORT_PHONE}</a>
  );
}

/**
 * The plain pages: privacy, terms, support.
 *
 * One column of type on the same paper as the front page, with the same
 * serif and the same rules, because a policy set in a different typeface
 * reads as somebody else's document bolted on. No screenshots, no reveals,
 * nothing that moves — these are pages somebody arrives at to find one fact.
 */
export function Paper({
  kicker,
  title,
  standfirst,
  updated,
  children,
}: {
  kicker: string;
  title: string;
  standfirst?: string;
  /** The date the words last changed, which a policy has to carry. */
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full">
      <header className="border-b border-line py-8">
        <div className="mx-auto max-w-[48rem] px-6 sm:px-10">
          <Link href="/" className="micro text-acc">
            Privet
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-[48rem] px-6 py-16 sm:px-10 sm:py-24">
        <p className="micro text-acc">{kicker}</p>
        <h1 className="display mt-6 text-[clamp(2.25rem,5.5vw,3.5rem)]">
          {title}
        </h1>
        {standfirst ? (
          <p className="mt-7 max-w-[52ch] text-[1.25rem] leading-[1.6] text-sub">
            {standfirst}
          </p>
        ) : null}
        <p className="micro mt-8 text-faint">Last updated {updated}</p>
        <div className="rule-double my-12" />
        <div className="legal">{children}</div>
      </article>

      <footer className="border-t border-line py-12">
        <div className="mx-auto flex max-w-[48rem] flex-wrap items-baseline justify-between gap-6 px-6 sm:px-10">
          <LegalLinks />
          <p className="micro text-faint">Privet · Est. 2026</p>
        </div>
      </footer>
    </div>
  );
}

/**
 * The three pages, linked from every page including each other.
 *
 * App Store Connect asks for a privacy policy URL and a support URL before a
 * version can be submitted, and both have to be reachable by somebody who
 * arrives with nothing but the link.
 */
export function LegalLinks() {
  return (
    <nav className="flex flex-wrap gap-x-6 gap-y-2">
      <Link href="/privacy" className="micro text-faint hover:text-acc">
        Privacy
      </Link>
      <Link href="/terms" className="micro text-faint hover:text-acc">
        Terms
      </Link>
      <Link href="/support" className="micro text-faint hover:text-acc">
        Support
      </Link>
    </nav>
  );
}

/** A heading inside one of these pages. */
export function Head({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 font-serif text-[clamp(1.5rem,3vw,2rem)] leading-tight first:mt-0">
      {children}
    </h2>
  );
}
