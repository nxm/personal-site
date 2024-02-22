import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Analytics} from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jakub Szturomski - Software engineer",
  description:"Software engineer, experienced with blockchain and security technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
	  	<GoogleAnalytics gaId="G-Y24D0XXV0L" />
      {children}
      <Analytics />
      </body>
    </html>
  );
}
