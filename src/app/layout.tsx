import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import CartSummary from "./components/CartSummary";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Lab - Component Patterns",
  description: "A comprehensive Next.js application demonstrating 10 essential component patterns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">Next.js Lab</h1>
              <div className="flex items-center space-x-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/posts" className="hover:underline">Posts</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
                <Link href="/shop" className="hover:underline">Shop</Link>
                <CartSummary />
              </div>
            </div>
          </nav>
          <main className="flex-1 container mx-auto p-4">
            {children}
          </main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} Next.js Lab. All rights reserved.</p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
