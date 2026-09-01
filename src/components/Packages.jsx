import { useState } from "react";

const packages = [
  {
    name: "Starter",
    price: "₹9,999",
    description:
      "A practical starting point for entrepreneurs who are beginning their business journey.",
    features: [
      "Business Setup Support",
      "Basic Branding Support",
      "Essential Digital Setup",
      "Initial Business Guidance",
    ],
    details:
      "The Starter package is designed for entrepreneurs who are beginning their business journey. Get essential business setup support, basic branding guidance, digital setup and initial direction to establish your business foundation.",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹19,999",
    description:
      "A growth-focused package for businesses ready to build their presence and reach customers.",
    features: [
      "Business Setup Support",
      "Branding & Digital Presence",
      "Marketing Support",
      "Lead Generation Support",
    ],
    details:
      "The Growth package is designed for businesses that are ready to establish their brand, strengthen their digital presence and reach potential customers through marketing and lead generation support.",
    popular: true,
  },
  {
    name: "Pro Business",
    price: "₹34,999",
    description:
      "A comprehensive package for businesses looking for stronger systems and growth support.",
    features: [
      "Business Setup",
      "Branding & Website",
      "Marketing & Lead Generation",
      "Sales Support",
      "CRM Setup",
    ],
    details:
      "The Pro Business package provides broader support across business setup, branding, website development, marketing, lead generation and sales systems, including CRM setup.",
    popular: false,
  },
  {
    name: "Business 360",
    price: "₹59,999+",
    description:
      "Complete business support covering setup, digital presence, marketing, sales, HR and operations.",
    features: [
      "Complete Business Setup",
      "Branding & Digital Presence",
      "Marketing & Lead Generation",
      "Sales & Business Support",
      "HR & Operations Support",
      "Ongoing Growth Support",
    ],
    details:
      "Business 360 is the most comprehensive package, bringing together business setup, branding, digital presence, marketing, lead generation, sales, HR, operations and ongoing growth support.",
    popular: false,
  },
];

function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section
      id="packages"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Business Packages
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Choose the Right
            <span className="block text-blue-600">
              Support for Your Business
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Flexible packages designed to support your business
            from setup through growth.
          </p>

        </div>


        {/* Package Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-4">

          {packages.map((pkg) => (

            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                pkg.popular
                  ? "border-blue-500 bg-blue-50 shadow-lg"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >

              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white">
                  MOST POPULAR
                </div>
              )}


              {/* Package Name */}
              <h3 className="text-2xl font-bold text-slate-950">
                {pkg.name}
              </h3>


              {/* Description */}
              <p className="mt-4 min-h-20 text-sm leading-6 text-slate-600">
                {pkg.description}
              </p>


              {/* Price */}
              <div className="mt-6">

                <span className="text-4xl font-bold text-slate-950">
                  {pkg.price}
                </span>

                <span className="ml-2 text-sm text-slate-500">
                  onwards
                </span>

              </div>


              {/* Divider */}
              <div className="my-7 border-t border-slate-200"></div>


              {/* Features */}
              <ul className="flex-1 space-y-4">

                {pkg.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >

                    <span className="mt-0.5 font-bold text-blue-600">
                      ✓
                    </span>

                    <span>
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>


              {/* Buttons */}
              <div className="mt-8 space-y-3">

                <button
                  type="button"
                  onClick={() =>
                    setSelectedPackage(
                      selectedPackage === pkg.name
                        ? null
                        : pkg.name
                    )
                  }
                  className={`w-full rounded-xl px-5 py-3 font-semibold transition ${
                    pkg.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-slate-300 bg-white text-slate-800 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  {selectedPackage === pkg.name
                    ? "Hide Details ↑"
                    : "View Details"}
                </button>


                <a
                  href="#contact"
                  className="flex w-full items-center justify-center rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  Get Started →
                </a>

              </div>


              {/* Package Details */}
              {selectedPackage === pkg.name && (

                <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">

                  <p className="text-sm leading-7 text-slate-700">
                    {pkg.details}
                  </p>

                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Choose This Package →
                  </a>

                </div>

              )}

            </div>

          ))}

        </div>


        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-slate-950 px-8 py-10 text-center text-white md:px-12">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Not Sure Which Package?
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            Let's Find the Right Solution for Your Business
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Tell us about your business requirements and we'll
            help you choose the support that fits your journey.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Get a Free Consultation →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Packages;