import { useState } from "react";

const salesServices = [
  {
    number: "01",
    title: "Lead Management",
    description:
      "Organize and manage your business leads so potential customers can be handled effectively.",
    icon: "🎯",
  },
  {
    number: "02",
    title: "Customer Follow-up System",
    description:
      "Create a structured follow-up process to stay connected with potential and existing customers.",
    icon: "🔄",
  },
  {
    number: "03",
    title: "Sales Pitch / Script",
    description:
      "Develop clear and professional sales pitches and scripts for customer conversations.",
    icon: "🗣️",
  },
  {
    number: "04",
    title: "Company Presentation / Sales PPT",
    description:
      "Create professional presentations that help communicate your company and offerings.",
    icon: "📊",
  },
  {
    number: "05",
    title: "CRM Setup",
    description:
      "Set up a customer relationship management system to organize sales activities and customer information.",
    icon: "💻",
  },
  {
    number: "06",
    title: "Customer Database Management",
    description:
      "Maintain structured customer information to support better follow-up and sales management.",
    icon: "🗂️",
  },
  {
    number: "07",
    title: "Sales Funnel Setup",
    description:
      "Create a structured sales journey from initial lead interaction through conversion.",
    icon: "📈",
  },
  {
    number: "08",
    title: "Referral & Partner Marketing",
    description:
      "Build referral and partner opportunities to expand your customer reach.",
    icon: "🤝",
  },
  {
    number: "09",
    title: "Vendor / Business Partnership Support",
    description:
      "Support business partnerships and vendor relationships that can help your business grow.",
    icon: "🏢",
  },
];

function SalesSupport() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="sales-hr"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white md:py-28"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">
              Sales & Business Support
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Turn Leads Into
            <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              Business Opportunities
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Build structured sales processes, manage customer relationships
            and create systems that support business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {salesServices.map((service) => {
            const isSelected = selectedService === service.number;

            return (
              <div
                key={service.number}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300 ${
                  isSelected
                    ? "border-purple-500/60 bg-[#111a3d] shadow-[0_25px_70px_rgba(87,18,170,0.16)]"
                    : "border-slate-800/90 bg-[#0d1430] shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:border-purple-500/50 hover:bg-[#111a3d] hover:shadow-[0_25px_70px_rgba(87,18,170,0.16)]"
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

                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-2xl shadow-inner shadow-purple-900/10">
                    {service.icon}
                  </div>

                  <span className="text-sm font-bold tracking-[0.2em] text-violet-400">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-7 text-xl font-bold tracking-tight text-white md:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                {/* Explore Service */}
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
                      {service.description}
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

        {/* Sales Process */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] p-8 text-white shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:p-12">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-400">
              Sales Support
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Build a Better Sales Process
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              Organize your leads, follow up consistently, manage customer
              information and create a structured path from enquiry to
              business opportunity.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative mt-10 grid gap-4 md:grid-cols-4">
            {/* Capture */}
            <div className="group rounded-2xl border border-slate-800 bg-[#080d24] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0d1430]">
              <span className="text-sm font-bold tracking-[0.15em] text-violet-400">
                01
              </span>

              <h4 className="mt-3 font-bold text-white">
                Capture
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Organize incoming leads.
              </p>
            </div>

            {/* Follow Up */}
            <div className="group rounded-2xl border border-slate-800 bg-[#080d24] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0d1430]">
              <span className="text-sm font-bold tracking-[0.15em] text-violet-400">
                02
              </span>

              <h4 className="mt-3 font-bold text-white">
                Follow Up
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Stay connected with prospects.
              </p>
            </div>

            {/* Convert */}
            <div className="group rounded-2xl border border-slate-800 bg-[#080d24] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0d1430]">
              <span className="text-sm font-bold tracking-[0.15em] text-violet-400">
                03
              </span>

              <h4 className="mt-3 font-bold text-white">
                Convert
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Move opportunities through the sales process.
              </p>
            </div>

            {/* Grow */}
            <div className="group rounded-2xl border border-slate-800 bg-[#080d24] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0d1430]">
              <span className="text-sm font-bold tracking-[0.15em] text-violet-400">
                04
              </span>

              <h4 className="mt-3 font-bold text-white">
                Grow
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Build long-term customer relationships.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="relative mt-10">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl hover:shadow-purple-900/30"
            >
              Improve Your Sales Process →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalesSupport;