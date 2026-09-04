import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/experience/ScrollProgress";
import { CustomCursor } from "@/components/experience/CustomCursor";
import { PageLoader } from "@/components/experience/PageLoader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-binod.vercel.app"),
  title: "Binod Ray — Full-Stack Web Developer | Laravel, WordPress & Next.js",
  description:
    "Portfolio of Binod Ray, a web developer specializing in Laravel, PHP, WordPress, Next.js and modern full-stack web development.",
  keywords: [
    "Binod Ray",
    "Web Developer",
    "Full-Stack Developer",
    "Laravel Developer",
    "WordPress Developer",
    "Next.js Developer",
    "PHP Developer",
    "Frontend Developer",
    "Portfolio",
    "Kathmandu",
    "Nepal Web Developer"
  ],
  authors: [{ name: "Binod Ray", url: "https://portfolio-binod.vercel.app" }],
  creator: "Binod Ray",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-binod.vercel.app",
    title: "Binod Ray — Full-Stack Web Developer | Laravel, WordPress & Next.js",
    description:
      "Crafting fast, scalable, and user-focused web applications with Laravel, WordPress, and Next.js.",
    siteName: "Binod Ray Portfolio",
    images: [
      {
        url: "/images/binod.png",
        width: 1200,
        height: 630,
        alt: "Binod Ray — Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Binod Ray — Full-Stack Web Developer",
    description:
      "Crafting fast, scalable, and user-focused web applications with Laravel, WordPress, and Next.js.",
    images: ["/images/binod.png"],
    creator: "@binodray",
  },
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: "/images/favicon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#08090C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Binod Ray",
    jobTitle: "Full-Stack Web Developer",
    url: "https://portfolio-binod.vercel.app",
    sameAs: [
      "https://github.com/binodray123",
      "https://www.linkedin.com/in/binod-ray-b563141b3",
      "https://www.facebook.com/yadav.binod.13/",
      "https://www.instagram.com/vinod_yadav_1312"
    ],
    knowsAbout: [
      "Laravel",
      "PHP",
      "WordPress",
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "MySQL",
      "Tailwind CSS",
      "Web Architecture"
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Islington College, Kathmandu"
    }
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} font-body bg-[#08090C] text-[#F5F5F2] antialiased selection:bg-[#B8FF3D] selection:text-[#08090C]`}
      >
        <PageLoader />
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
