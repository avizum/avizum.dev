import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

export default function Page() {
  return (
    <div id="home">
      <h1 className="title">About Me</h1>
      <p>
        Hello, my name is Julius, some know me as avizum. I am from Southern California, and I am
        currently studying computer science.
      </p>
    </div>
  );
}
