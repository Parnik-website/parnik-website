import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

const categories = [
  {
    title: "Industrial Raw Materials",
    description:
      "Sourcing and supply of industrial raw materials for manufacturing and production industries.",
    image: "/images/categories/raw-materials.jpg",
  },
  {
    title: "Bearings",
    description:
      "Reliable bearing solutions for industrial, automotive and heavy-duty applications.",
    image: "/images/categories/bearings.jpg",
  },
  {
    title: "Sensors",
    description:
      "Industrial and automotive sensor products supporting modern operational systems.",
    image: "/images/categories/sensors.jpg",
  },
  {
    title: "Technical Components",
    description:
      "Specialized engineering components for industrial and commercial projects.",
    image: "/images/categories/technical-components.jpg",
  },
  {
    title: "Equipment & Spare Parts",
    description:
      "Supply of machinery components, equipment and replacement parts.",
    image: "/images/categories/equipment.jpg",
  },
];

export default function ProductCategories() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold uppercase tracking-wider">
            Product Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#03173D] mt-3">
            Product Categories
          </h2>

          <p className="max-w-3xl mx-auto text-slate-600 mt-5">
            PARNIK provides sourcing and supply solutions across
            multiple industrial sectors, helping customers access
            reliable products through a trusted international network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              href="/products"
              key={category.title}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={600}
                    height={400}
                    className="
                      h-64
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-[#03173D] mb-3">
                    {category.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-5">
                    {category.description}
                  </p>

                  <span className="inline-flex items-center text-amber-500 font-semibold">
                    Explore Category →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}