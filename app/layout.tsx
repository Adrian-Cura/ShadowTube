import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SearchProvider } from "@/context/SearchContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube Clone",
  description: "My YouTube Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchProvider>
          <main className="flex min-h-screen w-full  flex-col p-4">
            <div className="w-full h-20 bg-black fixed top-0 z-10"></div>
            <Navbar />
            {children}
          </main>
        </SearchProvider>
      </body>
    </html>
  );
}
