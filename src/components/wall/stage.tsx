"use client";

import { useEffect, useRef, useState } from "react";
import { PieceViewer } from "./viewer";
import {
  FairyLights,
  FramedPhoto,
  Nameplate,
  PinnedQuote,
  Polaroid,
  Poster,
  StickyNote,
  Vinyl,
  WashiPrint,
} from "./pieces";

const W = 1200;
const H = 800;

/** A hand-placed piece: where it sits, how far off square, and how much of the
 *  parallax it takes. Nothing is on a grid — a grid at this size is a photo
 *  library, not a room. */
function Piece({
  x,
  y,
  tilt = 0,
  depth = 0,
  z = 1,
  lift = false,
  caption,
  onLift,
  children,
}: {
  x: number;
  y: number;
  tilt?: number;
  depth?: number;
  z?: number;
  lift?: boolean;
  /** Given a caption, the piece can be taken off the wall and looked at. */
  caption?: string;
  onLift?: (piece: React.ReactNode, caption: string) => void;
  children: React.ReactNode;
}) {
  const liftable = lift && caption && onLift;

  return (
    <div
      className="piece"
      style={
        {
          left: x,
          top: y,
          zIndex: z,
          "--tilt": `${tilt}deg`,
          "--depth": depth,
        } as React.CSSProperties
      }
    >
      {liftable ? (
        <button
          type="button"
          className="piece-lift block cursor-pointer"
          aria-label={`Look at ${caption}`}
          onClick={() => onLift(children, caption)}
        >
          {children}
        </button>
      ) : (
        <div className={lift ? "piece-lift" : undefined}>{children}</div>
      )}
    </div>
  );
}

export function WallStage() {
  const hostRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [spins, setSpins] = useState(0);
  const [held, setHeld] = useState<{
    piece: React.ReactNode;
    caption: string;
  } | null>(null);

  const lift = (piece: React.ReactNode, caption: string) =>
    setHeld({ piece, caption });

  // Fit the room to the window without redrawing it: the composition is
  // hand-placed at one size, and the camera simply stands further back.
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const fit = () => {
      const scale = Math.min(1, host.clientWidth / W);
      host.style.setProperty("--stage-scale", String(scale));
      host.style.height = `${H * scale}px`;
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  // Parallax: the room shifts a little as you move through it. Small on
  // purpose — this is a wall, not a carousel.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let px = 0;
    let py = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointer = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onScroll = () => {
      targetY = window.scrollY / Math.max(window.innerHeight, 1);
    };

    const tick = () => {
      px += (targetX * 26 - px) * 0.06;
      py += (targetY * 20 - py) * 0.06;
      stage.style.setProperty("--px", px.toFixed(2));
      stage.style.setProperty("--py", py.toFixed(2));
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={hostRef} className="relative w-full overflow-hidden">
      <div
        ref={stageRef}
        className="stage absolute left-1/2 top-0"
        style={{
          width: W,
          height: H,
          marginLeft: -W / 2,
          transform: "scale(var(--stage-scale, 1))",
        }}
      >
        {/* the string across the top of the room */}
        <div className="piece" style={{ left: 0, top: 0, zIndex: 2 }}>
          <FairyLights
            width={W}
            height={140}
            bulbCount={22}
            pins={[
              [30, 54],
              [318, 30],
              [654, 62],
              [948, 26],
              [1172, 58],
            ]}
          />
        </div>

        {/* left cluster */}
        <Piece x={54} y={150} tilt={-2.2} depth={0.55} z={6} lift caption="A terrace, last summer" onLift={lift}>
          <FramedPhoto src="/scenes/scene-terrace.jpg" w={158} h={118} alt="A terrace" />
        </Piece>
        <Piece x={92} y={352} tilt={1.7} depth={0.85} z={7} lift caption="The shelf, in July" onLift={lift}>
          <WashiPrint src="/scenes/scene-books.jpg" w={132} h={98} caption="the shelf, in July" />
        </Piece>
        <Piece x={272} y={512} tilt={-4} depth={1.1} z={8} lift caption="A note left on the door" onLift={lift}>
          <StickyNote text="back at six — let yourself in" signature="— M." size={124} />
        </Piece>

        {/* the polaroid hangs off the light string */}
        <Piece x={288} y={120} tilt={2.6} depth={0.4} z={9} lift caption="He waited up" onLift={lift}>
          <Polaroid src="/scenes/scene-dog.jpg" caption="he waited up" photoSize={124} pinned />
        </Piece>

        {/* the plate by the door, and what is pinned under it */}
        <Piece x={452} y={258} tilt={-0.5} depth={0.2} z={12}>
          <Nameplate
            name="Privet"
            kicker="Invite only · iOS first"
            place="Est. 2026"
            scale={1.75}
          />
        </Piece>
        <Piece x={452} y={470} tilt={0.7} depth={0.32} z={11} lift caption="Pinned to the wall" onLift={lift}>
          <PinnedQuote quote="There are no strangers here." />
        </Piece>

        {/* right cluster */}
        <Piece x={992} y={132} tilt={0} depth={0.7} z={6} lift>
          <div onClick={() => setSpins((s) => s + 1)} role="presentation">
            <Vinyl diameter={152} labelText="fire escape" spins={spins} />
          </div>
        </Piece>
        <Piece x={800} y={318} tilt={1.6} depth={0.5} z={5} lift caption="The lake" onLift={lift}>
          <FramedPhoto
            src="/scenes/scene-lake.jpg"
            w={132}
            h={172}
            style="black"
            mat={8}
            alt="The lake"
          />
        </Piece>
        <Piece x={946} y={352} tilt={-1.3} depth={0.95} z={4} lift caption="Privet Records presents" onLift={lift}>
          <Poster />
        </Piece>

        {/* lower shelf of the room */}
        <Piece x={96} y={568} tilt={2.4} depth={1.25} z={9} lift caption="The fire escape" onLift={lift}>
          <Polaroid src="/scenes/scene-plants.jpg" caption="the fire escape" photoSize={112} />
        </Piece>
        <Piece x={556} y={664} tilt={-1.8} depth={1.4} z={8} lift caption="Tuesday, nothing happening" onLift={lift}>
          <WashiPrint
            src="/scenes/scene-coffee.jpg"
            w={122}
            h={92}
            caption="tuesday, nothing happening"
            tapeTint="#dfd3bb"
          />
        </Piece>
        <Piece x={792} y={606} tilt={1.2} depth={1.1} z={7} lift caption="The street" onLift={lift}>
          <FramedPhoto
            src="/scenes/scene-street.jpg"
            w={104}
            h={78}
            style="thin"
            mat={7}
            alt="The street"
          />
        </Piece>
      </div>

      {held && (
        <PieceViewer
          piece={held.piece}
          caption={held.caption}
          onClose={() => setHeld(null)}
        />
      )}
    </div>
  );
}
