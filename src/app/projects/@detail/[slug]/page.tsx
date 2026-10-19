import { notFound } from "next/navigation";
import { getAllProjects, importProject, linksMap } from "../../projects";
import { ArrowLeft } from "@/components/Icons";
import Link from "next/link";

import type { Metadata } from "next";
import type { Links } from "../../projects";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { project } = await importProject(slug);
    return {
      title: project.title,
      description: project.summary,
    };
  } catch {
    return { title: "Not Found" };
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const { Content, project } = await importProject(slug);

    const keys = Object.keys(linksMap) as (keyof Links)[];
    const populatedLinks: Array<{ key: keyof Links; url: string }> = [];

    for (const key of keys) {
      const url = project.links?.[key];
      if (url) {
        populatedLinks.push({ key, url });
      }
    }

    return (
      <div className="project">
        <Link className="project-back" href="/projects">
          <ArrowLeft /> Back to Projects
        </Link>
        <div className="project-header">
          <h1 className="title">{project.title}</h1>
          <p className="project-time">{project.time}</p>
        </div>
        {project.unlisted && (
          <div className="unlisted-notice">
            <h4>Unlisted Project</h4>
            <p>This project page will not appear on the projects list.</p>
          </div>
        )}

        {populatedLinks.length > 0 && (
          <div className="project-links">
            <h4>Project Links</h4>
            {populatedLinks.map((item) => {
              const { label, icon: Icon } = linksMap[item.key];
              return (
                <a key={item.key} href={item.url} target="_blank" rel="noreferrer noopener">
                  <Icon className="project-link-icon" aria-hidden="true" />
                  {label}
                </a>
              );
            })}
          </div>
        )}
        <hr />
        <Content />
      </div>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}
