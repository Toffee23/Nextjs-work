import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar"; // Import your new Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jummall | Premium E-commerce",
  description: "One store, endless possibilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}