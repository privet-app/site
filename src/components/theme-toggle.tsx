"use client";

import { useCallback, useSyncExternalStore } from "react";

type Theme = "paper" | "amoled";

const CHANGED = "privet-theme-change";
const STORAGE_KEY = "privet-theme";

function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", onChange);
  window.addEventListener(CHANGED, onChange);
  return () => {
    media.removeEventListener("change", onChange);
    window.removeEventListener(CHANGED, onChange);
  };
}

/** The inline script in the layout has already stamped a stored choice onto
 *  the root element, so the DOM is the source of truth; absent a choice, the
 *  system decides. */
function getSnapshot(): Theme {
  const chosen = document.documentElement.getAttribute("data-theme");
  if (chosen === "paper" || chosen === "amoled") return chosen;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "amoled"
    : "paper";
}

/** Nothing is live until the client tells us which palette it is on. */
function getServerSnapshot(): Theme | null {
  return null;
}

/** Mirrors the app's Appearance setting: the user's choice wins over the system. */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const choose = useCallback((next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // A private window can refuse to remember; the choice still applies here.
    }
    window.dispatchEvent(new Event(CHANGED));
  }, []);

  return (
    <div className="flex items-center gap-4" aria-label="Appearance">
      {(["paper", "amoled"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => choose(option)}
          aria-pressed={theme === option}
          // Accent means state: this one is live.
          className={`micro cursor-pointer transition-colors ${
            theme === option ? "text-acc" : "text-faint hover:text-sub"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
