import Link from "next/link";
import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="bg-[#03173D] py-16">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Looking for a Trusted Business Partner?
            </h2>
            <p className="text-slate-300 text-base">
              Let&apos;s discuss how we can support your business growth.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C9A227] text-[#03173D] px-8 py-4 text-sm font-bold tracking-wide hover:bg-[#b8911e] transition whitespace-nowrap"
            >
              REQUEST QUOTATION
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}