import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div id="home">
      <h1 className="title">Home</h1>
      <p>
        Hello, welcome to my website. <Link href="/about">About Me</Link>
      </p>
      <p>
        Check out what I've been working on: <Link href="/projects">My Projects</Link>
      </p>
    </div>
  );
}
