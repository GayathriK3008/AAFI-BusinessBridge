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
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Questions?
            <span className="block text-blue-600">
              We've Got Answers.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to common questions about our business
            setup, digital, marketing, sales and business support services.
          </p>

        </div>


        {/* FAQ List */}
        <div className="mx-auto mt-16 max-w-4xl space-y-5">

          {faqItems.map((item) => {

            const isOpen = openFAQ === item.number;

            return (
              <div
                key={item.number}
                className={`rounded-3xl border p-7 transition duration-300 ${
                  isOpen
                    ? "border-blue-300 bg-white shadow-lg"
                    : "border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-white hover:shadow-lg"
                }`}
              >

                {/* Question Button */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenFAQ(
                      isOpen ? null : item.number
                    )
                  }
                  className="flex w-full items-start gap-5 text-left"
                  aria-expanded={isOpen}
                >

                  {/* Number */}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                    {item.number}
                  </span>


                  {/* Question */}
                  <span className="flex-1 pt-1 text-lg font-bold text-slate-950 md:text-xl">
                    {item.question}
                  </span>


                  {/* Plus / Minus */}
                  <span
                    className={`pt-1 text-xl font-semibold text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>

                </button>


                {/* Answer */}
                {isOpen && (
                  <div className="ml-[60px] mt-5 border-t border-slate-200 pt-5">

                    <p className="leading-7 text-slate-600">
                      {item.answer}
                    </p>

                  </div>
                )}

              </div>
            );
          })}

        </div>


        {/* FAQ CTA */}
        <div className="mt-16 rounded-3xl bg-slate-950 px-8 py-12 text-center text-white md:px-12">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Still Have Questions?
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            Let's Talk About Your Business
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Tell us about your business idea or requirements and
            we'll help you understand the right next steps.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Get a Free Consultation →
          </a>

        </div>

      </div>
    </section>
  );
}

export default FAQ;