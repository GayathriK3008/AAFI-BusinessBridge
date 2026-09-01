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
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            HR & Operations
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Build Strong Teams.
            <span className="block text-blue-600">
              Run Better Operations.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Create structured HR and operational systems that help
            your business manage people, processes and everyday activities.
          </p>

        </div>


        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {hrServices.map((service) => (

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
                    {service.details}
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


        {/* Operations CTA */}
        <div className="mt-16 rounded-3xl bg-slate-950 px-8 py-12 text-white md:px-12">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                People & Processes
              </p>

              <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                Create Structure
                <span className="block text-blue-400">
                  That Supports Growth
                </span>
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                From recruitment and employee documentation to
                attendance, payroll and business SOPs, create systems
                that make your business easier to manage.
              </p>

            </div>


            {/* Operations Highlights */}
            <div className="grid grid-cols-2 gap-4">

              {/* People */}
              <div className="rounded-2xl bg-slate-900 p-5">

                <span className="text-2xl">
                  👥
                </span>

                <p className="mt-3 font-semibold">
                  People
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Build your team
                </p>

              </div>


              {/* Policies */}
              <div className="rounded-2xl bg-slate-900 p-5">

                <span className="text-2xl">
                  📋
                </span>

                <p className="mt-3 font-semibold">
                  Policies
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Create structure
                </p>

              </div>


              {/* Processes */}
              <div className="rounded-2xl bg-slate-900 p-5">

                <span className="text-2xl">
                  ⚙️
                </span>

                <p className="mt-3 font-semibold">
                  Processes
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Improve operations
                </p>

              </div>


              {/* Growth */}
              <div className="rounded-2xl bg-slate-900 p-5">

                <span className="text-2xl">
                  🚀
                </span>

                <p className="mt-3 font-semibold">
                  Growth
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Scale with confidence
                </p>

              </div>

            </div>

          </div>


          {/* CTA */}
          <div className="mt-10">

            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
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