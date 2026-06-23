import Container from "../ui/Container";

const reasons = [
  "Trusted Network",
  "Reliable Sourcing",
  "Market Development",
  "Quality Assurance",
  "Long-Term Collaboration",
];

export default function WhyParnik() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#03173D]">
            Why PARNIK
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="p-6 rounded-2xl bg-white shadow"
            >
              <h3 className="font-medium text-center">
                {reason}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}