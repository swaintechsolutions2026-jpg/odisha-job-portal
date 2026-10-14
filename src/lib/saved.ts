"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Saved jobs — kept on this device until candidate accounts launch
 * (Milestone 3 moves saves to the database per signed-in user).
 */
const KEY = "oja-saved-jobs";
const EVENT = "oja-saved-change";

function read(): string[] {
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function useSavedJobs() {
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    const sync = () => setSaved(read());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((id: string) => {
    const cur = read();
    const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
    window.localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return { saved, toggle, isSaved: (id: string) => saved.includes(id) };
}
