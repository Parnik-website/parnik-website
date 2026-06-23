"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="Parnik International Trading"
              width={180}
              height={60}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>

            <Link href="/about" className="hover:text-blue-700">
              About
            </Link>

            <Link href="/services" className="hover:text-blue-700">
              Services
            </Link>

            <Link href="/products" className="hover:text-blue-700">
              Products
            </Link>

            <Link href="/global-network" className="hover:text-blue-700">
              Global Network
            </Link>

            <Link href="/contact" className="hover:text-blue-700">
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}