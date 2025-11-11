import type { Metadata } from "next";
import { Gilda_Display, Noto_Sans } from "next/font/google";
import "./globals.css";

const gildaDisplay = Gilda_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gilda-display",
  display: "swap",
});

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bumi Teak Furniture | Premium Indonesian Teak Wood Furniture",
    template: "%s | Bumi Teak Furniture",
  },
  description: "Handcrafted teak furniture that tells a story. Each piece carries the warmth of Indonesian woodworking traditions. Premium quality, sustainable sourcing, timeless elegance.",
  keywords: ["teak furniture", "Indonesian furniture", "handcrafted furniture", "premium teak", "sustainable furniture", "teak wood", "artisan furniture", "luxury furniture"],
  authors: [{ name: "Bumi Teak Furniture" }],
  creator: "Bumi Teak Furniture",
  publisher: "Bumi Teak Furniture",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bumiteakfurniture.com",
    siteName: "Bumi Teak Furniture",
    title: "Bumi Teak Furniture | Premium Indonesian Teak Wood Furniture",
    description: "Handcrafted teak furniture that tells a story. Timeless elegance in every grain.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bumi Teak Furniture - Premium Indonesian Teak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bumi Teak Furniture | Premium Indonesian Teak Wood Furniture",
    description: "Handcrafted teak furniture that tells a story. Timeless elegance in every grain.",
    images: ["/og-image.jpg"],
  },
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gildaDisplay.variable} ${notoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
