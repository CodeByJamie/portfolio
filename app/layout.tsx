import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jamie MacDonald",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-800 !scroll-smooth">
      <body className="h-full w-full">{children}</body>
    </html>
  );
}
