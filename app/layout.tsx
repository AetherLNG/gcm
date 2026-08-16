import type { Metadata, Viewport } from "next";
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
  title: "Global Center Montessori",
  description: "Preschool & Kindergarten di Jakarta Timur",
  openGraph: {
    title: "Global Center Montessori",
    description: "Preschool & Kindergarten di Jakarta Timur",
    url: "https://gcm-three.vercel.app/",
    siteName: "Global Center Montessori",
    images: [
      {
        url: "/METADATA_BANNER.jpg",
        width: 1200,
        height: 630,
        alt: "Global Center Montessori",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-dvh w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
