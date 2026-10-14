import { External, Anchor } from "@/components/Icons";
import type { MDXComponents } from "mdx/types";

function MDXLink({ href, children, ...props }: React.ComponentPropsWithoutRef<"a">) {
  const isExternal = Boolean(href?.startsWith("https://") || href?.startsWith("http://"));
  const isAnchor = props.className === "anchor-link";

  const target = isExternal ? "_blank" : undefined;
  const rel = isExternal ? "noopener noreferrer" : undefined;
  const ExternalClass = isExternal ? "external-link" : undefined;

  return (
    <a href={href} target={target} rel={rel} {...props}>
      {isAnchor && <Anchor />}
      {children}
      {isExternal && <External className={ExternalClass} />}
    </a>
  );
}

const components: MDXComponents = {
  a: MDXLink,
  table: ({ children, ...props }) => {
    return (
      <div className="project-table">
        <table {...props}>{children}</table>
      </div>
    );
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
