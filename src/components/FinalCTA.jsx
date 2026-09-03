function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white md:py-28"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-700/15 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">

        {/* Label */}
        <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
            Ready to Get Started?
          </p>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          Turn Your Business Idea
          <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
            Into Business Growth
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
          You bring the business idea. We handle the rest. Let's build the
          right foundation, create your presence, reach your customers and
          support your growth.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl hover:shadow-purple-900/35"
          >
            Start Your Business →
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-[#0d1430]/70 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-[#111a3d]"
          >
            Get a Free Consultation
          </a>

        </div>

        {/* Trust Points */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-400">

          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10 text-xs font-bold text-violet-400">
              ✓
            </span>
            End-to-End Support
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10 text-xs font-bold text-violet-400">
              ✓
            </span>
            Business Setup
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10 text-xs font-bold text-violet-400">
              ✓
            </span>
            Growth Support
          </div>

        </div>

      </div>
    </section>
  );
}

export default FinalCTA;