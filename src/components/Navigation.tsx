"use client";

import { useLayoutEffect, useState, useEffect, useRef } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { Hamburger, Close } from "./Icons";
import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const navigationItemsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (menuRef.current?.contains(target) || navigationItemsRef.current?.contains(target)) return;
      setIsOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <nav className="navigation" aria-label="Main">
      <div className="navigation-container">
        <Link className="logo-home" href="/">
          <Image
            loading="eager"
            className="dark wordmark"
            src="/dark-wordmark.png"
            alt="avizum.dev"
            width={400}
            height={120}
          />
          <Image
            loading="eager"
            className="light wordmark"
            src="/light-wordmark.png"
            alt="avizum.dev"
            width={400}
            height={120}
          />
        </Link>
        <div className="navigation-actions">
          <ul
            className={`navigation-items ${isOpen ? "open" : ""}`}
            ref={navigationItemsRef}
            onClick={() => setIsOpen(false)}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <ThemeSwitch />
          <button
            className="navigation-button menu"
            type="button"
            aria-label="Toggle Navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            ref={menuRef}
          >
            {isOpen ? <Close /> : <Hamburger />}
          </button>
        </div>
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
