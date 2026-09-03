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
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white md:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">
              Our Services
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Everything Your Business Needs
            <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              To Move Forward
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
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
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-800/90 bg-[#0b1128] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-[#0e1533] hover:shadow-[0_25px_70px_rgba(87,18,170,0.18)]"
              >
                {/* Top Accent */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-purple-600 via-violet-400 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Card Header */}
                <div className="flex items-start justify-between">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:border-purple-400/40 group-hover:bg-purple-500/15 group-hover:text-violet-300">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>

                  {/* Number */}
                  <span className="text-sm font-bold tracking-[0.2em] text-slate-600 transition-colors duration-300 group-hover:text-purple-400">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-7 text-2xl font-bold tracking-tight text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-7 text-slate-400">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-slate-800" />

                {/* Service List */}
                <ul className="flex-1 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-400"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/10 text-violet-400">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>

                      <span className="leading-5">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Explore Link */}
                <a
                  href={service.link}
                  className="group/link mt-8 inline-flex w-fit items-center font-semibold text-violet-400 transition-colors duration-200 hover:text-violet-300"
                >
                  <span>Explore Services</span>

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}
        <div className="mt-16 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-violet-400">
                  <Sparkles className="h-5 w-5" strokeWidth={2} />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-400">
                  One Business. One Partner.
                </p>
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
                Everything connected under one roof.
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                From establishing your business foundation to building your
                brand, reaching customers and managing operations, AAFI
                BusinessBridge Solutions supports your complete business
                journey.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/20 transition duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl hover:shadow-purple-900/30"
            >
              <span>Talk to Us</span>

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;