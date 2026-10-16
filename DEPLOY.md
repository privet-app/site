# Putting the site online

The site is a static Next.js app — every route prerenders, there is no
database behind it and no API route in it — so hosting it is a connect-and-DNS
job rather than a deployment.

It matters more than a marketing page usually does: **App Store Connect will
not accept a submission until `/privacy` and `/support` answer on a real
domain.** Guideline 1.2 also wants published contact information, which is the
address on `/support`.

## Vercel

The site is live at **https://get-privet.vercel.app**, which is where the app
and the App Store listing point. The steps below are how it got there and what
would change if it ever moved.

1. **vercel.com** → Add New → Project → import `privet-app/site`.
2. Framework preset: **Next.js**, detected. `vercel.json` carries the four
   security headers and nothing else on purpose — pinning the build and
   install commands there overrode what Vercel works out from
   `pnpm-lock.yaml`, and the deploys after it was added stopped landing while
   the one before it was still being served. Let Vercel infer the commands.
3. Deploy. The first one lands on a `*.vercel.app` URL, which is enough to
   check every page renders.
4. The `*.vercel.app` URL is the address, and it is a real one: Apple takes
   it for the privacy policy and support fields, and it has a certificate
   without anybody doing anything.

   `privet.app` is **not** ours. It is registered, delegated to DigitalOcean
   nameservers, and has no A, CNAME, MX or TXT records on it — so it answers
   nothing and cannot be pointed anywhere by us. Nothing in this repository
   may name it; a privacy policy URL that does not answer is a submission App
   Store Connect refuses outright.

5. If the domain is ever acquired: **Project → Settings → Domains**, add the
   apex and `www`, create the records Vercel prints, and then change the four
   places below. The old URL keeps working, so nothing breaks in the interval.

**Done when** `https://get-privet.vercel.app/privacy`, `/terms` and `/support`
all answer 200 from outside your machine. The gate asks exactly that:

    ios $ python3 scripts/release-check.py pages

## What has to agree with it

Four places name these URLs:

- `ios/release/metadata.yml` — the privacy policy and support URLs App Store
  Connect is given.
- `ios/Sources/ProfileViews.swift` — the LEGAL rows in SETTINGS.
- `ios/Sources/SignupViews.swift` — the two links under the sign-in button.
- `ios/scripts/release-check.py` — the three the gate asks for.
- `site/DEPLOY.md` — this file.

If the address ever changes, those change with it, and `release-check.py pages`
is what notices.

## Why not a subdirectory of the app's host

Because the pages have to be readable by somebody who has not installed
anything, including a reviewer deciding whether to accept the submission at
all, and because the API is a Docker service on Render with no business
serving HTML.
