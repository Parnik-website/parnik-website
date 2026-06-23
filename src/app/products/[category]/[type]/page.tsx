"use client";

import Image from "next/image";
import { useState } from "react";

import Container from "@/components/ui/Container";
import InquiryDrawer from "@/components/inquiry/InquiryDrawer";

import { productTypes } from "@/data/productTypes";

type Props = {
  params: {
    category: string;
    type: string;
  };
};

export default function ProductTypePage({
  params,
}: Props) {

  const [open, setOpen] =
    useState(false);

  const product =
    productTypes.find(
      (item) =>
        item.slug === params.type
    );

  if (!product)
    return <div>Not Found</div>;

  return (
    <>
      <Container>

        <div className="py-24">

          <div className="grid lg:grid-cols-2 gap-12">

            <Image
              src={product.image}
              alt={product.title}
              width={700}
              height={500}
              className="rounded-3xl"
            />

            <div>

              <h1 className="text-5xl font-bold mb-6">
                {product.title}
              </h1>

              <p className="mb-8">
                {product.description}
              </p>

              <h3 className="font-semibold mb-4">
                Applications
              </h3>

              <ul className="space-y-2 mb-8">

                {product.applications.map(
                  (app) => (
                    <li key={app}>
                      • {app}
                    </li>
                  )
                )}

              </ul>

              <button
                onClick={() =>
                  setOpen(true)
                }
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

            </div>

          </div>

        </div>

      </Container>

      <InquiryDrawer
        open={open}
        onClose={() =>
          setOpen(false)
        }
        product={product.title}
      />
    </>
  );
}