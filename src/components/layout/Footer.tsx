import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Parnik International Trading
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Reliable sourcing, international procurement,
              industrial products, raw materials and global
              business development solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li>
                <Link href="/services">Services</Link>
              </li>

              <li>
                <Link href="/products">Products</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-2 text-slate-300">
              <p>contact@parnikintl.com</p>
              <p>www.parnikintl.com</p>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400">
          © {new Date().getFullYear()} Parnik International Trading.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}