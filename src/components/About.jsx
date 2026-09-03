function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white md:py-28"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">
              About AAFI
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Building Businesses from
            <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              Idea to Growth
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            AAFI BusinessBridge Solutions helps entrepreneurs and businesses
            build a strong foundation, create their brand, establish their
            digital presence and support their journey towards sustainable
            business growth.
          </p>
        </div>

        {/* Company Introduction + Vision Mission */}
        <div className="mt-16 grid min-w-0 gap-8 lg:grid-cols-2">
          {/* Company Introduction */}
          <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple-600/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-400">
                Who We Are
              </p>

              <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                Your Business Growth Partner
              </h3>

              <p className="mt-5 leading-7 text-slate-400">
                We bring together business setup, branding, digital presence,
                marketing, sales, HR and operational support to help businesses
                move forward with greater clarity and structure.
              </p>

              {/* Accent Line */}
              <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-purple-600 to-violet-400" />
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid min-w-0 gap-6 sm:grid-cols-2">
            {/* Vision */}
            <div className="group min-w-0 rounded-3xl border border-slate-800/90 bg-[#0d1430] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-[#111a3d] hover:shadow-[0_20px_60px_rgba(87,18,170,0.14)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-3xl">
                🎯
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Our Vision
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                To become a trusted business support partner for entrepreneurs
                and growing businesses.
              </p>
            </div>

            {/* Mission */}
            <div className="group min-w-0 rounded-3xl border border-slate-800/90 bg-[#0d1430] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-[#111a3d] hover:shadow-[0_20px_60px_rgba(87,18,170,0.14)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-3xl">
                🚀
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Our Mission
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                To simplify the journey from starting a business to building
                and growing it through connected support.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mt-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">
                What We Do
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Everything Your Business Needs
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              From your first idea to ongoing growth, we connect the essential
              pieces needed to build a stronger business.
            </p>
          </div>

          {/* Business Journey */}
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* Idea */}
            <div className="group rounded-2xl border border-slate-800/90 bg-[#0b1128] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-[#0e1533] hover:shadow-[0_20px_50px_rgba(87,18,170,0.12)]">
              <span className="text-sm font-bold tracking-[0.2em] text-violet-400">
                01
              </span>

              <h4 className="mt-5 text-xl font-bold text-white">
                Idea
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Understand your business idea and identify the right
                requirements.
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-16" />
            </div>

            {/* Setup */}
            <div className="group rounded-2xl border border-slate-800/90 bg-[#0b1128] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-[#0e1533] hover:shadow-[0_20px_50px_rgba(87,18,170,0.12)]">
              <span className="text-sm font-bold tracking-[0.2em] text-violet-400">
                02
              </span>

              <h4 className="mt-5 text-xl font-bold text-white">
                Setup
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Build the required business foundation and setup.
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-16" />
            </div>

            {/* Build */}
            <div className="group rounded-2xl border border-slate-800/90 bg-[#0b1128] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-[#0e1533] hover:shadow-[0_20px_50px_rgba(87,18,170,0.12)]">
              <span className="text-sm font-bold tracking-[0.2em] text-violet-400">
                03
              </span>

              <h4 className="mt-5 text-xl font-bold text-white">
                Build
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Create your brand, website and digital presence.
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-16" />
            </div>

            {/* Grow */}
            <div className="group rounded-2xl border border-slate-800/90 bg-[#0b1128] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-[#0e1533] hover:shadow-[0_20px_50px_rgba(87,18,170,0.12)]">
              <span className="text-sm font-bold tracking-[0.2em] text-violet-400">
                04
              </span>

              <h4 className="mt-5 text-xl font-bold text-white">
                Grow
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Support marketing, sales, HR and ongoing business growth.
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-16" />
            </div>
          </div>
        </div>

        {/* End-to-End Support */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] px-8 py-10 shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:px-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-400">
                End-to-End Business Support
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                One Partner.
                <span className="block bg-gradient-to-r from-violet-300 to-purple-500 bg-clip-text text-transparent">
                  Complete Business Support.
                </span>
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                From business setup and branding to marketing, sales, HR and
                operations, we help connect the important pieces of your
                business journey.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl hover:shadow-purple-900/30"
            >
              Get Started →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;