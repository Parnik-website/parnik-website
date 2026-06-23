import Link from "next/link";
import Container from "../ui/Container";

const services = [
  {
    title: "Global Sourcing",
    description:
      "Identification and sourcing of reliable international suppliers.",
  },
  {
    title: "Procurement Support",
    description:
      "Efficient procurement solutions tailored to industrial needs.",
  },
  {
    title: "Trade Facilitation",
    description:
      "Supporting international business transactions and partnerships.",
  },
  {
    title: "Supply Chain Coordination",
    description:
      "Managing communication and coordination across supply networks.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold uppercase tracking-wider">
            Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#03173D] mt-3">
            Business Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                transition
              "
            >
              <h3 className="text-xl font-bold text-[#03173D] mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="
              inline-flex
              bg-[#03173D]
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-[#05245d]
            "
          >
            View All Services
          </Link>
        </div>
      </Container>
    </section>
  );
}