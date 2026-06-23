import Image from "next/image";

export default function GlobalNetworkPage() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-[1400px] px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <h1 className="text-5xl font-bold mb-6">
              Global Network
            </h1>

            <ul className="space-y-4 text-lg">
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
            width={900}
            height={600}
            className="rounded-3xl"
          />

        </div>

      </div>

    </section>
  );
}