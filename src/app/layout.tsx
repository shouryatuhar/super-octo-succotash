import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shourya Tuhar — Software Engineer",
  description: "Shourya Tuhar is a software engineer focused on backend systems, distributed systems, and developer tools.",
  openGraph: {
    title: "Shourya Tuhar — Software Engineer",
    description: "Building the systems behind the interface: backend engineering, distributed systems, and developer tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
