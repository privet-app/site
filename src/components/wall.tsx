import { Shot } from "@/components/shot";

/**
 * How near a screen hangs. The near ones are larger, sit in front, throw a
 * longer shadow and move furthest as the page scrolls; the far ones barely
 * move at all. That difference is the whole of the depth.
 */
type Depth = "near" | "mid" | "far";

/**
 * Which row is in front where two rows overlap, top row first: the top row
 * lies over the head of the one below it. That is the way round that hides
 * the lower row's name plates, which every capture opens on and nobody needs
 * to read six times. It outranks depth; depth settles which of two
 * neighbours in one row is on top.
 */
const ROW_ORDER = [20, 10];

/** Which of two overlapping screens is in front, within a row: the nearer. */
const RANK: Record<Depth, number> = { far: 0, mid: 1, near: 2 };

/**
 * Six views of one room, and where each is pinned.
 *
 * `at` is the desk-sized arrangement and `small` the phone-sized one: left
 * and top of the screen in hundredths of the board's width, then the angle it
 * hangs at in degrees. They are written out by hand, one by one, because the
 * section is an argument against a grid and a rule that generated these
 * positions would be a grid with extra steps.
 *
 * The first is the close one, which shows how the things on a wall are
 * made. The second is the room as its owner sees it with the plate let down
 * — the portrait, the name, the pinned line — because that is whose wall
 * this is. The third stands back and shows the whole of it.
 *
 * They are listed in rows of three, top of the board first, and the top
 * row is pinned over the head of the row below. On a phone there are two
 * columns and the same rule down each of them: whatever hangs higher is in
 * front.
 * Every capture opens on the same name plate, so six of them side by side
 * is one plate six times; the overlap hides the lower row's.
 *
 * These come from `screens/small/`, which holds each capture at about the
 * size it is drawn here — the near ones a little larger than the rest —
 * so that six screens do not cost six full-size files. `Shot` builds
 * the address from the name, which is why the folder is part of it.
 */
const PINS: {
  name: string;
  alt: string;
  depth: Depth;
  at: [number, number, number];
  small: [number, number, number];
}[] = [
  {
    name: "small/zone-lights",
    alt: "The top of the wall, close up: two polaroids pegged to a string of lights, a card of four favourite films, a passport and a framed quote",
    depth: "near",
    at: [3, 6, -2.2],
    small: [0, 8, -2],
  },
  {
    name: "small/portrait",
    alt: "The room with its plate let down: Ahana's portrait in a black frame, her name plate, a pinned line reading was supposed to be a cat, and the string of lights starting below",
    depth: "near",
    at: [34, 22, 1.4],
    small: [50, 30, 1.6],
  },
  {
    name: "small/wall-top",
    alt: "The top of a wall: polaroids on a light string, a record, framed photographs",
    depth: "near",
    at: [66, 10, 2],
    small: [50, 178, 1.2],
  },
  {
    name: "small/zone-record",
    alt: "The top right of the wall: a polaroid, a vinyl record of Sweet Child O' Mine and a yellow sticky note",
    depth: "near",
    at: [4, 54, -1.6],
    small: [1, 88, -1.6],
  },
  {
    name: "small/zone-frames",
    alt: "Three framed photographs in a row, each with a label under it, below a clock and a boarding pass",
    depth: "mid",
    at: [36, 73, 2.4],
    small: [54, 110, 2.2],
  },
  {
    name: "small/zone-film",
    alt: "A strip of film with a medal beside it, a taped photograph, a newspaper cutting and a licence plate",
    depth: "near",
    at: [65, 58, -1.2],
    small: [1, 168, -1],
  },
];

/**
 * One room, pinned up six times.
 *
 * Nothing here is pressed, so it is a single labelled group of pictures and
 * needs no script: every screen is on the page as it arrives, and the
 * movement is the stylesheet's, on a scroll timeline, where the browser has
 * one and the reader has not asked for stillness.
 */
export function Wall() {
  return (
    <div
      className="scatter"
      role="group"
      aria-label="One room, seen six ways"
    >
      {PINS.map((pin, index) => (
        <div
          key={pin.name}
          className={`pin pin-${pin.depth}`}
          style={
            {
              "--x": pin.at[0],
              "--y": pin.at[1],
              "--r": `${pin.at[2]}deg`,
              "--sx": pin.small[0],
              "--sy": pin.small[1],
              "--sr": `${pin.small[2]}deg`,
              "--z": ROW_ORDER[Math.floor(index / 3)] + RANK[pin.depth],
              "--sz": 500 - pin.small[1],
            } as React.CSSProperties
          }
        >
          <Shot name={pin.name} alt={pin.alt} />
        </div>
      ))}
    </div>
  );
}
