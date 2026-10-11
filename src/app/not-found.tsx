import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function notFound() {
  return (
    <div className="not-found">
      <h1>404 | Not Found</h1>
      <p>Sorry, the page you're looking for could not be found, or does not exist anymore.</p>
      <Link href="/">Go Home</Link>
    </div>
  );
}
