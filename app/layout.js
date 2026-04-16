import { Inter, Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Revord | Digital Loyalty for Local Businesses",
  description:
    "Simple QR-based loyalty cards for local businesses. No apps. No complexity.",
  icons: {
    icon: "/images/logo/Favicon.png",
    shortcut: "/images/logo/Favicon.png",
    apple: "/images/logo/Favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-background text-on-surface antialiased"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

