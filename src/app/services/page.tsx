const services = [
  "International Procurement",
  "Industrial Supply",
  "Import & Export Management",
  "Supply Chain Management",
  "Market Development",
  "Trade Consulting",
  "Supplier Assessment",
  "B2B Relationship Development",
];

export default function ServicesPage() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-[1400px] px-6">

        <h1 className="text-5xl font-bold mb-12">
          Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service) => (
            <div
              key={service}
              className="border rounded-2xl p-6"
            >
              {service}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}