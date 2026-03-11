import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paige by StreetOps — Team Engagement Intelligence Platform",
  description: "Paige helps HR leads, team managers, and organisations measure, understand, and improve team engagement — one weekly pulse check at a time.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
