"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICES", href: "/services" },
  {
    name: "PRODUCTS",
    href: "/products",
    dropdown: [
      { name: "Industrial Raw Materials", href: "/products/raw-materials" },
      { name: "Bearings", href: "/products/bearings" },
      { name: "Sensors", href: "/products/sensors" },
      { name: "Technical Components", href: "/products/technical-components" },
      { name: "Equipment & Spare Parts", href: "/products/equipment" },
    ],
  },
  { name: "GLOBAL NETWORK", href: "/global-network" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#03173D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="PARNIK"
              width={160}
              height={55}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navigation.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button className="flex items-center gap-1 text-white text-sm font-semibold tracking-wide hover:text-[#C9A227] transition border-b-2 border-transparent hover:border-[#C9A227] pb-1">
                    {item.name}
                    <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {productsOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl py-2 z-50">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-[#C9A227] transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white text-sm font-semibold tracking-wide hover:text-[#C9A227] transition border-b-2 border-transparent hover:border-[#C9A227] pb-1"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="border border-[#C9A227] text-[#C9A227] px-5 py-2.5 rounded text-sm font-bold tracking-wide hover:bg-[#C9A227] hover:text-[#03173D] transition"
            >
              REQUEST QUOTATION
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-white/10">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-white text-sm font-semibold hover:text-[#C9A227] transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 pb-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block py-2 text-slate-300 text-sm hover:text-[#C9A227] transition"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="inline-block mt-4 border border-[#C9A227] text-[#C9A227] px-5 py-2.5 rounded text-sm font-bold"
              onClick={() => setMobileOpen(false)}
            >
              REQUEST QUOTATION
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}