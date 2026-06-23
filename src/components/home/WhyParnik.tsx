import Container from "../ui/Container";

const points = [
  "Global supplier and customer network",
  "Reliable sourcing and procurement support",
  "Industrial and commercial market expertise",
  "Long-term partnership approach",
  "Efficient communication and coordination",
  "Commitment to quality and trust",
];

export default function WhyParnik() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-500 font-semibold uppercase tracking-wider">
              Why Parnik
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#03173D] mt-3 mb-6">
              Your Trusted Business Partner
            </h2>

            <p className="text-slate-600 leading-relaxed">
              We help businesses access international markets,
              suppliers and opportunities through reliable trade,
              sourcing and procurement solutions.
            </p>
          </div>

          <div className="grid gap-4">
            {points.map((point) => (
              <div
                key={point}
                className="
                  bg-slate-50
                  border
                  border-slate-200
                  rounded-2xl
                  p-5
                "
              >
                <span className="text-[#03173D] font-medium">
                  ✓ {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}