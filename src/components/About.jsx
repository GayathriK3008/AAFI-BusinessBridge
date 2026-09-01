function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            About AAFI
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Building Businesses from
            <span className="block text-blue-600">
              Idea to Growth
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            AAFI BusinessBridge Solutions helps entrepreneurs and
            businesses build a strong foundation, create their brand,
            establish their digital presence and support their journey
            towards sustainable business growth.
          </p>

        </div>


        {/* Company Introduction + Vision Mission */}
      <div className="mt-16 grid min-w-0 gap-8 lg:grid-cols-2">

          {/* Company Introduction */}
          <div className="rounded-3xl bg-slate-950 p-8 text-white">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Who We Are
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              Your Business Growth Partner
            </h3>

            <p className="mt-5 leading-7 text-slate-300">
              We bring together business setup, branding, digital
              presence, marketing, sales, HR and operational support
              to help businesses move forward with greater clarity
              and structure.
            </p>

          </div>


          {/* Vision & Mission */}
        <div className="grid min-w-0 gap-8 sm:grid-cols-2">

            {/* Vision */}
            <div className="min-w-0 rounded-3xl border border-slate-200 bg-slate-50 p-7">

              <div className="text-3xl">
                🎯
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Our Vision
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                To become a trusted business support partner for
                entrepreneurs and growing businesses.
              </p>

            </div>


            {/* Mission */}
            <div className="min-w-0 rounded-3xl border border-slate-200 bg-blue-50 p-7">

              <div className="text-3xl">
                🚀
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Our Mission
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                To simplify the journey from starting a business
                to building and growing it through connected support.
              </p>

            </div>

          </div>

        </div>


        {/* What We Do */}
        <div className="mt-20">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              What We Do
            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-950">
              Everything Your Business Needs
            </h3>

          </div>


          {/* Business Journey */}
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {/* Idea */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <span className="text-sm font-bold text-blue-600">
                01
              </span>

              <h4 className="mt-5 text-xl font-bold text-slate-950">
                Idea
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Understand your business idea and identify the
                right requirements.
              </p>

            </div>


            {/* Setup */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <span className="text-sm font-bold text-blue-600">
                02
              </span>

              <h4 className="mt-5 text-xl font-bold text-slate-950">
                Setup
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Build the required business foundation and setup.
              </p>

            </div>


            {/* Build */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <span className="text-sm font-bold text-blue-600">
                03
              </span>

              <h4 className="mt-5 text-xl font-bold text-slate-950">
                Build
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Create your brand, website and digital presence.
              </p>

            </div>


            {/* Grow */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <span className="text-sm font-bold text-blue-600">
                04
              </span>

              <h4 className="mt-5 text-xl font-bold text-slate-950">
                Grow
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Support marketing, sales, HR and ongoing business
                growth.
              </p>

            </div>

          </div>

        </div>


        {/* End-to-End Support */}
        <div className="mt-20 rounded-3xl bg-blue-600 px-8 py-10 text-white md:px-12">

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
                End-to-End Business Support
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                One Partner. Complete Business Support.
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                From business setup and branding to marketing,
                sales, HR and operations, we help connect the
                important pieces of your business journey.
              </p>

            </div>


            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Get Started →
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About