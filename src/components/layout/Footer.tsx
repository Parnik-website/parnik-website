import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#03173D] text-white">
      <Container>
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10">

          {/* Column 1: Logo + tagline + socials */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo/logo.png"
              alt="PARNIK"
              width={140}
              height={50}
              className="mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Connecting Global Markets
              <br />
              Through Trusted Trade
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C9A227] hover:text-[#C9A227] transition"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="mailto:contact@parnikintl.com"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C9A227] hover:text-[#C9A227] transition"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C9A227] hover:text-[#C9A227] transition"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-bold text-sm tracking-wider mb-5 uppercase">
              Company
            </h4>
            <div className="flex flex-col gap-3 text-slate-400 text-sm">
              <Link href="/about" className="hover:text-[#C9A227] transition">About Us</Link>
              <Link href="/services" className="hover:text-[#C9A227] transition">Services</Link>
              <Link href="/global-network" className="hover:text-[#C9A227] transition">Global Network</Link>
              <Link href="/contact" className="hover:text-[#C9A227] transition">Contact Us</Link>
            </div>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="font-bold text-sm tracking-wider mb-5 uppercase">
              Products
            </h4>
            <div className="flex flex-col gap-3 text-slate-400 text-sm">
              <Link href="/products/raw-materials" className="hover:text-[#C9A227] transition">Industrial Raw Materials</Link>
              <Link href="/products/bearings" className="hover:text-[#C9A227] transition">Bearings</Link>
              <Link href="/products/sensors" className="hover:text-[#C9A227] transition">Sensors</Link>
              <Link href="/products/technical-components" className="hover:text-[#C9A227] transition">Technical Components</Link>
              <Link href="/products/equipment" className="hover:text-[#C9A227] transition">Equipment & Spare Parts</Link>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-sm tracking-wider mb-5 uppercase">
              Contact
            </h4>
            <div className="flex flex-col gap-4 text-slate-400 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A227]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>contact@parnikintl.com</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A227]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+98 000 000 0000</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A227]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Global Operations</span>
              </div>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h4 className="font-bold text-sm tracking-wider mb-5 uppercase">
              Newsletter
            </h4>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Stay updated with our latest products and services.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm px-4 py-2.5 rounded-l focus:outline-none focus:border-[#C9A227]"
              />
              <button
                className="bg-[#C9A227] px-4 py-2.5 rounded-r hover:bg-[#b8911e] transition"
                aria-label="Subscribe"
              >
                <svg className="w-4 h-4 text-[#03173D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© 2024 PARNIK International Trading Company. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#C9A227] transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#C9A227] transition">Terms of Use</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}