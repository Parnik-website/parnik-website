import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="/images/hero/hero.jpg"
        alt="PARNIK Global Trade"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay: dark on left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03173D]/95 via-[#03173D]/70 to-transparent" />

      <Container>
        <div className="relative z-10 max-w-2xl text-white py-32">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Connecting
            <br />
            Manufacturers,
            <br />
            Suppliers &amp; Buyers
            <br />
            <span className="text-[#C9A227]">Worldwide</span>
          </h1>

          <p className="text-base text-slate-200 mb-10 leading-relaxed max-w-md">
            PARNIK is your trusted partner in global trade, industrial supply
            and business development. We connect opportunities, build
            relationships and deliver value across borders.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#C9A227] text-[#03173D] px-6 py-3 text-sm font-bold tracking-wide hover:bg-[#b8911e] transition"
            >
              EXPLORE PRODUCTS
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 text-sm font-bold tracking-wide hover:bg-white hover:text-[#03173D] transition"
            >
              REQUEST QUOTATION
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}