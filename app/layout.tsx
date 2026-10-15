import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hello-world.vercel.app"),
  title: {
    default: "Hello World — Modern Next.js Starter",
    template: "%s | Hello World",
  },
  description:
    "A clean, production-ready Next.js 14 + TypeScript + Tailwind CSS starter.",
  openGraph: {
    title: "Hello World — Modern Next.js Starter",
    description:
      "A clean, production-ready Next.js 14 + TypeScript + Tailwind CSS starter.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
