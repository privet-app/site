/**
 * Bumped whenever the captures are re-shot. The filenames stay stable so the
 * markup reads plainly, which means a browser will happily keep serving the
 * previous capture from cache — this is what makes it fetch the new one.
 */
const CAPTURE = "3";

/**
 * A screen, as it actually runs. Captured from the app in the simulator once
 * per palette, so the page shows the paper screen by day and the amoled one
 * under the lamp.
 */
export function Shot({
  name,
  alt,
  priority = false,
}: {
  name: string;
  alt: string;
  priority?: boolean;
}) {
  const common = {
    width: 644,
    height: 1240,
    draggable: false,
    loading: priority ? ("eager" as const) : ("lazy" as const),
  };
  return (
    <div className="stand">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...common}
        alt={alt}
        src={`/screens/${name}-paper.jpg?v=${CAPTURE}`}
        className="shot shot-paper"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...common}
        alt=""
        aria-hidden
        src={`/screens/${name}-amoled.jpg?v=${CAPTURE}`}
        className="shot shot-amoled"
      />
    </div>
  );
}
