import { Navigation, NavigationHeightObserver } from "@/components/Navigation";
import { vendSans, jetBrainsMono } from "./fonts";
import { ThemeProvider } from "next-themes";

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} ${vendSans.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
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
    </html>
  );
}
