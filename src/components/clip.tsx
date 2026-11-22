/**
 * Bumped whenever the cuttings are re-cut, for the same reason `CAPTURE` is
 * in shot.tsx: the filenames stay stable, so this is what makes a browser
 * let go of the previous one.
 */
const CUT = "6";

/**
 * One thing cut out of a screen: a post out of the feed, a piece off a wall.
 *
 * `Shot` is a whole screen standing in a phone; this is only the part of a
 * screen that matters, so it carries no frame and takes whatever shape the
 * thing is. It keeps `Shot`'s way of showing the paper one by day
 * and the amoled one under the lamp, by wearing the same two class names
 * the palette rules already switch.
 */
export function Clip({
  name,
  alt,
  height,
  width = 720,
}: {
  name: string;
  alt: string;
  /** Of the file: each cutting is as tall as what it was cut around. */
  height: number;
  /** Of the file. A post is cut at 720; smaller things are cut smaller. */
  width?: number;
}) {
  const common = {
    width,
    height,
    draggable: false,
    loading: "lazy" as const,
    decoding: "async" as const,
  };
  return (
    <div className="clip">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...common}
        alt={alt}
        src={`/clips/${name}-paper.webp?v=${CUT}`}
        className="shot-paper"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...common}
        alt=""
        aria-hidden
        src={`/clips/${name}-amoled.webp?v=${CUT}`}
        className="shot-amoled"
      />
    </div>
  );
}
