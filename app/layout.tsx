import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const geologica = Geologica({
  subsets: ["cyrillic"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geologica',
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
        <body className={cn("font-geologica antialiased", geologica.variable)}>{children}</body>
      </html>
    </ClerkProvider >
  );
}
