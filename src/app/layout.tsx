import type { Metadata } from "next";
import { CartProvider } from "@/components/cart/CartProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "CCTV Care | Professional surveillance solutions",
    template: "%s | CCTV Care",
  },
  description:
    "Professional CCTV installation, surveillance equipment and technical support across Nigeria.",
  openGraph: {
    title: "CCTV Care",
    description: "Security you can see. Confidence you can feel.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
