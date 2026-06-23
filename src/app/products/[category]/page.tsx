import Link from "next/link";
import Container from "@/components/ui/Container";
import { productTypes } from "@/data/productTypes";

type Props = {
  params: {
    category: string;
  };
};

export default function CategoryPage({
  params,
}: Props) {
  const items = productTypes.filter(
    (item) =>
      item.category === params.category
  );

  return (
    <Container>

      <div className="py-24">

        <h1 className="text-5xl font-bold mb-12 capitalize">
          {params.category}
        </h1>

        <div className="grid gap-6">

          {items.map((item) => (

            <Link
              key={item.slug}
              href={`/products/${item.category}/${item.slug}`}
              className="
                p-6
                rounded-2xl
                border
                hover:bg-slate-50
              "
            >
              {item.title}
            </Link>

          ))}
        </div>

      </div>

    </Container>
  );
}