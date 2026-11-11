import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function notFound() {
  return (
    <>
      <Navigation />
      <div className="not-found">
        <h1>404 | Not Found</h1>
        <p>Sorry, the page you're looking for could not be found, or does not exist anymore.</p>
        <Link href="/">Go Home</Link>
      </div>
    </>
  );
}
