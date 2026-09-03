const reasons = [
  {
    number: "01",
    title: "End-to-End Support",
    description:
      "Get support across your complete business journey, from setup to growth.",
  },
  {
    number: "02",
    title: "One-Stop Solution",
    description:
      "Bring your business requirements together with one partner instead of managing multiple providers.",
  },
  {
    number: "03",
    title: "Business Focused",
    description:
      "Solutions designed around your business needs, brand presence, marketing and operations.",
  },
  {
    number: "04",
    title: "Growth Support",
    description:
      "Continue building your business with marketing, sales, HR and operational support.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white md:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">
              Why Choose AAFI
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            One Partner for Your
            <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              Complete Business Journey
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            From business setup and branding to marketing, sales, HR and
            operations, AAFI BusinessBridge Solutions brings your business
            requirements together under one roof.
          </p>
        </div>

        {/* ================= REASONS ================= */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group relative overflow-hidden rounded-3xl border border-slate-800/90 bg-[#0b1128] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-[#0e1533] hover:shadow-[0_25px_70px_rgba(87,18,170,0.18)]"
            >
              {/* Hover Accent */}
              <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-purple-600 via-violet-400 to-purple-700 transition-transform duration-300 group-hover:scale-x-100" />

              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-[0.2em] text-violet-400">
                  {reason.number}
                </span>

                <span className="text-xl text-slate-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-400">
                  →
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-10 text-xl font-bold tracking-tight text-white">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {reason.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-8 h-px w-10 bg-slate-700 transition-all duration-300 group-hover:w-16 group-hover:bg-purple-500" />
            </div>
          ))}
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <div className="mt-16 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-400">
                One Connected Approach
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
                Less complexity.
                <span className="text-violet-400">
                  {" "}More focus on growth.
                </span>
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Instead of coordinating multiple providers for different
                business requirements, bring your setup, branding, marketing,
                sales and operations together.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/20 transition duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl hover:shadow-purple-900/30"
            >
              <span>Start Your Journey</span>

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;