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
]

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white px-6 py-24"
    >

      {/* Background Decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">

          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              How It Works
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            A Simple Path from
            <span className="block text-blue-600">
              Idea to Growth
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We make your business journey simple by connecting the
            right support at every stage.
          </p>

        </div>


        {/* ================= STEPS ================= */}
        <div className="relative mt-16">

          {/* Connecting Line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 lg:block" />


          <div className="space-y-6">

            {steps.map((step, index) => {

              const isEven = index % 2 === 1

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col lg:flex-row ${
                    isEven ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >

                  {/* Step Card */}
                  <div className="group relative w-full lg:w-[46%]">

                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl">

                      {/* Number */}
                      <div className="flex items-center justify-between">

                        <span className="text-sm font-bold tracking-widest text-blue-600">
                          STEP {step.number}
                        </span>

                        <span className="text-xl text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600">
                          →
                        </span>

                      </div>


                      {/* Title */}
                      <h3 className="mt-7 text-xl font-bold tracking-tight text-slate-950 md:text-2xl">
                        {step.title}
                      </h3>


                      {/* Description */}
                      <p className="mt-4 leading-7 text-slate-600">
                        {step.description}
                      </p>


                      {/* Progress */}
                      <div className="mt-7 flex items-center gap-3">

                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                          <div
                            className="h-full rounded-full bg-blue-600 transition-all duration-500 group-hover:w-full"
                            style={{
                              width: `${((index + 1) / steps.length) * 100}%`,
                            }}
                          />
                        </div>

                        <span className="text-xs font-semibold text-slate-400">
                          {step.number}/08
                        </span>

                      </div>

                    </div>


                    {/* Center Node */}
                    <div
                      className={`absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-white bg-blue-600 shadow-md lg:block ${
                        isEven
                          ? "-left-[8.7%]"
                          : "-right-[8.7%]"
                      }`}
                    />

                  </div>

                </div>
              )
            })}

          </div>

        </div>


        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-slate-950 px-8 py-12 text-white md:px-12">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Ready to Begin?
              </p>

              <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                Your Business Journey
                <span className="block text-blue-400">
                  Starts With One Conversation
                </span>
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                Tell us where you are today and what you want to achieve.
                We'll help you identify the right next steps.
              </p>

            </div>


            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
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
  )
}

export default HowItWorks