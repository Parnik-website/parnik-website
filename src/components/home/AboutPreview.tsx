import Link from "next/link";
import Container from "../ui/Container";

const stats = [
  {
    value: "5+",
    label: "Regions",
    description: "Global presence across key regions",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#C9A227" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
  {
    value: "100+",
    label: "Partners",
    description: "Trusted manufacturers and suppliers",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#C9A227" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
      </svg>
    ),
  },
  {
    value: "1000+",
    label: "Products",
    description: "Wide range of industrial products",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#C9A227" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    value: "10+",
    label: "Years Experience",
    description: "Delivering value worldwide",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#C9A227" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function AboutPreview() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="uppercase tracking-widest text-[#C9A227] font-semibold text-sm">
              ABOUT PARNIK
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#03173D] mt-4 mb-6 leading-tight">
              Building Connections.
              <br />
              Creating Value.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-md">
              PARNIK International Trading Company is a global trade and
              business development partner. We specialize in international
              procurement, industrial supply and connecting manufacturers,
              suppliers and buyers across global markets.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#03173D] text-white px-6 py-3 text-sm font-bold tracking-wide hover:bg-[#05245d] transition"
            >
              LEARN MORE ABOUT US
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center"
              >
                <div className="mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-[#C9A227] mb-1">
                  {stat.value}
                </div>
                <div className="text-[#03173D] font-bold text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-slate-500 text-xs leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}