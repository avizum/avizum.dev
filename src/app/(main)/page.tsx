import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div id="home">
      <h1 className="title">avizum.dev</h1>
      <p>Hello. avizum here, welcome.</p>
      <p>
        <Link href="/about">About Me</Link> | <Link href="/projects">My Projects</Link>
      </p>
    </div>
  );
}
