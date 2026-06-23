import Image from "next/image";
import Container from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <Container>

      <div className="py-24">

        <div className="grid lg:grid-cols-2 gap-12">

          <Image
            src="/images/contact/contact.jpg"
            alt="Contact"
            width={800}
            height={600}
            className="rounded-3xl"
          />

          <form className="space-y-4">

            <input
              placeholder="Name"
              className="w-full border p-3 rounded-xl"
            />

            <input
              placeholder="Email"
              className="w-full border p-3 rounded-xl"
            />

            <input
              placeholder="Company"
              className="w-full border p-3 rounded-xl"
            />

            <textarea
              rows={6}
              placeholder="Message"
              className="w-full border p-3 rounded-xl"
            />

            <button
              className="
                bg-[#C89A3B]
                text-white
                px-6
                py-3
                rounded-xl
              "
            >
              Send Inquiry
            </button>

          </form>

        </div>

      </div>

    </Container>
  );
}