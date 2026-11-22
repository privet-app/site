import { Clip } from "@/components/clip";

/**
 * TEMPORARY, for one review and not part of the design: prints each piece's
 * file name on its card so that somebody choosing which to drop can read the
 * name off the page. Set this to false, or delete it with the one span that
 * reads it and the `.hang-label` rule in globals.css, before any of this is
 * deployed. The label is laid over the picture and takes up no room, so
 * removing it moves nothing.
 */
const REVIEW_LABELS = true;

/**
 * The things that can be hung, one card apiece: the piece as it hangs on a
 * real wall, plaster and tape and shadow included, and one line saying what
 * it is. `name` is the file the picture comes from; `what` is set in the
 * serif and `line` after it, and the two together are the whole caption —
 * one line, on purpose, because the picture is doing the describing.
 */
const PIECES = [
  { name: "record", what: "A record.", line: "The song you have on repeat.", alt: "A vinyl record hung on a wall, labelled Sweet Child O' Mine by Guns N' Roses" },
  { name: "topfour", what: "Top four.", line: "The films you would defend.", alt: "A card titled Top 4 Movies holding four film posters" },
  { name: "polaroid", what: "A polaroid.", line: "Pegged to the light string.", alt: "A polaroid of friends pegged to a string of lights, captioned my peeps" },
  { name: "goat", what: "The GOAT.", line: "One name, on a brass plate.", alt: "A dark wooden frame with a brass plate naming Taylor Swift the GOAT" },
  { name: "filmstrip", what: "A strip of film.", line: "Three frames of one night.", alt: "A strip of film holding three frames of two people at night" },
  { name: "bookshelf", what: "A shelf.", line: "Four books, covers out.", alt: "Two small wooden shelves titled The Bookshelf, holding four book covers" },
  { name: "framed", what: "A framed photograph.", line: "With a label under it.", alt: "A black-framed photograph lit blue, with a label under it reading always" },
  { name: "passport", what: "The passport.", line: "Stamped the day you were let in.", alt: "A Privet passport page for Ahana with a wax seal on it" },
  { name: "boarding", what: "A boarding pass.", line: "Where you went.", alt: "A boarding pass from Bom to Blr, stamped priority" },
  { name: "clipping", what: "A cutting.", line: "Your own headline.", alt: "A torn newspaper cutting taped to the wall, headlined neighbour aunty spies on us" },
  { name: "washi", what: "A print.", line: "Taped up at the corners.", alt: "A photographic print taped to the wall at two corners" },
  { name: "sticky", what: "A sticky note.", line: "The thing not to forget.", alt: "A yellow sticky note taped to the wall with a reminder written on it" },
  { name: "clock", what: "A clock.", line: "Set to another city.", alt: "A small round wall clock" },
  { name: "medal", what: "A medal.", line: "Awarded by yourself.", alt: "A gold medal on a red and white ribbon" },
  { name: "plate", what: "A licence plate.", line: "Yours, or the one you want.", alt: "A licence plate reading MH 01 AX 1876" },
];

/**
 * The wall again, at the scale of one thing.
 *
 * The board above this shows the room; these show what is in it. They move
 * the way the board does — each settles onto its place as it comes into the
 * window and then drifts a little, some further than others — and that is
 * the stylesheet's doing, so every card is on the page before any script
 * runs and nothing here is pressed.
 */
export function Hangings() {
  return (
    <div className="hangs" role="list" aria-label="Things that can be hung">
      {PIECES.map((piece) => (
        <figure key={piece.name} className="hang" role="listitem">
          <Clip
            name={`piece-${piece.name}`}
            alt={piece.alt}
            width={640}
            height={800}
          />
          {REVIEW_LABELS && (
            <span className="hang-label" aria-hidden>
              {piece.name}
            </span>
          )}
          <figcaption className="mt-4 text-[0.9375rem] leading-[1.5] text-sub">
            {/* The name on its own line, so that in a narrow column the
                caption breaks there on every card and not wherever it runs
                out of room. */}
            <span className="block font-serif text-[1.15rem] italic text-ink2">
              {piece.what}
            </span>
            {piece.line}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
