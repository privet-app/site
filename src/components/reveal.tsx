"use client";

import { useEffect, useRef, useState } from "react";

/** Fires once, when the thing has come far enough up the page to be read. */
function useShown<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, shown };
}

const delay = (index: number) =>
  ({ "--delay": `${index * 0.08}s` }) as React.CSSProperties;

/** Comes up into place as you reach it. */
export function Rise({
  children,
  index = 0,
  className = "",
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) {
  const { ref, shown } = useShown<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`rise ${shown ? "shown" : ""} ${className}`}
      style={delay(index)}
    >
      {children}
    </div>
  );
}

/** A line drawn through a word we mean to refuse. */
export function Struck({
  children,
  index = 0,
}: {
  children: React.ReactNode;
  index?: number;
}) {
  const { ref, shown } = useShown<HTMLSpanElement>();
  return (
    <span
      ref={ref}
      className={`struck ${shown ? "shown" : ""}`}
      style={delay(index)}
    >
      {children}
    </span>
  );
}
