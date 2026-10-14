import Link from "next/link";

export default function notFound() {
  return (
    <div className="not-found">
      <h1>404 | Project Not Found</h1>
      <p>
        It looks like the project you're looking for is gone. Or maybe, it has never ever existed.
      </p>
      <Link href="/projects">Back to Projects</Link>
    </div>
  );
}
