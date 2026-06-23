import Link from "next/link";

type Variant = "primary" | "outline";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition hover:-translate-y-1";

  const variants: Record<Variant, string> = {
    primary: "bg-[#C89A3B] text-white",
    outline: "border border-[#C89A3B] text-[#C89A3B] hover:bg-[#C89A3B] hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
