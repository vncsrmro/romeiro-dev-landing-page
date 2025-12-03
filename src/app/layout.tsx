import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "INOVASYS | Soluções Digitais de Alta Performance",
  description: "Transformamos ideias em experiências digitais que desafiam a gravidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/30 selection:text-white",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
