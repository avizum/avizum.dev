"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "./Icons";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (theme && systemTheme && theme !== "system" && theme === systemTheme) {
      setTheme("system");
    }
  }, [mounted, theme, systemTheme, setTheme]);

  if (!mounted) {
    return null;
  }

  const displayTheme = theme === "system" ? systemTheme : theme;
  const next = displayTheme === "light" ? "dark" : "light";
  const symbol = displayTheme === "light" ? <Moon /> : <Sun />;

  function clickHandler() {
    setTheme(next === systemTheme ? "system" : next);
  }

  return (
    <button className="navigation-button appearance" onClick={clickHandler}>
      {symbol}
    </button>
  );
}
