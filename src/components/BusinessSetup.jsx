import { useState } from "react";

const businessSetupServices = [
  {
    number: "01",
    title: "Company Name Selection",
    description:
      "Get guidance in selecting a suitable and meaningful name for your business.",
    details:
      "We help you understand the important factors to consider when selecting a business name, including relevance, clarity and suitability for your business.",
  },
  {
    number: "02",
    title: "Business Structure Selection",
    description:
      "Choose the right structure based on your business requirements.",
    options: "Proprietorship • Partnership • LLP • Pvt Ltd • OPC",
    details:
      "Understand the available business structures and identify the option that best matches your business requirements, ownership and future plans.",
  },
  {
    number: "03",
    title: "Company Registration",
    description:
      "Support for completing the required company registration process.",
    details:
      "Get assistance in understanding the registration requirements and completing the necessary steps for establishing your business.",
  },
  {
    number: "04",
    title: "GST / Udyam Support",
    description:
      "Assistance with GST and Udyam-related business registration requirements.",
    details:
      "Get guidance on the documentation and process involved in GST and Udyam-related registrations based on your business requirements.",
  },
  {
    number: "05",
    title: "DSC – Digital Signature",
    description:
      "Support for obtaining and using Digital Signature Certificates.",
    details:
      "Get support with the Digital Signature Certificate requirements needed for applicable online business and registration processes.",
  },
  {
    number: "06",
    title: "MOA / AOA",
    description:
      "Documentation support for Memorandum of Association and Articles of Association.",
    details:
      "Get documentation support related to the Memorandum of Association and Articles of Association required during applicable company incorporation processes.",
  },
  {
    number: "07",
    title: "Registered Office & NOC Documentation",
    description:
      "Support for registered office documentation and NOC requirements.",
    details:
      "Get assistance with the documentation required for establishing the registered office and preparing applicable No Objection Certificate requirements.",
  },
  {
    number: "08",
    title: "Director Documentation",
    description:
      "Assistance with documentation required for company directors.",
    details:
      "Get support in understanding and organizing the documentation required for directors during the company setup process.",
  },
  {
    number: "09",
    title: "MCA Incorporation Support",
    description:
      "Support throughout the MCA incorporation process.",
    details:
      "Get step-by-step support throughout the applicable MCA incorporation process and understand the documentation and requirements involved.",
  },
];

function BusinessSetup() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="business-setup"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white md:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">
              Business Setup & Registration
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Build Your Business
            <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              on the Right Foundation
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Get the support you need to establish your business with the right
            structure, registrations and essential documentation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessSetupServices.map((service) => {
            const isSelected = selectedService === service.number;

            return (
              <div
                key={service.number}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300 ${
                  isSelected
                    ? "border-purple-500/60 bg-[#0e1533] shadow-[0_25px_70px_rgba(87,18,170,0.16)]"
                    : "border-slate-800/90 bg-[#0b1128] shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:border-purple-500/50 hover:bg-[#0e1533] hover:shadow-[0_25px_70px_rgba(87,18,170,0.16)]"
                }`}
              >
                {/* Top Accent */}
                <div
                  className={`absolute left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-purple-600 via-violet-400 to-purple-700 transition-transform duration-300 ${
                    isSelected
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />

                {/* Number & Arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.2em] text-violet-400">
                    {service.number}
                  </span>

                  <span className="text-xl text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-400">
                    →
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-8 text-xl font-bold tracking-tight text-white md:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                {/* Structure Options */}
                {service.options && (
                  <div className="mt-5 rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4">
                    <p className="text-xs font-semibold leading-6 text-violet-300">
                      {service.options}
                    </p>
                  </div>
                )}

                {/* Explore Service Button */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedService(
                      isSelected ? null : service.number
                    )
                  }
                  className="mt-7 self-start font-semibold text-violet-400 transition-colors duration-200 hover:text-violet-300"
                >
                  {isSelected
                    ? "Hide Details ↑"
                    : "Explore Service →"}
                </button>

                {/* Service Details */}
                {isSelected && (
                  <div className="mt-5 rounded-2xl border border-purple-500/20 bg-[#080d24] p-5">
                    <p className="text-sm leading-7 text-slate-400">
                      {service.details}
                    </p>

                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl hover:shadow-purple-900/30"
                    >
                      Get Started →
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] px-8 py-10 shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:px-12 md:py-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-400">
                Ready to Start?
              </p>

              <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                Let's Build Your Business Foundation
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Tell us about your business idea and we'll help you identify
                the right setup requirements.
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

export default BusinessSetup;