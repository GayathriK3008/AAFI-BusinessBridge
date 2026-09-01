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
]

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />


      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">

          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Why Choose AAFI
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            One Partner for Your
            <span className="block text-blue-400">
              Complete Business Journey
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            From business setup and branding to marketing, sales,
            HR and operations, AAFI BusinessBridge Solutions brings
            your business requirements together under one roof.
          </p>

        </div>


        {/* ================= REASONS ================= */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {reasons.map((reason) => (

            <div
              key={reason.number}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:bg-slate-900 hover:shadow-2xl hover:shadow-blue-950/30"
            >

              {/* Hover Accent */}
              <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-100" />


              {/* Number */}
              <div className="flex items-center justify-between">

                <span className="text-sm font-bold tracking-widest text-blue-400">
                  {reason.number}
                </span>

                <span className="text-xl text-slate-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400">
                  →
                </span>

              </div>


              {/* Title */}
              <h3 className="mt-10 text-xl font-bold">
                {reason.title}
              </h3>


              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {reason.description}
              </p>


              {/* Bottom Line */}
              <div className="mt-8 h-px w-10 bg-slate-700 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-500" />

            </div>

          ))}

        </div>


        {/* ================= BOTTOM STATEMENT ================= */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-10">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                One Connected Approach
              </p>

              <h3 className="mt-4 text-2xl font-bold md:text-3xl">
                Less complexity.
                <span className="text-blue-400">
                  {" "}More focus on growth.
                </span>
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Instead of coordinating multiple providers for different
                business requirements, bring your setup, branding,
                marketing, sales and operations together.
              </p>

            </div>


            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
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
  )
}

export default WhyChooseUs