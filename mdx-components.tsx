import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  a: ({ href, children, ...props }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  ),
  code: ({ children, ...props }) => (
    <code className="i-code" {...props}>
      {children}
    </code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
