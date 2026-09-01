function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl text-center">

        {/* Label */}
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          READY TO GET STARTED?
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
          Turn Your Business Idea
          <span className="block text-blue-400">
            Into Business Growth
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          You bring the business idea. We handle the rest.
          Let's build the right foundation, create your presence,
          reach your customers and support your growth.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="#contact"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Start Your Business →
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            Get a Free Consultation
          </a>

        </div>

        {/* Trust Points */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400">

          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-400">✓</span>
            End-to-End Support
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-400">✓</span>
            Business Setup
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-400">✓</span>
            Growth Support
          </div>

        </div>

      </div>
    </section>
  );
}

export default FinalCTA;