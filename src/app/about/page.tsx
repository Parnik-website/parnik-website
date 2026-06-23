import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-[1400px] px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <Image
            src="/images/about/about.jpg"
            alt="About"
            width={800}
            height={600}
            className="rounded-3xl"
          />

          <div>

            <h1 className="text-5xl font-bold mb-6">
              About Us
            </h1>

            <p className="leading-8 text-slate-600">
              PARNIK International Trading Company
              was founded with the goal of creating
              sustainable and trustworthy connections
              between manufacturers, suppliers and
              customers across global markets.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}