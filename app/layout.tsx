import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        
        
        {children}
        <Footer />

        {/* <Script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
         />
        <Script
          src="/webflow.schunk.f9378818ab6831d8.js"
          strategy="afterInteractive"
        />
        <Script
          src="/webflow.schunk.bf504e31ed769f9d.js"
          strategy="afterInteractive"
        />
        <Script
          src="/webflow.schunk.d05ac5f9e01912fa.js"
          strategy="afterInteractive"
        />
        <Script
          src="/webflow.schunk.f28319d2fee81553.js"
          strategy="afterInteractive"
        />
        <Script
          src="/webflow.f46ca046.f365e991d17929df.js"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
