import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="relative py-32">
      <Image
        src="/images/banners/inquiry-banner.jpg"
        alt="Send Inquiry"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#03173D]/80" />

      <Container>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            Looking for a Reliable Business Partner?
          </h2>

          <p className="max-w-2xl mx-auto mb-8 text-slate-200">
            Contact our team regarding sourcing,
            supply, partnership opportunities
            or product inquiries.
          </p>

          <Button href="/contact">
            Send Inquiry
          </Button>
        </div>
      </Container>
    </section>
  );
}