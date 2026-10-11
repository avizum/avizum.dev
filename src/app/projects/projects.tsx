import fs from "fs";
import path from "path";
import { JSX } from "react/jsx-runtime";

const CONTENT_DIR = path.join(process.cwd(), "src/content/projects");

interface Links {
  github?: string;
  topgg?: string;
  discordInvite?: string;
}

export interface ProjectSummary {
  slug: string;
  title: string;
  time: string;
  tags?: string[];
  summary: string;
  links?: Links;
  unlisted?: boolean;
}

export async function getAllProjects(): Promise<ProjectSummary[]> {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));

  const projects = await Promise.allSettled(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const { project } = await importProject(slug);
      return project;
    }),
  );

  const renderedProjects: ProjectSummary[] = [];
  projects.forEach((result, i) => {
    if (result.status === "fulfilled") {
      renderedProjects.push(result.value);
    } else {
      console.error(`Could not import ${files[i]}:`, result.reason);
    }
  });
  return renderedProjects;
}

export async function importProject(slug: string) {
  const { default: Content, frontmatter: project } = (await import(
    `@/content/projects/${slug}.mdx`
  )) as {
    default: (props: any) => JSX.Element;
    frontmatter: ProjectSummary;
  };

  if (!Content) {
    throw new Error(`${slug}.mdx does not have any content.`);
  }
  if (!project || (project && (!project.slug || !project.title || !project.time))) {
    throw new Error(`${slug}.mdx is missing one of the following: slug, title, time.`);
  }

  return { Content, project };
}
