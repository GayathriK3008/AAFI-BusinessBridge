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
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Portfolio / Our Work
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Work That Builds
            <span className="block text-blue-600">
              Your Business
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore the types of branding, digital and marketing
            work we can create to support your business journey.
          </p>

        </div>


        {/* Portfolio Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {portfolioItems.map((item) => (

            <div
              key={item.number}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >

              {/* Visual Area */}
              <div className="flex h-52 items-center justify-center bg-slate-950">

                <div className="text-center">

                  <div className="text-5xl">
                    {item.icon}
                  </div>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
                    {item.category}
                  </p>

                </div>

              </div>


              {/* Content */}
              <div className="p-7">

                {/* Number */}
                <div className="flex items-center justify-between">

                  <span className="text-sm font-bold text-blue-600">
                    {item.number}
                  </span>

                  <span className="text-blue-600">
                    →
                  </span>

                </div>


                {/* Title */}
                <h3 className="mt-5 text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>


                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>


                {/* View Project Button */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedProject(
                      selectedProject === item.number
                        ? null
                        : item.number
                    )
                  }
                  className="mt-7 font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  {selectedProject === item.number
                    ? "Hide Details ↑"
                    : "View Project →"}
                </button>


                {/* Project Details */}
                {selectedProject === item.number && (

                  <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">

                    <p className="text-sm leading-7 text-slate-700">
                      {item.details}
                    </p>

                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Start a Project →
                    </a>

                  </div>

                )}

              </div>

            </div>

          ))}

        </div>


        {/* Portfolio CTA */}
        <div className="mt-16 rounded-3xl bg-blue-600 px-8 py-12 text-white md:px-12">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
                Have a Project in Mind?
              </p>

              <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                Let's Build Something
                <span className="block">
                  for Your Business
                </span>
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                Tell us what you need and let's create the right
                branding, digital or marketing solution for your business.
              </p>

            </div>


            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50"
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