"use client";

import { useEffect } from "react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  useEffect(() => {
    const preferred = getPreferredTheme();
    document.documentElement.dataset.theme = preferred;
  }, []);

  function toggleTheme() {
    const selected = document.documentElement.dataset.theme;
    const current =
      selected === "light" || selected === "dark"
        ? selected
        : getPreferredTheme();
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("theme", next);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Change colour theme"
      title="Change colour theme"
    >
      <span className="theme-glyph theme-glyph-sun" aria-hidden="true">☀</span>
      <span className="theme-glyph theme-glyph-moon" aria-hidden="true">☾</span>
    </button>
  );
}
