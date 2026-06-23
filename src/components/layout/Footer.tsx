import Link from "next/link";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#03173D] text-white">
      <Container>
        <div className="py-16 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              PARNIK
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Global sourcing, procurement and international
              trade solutions for industrial and commercial
              sectors.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/products">Products</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-slate-300">
              <p>contact@parnikintl.com</p>
              <p>www.parnikintl.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-slate-400">
          © {new Date().getFullYear()} PARNIK. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}