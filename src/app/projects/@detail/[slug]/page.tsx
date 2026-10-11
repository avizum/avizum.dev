import { notFound } from "next/navigation";
import { getAllProjects, importProject } from "../../projects";
import { GitHubIcon, DiscordIcon, TopGGIcon } from "@/components/Icons";
import Link from "next/link";
import { ArrowLeft } from "@/components/Icons";

import type { Metadata } from "next";

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
    return (
      <div className="project">
        <Link className="project-back" href="/projects">
          <ArrowLeft className="should-hover" /> Back to Projects
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

        {project.links && (
          <div className="project-links">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer noopener">
                <GitHubIcon />
              </a>
            )}
            {project.links.discordInvite && (
              <a href={project.links.discordInvite} target="_blank" rel="noreferrer noopener">
                <DiscordIcon />
              </a>
            )}
            {project.links.topgg && (
              <a href={project.links.topgg} target="_blank" rel="noreferrer noopener">
                <TopGGIcon />
              </a>
            )}
          </div>
        )}
        <hr />
        <Content />
      </div>
    );
  } catch {
    notFound();
  }
}
