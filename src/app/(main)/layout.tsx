import { Navigation, NavigationHeightObserver } from "@/components/Navigation";

import "../globals.css";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationHeightObserver />
      <Navigation />
      <main className="content">{children}</main>
      <div className="footer">
        <p>Copyright © 2026, avizum</p>
      </div>
    </>
  );
}
