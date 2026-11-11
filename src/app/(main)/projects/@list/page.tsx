import { getAllProjects } from "../projects";
import Link from "next/link";
import { ArrowLeft } from "@/components/Icons";
import { ProjectsMasonry } from "@/components/ProjectsMasonry";

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  const listedProjects = projects.filter((project) => !project.unlisted);

  if (listedProjects.length === 0) {
    return (
      <div className="no-projects">
        <h1>No Projects?!?</h1>
        <p>It seems that all the projects I've been working on are gone. Check back later.</p>
      </div>
    );
  } else {
    return (
      <div className="left-sidebar">
        <h1 className="title">My Projects</h1>
        <p>Here's what I've been working on.</p>
        <Link className="project-back" href="/projects">
          <ArrowLeft /> View all Projects
        </Link>
        <ProjectsMasonry projects={listedProjects} />
      </div>
    );
  }
}
