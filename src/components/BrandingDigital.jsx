import { useState } from "react";

const brandingServices = [
  {
    number: "01",
    title: "Logo Design",
    description:
      "Create a professional logo that represents your business and builds a strong first impression.",
    icon: "🎨",
  },
  {
    number: "02",
    title: "Brand Identity & Guidelines",
    description:
      "Build a consistent visual identity with colours, typography and brand guidelines.",
    icon: "✨",
  },
  {
    number: "03",
    title: "Company Profile / Brochure",
    description:
      "Present your business professionally with a clear company profile and brochure.",
    icon: "📄",
  },
  {
    number: "04",
    title: "Visiting Card & Letterhead",
    description:
      "Create professional business stationery for your brand communication.",
    icon: "💼",
  },
  {
    number: "05",
    title: "Domain Registration",
    description:
      "Get the right domain name to establish your business identity online.",
    icon: "🌐",
  },
  {
    number: "06",
    title: "Professional Business Email",
    description:
      "Set up professional email addresses using your business domain.",
    icon: "✉️",
  },
  {
    number: "07",
    title: "Website Development",
    description:
      "Build a professional website that establishes your digital presence.",
    icon: "💻",
  },
  {
    number: "08",
    title: "WhatsApp Business Setup",
    description:
      "Set up WhatsApp Business to help customers connect with your business.",
    icon: "💬",
  },
  {
    number: "09",
    title: "Social Media Setup",
    description:
      "Set up your Instagram, Facebook and LinkedIn business presence.",
    icon: "📱",
  },
  {
    number: "10",
    title: "Google Business Profile",
    description:
      "Establish your business presence on Google and make it easier for customers to find you.",
    icon: "📍",
  },
];

function BrandingDigital() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="branding"
      className="relative overflow-hidden bg-[#080d24] px-6 py-24 text-white md:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple-700/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">
              Branding & Digital Presence
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Build a Brand
            <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              People Remember
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Create a professional brand and establish a strong digital presence
            across the platforms your customers use.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {brandingServices.map((service) => {
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

        {/* Digital Presence CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] px-8 py-12 text-white shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:px-12">
          {/* CTA Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-400">
                Your Digital Presence
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Look Professional.
                <span className="block bg-gradient-to-r from-violet-300 to-purple-500 bg-clip-text text-transparent">
                  Get Found Online.
                </span>
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                From your logo and brand identity to your website, social media
                and Google presence, build everything your business needs to
                establish itself online.
              </p>
            </div>

            {/* Journey */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group rounded-2xl border border-slate-800 bg-[#080d24] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0d1430]">
                <span className="text-2xl">🎨</span>

                <p className="mt-3 font-semibold text-white">
                  Build Your Brand
                </p>
              </div>

              <div className="group rounded-2xl border border-slate-800 bg-[#080d24] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0d1430]">
                <span className="text-2xl">🌐</span>

                <p className="mt-3 font-semibold text-white">
                  Go Digital
                </p>
              </div>

              <div className="group rounded-2xl border border-slate-800 bg-[#080d24] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0d1430]">
                <span className="text-2xl">📱</span>

                <p className="mt-3 font-semibold text-white">
                  Reach Customers
                </p>
              </div>

              <div className="group rounded-2xl border border-slate-800 bg-[#080d24] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0d1430]">
                <span className="text-2xl">🚀</span>

                <p className="mt-3 font-semibold text-white">
                  Grow Online
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative mt-10">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl hover:shadow-purple-900/30"
            >
              Build Your Brand →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandingDigital;