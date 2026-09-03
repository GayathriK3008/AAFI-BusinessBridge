import { useState } from "react";
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtQTGnZziMO9EdOTIHkPC8lc2zA3pu-zF6piFahJKM5D0Ydw/formResponse";

const initialFormData = {
  name: "",
  mobile: "",
  email: "",
  businessName: "",
  businessType: "",
  location: "",
  service: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const fieldMap = {
      "entry.534964170": "name",
      "entry.1914853591": "mobile",
      "entry.1003388569": "email",
      "entry.1289052673": "businessName",
      "entry.1833516173": "businessType",
      "entry.38289526": "location",
      "entry.749493025": "service",
      "entry.1692570397": "message",
    };

    const fieldName = fieldMap[name];

    if (!fieldName) return;

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = () => {
    setSubmitting(true);
    setSubmitted(false);

    /*
      IMPORTANT:
      We are NOT using fetch() here because Google Forms
      does not allow normal cross-origin fetch submission.

      The HTML form itself submits directly to Google Forms
      using the hidden iframe below.
    */

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData(initialFormData);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white md:py-28"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
              Contact / Get Started
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Let's Build Your
            <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              Business Together
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Have a business idea or need support for your growing business?
            Tell us what you need and our team will get in touch with you.
          </p>
        </div>

        {/* ================= CONTACT CONTENT ================= */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* ================= LEFT SIDE ================= */}
          <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:p-10">

            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-400">
                Start Your Journey
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white">
                Your Business. Our Support.
              </h3>

              <p className="mt-5 leading-7 text-slate-400">
                From business setup and branding to marketing, sales, HR and
                operations, AAFI BusinessBridge Solutions is here to support
                your business journey.
              </p>

              {/* ================= CONTACT DETAILS ================= */}
              <div className="mt-8 space-y-6">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-xl">
                    📧
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Email
                    </p>

                    <p className="mt-1 text-slate-400">
                      your@email.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-xl">
                    📞
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Phone
                    </p>

                    <p className="mt-1 text-slate-400">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-xl">
                    📍
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Location
                    </p>

                    <p className="mt-1 text-slate-400">
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= QUICK CONNECT ================= */}
              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Quick Connect
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">

                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-lg hover:shadow-green-950/20"
                  >
                    💬 WhatsApp Us
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-[#080d24] px-5 py-3 font-semibold text-white transition-all duration-300 hover:border-purple-500/50 hover:bg-[#111a3d]"
                  >
                    📞 Call Now
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="rounded-3xl border border-slate-800/90 bg-[#0d1430] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)] md:p-10">

            <h3 className="text-2xl font-bold text-white">
              Get in Touch
            </h3>

            <p className="mt-2 text-slate-400">
              Fill in your details and tell us how we can help.
            </p>

            {submitted ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10 text-3xl text-violet-400">
                  ✓
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  Submitted Successfully!
                </h3>

                <p className="mx-auto mt-3 max-w-md leading-7 text-slate-400">
                  Thank you for reaching out to AAFI BusinessBridge Solutions.
                  We’ll reach you soon.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-xl border border-purple-500/30 bg-purple-500/10 px-6 py-3 font-semibold text-violet-300 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/15"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                {/* ================= GOOGLE FORM ================= */}
                <form
              action={GOOGLE_FORM_URL}
              method="POST"
              target="hiddenGoogleForm"
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* ================= NAME + MOBILE ================= */}
              <div className="grid gap-5 md:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="entry.534964170"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-[#080d24] px-4 py-3 text-white placeholder:text-slate-600 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label
                    htmlFor="mobile"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    Mobile Number
                  </label>

                  <input
                    id="mobile"
                    type="tel"
                    name="entry.1914853591"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-[#080d24] px-4 py-3 text-white placeholder:text-slate-600 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

              </div>

              {/* ================= EMAIL ================= */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="entry.1003388569"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-[#080d24] px-4 py-3 text-white placeholder:text-slate-600 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              {/* ================= BUSINESS NAME ================= */}
              <div>
                <label
                  htmlFor="businessName"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Business Name
                </label>

                <input
                  id="businessName"
                  type="text"
                  name="entry.1289052673"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your business name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-[#080d24] px-4 py-3 text-white placeholder:text-slate-600 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              {/* ================= BUSINESS TYPE + LOCATION ================= */}
              <div className="grid gap-5 md:grid-cols-2">

                {/* Business Type */}
                <div>
                  <label
                    htmlFor="businessType"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    Business Type
                  </label>

                  <select
                    id="businessType"
                    name="entry.1833516173"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-700 bg-[#080d24] px-4 py-3 text-slate-300 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  >
                    <option value="" disabled>
                      Select business type
                    </option>

                    <option value="New Business">
                      New Business
                    </option>

                    <option value="Existing Business">
                      Existing Business
                    </option>

                    <option value="Service Business">
                      Service Business
                    </option>

                    <option value="Product Business">
                      Product Business
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    Location
                  </label>

                  <input
                    id="location"
                    type="text"
                    name="entry.38289526"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City / State"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-[#080d24] px-4 py-3 text-white placeholder:text-slate-600 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

              </div>

              {/* ================= SERVICE ================= */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Services Required
                </label>

                <select
                  id="service"
                  name="entry.749493025"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-[#080d24] px-4 py-3 text-slate-300 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Business Setup">
                    Business Setup
                  </option>

                  <option value="Branding & Digital Presence">
                    Branding & Digital Presence
                  </option>

                  <option value="Marketing">
                    Marketing
                  </option>

                  <option value="Sales & Business Support">
                    Sales & Business Support
                  </option>

                  <option value="HR & Operations">
                    HR & Operations
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>

                  <option value="Multiple Services">
                    Multiple Services
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* ================= MESSAGE ================= */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Message / Requirement
                </label>

                <textarea
                  id="message"
                  name="entry.1692570397"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your business, requirements or project..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-700 bg-[#080d24] px-4 py-3 text-white placeholder:text-slate-600 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              {/* ================= SUBMIT BUTTON ================= */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-4 font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-400 hover:shadow-xl hover:shadow-purple-900/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting
                  ? "Submitting..."
                  : "Get a Free Consultation →"}
              </button>

            </form>

              </>
            )}

            {/* ================= HIDDEN GOOGLE FORM IFRAME ================= */}
            <iframe
              name="hiddenGoogleForm"
              title="Google Form Submission"
              className="hidden"
            />

          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#0d1430] via-[#0b1128] to-[#110b26] px-8 py-10 text-center shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:px-12">

          {/* CTA Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-80 -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-400">
              Ready to Get Started?
            </p>

            <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Let's Take Your Business to the Next Level
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Whether you are starting a new business or growing an existing
              one, we are here to help you move forward.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;