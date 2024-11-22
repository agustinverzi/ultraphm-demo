import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ultra PHM",
  description: "Accelerating Population Health Management",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}