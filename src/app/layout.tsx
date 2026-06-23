import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title:
    "PARNIK International Trading Company",
  description:
    "Global Sourcing, Industrial Supply and International Trade Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}