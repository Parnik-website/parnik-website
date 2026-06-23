import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

const categories = [
  {
    title: "Industrial Raw Materials",
    description: "High-quality raw materials for various industries.",
    image: "/images/categories/raw-materials.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#C9A227" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "Bearings",
    description: "Wide range of bearings for all industrial applications.",
    image: "/images/categories/bearings.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#C9A227" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M12 3v2m0 14v2M3 12h2m14 0h2" />
      </svg>
    ),
  },
  {
    title: "Sensors",
    description: "Advanced sensors for precise and reliable performance.",
    image: "/images/categories/sensors.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#C9A227" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    title: "Technical Components",
    description: "Quality components for industrial systems and machinery.",
    image: "/images/categories/technical-components.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#C9A227" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
  },
  {
    title: "Equipment & Spare Parts",
    description: "Reliable equipment and spare parts to keep your operations running.",
    image: "/images/categories/equipment.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#C9A227" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#C9A227] font-semibold uppercase tracking-widest text-sm">
            OUR PRODUCTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#03173D] mt-3 mb-3">
            Industrial Solutions for Every Need
          </h2>
          <div className="w-12 h-1 bg-[#C9A227] mx-auto" />
        </div>

        {/* 5-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 mb-12">
          {categories.map((category) => (
            <Link
              href="/products"
              key={category.title}
              className="group flex flex-col"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={300}
                  height={220}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">{category.icon}</div>
                <h3 className="text-[#03173D] font-bold text-sm mb-2">
                  {category.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#03173D] text-white px-8 py-3.5 text-sm font-bold tracking-wide hover:bg-[#05245d] transition"
          >
            VIEW ALL PRODUCTS
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}