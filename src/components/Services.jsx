import {
  Building2,
  Palette,
  TrendingUp,
  BriefcaseBusiness,
  Users,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Building2,
    title: "Business Setup",
    description:
      "Build the right foundation for your business with complete setup and registration support.",
    items: [
      "Company Name Selection",
      "Business Structure Selection",
      "Company Registration",
      "GST / Udyam Support",
    ],
    link: "#business-setup",
  },
  {
    number: "02",
    icon: Palette,
    title: "Branding & Digital",
    description:
      "Create a professional identity and establish your business across digital platforms.",
    items: [
      "Logo Design",
      "Brand Identity",
      "Website Development",
      "Social Media Setup",
    ],
    link: "#branding",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Marketing",
    description:
      "Reach your audience, generate leads and build a strong digital presence.",
    items: [
      "Social Media Marketing",
      "Meta Ads",
      "Google Ads",
      "SEO & Lead Generation",
    ],
    link: "#marketing",
  },
  {
    number: "04",
    icon: BriefcaseBusiness,
    title: "Sales & Business Support",
    description:
      "Organize your sales process and build systems to manage customers and leads.",
    items: [
      "Lead Management",
      "CRM Setup",
      "Sales Funnel Setup",
      "Customer Database",
    ],
    link: "#sales-hr",
  },
  {
    number: "05",
    icon: Users,
    title: "HR & Operations",
    description:
      "Build reliable people and operational systems as your business grows.",
    items: [
      "Recruitment Support",
      "Job Description Creation",
      "HR Policies",
      "Business SOP Documentation",
    ],
    link: "#hr-operations",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-6 py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Services
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Everything Your Business Needs
            <span className="block text-blue-600">
              To Move Forward
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            From business setup to marketing, sales and operations,
            we provide end-to-end support to help your business grow.
          </p>

        </div>

        {/* ================= SERVICE CARDS ================= */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/60"
              >

                {/* Top Accent */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Card Header */}
                <div className="flex items-start justify-between">

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Number */}
                  <span className="text-sm font-bold tracking-widest text-slate-300 transition-colors duration-300 group-hover:text-blue-500">
                    {service.number}
                  </span>

                </div>

                {/* Title */}
                <h3 className="mt-7 text-2xl font-bold tracking-tight text-slate-950">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-slate-100" />

                {/* Service List */}
                <ul className="flex-1 space-y-3">

                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Check
                          className="h-3.5 w-3.5"
                          strokeWidth={3}
                        />
                      </span>

                      <span className="leading-5">
                        {item}
                      </span>
                    </li>
                  ))}

                </ul>

                {/* Explore Link */}
                <a
                  href={service.link}
                  className="group/link mt-8 inline-flex w-fit items-center font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
                >
                  <span>
                    Explore Services
                  </span>

                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1.5"
                  />
                </a>

              </div>
            );
          })}

        </div>

        {/* ================= BOTTOM MESSAGE ================= */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <Sparkles
                    className="h-5 w-5"
                    strokeWidth={2}
                  />
                </div>

                <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                  One Business. One Partner.
                </p>

              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Everything connected under one roof.
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                From establishing your business foundation to building
                your brand, reaching customers and managing operations,
                AAFI BusinessBridge Solutions supports your complete
                business journey.
              </p>

            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-xl bg-slate-950 px-7 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl"
            >
              <span>
                Talk to Us
              </span>

              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;