import Image from "next/image";

/**
 * A screenshot with the one thing to touch ringed on it.
 *
 * Instructions that name a row ("tap Sign-In & Security") are read by
 * somebody who already knows where it is. Somebody who does not is looking at
 * a screen of sixteen identical rows, and the sentence does not help them —
 * so the picture carries the answer and the sentence only says what happens
 * next.
 *
 * The ring is drawn here rather than painted into the PNG. A rectangle burnt
 * into the image is at the mercy of whatever scale the picture is served at,
 * cannot be moved when Apple shuffles a settings screen, and makes the
 * original unusable for anything else. These are percentages of the shot, so
 * it lands in the same place at any width.
 */
export type Ring = {
  /** All four as percentages of the screenshot, from its top left. */
  left: number;
  top: number;
  width: number;
  height: number;
};

/**
 * The red the rings are drawn in.
 *
 * Not the page accent. The accent is claret under the lamp and all but
 * invisible on a black iOS screenshot, and these screenshots are dark
 * whichever way the reader's own page is set — so the ring is one colour,
 * chosen to be read on black, and it does not follow the theme.
 */
const RING = "#f04a2f";

/** iPhone screenshots, all of them, so the box is never guessed at. */
const SHOT_W = 281;
const SHOT_H = 612;

export function Shot({
  src,
  alt,
  ring,
  step,
  children,
}: {
  src: string;
  /** What the screen shows, for somebody who cannot see it. */
  alt: string;
  ring: Ring;
  /** Its number in the walk, printed on the picture and read out loud. */
  step: number;
  children: React.ReactNode;
}) {
  return (
    <figure className="min-w-0">
      <div className="relative overflow-hidden rounded-[14px] border border-line2 bg-black">
        <Image
          src={src}
          alt={alt}
          width={SHOT_W}
          height={SHOT_H}
          sizes="(min-width: 640px) 220px, 45vw"
          className="block h-auto w-full"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute rounded-[9px]"
          style={{
            left: `${ring.left}%`,
            top: `${ring.top}%`,
            width: `${ring.width}%`,
            height: `${ring.height}%`,
            border: `2px solid ${RING}`,
            boxShadow: `0 0 0 3px color-mix(in srgb, ${RING} 26%, transparent)`,
          }}
        />
      </div>
      <figcaption className="mt-3 flex gap-2.5 text-[0.9375rem] leading-[1.55] text-sub">
        <span
          aria-hidden
          className="micro mt-[0.45rem] shrink-0 text-acc"
          style={{ marginRight: 0 }}
        >
          {step}
        </span>
        <span>
          <span className="sr-only">Step {step}. </span>
          {children}
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * One leg of the walk: a title, a line saying why, and the pictures.
 *
 * Three at a time on a wide page and two on a phone — which is where this is
 * read, because the person reading it is holding the phone the instructions
 * are about.
 */
export function Leg({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 first:mt-0">
      <p className="micro text-acc">{n}</p>
      <h2 className="display mt-4 text-[clamp(1.6rem,3.4vw,2.2rem)]">
        {title}
      </h2>
      {children}
    </section>
  );
}

/** The row of screenshots under a leg's words. */
export function Shots({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}
