"use client";

import { useEffect } from "react";

/**
 * One tap on a lifted piece is the honest way to look at a single thing.
 * The backdrop is the room with the lights down: the same ground, its own
 * speckle, and a pool of light behind whatever you picked up.
 */
export function PieceViewer({
  piece,
  caption,
  onClose,
}: {
  piece: React.ReactNode;
  caption: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  return (
    <div
      className="viewer fixed inset-0 z-50 grid place-items-center px-6"
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      onClick={onClose}
    >
      <div className="viewer-scrim absolute inset-0" />
      <div className="viewer-piece relative flex flex-col items-center">
        <div className="origin-center scale-[1.6]">{piece}</div>
        <p className="micro mt-[4.5rem] text-sub">{caption}</p>
        <button
          type="button"
          onClick={onClose}
          className="micro mt-5 cursor-pointer text-faint transition-colors hover:text-acc"
        >
          Put it back
        </button>
      </div>
    </div>
  );
}
