"use client";

import { Dialog } from "@headlessui/react";

type Props = {
  open: boolean;
  onClose: () => void;
  product?: string;
};

export default function InquiryDrawer({
  open,
  onClose,
  product,
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 bg-black/40"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 w-full max-w-lg bg-white p-8 overflow-y-auto">

        <Dialog.Title className="text-2xl font-bold mb-6">
          Send Inquiry
        </Dialog.Title>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Name *"
            className="w-full border rounded-xl p-3"
          />

          <input
            type="email"
            placeholder="Email *"
            className="w-full border rounded-xl p-3"
          />

          <input
            type="text"
            placeholder="Company"
            className="w-full border rounded-xl p-3"
          />

          <textarea
            rows={6}
            defaultValue={
              product
                ? `Product Inquiry:

${product}

`
                : ""
            }
            className="w-full border rounded-xl p-3"
          />

          <button
            type="submit"
            className="
              w-full
              bg-[#C89A3B]
              text-white
              py-3
              rounded-xl
            "
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </Dialog>
  );
}