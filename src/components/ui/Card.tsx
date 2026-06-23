type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-[#C89A3B]/40 ${className}`}
    >
      {children}
    </div>
  );
}
