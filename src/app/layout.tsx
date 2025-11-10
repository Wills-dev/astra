import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../styles/globals.css";

import QueryProvider from "@/components/QueryProvider";
import { Providers } from "@/store/provider";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Astra",
  description:
    "Astra - AI assistant surfaces answers, insights, and updates tailored to every user’s journey.",
  openGraph: {
    title: "Astra - AI assistant",
    description:
      "Astra - AI assistant surfaces answers, insights, and updates tailored to every user’s journey.",
    images: [
      {
        url: "/hero-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Astra Preview Image",
      },
    ],
    type: "website",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-body">
        <QueryProvider>
          <Providers>{children}</Providers>
        </QueryProvider>
      </body>
    </html>
  );
}
