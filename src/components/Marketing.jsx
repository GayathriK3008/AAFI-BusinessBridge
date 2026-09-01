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
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Marketing Services
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Get Seen.
            <span className="block text-blue-600">
              Get Leads. Grow.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Build your digital presence, reach the right audience,
            generate leads and create opportunities for business growth.
          </p>

        </div>


        {/* Marketing Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {marketingServices.map((service) => (

            <div
              key={service.number}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
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


        {/* Marketing CTA */}
        <div className="mt-16 rounded-3xl bg-blue-600 px-8 py-12 text-white md:px-12">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
                Ready to Grow?
              </p>

              <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                Turn Your Digital Presence
                <span className="block">
                  Into Business Opportunities
                </span>
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                Tell us about your business and we'll help you
                identify the marketing services that fit your goals.
              </p>

            </div>


            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50"
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