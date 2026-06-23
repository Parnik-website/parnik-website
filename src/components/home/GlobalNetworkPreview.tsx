import Image from "next/image";
import Container from "../ui/Container";

export default function GlobalNetworkPreview() {
  return (
    <section className="relative section-padding overflow-hidden">
      <Image
        src="/images/network/global-network.jpg"
        alt="Global Network"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#03173D]/85" />

      <Container>
        <div className="relative z-10 max-w-3xl text-white">
          <span className="uppercase tracking-[0.2em] text-[#C9A227]">
            Global Network
          </span>

          <h2 className="text-5xl mt-4 mb-8">
            Global Reach.
            <br />
            Local Understanding.
          </h2>

          <p className="text-xl text-slate-200 leading-9">
            Through an international network of manufacturers,
            suppliers and buyers, PARNIK helps businesses access
            opportunities across multiple markets and industries.
          </p>
        </div>
      </Container>
    </section>
  );
}