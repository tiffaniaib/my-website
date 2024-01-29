import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ['400', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elena Tiffania Iside-Berger",
  description:
    "Passionate about making a difference through web development, I am poised to bring my diverse skill set and innovative approach to your dynamic development team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
