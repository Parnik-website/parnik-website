import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const categories = [
  {
    title: "Bearings",
    slug: "bearings",
    image: "/images/categories/bearings.jpg",
  },

  {
    title: "Sensors",
    slug: "sensors",
    image: "/images/categories/sensors.jpg",
  },

  {
    title: "Technical Components",
    slug: "technical-components",
    image:
      "/images/categories/technical-components.jpg",
  },

  {
    title: "Equipment & Spare Parts",
    slug: "equipment-spare-parts",
    image: "/images/categories/equipment.jpg",
  },

  {
    title: "Industrial Raw Materials",
    slug: "industrial-raw-materials",
    image:
      "/images/categories/raw-materials.jpg",
  },
];

export default function ProductsPage() {
  return (
    <Container>

      <div className="py-24">

        <h1 className="text-5xl font-bold mb-12">
          Products
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((item) => (

            <Link
              href={`/products/${item.slug}`}
              key={item.slug}
            >

              <div className="rounded-3xl overflow-hidden shadow-lg">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="h-64 object-cover"
                />

                <div className="p-6 bg-white">

                  <h2 className="font-semibold text-xl">
                    {item.title}
                  </h2>

                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>

    </Container>
  );
}