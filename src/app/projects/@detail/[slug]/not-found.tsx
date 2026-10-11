import Link from "next/link";

export default function notFound() {
  return (
    <div className="not-found">
      <h1>404 | Project Not Found</h1>
      <p>Sorry, the project you're looking for doesn't exist, or does not exist anymore.</p>
      <Link href="/projects">Back to Projects</Link>
    </div>
  );
}
