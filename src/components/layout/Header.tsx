"use client";

import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Global Network", href: "/global-network" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/logo/logo.png"
              alt="PARNIK"
              width={170}
              height={60}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  text-slate-700
                  font-medium
                  transition
                  hover:text-[#C9A227]
                "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@parnikintl.com"
              className="
                hidden xl:block
                text-sm
                text-slate-600
              "
            >
              contact@parnikintl.com
            </a>

            <Link
              href="/contact"
              className="
                bg-[#03173D]
                text-white
                px-6
                py-3
                rounded-xl
                font-medium
                transition
                hover:bg-[#05245d]
                hover:-translate-y-0.5
              "
            >
              Send Inquiry
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}