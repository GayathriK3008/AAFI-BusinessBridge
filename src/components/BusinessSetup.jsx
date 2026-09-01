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
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Business Setup & Registration
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Build Your Business
            <span className="block text-blue-600">
              on the Right Foundation
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Get the support you need to establish your business
            with the right structure, registrations and essential
            documentation.
          </p>

        </div>


        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {businessSetupServices.map((service) => (

            <div
              key={service.number}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >

              {/* Number & Arrow */}
              <div className="flex items-center justify-between">

                <span className="text-sm font-bold text-blue-600">
                  {service.number}
                </span>

                <span className="text-xl text-blue-600 transition group-hover:translate-x-1">
                  →
                </span>

              </div>


              {/* Title */}
              <h3 className="mt-8 text-xl font-bold text-slate-950">
                {service.title}
              </h3>


              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {service.description}
              </p>


              {/* Structure Options */}
              {service.options && (
                <div className="mt-5 rounded-xl bg-blue-50 p-4 text-xs font-medium leading-6 text-blue-700">
                  {service.options}
                </div>
              )}


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
                    {service.details}
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


        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-slate-950 px-8 py-10 text-white md:px-12">

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Ready to Start?
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Let's Build Your Business Foundation
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Tell us about your business idea and we'll help
                you identify the right setup requirements.
              </p>

            </div>


            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
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