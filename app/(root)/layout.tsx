import type { Metadata } from "next";

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
    <main className="root">
      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </main>
  );
}
