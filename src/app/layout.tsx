import type { Metadata } from "next";
import { Playfair_Display, Inter_Tight } from "next/font/google";
import "./globals.css";

const playfair_display = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter_tight = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alessandra's Space",
  description:
    "Showcases the portfolio of Alessandra, an aspiring software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </head>
      <body
        className={`${playfair_display.variable} ${inter_tight.variable} antialiased bg-[#1e1e1e] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
