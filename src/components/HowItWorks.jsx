const steps = [
  {
    number: "01",
    title: "Tell Us Your Business Idea",
    description:
      "Share your business idea, goals and requirements with us so we can understand what you want to build.",
  },
  {
    number: "02",
    title: "Choose the Required Services",
    description:
      "Understand your business requirements and choose the right services and support for your journey.",
  },
  {
    number: "03",
    title: "Complete Business Setup",
    description:
      "Get support with business registration, structure, GST, documentation and other setup requirements.",
  },
  {
    number: "04",
    title: "Build Your Brand & Digital Presence",
    description:
      "Create your brand identity, website and digital presence to establish your business professionally.",
  },
  {
    number: "05",
    title: "Launch Your Business",
    description:
      "Bring your business setup, branding and digital presence together and get ready to launch.",
  },
  {
    number: "06",
    title: "Marketing & Lead Generation",
    description:
      "Promote your business, reach your target audience and generate opportunities through marketing.",
  },
  {
    number: "07",
    title: "Sales, HR & Operations",
    description:
      "Build structured sales, HR and operational systems to manage and support your growing business.",
  },
  {
    number: "08",
    title: "Ongoing Growth Support",
    description:
      "Continue building, improving and growing your business with ongoing support.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white md:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-purple-700/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">
              How It Works
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            A Simple Path from
            <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              Idea to Growth
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            We make your business journey simple by connecting the right
            support at every stage.
          </p>
        </div>

        {/* ================= STEPS ================= */}
        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-500/60 via-purple-500/20 to-transparent lg:block" />

          <div className="space-y-6">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col lg:flex-row ${
                    isEven ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  {/* Step Card */}
                  <div className="group relative w-full lg:w-[46%]">
                    <div className="relative overflow-hidden rounded-3xl border border-slate-800/90 bg-[#0b1128] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-[#0e1533] hover:shadow-[0_25px_70px_rgba(87,18,170,0.18)]">
                      {/* Top Accent */}
                      <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-purple-600 via-violet-400 to-purple-700 transition-transform duration-300 group-hover:scale-x-100" />

                      {/* Number */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold tracking-[0.2em] text-violet-400">
                          STEP {step.number}
                        </span>

                        <span className="text-xl text-slate-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-400">
                          →
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-7 text-xl font-bold tracking-tight text-white md:text-2xl">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 leading-7 text-slate-400">
                        {step.description}
                      </p>

                      {/* Progress */}
                      <div className="mt-7 flex items-center gap-3">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-800">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-purple-600 to-violet-400 transition-all duration-500 group-hover:brightness-125"
                            style={{
                              width: `${((index + 1) / steps.length) * 100}%`,
                            }}
                          />
                        </div>

                        <span className="text-xs font-semibold text-slate-500">
                          {step.number}/08
                        </span>
                      </div>
                    </div>

                    {/* Center Node */}
                    <div
                      className={`absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-[#050816] bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.45)] lg:block ${
                        isEven ? "-left-[8.7%]" : "-right-[8.7%]"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] px-8 py-12 shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-400">
                Ready to Begin?
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Your Business Journey
                <span className="block text-violet-400">
                  Starts With One Conversation
                </span>
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Tell us where you are today and what you want to achieve.
                We'll help you identify the right next steps.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/20 transition duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl hover:shadow-purple-900/30"
            >
              <span>Get Started</span>

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

export default HowItWorks;