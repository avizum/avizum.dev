import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function Page() {
  return (
    <div>
      <h1 className="title">Contact Me</h1>
      <p>You can contact me here:</p>
      <ul>
        <li>
          Email: <a href="mailto:me@avizum.dev">me@avizum.dev</a>
        </li>
        <li>
          Discord:{" "}
          <a
            href="https://discord.com/users/750135653638865017"
            target="_blank"
            rel="noreferrer noopener"
          >
            @avizum
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/avizum" target="_blank" rel="noreferrer noopener">
            avizum
          </a>
        </li>
      </ul>
    </div>
  );
}
