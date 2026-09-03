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
      className="relative overflow-hidden bg-[#080d24] px-6 py-24 text-white md:py-28"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-purple-700/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">
              Business Packages
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Choose the Right
            <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              Support for Your Business
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Flexible packages designed to support your business from setup
            through growth.
          </p>
        </div>

        {/* Package Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {packages.map((pkg) => {
            const isSelected = selectedPackage === pkg.name;

            return (
              <div
                key={pkg.name}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300 ${
                  pkg.popular
                    ? "border-purple-500/70 bg-gradient-to-b from-[#17143d] to-[#0d1430] shadow-[0_25px_70px_rgba(87,18,170,0.2)] hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(87,18,170,0.28)]"
                    : "border-slate-800/90 bg-[#0d1430] shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:border-purple-500/50 hover:bg-[#111a3d] hover:shadow-[0_25px_70px_rgba(87,18,170,0.16)]"
                }`}
              >
                {/* Top Accent */}
                <div
                  className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-purple-600 via-violet-400 to-purple-700 transition-opacity duration-300 ${
                    pkg.popular || isSelected
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute right-5 top-5 rounded-full border border-purple-400/30 bg-purple-500/15 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-violet-300">
                    MOST POPULAR
                  </div>
                )}

                {/* Package Name */}
                <h3
                  className={`pr-24 text-2xl font-bold ${
                    pkg.popular ? "text-white" : "text-white"
                  }`}
                >
                  {pkg.name}
                </h3>

                {/* Description */}
                <p className="mt-4 min-h-20 text-sm leading-6 text-slate-400">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mt-6">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {pkg.price}
                  </span>

                  <span className="ml-2 text-sm text-slate-500">
                    onwards
                  </span>
                </div>

                {/* Divider */}
                <div className="my-7 border-t border-slate-800" />

                {/* Features */}
                <ul className="flex-1 space-y-4">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-400"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-xs font-bold text-violet-400">
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-8 space-y-3">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPackage(
                        isSelected ? null : pkg.name
                      )
                    }
                    className={`w-full rounded-xl px-5 py-3 font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-900/20 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400"
                        : "border border-slate-700 bg-[#080d24] text-slate-200 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white"
                    }`}
                  >
                    {isSelected
                      ? "Hide Details ↑"
                      : "View Details"}
                  </button>

                  <a
                    href="#contact"
                    className="flex w-full items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-3 font-semibold text-white transition-all duration-300 hover:border-purple-500/40 hover:bg-[#111a3d]"
                  >
                    Get Started →
                  </a>
                </div>

                {/* Package Details */}
                {isSelected && (
                  <div className="mt-5 rounded-2xl border border-purple-500/20 bg-[#080d24] p-5">
                    <p className="text-sm leading-7 text-slate-400">
                      {pkg.details}
                    </p>

                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400"
                    >
                      Choose This Package →
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] px-8 py-12 text-center shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:px-12">
          {/* CTA Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-80 -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-400">
              Not Sure Which Package?
            </p>

            <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Let's Find the Right Solution
              <span className="block bg-gradient-to-r from-violet-300 to-purple-500 bg-clip-text text-transparent">
                for Your Business
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Tell us about your business requirements and we'll help you
              choose the support that fits your journey.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl hover:shadow-purple-900/30"
            >
              Get a Free Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;