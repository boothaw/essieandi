import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const fira = Fira_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Valentine's Essie",
  description: "a digital expression of love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <meta property="og:title" content="Happy Valentine's" />
      <meta property="og:image" content="public/heart.png" />

      <body className={fira.className}>{children}</body>
    </html>
  );
}
