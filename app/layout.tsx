import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sparsh 💙 Charu - Wedding Invitation | 29 March 2026",
  description: "Join us for our special day of love and celebration in Delhi. Interactive wedding invitation with all the details you need.",
  keywords: ["wedding", "invitation", "Sparsh", "Charu", "Delhi", "March 2026"],
  authors: [{ name: "Sparsh" }],
  metadataBase: new URL('https://sparshandcharu.netlify.app/'),
  openGraph: {
    title: "Sparsh 💙 Charu - Wedding Invitation",
    description: "You're invited to celebrate our union on 29 March 2026 in Delhi",
    type: "website",
    images: [
      {
        url: "/images/Proposal 2.JPG",
        width: 1200,
        height: 630,
        alt: "Sparsh & Charu Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparsh 💙 Charu - Wedding Invitation",
    description: "Join us for our special day - 29 March 2026",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#A3BFD9',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Great+Vibes&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <link rel="preload" as="image" href="/images/Proposal 1.JPG" />
        <link rel="preload" as="image" href="/images/Proposal 2.JPG" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
