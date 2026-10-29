import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Infiax Dev | Next.js Cloud",
  description: "Self-hosted Next.js application infrastructure running on Coolify & Docker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
