import Container from "../ui/Container";

const items = [
  {
    title: "Global Trade",
    description:
      "Connecting suppliers and buyers across international markets.",
  },
  {
    title: "Reliable Sourcing",
    description:
      "Trusted procurement and supply chain support.",
  },
  {
    title: "Industrial Expertise",
    description:
      "Serving industrial sectors with practical solutions.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "Building sustainable business relationships worldwide.",
  },
];

export default function TrustIndicators() {
  return (
    <section className="bg-white py-14 border-b border-slate-200">
      <Container>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="
                bg-slate-50
                rounded-2xl
                p-6
                border
                border-slate-200
                hover:border-amber-400
                transition
              "
            >
              <h3 className="text-[#03173D] font-bold text-lg mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}