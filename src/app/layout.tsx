import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import TopNav from "@/components/navbar/topNavbar";

export const metadata: Metadata = {
  title: "Next Match",
  description: "This is an App for matching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TopNav />
          <main className='container mx-auto'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
