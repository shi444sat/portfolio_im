import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

import { CustomCursor } from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivesh Kumar Satyam — IIT Madras BS Data Science & Systems Engineer",
  description:
    "Portfolio of Shivesh Kumar Satyam. Standalone IIT Madras BS in Data Science student and systems developer building full-stack applications, computer vision pipelines, and embedded IoT hardware.",
  keywords: [
    "Shivesh Kumar Satyam",
    "IIT Madras",
    "BS in Data Science",
    "Full-Stack Developer",
    "Computer Vision",
    "OpenCV",
    "Embedded Systems",
    "Raspberry Pi Pico",
    "Cybersecurity",
    "Burp Suite",
    "React Developer",
    "Koshi Competitive English School",
    "Safe Shifting",
    "Virtual Academy",
  ],
  authors: [{ name: "Shivesh Kumar Satyam", url: "https://github.com/shi444sat" }],
  metadataBase: new URL("https://shiveshsatyam.dev"),
  openGraph: {
    title: "Shivesh Kumar Satyam — IIT Madras BS Data Science & Systems Engineer",
    description:
      "Standalone IIT Madras BS in Data Science student, independent builder, and systems engineer.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/shivesh.jpg",
        width: 800,
        height: 800,
        alt: "Shivesh Kumar Satyam",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="relative min-h-full bg-background text-foreground grain selection:bg-accent selection:text-black">
        <CustomCursor />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
