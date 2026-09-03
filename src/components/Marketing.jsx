import { useState } from "react";

const marketingServices = [
  {
    number: "01",
    title: "Social Media Marketing",
    description:
      "Build awareness and connect with your target audience through social media.",
    icon: "📱",
  },
  {
    number: "02",
    title: "Social Media Management",
    description:
      "Manage your business social media presence with consistent content and engagement.",
    icon: "📣",
  },
  {
    number: "03",
    title: "Content & Creative Design",
    description:
      "Create engaging content and creative designs that communicate your brand effectively.",
    icon: "🎨",
  },
  {
    number: "04",
    title: "Meta Ads",
    description:
      "Run targeted advertising campaigns across Facebook and Instagram.",
    icon: "📊",
  },
  {
    number: "05",
    title: "Google Ads",
    description:
      "Reach potential customers through targeted Google advertising campaigns.",
    icon: "🔎",
  },
  {
    number: "06",
    title: "SEO",
    description:
      "Improve your online visibility with basic and ongoing search engine optimization.",
    icon: "🚀",
  },
  {
    number: "07",
    title: "Lead Generation",
    description:
      "Generate relevant business leads and create opportunities for your sales team.",
    icon: "🎯",
  },
  {
    number: "08",
    title: "WhatsApp Marketing",
    description:
      "Use WhatsApp to communicate with prospects and customers more effectively.",
    icon: "💬",
  },
  {
    number: "09",
    title: "Email Marketing",
    description:
      "Connect with customers through structured and professional email campaigns.",
    icon: "✉️",
  },
  {
    number: "10",
    title: "Local Marketing",
    description:
      "Reach customers in your target location through focused local marketing activities.",
    icon: "📍",
  },
  {
    number: "11",
    title: "Reels / Promotional Videos",
    description:
      "Create short-form promotional videos to showcase your business and services.",
    icon: "🎬",
  },
  {
    number: "12",
    title: "Online Reputation & Reviews",
    description:
      "Build and maintain a positive online reputation through reviews and customer feedback.",
    icon: "⭐",
  },
];

function Marketing() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="marketing"
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
              Marketing Services
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Get Seen.
            <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              Get Leads. Grow.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Build your digital presence, reach the right audience, generate
            leads and create opportunities for business growth.
          </p>
        </div>

        {/* Marketing Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marketingServices.map((service) => {
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

        {/* Marketing CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] px-8 py-12 text-white shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:px-12">
          {/* CTA Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-400">
                Ready to Grow?
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Turn Your Digital Presence
                <span className="block bg-gradient-to-r from-violet-300 to-purple-500 bg-clip-text text-transparent">
                  Into Business Opportunities
                </span>
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Tell us about your business and we'll help you identify the
                marketing services that fit your goals.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl hover:shadow-purple-900/30"
            >
              Get Started →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marketing;