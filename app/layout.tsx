import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CampStay — Find Yourself Outside",
  description: "Discover beautiful campsites, cabins and outdoor experiences."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}