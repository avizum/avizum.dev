import { Navigation, NavigationHeightObserver } from "@/components/Navigation";
import { ThemeProvider } from "next-themes";

import "../globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <body>
      <ThemeProvider disableTransitionOnChange>
        <NavigationHeightObserver />
        <Navigation />
        <main className="content">{children}</main>
        <div className="footer">
          <p>Copyright © 2026, avizum</p>
        </div>
      </ThemeProvider>
    </body>
  );
}
