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
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            CONTACT / GET STARTED
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Let's Build Your Business Together
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Have a business idea or need support for your growing business?
            Tell us what you need and our team will get in touch with you.
          </p>

        </div>


        {/* ================= CONTACT CONTENT ================= */}

        <div className="mt-12 grid gap-8 lg:grid-cols-2">


          {/* ================= LEFT SIDE ================= */}

          <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-10">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Start Your Journey
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Your Business. Our Support.
            </h3>

            <p className="mt-5 leading-7 text-slate-300">
              From business setup and branding to marketing, sales,
              HR and operations, AAFI BusinessBridge Solutions is here
              to support your business journey.
            </p>


            {/* ================= CONTACT DETAILS ================= */}

            <div className="mt-8 space-y-6">

              {/* Email */}

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xl">
                  📧
                </div>

                <div>

                  <p className="font-semibold">
                    Email
                  </p>

                  <p className="mt-1 text-slate-300">
                    your@email.com
                  </p>

                </div>

              </div>


              {/* Phone */}

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xl">
                  📞
                </div>

                <div>

                  <p className="font-semibold">
                    Phone
                  </p>

                  <p className="mt-1 text-slate-300">
                    +91 XXXXX XXXXX
                  </p>

                </div>

              </div>


              {/* Location */}

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xl">
                  📍
                </div>

                <div>

                  <p className="font-semibold">
                    Location
                  </p>

                  <p className="mt-1 text-slate-300">
                    India
                  </p>

                </div>

              </div>

            </div>


            {/* ================= QUICK CONNECT ================= */}

            <div className="mt-10">

              <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                Quick Connect
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">

                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  💬 WhatsApp Us
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-white transition hover:border-blue-500 hover:bg-slate-800"
                >
                  📞 Call Now
                </a>

              </div>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">

            <h3 className="text-2xl font-bold text-slate-950">
              Get in Touch
            </h3>

            <p className="mt-2 text-slate-600">
              Fill in your details and tell us how we can help.
            </p>


            {/* ================= SUCCESS MESSAGE ================= */}

            {submitted && (
              <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-4 text-sm font-semibold text-green-700">
                Your enquiry has been submitted successfully.
                Our team will get in touch with you soon.
              </div>
            )}


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
                    className="mb-2 block text-sm font-semibold text-slate-700"
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
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                </div>


                {/* Mobile */}

                <div>

                  <label
                    htmlFor="mobile"
                    className="mb-2 block text-sm font-semibold text-slate-700"
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
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                </div>

              </div>


              {/* ================= EMAIL ================= */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
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
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* ================= BUSINESS NAME ================= */}

              <div>

                <label
                  htmlFor="businessName"
                  className="mb-2 block text-sm font-semibold text-slate-700"
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
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* ================= BUSINESS TYPE + LOCATION ================= */}

              <div className="grid gap-5 md:grid-cols-2">

                {/* Business Type */}

                <div>

                  <label
                    htmlFor="businessType"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Business Type
                  </label>

                  <select
                    id="businessType"
                    name="entry.1833516173"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
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
                    className="mb-2 block text-sm font-semibold text-slate-700"
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
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                </div>

              </div>


              {/* ================= SERVICE ================= */}

              <div>

                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Services Required
                </label>

                <select
                  id="service"
                  name="entry.749493025"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
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
                  className="mb-2 block text-sm font-semibold text-slate-700"
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
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* ================= SUBMIT BUTTON ================= */}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >

                {submitting
                  ? "Submitting..."
                  : "Get a Free Consultation →"}

              </button>

            </form>


            {/* ================= HIDDEN GOOGLE FORM IFRAME ================= */}

            <iframe
              name="hiddenGoogleForm"
              title="Google Form Submission"
              className="hidden"
            />

          </div>

        </div>


        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-12 rounded-3xl bg-blue-600 px-8 py-10 text-center text-white md:px-12">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
            Ready to Get Started?
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            Let's Take Your Business to the Next Level
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
            Whether you are starting a new business or growing an existing
            one, we are here to help you move forward.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;