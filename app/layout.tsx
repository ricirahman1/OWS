import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital OWS — Climatic Drive Test",
  description: "Operator Workstation for climatic drive testing",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
