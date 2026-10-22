"use client";

import Masonry from "react-masonry-css";
import Link from "next/link";
import { ProjectSummary } from "@/app/projects/projects";
import { MasonryProps } from "react-masonry-css";
import { usePathname } from "next/navigation";

export function ProjectsMasonry({ projects }: { projects: ProjectSummary[] }) {
  let columns: MasonryProps["breakpointCols"];
  const pathName = usePathname();

  if (pathName !== "/projects") {
    columns = { default: 1 };
  } else {
    columns = { default: 2 };
  }

  const currentSlug: string = pathName.replace("/projects/", "");

  return (
    <Masonry breakpointCols={columns} className="projects-container">
      {projects.map((project) => (
        <Link
          className={project.slug === currentSlug ? "current project-card" : "project-card"}
          id={project.slug}
          key={project.slug}
          href={`/projects/${project.slug}`}
        >
          <h2>{project.title}</h2>
          <p className="project-time">{project.time}</p>
          {project.tags && (
            <div className="project-tag-container">
              {project.tags.map((tag: string, i: number) => (
                <div className="project-tag" key={i}>
                  {tag}
                </div>
              ))}
            </div>
          )}
          <p className="project-card-summary">{project.summary}</p>
        </Link>
      ))}
    </Masonry>
  );
}
