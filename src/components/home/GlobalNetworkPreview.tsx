import Image from "next/image";
import Container from "../ui/Container";

export default function GlobalNetworkPreview() {
  return (
    <section className="py-24 bg-[#03173D] text-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Global Network
            </h2>

            <p className="text-slate-300 leading-8">
              Leveraging a trusted international network
              of suppliers, manufacturers and buyers
              across multiple regions.
            </p>

            <ul className="mt-8 space-y-3">
              <li>Europe</li>
              <li>Middle East</li>
              <li>East Asia</li>
              <li>South Asia</li>
              <li>North Africa</li>
            </ul>
          </div>

          <Image
            src="/images/network/global-network.jpg"
            alt="Global Network"
            width={800}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </Container>
    </section>
  );
}