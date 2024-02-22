import type { Metadata } from "next";
import { Georama } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const georama = Georama({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-georama',
});

export const metadata: Metadata = {
  title: "PhotoFlash",
  description: "AI-powered photo editing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#0E0AE6' }
    }}>
      <html lang="en">
        <body className={cn("font-georama antialiased", georama.variable)}>{children}</body>
      </html>
    </ClerkProvider >
  );
}
