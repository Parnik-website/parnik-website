import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <Image
              src="/images/about/about.jpg"
              alt="About PARNIK"
              width={800}
              height={600}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>

          <div>
            <span className="uppercase tracking-[0.2em] text-[#C9A227] font-semibold">
              About Parnik
            </span>

            <h2 className="text-5xl text-[#03173D] mt-4 mb-8">
              Your Trusted Partner In International Trade
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-8">
              PARNIK supports industrial and commercial businesses
              through sourcing, procurement, supply chain coordination
              and international market development.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-slate-50 rounded-2xl p-5">
                <h3 className="font-bold text-[#03173D]">
                  Global Trade
                </h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5">
                <h3 className="font-bold text-[#03173D]">
                  Procurement
                </h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5">
                <h3 className="font-bold text-[#03173D]">
                  Industrial Supply
                </h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5">
                <h3 className="font-bold text-[#03173D]">
                  Strategic Sourcing
                </h3>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex bg-[#03173D] text-white px-7 py-4 rounded-xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}