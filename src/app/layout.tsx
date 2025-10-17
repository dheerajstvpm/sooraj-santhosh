import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sooraj Santhosh",
  description: "Official website of Sooraj Santhosh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between">
            <Link href="/" className="text-white font-bold">
              Sooraj Santhosh
            </Link>
            <div>
              <Link href="/about" className="text-gray-300 hover:text-white mr-4">
                About
              </Link>
              <Link href="/gallery" className="text-gray-300 hover:text-white">
                Gallery
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
