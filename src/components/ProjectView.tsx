"use client";

import { usePathname } from "next/navigation";
import { ViewTransition } from "react";

export function ProjectView({ list, detail }: { list: React.ReactNode; detail: React.ReactNode }) {
  const pathName = usePathname();

  if (pathName === "/projects") {
    return <div className="single">{list}</div>;
  } else {
    return (
      <ViewTransition>
        <div className="split">
          {list}
          {detail}
        </div>
      </ViewTransition>
    );
  }
}
