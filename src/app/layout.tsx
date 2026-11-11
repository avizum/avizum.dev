import { vendSans, jetBrainsMono } from "./fonts";

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} ${vendSans.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      {children}
    </html>
  );
}
