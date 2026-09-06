"use client";

import { useEffect, useRef, useState } from "react";

/** Fires once, when the thing is far enough into the room to be seen. */
function useHung<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [hung, setHung] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHung(true);
        // A thing only gets hung once.
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, hung };
}

/**
 * Hangs its children on the wall: they arrive a beat after the wall does,
 * one after another, settling onto the nail rather than fading up.
 */
export function Hung({
  children,
  index = 0,
  className = "",
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) {
  const { ref, hung } = useHung<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`hang ${hung ? "hung" : ""} ${className}`}
      style={{ "--delay": `${index * 0.09}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

/** A line drawn through a word we mean to refuse — the splash's one gesture. */
export function Struck({
  children,
  index = 0,
}: {
  children: React.ReactNode;
  index?: number;
}) {
  const { ref, hung } = useHung<HTMLSpanElement>();

  return (
    <span
      ref={ref}
      className={`struck ${hung ? "hung" : ""}`}
      style={{ "--delay": `${index * 0.06}s` } as React.CSSProperties}
    >
      {children}
    </span>
  );
}
