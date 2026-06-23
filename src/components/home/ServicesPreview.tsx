import Container from "../ui/Container";

const services = [
  "International Procurement",
  "Industrial Supply",
  "Import & Export Management",
  "Supply Chain Management",
  "Market Development",
  "Trade Consulting",
];

export default function ServicesPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#03173D]">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="
                p-8
                rounded-3xl
                border
                hover:-translate-y-2
                transition
                shadow-sm
                hover:shadow-xl
              "
            >
              <h3 className="font-semibold text-xl text-[#03173D]">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}