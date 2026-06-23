import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="section-padding navy-gradient">
      <Container>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl mb-8">
            Ready To Start A Business
            Conversation?
          </h2>

          <p className="text-xl text-slate-300 mb-10">
            Discuss sourcing, procurement, industrial supply
            requirements or partnership opportunities with our team.
          </p>

          <Button
            href="/contact"
            className="text-lg px-8 py-4"
          >
            Send Inquiry
          </Button>
        </div>
      </Container>
    </section>
  );
}