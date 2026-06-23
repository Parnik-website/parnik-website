type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: Props) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C89A3B]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-[#bfc5cc] md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
