function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#080d24] px-6 py-24 md:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
              Client Testimonials
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Hear how our connected business support helps entrepreneurs
            and growing businesses move forward with confidence.
          </p>

        </div>

        {/* Testimonial Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Testimonial 1 */}
          <div className="group rounded-3xl border border-slate-800 bg-[#0d1430] p-8 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#111a3d]">

            <div className="flex gap-1 text-violet-400">
              ★ ★ ★ ★ ★
            </div>

            <p className="mt-6 leading-7 text-slate-300">
              “AAFI helped us bring our business requirements together
              and gave us clear direction from the beginning.”
            </p>

            <div className="mt-8 border-t border-slate-800 pt-5">
              <p className="font-bold text-white">
                Business Owner
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Startup Support
              </p>
            </div>

          </div>

          {/* Testimonial 2 */}
          <div className="group rounded-3xl border border-slate-800 bg-[#0d1430] p-8 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#111a3d]">

            <div className="flex gap-1 text-violet-400">
              ★ ★ ★ ★ ★
            </div>

            <p className="mt-6 leading-7 text-slate-300">
              “The team made the process much simpler by helping us
              with branding, digital presence and business support.”
            </p>

            <div className="mt-8 border-t border-slate-800 pt-5">
              <p className="font-bold text-white">
                Business Owner
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Branding & Digital
              </p>
            </div>

          </div>

          {/* Testimonial 3 */}
          <div className="group rounded-3xl border border-slate-800 bg-[#0d1430] p-8 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#111a3d]">

            <div className="flex gap-1 text-violet-400">
              ★ ★ ★ ★ ★
            </div>

            <p className="mt-6 leading-7 text-slate-300">
              “Having different business needs supported under one
              roof helped us focus better on growing our business.”
            </p>

            <div className="mt-8 border-t border-slate-800 pt-5">
              <p className="font-bold text-white">
                Business Owner
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Business Growth
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;