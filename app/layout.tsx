import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nike Air Max Pulse - Tiger Edition",
  description: "Experience the power of Air Max with immersive scrollytelling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
