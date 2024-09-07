"use client";

import { AnimatePresence } from "framer-motion";
import { metadata } from "./head";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        ></link>
      </head>
      <body className="pt-3 ">
        <AnimatePresence mode="wait">
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </AnimatePresence>
      </body>
    </html>
  );
}
