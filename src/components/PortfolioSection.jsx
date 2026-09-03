import { useState } from "react";

const portfolioItems = [
  {
    number: "01",
    category: "Logo Designs",
    title: "Brand Identity",
    description:
      "Professional logo concepts designed to create a clear and memorable business identity.",
    details:
      "Create a professional visual identity that represents your business clearly. Logo design focuses on creating a memorable and suitable identity for your brand.",
    icon: "✦",
  },
  {
    number: "02",
    category: "Websites",
    title: "Digital Presence",
    description:
      "Modern business websites designed to establish a professional presence online.",
    details:
      "Build a professional business website that communicates your services, establishes credibility and gives customers an easy way to discover your business online.",
    icon: "🌐",
  },
  {
    number: "03",
    category: "Company Profiles",
    title: "Business Presentation",
    description:
      "Professional company profiles that clearly communicate your business and services.",
    details:
      "Create structured company profiles and business presentations that clearly explain your company, services, capabilities and overall business identity.",
    icon: "📄",
  },
  {
    number: "04",
    category: "Social Media Creatives",
    title: "Social Media Design",
    description:
      "Creative social media visuals designed to communicate your brand consistently.",
    details:
      "Develop professional social media creatives that maintain consistent branding and help communicate your products, services and business message effectively.",
    icon: "📱",
  },
  {
    number: "05",
    category: "Marketing Campaigns",
    title: "Digital Campaigns",
    description:
      "Marketing campaign creatives focused on reaching audiences and generating opportunities.",
    details:
      "Create digital marketing campaign materials designed to communicate your offer, reach your target audience and support lead generation activities.",
    icon: "📈",
  },
  {
    number: "06",
    category: "Branding Projects",
    title: "Complete Branding",
    description:
      "Connected branding projects that bring together your visual identity and digital presence.",
    details:
      "Bring together logo design, brand identity, digital presence and marketing creatives to create a consistent and professional business brand.",
    icon: "🎨",
  },
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white md:py-28"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">
              Portfolio / Our Work
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Work That Builds
            <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              Your Business
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Explore the types of branding, digital and marketing work we can
            create to support your business journey.
          </p>

        </div>

        {/* ================= PORTFOLIO GRID ================= */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {portfolioItems.map((item) => {
            const isSelected = selectedProject === item.number;

            return (
              <div
                key={item.number}
                className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isSelected
                    ? "border-purple-500/60 bg-[#111a3d] shadow-[0_25px_70px_rgba(87,18,170,0.18)]"
                    : "border-slate-800/90 bg-[#0d1430] shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_25px_70px_rgba(87,18,170,0.16)]"
                }`}
              >

                {/* Top Accent */}
                <div
                  className={`absolute left-0 right-0 top-0 z-10 h-1 bg-gradient-to-r from-purple-600 via-violet-400 to-purple-700 transition-opacity duration-300 ${
                    isSelected
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* ================= VISUAL AREA ================= */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-slate-800 bg-gradient-to-br from-[#080d24] via-[#0d1430] to-[#150d30]">

                  {/* Decorative Glow */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl transition-all duration-500 group-hover:bg-purple-600/20" />

                  {/* Decorative Rings */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10" />

                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10" />

                  <div className="relative text-center">

                    {/* Icon */}
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-4xl shadow-lg shadow-purple-950/20 transition-all duration-300 group-hover:scale-110 group-hover:border-purple-400/30 group-hover:bg-purple-500/15">
                      {item.icon}
                    </div>

                    {/* Category */}
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-violet-400">
                      {item.category}
                    </p>

                  </div>

                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-7">

                  {/* Number + Arrow */}
                  <div className="flex items-center justify-between">

                    <span className="text-sm font-bold tracking-[0.2em] text-violet-400">
                      {item.number}
                    </span>

                    <span className="text-xl text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-400">
                      →
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  {/* View Project Button */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedProject(
                        isSelected ? null : item.number
                      )
                    }
                    className="mt-7 font-semibold text-violet-400 transition-colors duration-200 hover:text-violet-300"
                  >
                    {isSelected
                      ? "Hide Details ↑"
                      : "View Project →"}
                  </button>

                  {/* ================= PROJECT DETAILS ================= */}
                  {isSelected && (

                    <div className="mt-5 rounded-2xl border border-purple-500/20 bg-[#080d24] p-5">

                      <p className="text-sm leading-7 text-slate-400">
                        {item.details}
                      </p>

                      <a
                        href="#contact"
                        className="mt-5 inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl"
                      >
                        Start a Project →
                      </a>

                    </div>

                  )}

                </div>

              </div>
            );
          })}

        </div>

        {/* ================= PORTFOLIO CTA ================= */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] px-8 py-12 text-white shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:px-12">

          {/* CTA Background Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-400">
                Have a Project in Mind?
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Let's Build Something
                <span className="block bg-gradient-to-r from-violet-300 to-purple-500 bg-clip-text text-transparent">
                  for Your Business
                </span>
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Tell us what you need and let's create the right branding,
                digital or marketing solution for your business.
              </p>

            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl hover:shadow-purple-900/30"
            >
              Start a Project →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Portfolio;