import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import MainContents from "@/components/layouts/MainContents"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Octopath Traveler Parties",
  description: "This place to put your strategy as your party.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={ inter.className }>
        <div className="site-container">
        <Header />
        <MainContents>
          { children }
        </MainContents>
        <Footer />
        </div>
      </body>
    </html>
  );
}
