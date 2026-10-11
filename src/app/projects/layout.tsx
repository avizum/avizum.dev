import { ProjectView } from "@/components/ProjectView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects",
};

export default function ProjectLayout({
  list,
  detail,
}: {
  list: React.ReactNode;
  detail: React.ReactNode;
}) {
  return <ProjectView list={list} detail={detail} />;
}
