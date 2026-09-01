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
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Branding & Digital Presence
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Build a Brand
            <span className="block text-blue-600">
              People Remember
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Create a professional brand and establish a strong
            digital presence across the platforms your customers use.
          </p>

        </div>


        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {brandingServices.map((service) => (

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


        {/* Digital Presence CTA */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-slate-950 px-8 py-12 text-white md:px-12">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Your Digital Presence
              </p>

              <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                Look Professional.
                <span className="block text-blue-400">
                  Get Found Online.
                </span>
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                From your logo and brand identity to your website,
                social media and Google presence, build everything
                your business needs to establish itself online.
              </p>

            </div>


            {/* Journey */}
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-slate-900 p-5">
                <span className="text-2xl">
                  🎨
                </span>

                <p className="mt-3 font-semibold">
                  Build Your Brand
                </p>
              </div>


              <div className="rounded-2xl bg-slate-900 p-5">
                <span className="text-2xl">
                  🌐
                </span>

                <p className="mt-3 font-semibold">
                  Go Digital
                </p>
              </div>


              <div className="rounded-2xl bg-slate-900 p-5">
                <span className="text-2xl">
                  📱
                </span>

                <p className="mt-3 font-semibold">
                  Reach Customers
                </p>
              </div>


              <div className="rounded-2xl bg-slate-900 p-5">
                <span className="text-2xl">
                  🚀
                </span>

                <p className="mt-3 font-semibold">
                  Grow Online
                </p>
              </div>

            </div>

          </div>


          {/* CTA Button */}
          <div className="mt-10">

            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
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