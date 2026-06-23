import Image from "next/image";
import Button from "../ui/Button";
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

      <div className="absolute inset-0 bg-gradient-to-r from-[#03173D]/90 via-[#03173D]/75 to-[#03173D]/60" />

      <Container>
        <div className="relative z-10 max-w-4xl text-white py-24">
          <span className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
            Global Trade • Industrial Supply • Procurement
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Connecting
            <span className="text-amber-400"> Manufacturers</span>,
            <br />
            Suppliers & Buyers
            <br />
            Worldwide
          </h1>

          <p className="text-xl text-slate-200 mb-10 max-w-3xl leading-relaxed">
            PARNIK creates sustainable business opportunities through
            international sourcing, industrial supply, procurement,
            logistics coordination and global market development.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Button href="/services">
              Explore Services
            </Button>

            <Button href="/contact">
              Send Inquiry
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-5">
              <h3 className="text-3xl font-bold text-amber-400 mb-2">
                Global
              </h3>
              <p className="text-slate-200">
                International supplier and customer network
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-5">
              <h3 className="text-3xl font-bold text-amber-400 mb-2">
                B2B
              </h3>
              <p className="text-slate-200">
                Long-term commercial partnerships
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-5">
              <h3 className="text-3xl font-bold text-amber-400 mb-2">
                End-to-End
              </h3>
              <p className="text-slate-200">
                Procurement, logistics and trade support
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}