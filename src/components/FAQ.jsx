import { useState } from "react";

const faqItems = [
  {
    number: "01",
    question: "How long does business registration take?",
    answer:
      "The time required for business registration depends on the type of business structure, documentation and government processing requirements. We will guide you through the process and required steps.",
  },
  {
    number: "02",
    question: "What documents are required?",
    answer:
      "The required documents depend on the type of business and registration selected. We will help you understand and prepare the necessary documents for your business setup.",
  },
  {
    number: "03",
    question: "Do you provide website development?",
    answer:
      "Yes. We provide website development as part of our Branding & Digital Presence services to help businesses establish a professional online presence.",
  },
  {
    number: "04",
    question: "Are government fees included in package prices?",
    answer:
      "Government fees and statutory charges may vary depending on the service and business structure. The applicable charges will be discussed separately based on your requirements.",
  },
  {
    number: "05",
    question: "Can I choose individual services?",
    answer:
      "Yes. You can choose individual services based on your business requirements. Our team can help you identify the services that best fit your needs.",
  },
  {
    number: "06",
    question: "Do you provide monthly marketing support?",
    answer:
      "Yes. Monthly marketing support can be provided based on your business goals and the services required, including social media, content, advertising and lead generation support.",
  },
  {
    number: "07",
    question:
      "Can you manage the business setup from start to launch?",
    answer:
      "Yes. AAFI BusinessBridge Solutions brings together business setup, branding, digital presence, marketing, sales, HR and operational support to help businesses move from idea to growth.",
  },
];

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#080d24] px-6 py-24 text-white md:py-28"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Questions?
            <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              We've Got Answers.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Find answers to common questions about our business setup,
            digital, marketing, sales and business support services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-16 max-w-4xl space-y-5">
          {faqItems.map((item) => {
            const isOpen = openFAQ === item.number;

            return (
              <div
                key={item.number}
                className={`group overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-purple-500/60 bg-[#111a3d] shadow-[0_20px_60px_rgba(87,18,170,0.15)]"
                    : "border-slate-800/90 bg-[#0d1430] hover:border-purple-500/40 hover:bg-[#111a3d] hover:shadow-[0_20px_60px_rgba(87,18,170,0.1)]"
                }`}
              >
                {/* Question Button */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenFAQ(isOpen ? null : item.number)
                  }
                  className="flex w-full items-start gap-5 px-6 py-6 text-left md:px-7"
                  aria-expanded={isOpen}
                >
                  {/* Number */}
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-colors duration-300 ${
                      isOpen
                        ? "bg-purple-500/20 text-violet-300"
                        : "border border-purple-500/20 bg-purple-500/10 text-violet-400"
                    }`}
                  >
                    {item.number}
                  </span>

                  {/* Question */}
                  <span className="flex-1 pt-1 text-base font-bold leading-7 text-white md:text-xl">
                    {item.question}
                  </span>

                  {/* Plus / Minus */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xl font-semibold transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-purple-400/40 bg-purple-500/15 text-violet-300"
                        : "border-slate-700 bg-[#080d24] text-violet-400 group-hover:border-purple-500/40"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="mx-6 mb-6 ml-[76px] border-t border-purple-500/20 pt-5 md:mx-7 md:ml-[76px]">
                    <p className="leading-7 text-slate-400">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] px-8 py-12 text-center shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:px-12">
          {/* CTA Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-80 -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-400">
              Still Have Questions?
            </p>

            <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Let's Talk About Your Business
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Tell us about your business idea or requirements and we'll help
              you understand the right next steps.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl hover:shadow-purple-900/30"
            >
              Get a Free Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;