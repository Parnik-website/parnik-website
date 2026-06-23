import Container from "../ui/Container";

const items = [
  "Trusted Partnerships",
  "Global Reach",
  "Industrial Solutions",
  "Business Development",
  "Supply Chain Expertise",
];

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid md:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item}
              className="p-6 rounded-2xl border text-center shadow-sm hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-[#03173D]">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}