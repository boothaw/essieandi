import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const fira = Fira_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  openGraph: {
      title: "Happy Valentine's Essie",
  description: "a digital expression of love",
 images: [
      {
        url: 'iloveyouessie.com/heart.png',
        width: 360,
        height: 360,
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={fira.className}>{children}</body>
    </html>
  );
}
