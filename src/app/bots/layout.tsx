import "./bots.css";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="content">{children}</main>
      <div className="footer">
        <p>Copyright © 2026, avizum</p>
      </div>
    </>
  );
}
