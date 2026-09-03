import { useState } from "react";

const hrServices = [
  {
    number: "01",
    title: "Recruitment Support",
    description:
      "Get support in identifying and recruiting suitable candidates for your business.",
    icon: "👥",
    details:
      "Get support in defining your hiring requirements, identifying suitable candidates and organizing the recruitment process for your business.",
  },
  {
    number: "02",
    title: "Job Description Creation",
    description:
      "Create clear and structured job descriptions for your business roles.",
    icon: "📝",
    details:
      "Create clear job descriptions that define responsibilities, required skills and expectations for each business role.",
  },
  {
    number: "03",
    title: "Appointment Letter",
    description:
      "Prepare professional appointment documentation for your employees.",
    icon: "📄",
    details:
      "Get support in preparing professional appointment documentation with relevant employee and role information.",
  },
  {
    number: "04",
    title: "HR Policies",
    description:
      "Develop structured HR policies to support your workplace operations.",
    icon: "📋",
    details:
      "Create structured HR policies and workplace guidelines that help establish clear expectations and support organized HR management.",
  },
  {
    number: "05",
    title: "Salary Structure",
    description:
      "Create a clear salary structure to support organized employee management.",
    icon: "💰",
    details:
      "Develop an organized salary structure that helps your business manage employee compensation clearly and consistently.",
  },
  {
    number: "06",
    title: "Payroll Support",
    description:
      "Get support with organized payroll processes and employee salary management.",
    icon: "🧾",
    details:
      "Get support in organizing payroll processes, employee salary information and related payroll management activities.",
  },
  {
    number: "07",
    title: "Employee Database",
    description:
      "Maintain structured employee information for easier HR administration.",
    icon: "🗂️",
    details:
      "Create and maintain a structured employee database containing important employee information for easier HR administration.",
  },
  {
    number: "08",
    title: "Attendance System",
    description:
      "Set up an organized system for tracking employee attendance.",
    icon: "⏱️",
    details:
      "Set up an organized attendance tracking process to help your business maintain employee attendance records.",
  },
  {
    number: "09",
    title: "Business SOP / Process Documentation",
    description:
      "Document important business processes and standard operating procedures.",
    icon: "📚",
    details:
      "Document important business processes and standard operating procedures to create consistency and make everyday operations easier to manage.",
  },
  {
    number: "10",
    title: "Vendor Management Support",
    description:
      "Support the organization and management of your business vendor relationships.",
    icon: "🤝",
    details:
      "Organize vendor information, documentation and business relationships to support smoother vendor management.",
  },
];

function HRAndOperations() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="hr-operations"
      className="relative overflow-hidden bg-[#080d24] px-6 py-24 text-white md:py-28"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">
              HR & Operations
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Build Strong Teams.
            <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              Run Better Operations.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Create structured HR and operational systems that help your business
            manage people, processes and everyday activities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hrServices.map((service) => {
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

                {/* Explore Service */}
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
                      {service.details}
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

        {/* Operations CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] px-8 py-12 text-white shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:px-12">
          {/* CTA Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-400">
                People & Processes
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Create Structure
                <span className="block bg-gradient-to-r from-violet-300 to-purple-500 bg-clip-text text-transparent">
                  That Supports Growth
                </span>
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                From recruitment and employee documentation to attendance,
                payroll and business SOPs, create systems that make your
                business easier to manage.
              </p>
            </div>

            {/* Operations Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {/* People */}
              <div className="group rounded-2xl border border-slate-800 bg-[#080d24] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0d1430]">
                <span className="text-2xl">👥</span>

                <p className="mt-3 font-semibold text-white">
                  People
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Build your team
                </p>
              </div>

              {/* Policies */}
              <div className="group rounded-2xl border border-slate-800 bg-[#080d24] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0d1430]">
                <span className="text-2xl">📋</span>

                <p className="mt-3 font-semibold text-white">
                  Policies
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Create structure
                </p>
              </div>

              {/* Processes */}
              <div className="group rounded-2xl border border-slate-800 bg-[#080d24] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0d1430]">
                <span className="text-2xl">⚙️</span>

                <p className="mt-3 font-semibold text-white">
                  Processes
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Improve operations
                </p>
              </div>

              {/* Growth */}
              <div className="group rounded-2xl border border-slate-800 bg-[#080d24] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0d1430]">
                <span className="text-2xl">🚀</span>

                <p className="mt-3 font-semibold text-white">
                  Growth
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Scale with confidence
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative mt-10">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl hover:shadow-purple-900/30"
            >
              Build Your Business Systems →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HRAndOperations;