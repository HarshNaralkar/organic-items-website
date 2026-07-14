import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Urban Peasant Farm Shop | Premium Organic Food, Lower Parel, Mumbai",
  description: "Naturally grown foods, handcrafted organic products, and wholesome living delivered with honesty and care from our Lower Parel shop in Mumbai. Women-owned and ethically sourced.",
  keywords: ["organic food mumbai", "organic farm shop", "lower parel", "the urban peasant", "A2 ghee mumbai", "stone ground atta", "organic honey mumbai", "ethical farm shop"],
  authors: [{ name: "The Urban Peasant" }],
  openGraph: {
    title: "The Urban Peasant Farm Shop | Premium Organic Food, Mumbai",
    description: "Naturally grown foods, handcrafted organic products, and wholesome living from our Lower Parel shop.",
    url: "https://theurbanpeasant.in",
    siteName: "The Urban Peasant Farm Shop",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
