"use client";

import { useEffect, useRef, useState } from "react";

import { APP_STORE_URL } from "@/components/paper";

/**
 * Apple's mark, drawn rather than fetched.
 *
 * `currentColor` so it inverts with whatever it sits in, and `aria-hidden`
 * because the words beside it already say what the link is — a screen reader
 * announcing "Apple" before "Download on the App Store" reads the logo twice.
 */
export function AppleMark({ className = "h-[1.15rem] w-[1.15rem]" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} shrink-0`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.05 12.54c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.9-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.24 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.38.81 1.4-.02 2.28-1.27 3.13-2.53.99-1.45 1.4-2.86 1.42-2.93-.03-.01-2.72-1.04-2.75-4.13zM14.5 4.76c.71-.87 1.2-2.07 1.07-3.27-1.03.04-2.28.69-3.02 1.55-.66.77-1.24 2-1.08 3.18 1.15.09 2.32-.59 3.03-1.46z" />
    </svg>
  );
}

/**
 * The link as it reads in the masthead: the whole invitation, under the
 * standfirst, with a lamp behind it.
 */
export function GetPrivet() {
  return (
    <a href={APP_STORE_URL} className="store-link lamp">
      <AppleMark />
      <span className="micro">Download on the App Store</span>
    </a>
  );
}

/**
 * The bar that takes over once the masthead's own link has gone by.
 *
 * Not a bar that is always there: a page whose first impression is a header
 * is a page that reads as an advertisement, and the masthead is the whole of
 * this one's first impression. So the link is written once in the masthead,
 * and this picks it up at the moment that one leaves the top of the window —
 * from then on it is a scroll away wherever the reader has got to.
 *
 * Watched with an observer rather than a scroll handler: the question is
 * whether one element is on screen, which is the question an observer
 * answers, and it answers it without a callback on every frame of a flick.
 */
export function Dock() {
  const mark = useRef<HTMLDivElement>(null);
  const [past, setPast] = useState(false);

  useEffect(() => {
    const node = mark.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPast(!entry.isIntersecting),
      // A shade past the top, so the bar does not flicker in and out while
      // somebody rests exactly on the boundary.
      { rootMargin: "-8px 0px 0px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* What is watched: a hairline at the foot of the masthead's link. It
          carries no height of its own, so it changes nothing about the page
          it is measuring. */}
      <div ref={mark} aria-hidden="true" className="h-px w-full" />
      <div className={`dock${past ? " up" : ""}`} aria-hidden={!past}>
        <div className="dock-row">
          <span className="font-serif text-[1.35rem] leading-none">Privet</span>
          <a
            href={APP_STORE_URL}
            className="store-link lamp"
            tabIndex={past ? 0 : -1}
          >
            <AppleMark className="h-[1rem] w-[1rem]" />
            <span className="micro">Get the app</span>
          </a>
        </div>
      </div>
    </>
  );
}
