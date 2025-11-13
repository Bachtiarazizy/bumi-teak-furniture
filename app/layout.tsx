import type { Metadata } from "next";
import { Gilda_Display, Noto_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://bumiteakfurniture.com"),

  title: {
    default: "Bumi Teak Furniture | Premium Indonesian Teak Wood Furniture",
    template: "%s | Bumi Teak Furniture",
  },

  description: "Discover handcrafted premium teak furniture from Indonesia. Sustainable, timeless designs that blend traditional craftsmanship with modern elegance. Shop luxury teak wood furniture for your home.",

  keywords: [
    "teak furniture",
    "Indonesian teak furniture",
    "handcrafted teak",
    "premium teak wood",
    "sustainable furniture",
    "luxury teak furniture",
    "artisan furniture",
    "teak dining table",
    "teak outdoor furniture",
    "custom teak furniture",
  ],

  authors: [{ name: "Bumi Teak Furniture" }],
  creator: "Bumi Teak Furniture",
  publisher: "Bumi Teak Furniture",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Bumi Teak Furniture",
    title: "Bumi Teak Furniture | Premium Indonesian Teak Wood Furniture",
    description: "Discover handcrafted premium teak furniture from Indonesia. Sustainable, timeless designs that blend traditional craftsmanship with modern elegance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bumi Teak Furniture - Premium Indonesian Teak Wood Furniture",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bumi Teak Furniture | Premium Indonesian Teak Wood Furniture",
    description: "Discover handcrafted premium teak furniture from Indonesia. Sustainable, timeless designs that blend traditional craftsmanship with modern elegance.",
    images: ["/og-image.jpg"],
    creator: "@bumiteakfurniture", // Ganti dengan Twitter handle Anda
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "your-google-verification-code", // Tambahkan kode verifikasi Google Search Console
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  category: "furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect untuk optimasi performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${gildaDisplay.variable} ${notoSans.variable} antialiased`}>
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
