import Image from "next/image";
import Container from "../ui/Container";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/about/about.jpg"
              alt="About PARNIK"
              width={800}
              height={500}
              className="rounded-3xl object-cover"
            />
          </div>

          <div>
            <span className="text-[#C89A3B] font-medium">
              About PARNIK
            </span>

            <h2 className="text-4xl font-bold text-[#03173D] mt-3 mb-6">
              Your Trusted Partner in Global Trade
            </h2>

            <p className="text-slate-600 leading-8">
              PARNIK International Trading Company connects
              manufacturers, suppliers and customers worldwide
              through reliable sourcing, procurement and business
              development services.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}