# Putting the site online

The site is a static Next.js app — every route prerenders, there is no
database behind it and no API route in it — so hosting it is a connect-and-DNS
job rather than a deployment.

It matters more than a marketing page usually does: **App Store Connect will
not accept a submission until `/privacy` and `/support` answer on a real
domain.** Guideline 1.2 also wants published contact information, which is the
address on `/support`.

## Vercel

1. **vercel.com** → Add New → Project → import `privet-app/site`.
2. Framework preset: **Next.js**. Build command, install command and output
   are in `vercel.json`; leave the fields alone and it reads them.
3. Deploy. The first one lands on a `*.vercel.app` URL, which is enough to
   check every page renders.
4. **Project → Settings → Domains** → add `privet.app` and `www.privet.app`.
   Vercel prints the records to create.
5. At the registrar, point the domain at them. Apex is an `A` record to
   Vercel's address; `www` is a `CNAME` to `cname.vercel-dns.com`. Vercel
   issues the certificate itself once the records resolve.

**Done when** `https://privet.app/privacy`, `/terms` and `/support` all answer
200 from outside your machine. The gate asks exactly that:

    ios $ python3 scripts/release-check.py pages

## What has to agree with it

Three places name these URLs, and all three are already written for
`privet.app`:

- `ios/release/metadata.yml` — the privacy policy and support URLs App Store
  Connect is given.
- `ios/Sources/ProfileViews.swift` — the LEGAL rows in SETTINGS.
- `ios/Sources/SignupViews.swift` — the two links under the sign-in button.

If the domain ever changes, those change with it, and `release-check.py pages`
is what notices.

## Why not a subdirectory of the app's host

Because the pages have to be readable by somebody who has not installed
anything, including a reviewer deciding whether to accept the submission at
all, and because the API is a Docker service on Render with no business
serving HTML.
