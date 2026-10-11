"use client";

import { useLayoutEffect, useState } from "react";

import { ThemeSwitch } from "./ThemeSwitch";
import Link from "next/link";
import { Hamburger } from "./Icons";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation" aria-label="Main">
      <div className="navigation-container">
        <button
          className="navigation-button menu"
          type="button"
          aria-label="Toggle Navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger />
        </button>
        <ul className={`navigation-items ${isOpen ? "open" : ""}`}>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
        <ThemeSwitch />
      </div>
    </nav>
  );
}

export function NavigationHeightObserver() {
  useLayoutEffect(() => {
    const navigation = document.querySelector<HTMLElement>(".navigation");
    if (!navigation) return;

    function updateNavOffset() {
      if (!navigation) return;
      document.documentElement.style.setProperty(
        "--navigation-height",
        `${navigation.offsetHeight}px`,
      );
    }
    updateNavOffset();

    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      target?.scrollIntoView();
    }

    const observer = new ResizeObserver(updateNavOffset);
    observer.observe(navigation);
    return () => observer.disconnect();
  }, []);
  return null;
}
