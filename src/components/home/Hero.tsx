import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <Image
        src="/images/hero/hero.jpg"
        alt="PARNIK Global Trade"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#03173D]/75" />

      <Container>
        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Connecting Manufacturers,
            <br />
            Suppliers & Buyers
            <br />
            Worldwide
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
            PARNIK creates sustainable business opportunities through
            global sourcing, industrial supply, procurement and
            international trade solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/services">
              Explore Services
            </Button>

            <Button href="/contact">
              Send Inquiry
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}