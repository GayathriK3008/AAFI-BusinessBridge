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
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Sales & Business Support
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Turn Leads Into
            <span className="block text-blue-600">
              Business Opportunities
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Build structured sales processes, manage customer
            relationships and create systems that support business growth.
          </p>

        </div>


        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {salesServices.map((service) => (

            <div
              key={service.number}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl"
            >

              {/* Top Row */}
              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                  {service.icon}
                </div>

                <span className="text-sm font-bold text-blue-600">
                  {service.number}
                </span>

              </div>


              {/* Title */}
              <h3 className="mt-7 text-xl font-bold text-slate-950">
                {service.title}
              </h3>


              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {service.description}
              </p>


              {/* Explore Service Button */}
              <button
                type="button"
                onClick={() =>
                  setSelectedService(
                    selectedService === service.number
                      ? null
                      : service.number
                  )
                }
                className="mt-7 self-start font-semibold text-blue-600 transition hover:text-blue-700"
              >
                {selectedService === service.number
                  ? "Hide Details ↑"
                  : "Explore Service →"}
              </button>


              {/* Service Details */}
              {selectedService === service.number && (

                <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">

                  <p className="text-sm leading-7 text-slate-700">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Get Started →
                  </a>

                </div>

              )}

            </div>

          ))}

        </div>


        {/* Sales Process */}
        <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-white md:p-12">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Sales Support
            </p>

            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              Build a Better Sales Process
            </h3>

            <p className="mt-5 leading-7 text-slate-300">
              Organize your leads, follow up consistently, manage
              customer information and create a structured path from
              enquiry to business opportunity.
            </p>

          </div>


          {/* Process Steps */}
          <div className="mt-10 grid gap-4 md:grid-cols-4">

            {/* Capture */}
            <div className="rounded-2xl bg-slate-900 p-5">

              <span className="text-sm font-bold text-blue-400">
                01
              </span>

              <h4 className="mt-3 font-bold">
                Capture
              </h4>

              <p className="mt-2 text-sm text-slate-400">
                Organize incoming leads.
              </p>

            </div>


            {/* Follow Up */}
            <div className="rounded-2xl bg-slate-900 p-5">

              <span className="text-sm font-bold text-blue-400">
                02
              </span>

              <h4 className="mt-3 font-bold">
                Follow Up
              </h4>

              <p className="mt-2 text-sm text-slate-400">
                Stay connected with prospects.
              </p>

            </div>


            {/* Convert */}
            <div className="rounded-2xl bg-slate-900 p-5">

              <span className="text-sm font-bold text-blue-400">
                03
              </span>

              <h4 className="mt-3 font-bold">
                Convert
              </h4>

              <p className="mt-2 text-sm text-slate-400">
                Move opportunities through the sales process.
              </p>

            </div>


            {/* Grow */}
            <div className="rounded-2xl bg-slate-900 p-5">

              <span className="text-sm font-bold text-blue-400">
                04
              </span>

              <h4 className="mt-3 font-bold">
                Grow
              </h4>

              <p className="mt-2 text-sm text-slate-400">
                Build long-term customer relationships.
              </p>

            </div>

          </div>


          {/* CTA */}
          <div className="mt-10">

            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
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