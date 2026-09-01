function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            CLIENT TESTIMONIALS
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Hear how our connected business support helps entrepreneurs
            and growing businesses move forward with confidence.
          </p>

        </div>

        {/* Testimonial Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Testimonial 1 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            <div className="flex gap-1 text-blue-600">
              ★ ★ ★ ★ ★
            </div>

            <p className="mt-6 leading-7 text-slate-600">
              “AAFI helped us bring our business requirements together
              and gave us clear direction from the beginning.”
            </p>

            <div className="mt-8 border-t border-slate-100 pt-5">
              <p className="font-bold text-slate-950">
                Business Owner
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Startup Support
              </p>
            </div>

          </div>

          {/* Testimonial 2 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            <div className="flex gap-1 text-blue-600">
              ★ ★ ★ ★ ★
            </div>

            <p className="mt-6 leading-7 text-slate-600">
              “The team made the process much simpler by helping us
              with branding, digital presence and business support.”
            </p>

            <div className="mt-8 border-t border-slate-100 pt-5">
              <p className="font-bold text-slate-950">
                Business Owner
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Branding & Digital
              </p>
            </div>

          </div>

          {/* Testimonial 3 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            <div className="flex gap-1 text-blue-600">
              ★ ★ ★ ★ ★
            </div>

            <p className="mt-6 leading-7 text-slate-600">
              “Having different business needs supported under one
              roof helped us focus better on growing our business.”
            </p>

            <div className="mt-8 border-t border-slate-100 pt-5">
              <p className="font-bold text-slate-950">
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