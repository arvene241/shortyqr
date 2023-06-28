import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";
import NavMobile from "@/components/NavMobile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Shortyqr",
  description: "Shortened the URL's and generate a QR code for it.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable}`}>
        <Provider>
          <Nav />
          <NavMobile />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
