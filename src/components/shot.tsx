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
        src={`/screens/${name}-paper.jpg`}
        className="shot shot-paper"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...common}
        alt=""
        aria-hidden
        src={`/screens/${name}-amoled.jpg`}
        className="shot shot-amoled"
      />
    </div>
  );
}
