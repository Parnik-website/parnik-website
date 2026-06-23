import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

const categories = [
  {
    title: "Industrial Raw Materials",
    image: "/images/categories/raw-materials.jpg",
  },
  {
    title: "Bearings",
    image: "/images/categories/bearings.jpg",
  },
  {
    title: "Sensors",
    image: "/images/categories/sensors.jpg",
  },
  {
    title: "Technical Components",
    image: "/images/categories/technical-components.jpg",
  },
  {
    title: "Equipment & Spare Parts",
    image: "/images/categories/equipment.jpg",
  },
];

export default function ProductCategories() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#03173D]">
            Product Categories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              href="/products"
              key={category.title}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={600}
                  height={400}
                  className="
                    h-64
                    w-full
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-500
                  "
                />

                <div className="p-6 bg-white">
                  <h3 className="font-semibold text-xl text-[#03173D]">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}