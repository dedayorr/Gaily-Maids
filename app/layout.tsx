// "use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import { useClient } from "next/client";
// import { Context } from "./components/contexts/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaily Maids",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* <Context>  */}
          {children}
          {/* </Context> */}
        <Footer />
      </body>
    </html>
  );
}
