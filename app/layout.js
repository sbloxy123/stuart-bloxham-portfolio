import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";

import "bootstrap/dist/css/bootstrap.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Stuart Bloxham's Portfolio",
  description:
    "Built with Next.js 13, projects built with Gatsby, Vanilla JS and Ruby on Rails 🕺",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav footerStyle={false} />
        {children}
        <Nav footerStyle={true} />
      </body>
    </html>
  );
}
