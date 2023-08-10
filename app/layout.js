import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/cookiebanner";

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
      <GoogleAnalytics GA_MEASUREMENT_ID="G-0QWWMD1VHN" />
      <body className={inter.className}>
        <Nav />
        {children}
        <Nav footerStyle={true} />
        <CookieBanner />
      </body>
    </html>
  );
}
