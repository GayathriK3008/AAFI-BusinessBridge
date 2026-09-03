import { useEffect, useState } from "react"
import {
  Building2,
  Palette,
  TrendingUp,
  BriefcaseBusiness,
  Users,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Rocket,
} from "lucide-react"

import Services from "./components/Services"
import BusinessSetup from "./components/BusinessSetup"
import BrandingDigital from "./components/BrandingDigital"
import Marketing from "./components/Marketing"
import SalesSupport from "./components/SalesSupport"
import HRAndOperations from "./components/HRAndOperations"
import Packages from "./components/Packages"
import PortfolioSection from "./components/PortfolioSection"
import About from "./components/About"
import WhyChooseUs from "./components/WhyChooseUs"
import Contact from "./components/Contact"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import FinalCTA from "./components/FinalCTA"
import FAQ from "./components/FAQ"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  /*
   * Detect the section currently visible on screen.
   */
  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: "-120px 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  /*
   * Close menus when clicking outside.
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("[data-services-menu]")) {
        setServicesOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  // Lock the page itself while the mobile menu is open.
  // The mobile menu has its own independent scroll area.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen])

  const serviceItems = [
    {
      label: "Business Setup",
      id: "business-setup",
      icon: Building2,
      description: "Build the foundation",
    },
    {
      label: "Branding & Digital",
      id: "branding",
      icon: Palette,
      description: "Create your identity",
    },
    {
      label: "Marketing",
      id: "marketing",
      icon: TrendingUp,
      description: "Generate leads",
    },
    {
      label: "Sales & Business Support",
      id: "sales-hr",
      icon: BriefcaseBusiness,
      description: "Improve business systems",
    },
    {
      label: "HR & Operations",
      id: "hr-operations",
      icon: Users,
      description: "Manage people & processes",
    },
  ]

  const mainNavItems = [
    {
      label: "Home",
      id: "home",
    },
    {
      label: "About",
      id: "about",
    },
    {
      label: "How It Works",
      id: "how-it-works",
    },
    {
      label: "Packages",
      id: "packages",
    },
    {
      label: "Portfolio",
      id: "portfolio",
    },
    {
      label: "Why Us",
      id: "why-us",
    },
    {
      label: "FAQ",
      id: "faq",
    },
    {
      label: "Contact",
      id: "contact",
    },
  ]

  const sectionNames = {
    home: "Home",
    about: "About Us",
    "how-it-works": "How It Works",
    "business-setup": "Business Setup",
    branding: "Branding & Digital",
    marketing: "Marketing",
    "sales-hr": "Sales & Business Support",
    "hr-operations": "HR & Operations",
    packages: "Packages",
    portfolio: "Portfolio",
    "why-us": "Why Choose Us",
    faq: "FAQ",
    contact: "Contact",
  }

  const isServicesActive = serviceItems.some(
    (service) => activeSection === service.id
  )

  const currentSectionName =
    sectionNames[activeSection] || "AAFI BusinessBridge"

  const scrollToSection = (id) => {
    setServicesOpen(false)
    setMobileMenuOpen(false)

    const element = document.getElementById(id)

    if (element) {
      const navbarOffset = 128

      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset

      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth",
      })
    }

    window.history.replaceState(null, "", `#${id}`)
    setActiveSection(id)
  }

  const navLinkClasses = (id) => {
    const isActive = activeSection === id

    return `
      group relative flex items-center gap-1.5
      rounded-xl border px-3 py-2.5
      text-sm font-semibold
      transition-all duration-200
      ${
        isActive
          ? "border-violet-400/30 bg-violet-500/10 text-violet-300 shadow-sm"
          : "border-transparent text-slate-400 hover:border-white/10 hover:bg-slate-800 hover:text-violet-400"
      }
    `
  }

  return (
    <>
      {/* =====================================================
          PREMIUM NAVBAR
      ===================================================== */}

     <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/95 shadow-2xl shadow-black/20 xl:backdrop-blur-xl">

        {/* MAIN NAVBAR ROW */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-6">

          {/* LOGO */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group shrink-0 text-left"
            aria-label="Go to home"
          >
            <div className="flex items-center gap-3">

           {/* Official AAFI Logo */}
<img
  src="/logo.png"
  alt="AAFI BusinessBridge Solutions"
  className="
    h-14
    w-auto
    max-w-[220px]
    shrink-0
    object-contain
  "
/>

              {/* Logo Text */}
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold tracking-tight text-white">
                  AAFI
                </h1>

                <p className="-mt-0.5 text-[11px] font-medium tracking-wide text-slate-400">
                  BusinessBridge Solutions
                </p>
              </div>

            </div>
          </button>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hidden items-center gap-1 xl:flex">

            {/* Home */}
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className={navLinkClasses("home")}
            >
              <span>Home</span>

              {activeSection === "home" ? (
                <Check className="h-3.5 w-3.5 text-violet-400" strokeWidth={3} />
              ) : (
                <ArrowRight className="h-3.5 w-3.5 text-slate-400 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              )}
            </button>


            {/* About */}
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className={navLinkClasses("about")}
            >
              <span>About</span>

              {activeSection === "about" ? (
                <Check className="h-3.5 w-3.5 text-violet-400" strokeWidth={3} />
              ) : (
                <ArrowRight className="h-3.5 w-3.5 text-slate-400 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              )}
            </button>


            {/* =================================================
                SERVICES DROPDOWN
            ================================================= */}

            <div
              className="relative"
              data-services-menu
            >

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  setServicesOpen((previous) => !previous)
                }}
                className={`
                  group flex items-center gap-2
                  rounded-xl px-3 py-2.5
                  text-sm font-semibold
                  transition-all duration-200
                  ${
                    isServicesActive || servicesOpen
                      ? "bg-violet-500/10 text-violet-400 shadow-sm"
                      : "text-slate-400 hover:bg-slate-800 hover:text-violet-400"
                  }
                `}
              >

                <span>Services</span>

                <span className="hidden text-[9px] font-bold uppercase tracking-wider text-slate-400 2xl:inline">
                  Explore
                </span>

                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2.5}
                />

                {(isServicesActive || servicesOpen) && (
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
                )}

              </button>


              {/* Services Dropdown */}
              {servicesOpen && (
                <div
                  className="
                    absolute left-1/2 top-full mt-3 w-80
                    -translate-x-1/2
                    rounded-2xl border border-white/10
                    bg-slate-900 p-2
                    shadow-2xl shadow-black/40
                  "
                >

                  {/* Dropdown Header */}
                  <div className="px-3 pb-3 pt-3">

                    <div className="flex items-center justify-between">

                      <p className="text-[11px] font-bold uppercase tracking-widest text-violet-400">
                        Explore Services
                      </p>

                      <span className="rounded-full bg-violet-500/10 px-2 py-1 text-[10px] font-semibold text-violet-400">
                        5 Areas
                      </span>

                    </div>

                    <p className="mt-1 text-xs text-slate-400">
                      Select a service area to explore
                    </p>

                  </div>


                  {/* Service Items */}
                  {serviceItems.map((service) => {
                    const Icon = service.icon
                    const active = activeSection === service.id

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => scrollToSection(service.id)}
                        className={`
                          group/item flex w-full items-center gap-3
                          rounded-xl px-3 py-3
                          text-left transition duration-200
                          ${
                            active
                              ? "bg-violet-500/10 text-violet-400"
                              : "text-slate-400 hover:bg-slate-800 hover:text-violet-400"
                          }
                        `}
                      >

                        {/* Icon */}
                        <span
                          className={`
                            flex h-10 w-10 shrink-0 items-center
                            justify-center rounded-xl
                            ${
                              active
                                ? "bg-violet-500/20 text-violet-400"
                                : "bg-slate-800 text-slate-400 group-hover/item:bg-violet-500/10 group-hover/item:text-violet-400"
                            }
                          `}
                        >
                          <Icon
                            className="h-5 w-5"
                            strokeWidth={1.8}
                          />
                        </span>


                        {/* Text */}
                        <div className="flex-1">

                          <p className="text-sm font-semibold">
                            {service.label}
                          </p>

                          <p className="mt-0.5 text-[11px] text-slate-400">
                            {service.description}
                          </p>

                        </div>


                        {/* Arrow */}
                        <ChevronRight
                          className={`
                            h-4 w-4 transition-all duration-200
                            ${
                              active
                                ? "text-violet-400"
                                : "text-slate-400 group-hover/item:translate-x-1 group-hover/item:text-violet-400"
                            }
                          `}
                        />

                      </button>
                    )
                  })}

                </div>
              )}

            </div>


            {/* =================================================
                OTHER NAVIGATION ITEMS
            ================================================= */}

            {mainNavItems
              .filter(
                (item) =>
                  item.id !== "home" &&
                  item.id !== "about"
              )
              .map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={navLinkClasses(item.id)}
                >
                  <span>{item.label}</span>

                  {activeSection === item.id ? (
                    <Check
                      className="h-3.5 w-3.5 text-violet-400"
                      strokeWidth={3}
                    />
                  ) : (
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                  )}
                </button>
              ))}

          </div>


          {/* =================================================
              DESKTOP GET STARTED
          ================================================= */}

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="
              hidden shrink-0 items-center
              justify-center rounded-xl
              bg-violet-600 px-5 py-3
              text-sm font-bold text-white
              shadow-lg shadow-violet-600/20
              transition duration-300
              hover:-translate-y-0.5
              hover:bg-violet-600
              hover:shadow-xl
              hover:shadow-violet-600/30
              xl:inline-flex
            "
          >
            Get Started

            <ArrowRight
              className="ml-2 h-4 w-4"
              strokeWidth={2.5}
            />
          </button>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <div className="flex items-center gap-2 xl:hidden">

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="
                hidden rounded-xl bg-violet-600
                px-4 py-2.5 text-sm font-bold
                text-white shadow-md
                sm:inline-flex
              "
            >
              Get Started
            </button>

            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen((previous) => !previous)
              }
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl border border-white/10
                bg-slate-900 text-slate-400
                shadow-sm transition
                hover:border-violet-400/40
                hover:bg-violet-500/10
                hover:text-violet-400
              "
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" strokeWidth={2} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2} />
              )}
            </button>

          </div>

        </div>


        {/* =====================================================
            CURRENT LOCATION INDICATOR
        ===================================================== */}

        <div className="border-t border-white/5 bg-slate-900/90">

          <div className="mx-auto flex max-w-7xl items-center px-5 py-2 lg:px-6">

            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-violet-600" />

            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              You are here
            </span>

            <span className="mx-2 text-slate-400">
              •
            </span>

            <span className="text-[11px] font-bold text-violet-400">
              {currentSectionName}
            </span>

            <span className="ml-auto hidden items-center gap-2 text-[10px] font-medium text-slate-400 sm:flex">
              <span>Click any menu item to jump</span>
              <ArrowRight className="h-3 w-3 text-violet-400" />
            </span>

          </div>

        </div>


        {/* =====================================================
    MOBILE NAVIGATION
===================================================== */}

{mobileMenuOpen && (
  <div
    className="
      fixed
      inset-x-0
      top-[104px]
      bottom-0
      z-[9999]
      overflow-y-auto
      overflow-x-hidden
      bg-slate-900
      shadow-2xl
      xl:hidden
    "
    style={{
      WebkitOverflowScrolling: "touch",
      overscrollBehavior: "contain",
      touchAction: "pan-y",
    }}
  >
    <div className="mx-auto min-h-full w-full max-w-7xl px-5 py-4 pb-12">

      {/* CURRENT LOCATION */}
      <div className="mb-4 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-violet-400">
          You are viewing
        </p>

        <div className="mt-1 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-violet-600" />

          <p className="font-bold text-slate-100">
            {currentSectionName}
          </p>
        </div>
      </div>

      {/* MAIN MOBILE LINKS */}
      <div className="grid gap-1">

        {mainNavItems.map((item) => {
          const active = activeSection === item.id

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                px-4
                py-3.5
                text-left
                text-sm
                font-semibold
                transition
                ${
                  active
                    ? "bg-violet-500/10 text-violet-400"
                    : "text-slate-400 hover:bg-slate-800 hover:text-violet-400"
                }
              `}
            >
              <span>
                {item.label}
              </span>

              {active ? (
                <span className="flex items-center gap-2 text-xs font-bold text-violet-400">
                  CURRENT

                  <Check
                    className="h-3.5 w-3.5"
                    strokeWidth={3}
                  />
                </span>
              ) : (
                <ArrowRight
                  className="h-4 w-4 text-slate-400"
                />
              )}
            </button>
          )
        })}

        {/* SERVICES */}
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            setServicesOpen((previous) => !previous)
          }}
          className={`
            mt-1
            flex
            w-full
            items-center
            justify-between
            rounded-xl
            px-4
            py-3.5
            text-left
            text-sm
            font-semibold
            transition
            ${
              servicesOpen || isServicesActive
                ? "bg-violet-500/10 text-violet-400"
                : "text-slate-400 hover:bg-slate-800 hover:text-violet-400"
            }
          `}
        >
          <div className="flex items-center gap-2">
            <span>Services</span>

            {isServicesActive && (
              <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
            )}
          </div>

          <ChevronDown
            className={`
              h-4 w-4
              transition-transform
              duration-200
              ${servicesOpen ? "rotate-180" : ""}
            `}
          />
        </button>

        {/* SERVICE OPTIONS */}
        {servicesOpen && (
          <div
            className="
              ml-3
              space-y-1
              border-l-2
              border-violet-400/20
              pl-3
            "
          >
            {serviceItems.map((service) => {
              const Icon = service.icon
              const active = activeSection === service.id

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => scrollToSection(service.id)}
                  className={`
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-3
                    text-left
                    transition
                    ${
                      active
                        ? "bg-violet-500/10 text-violet-400"
                        : "text-slate-400 hover:bg-slate-800"
                    }
                  `}
                >
                  {/* ICON */}
                  <span
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      ${
                        active
                          ? "bg-violet-500/20 text-violet-400"
                          : "bg-slate-800 text-slate-400"
                      }
                    `}
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  </span>

                  {/* TEXT */}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      {service.label}
                    </p>

                    <p className="text-[11px] text-slate-400">
                      {service.description}
                    </p>
                  </div>

                  {/* RIGHT ICON */}
                  {active ? (
                    <Check
                      className="h-4 w-4 shrink-0 text-violet-400"
                      strokeWidth={3}
                    />
                  ) : (
                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-slate-400"
                    />
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* MOBILE CTA */}
      <button
        type="button"
        onClick={() => scrollToSection("contact")}
        className="
          mt-5
          flex
          w-full
          items-center
          justify-center
          rounded-xl
          bg-violet-600
          px-5
          py-3.5
          font-bold
          text-white
          shadow-lg
          shadow-violet-600/20
          transition
          hover:bg-violet-600
        "
      >
        Start Your Business

        <ArrowRight
          className="ml-2 h-4 w-4"
          strokeWidth={2.5}
        />
      </button>

    </div>
  </div>
)}
      </nav>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section
          id="home"
          className="relative scroll-mt-28 overflow-hidden bg-slate-950 px-6 pb-20 pt-40"
        >

          {/* Background Decorations */}

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-500/20 opacity-60 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 opacity-60 blur-3xl" />


          <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              {/* Label */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2">

                <span className="h-2 w-2 rounded-full bg-violet-600" />

                <span className="text-sm font-semibold text-violet-300">
                  AAFI BusinessBridge Solutions
                </span>

              </div>


              {/* Heading */}

              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">

                From Business Idea

                <span className="mt-2 block text-violet-400">
                  to Business Growth
                </span>

              </h1>


              {/* Description */}

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                You bring the business idea. We handle the rest.
                From setting up your business to building your brand,
                generating leads and supporting growth.
              </p>


              {/* Buttons */}

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="
                    group inline-flex items-center
                    justify-center rounded-xl
                    bg-violet-600 px-7 py-4
                    font-semibold text-white
                    shadow-lg shadow-violet-600/20
                    transition duration-300
                    hover:-translate-y-0.5
                    hover:bg-violet-600
                    hover:shadow-xl
                  "
                >
                  Start Your Business

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>


                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="
                    inline-flex items-center
                    justify-center rounded-xl
                    border border-white/15
                    bg-slate-900 px-7 py-4
                    font-semibold text-slate-300
                    shadow-sm transition duration-300
                    hover:-translate-y-0.5
                    hover:border-violet-400/40
                    hover:bg-violet-500/10
                    hover:text-violet-300
                  "
                >
                  Get a Free Consultation
                </button>

              </div>


              {/* Trust Points */}

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">

                <div className="flex items-center gap-2">
                  <Check
                    className="h-4 w-4 text-violet-400"
                    strokeWidth={3}
                  />
                  End-to-End Support
                </div>

                <div className="flex items-center gap-2">
                  <Check
                    className="h-4 w-4 text-violet-400"
                    strokeWidth={3}
                  />
                  Business Setup
                </div>

                <div className="flex items-center gap-2">
                  <Check
                    className="h-4 w-4 text-violet-400"
                    strokeWidth={3}
                  />
                  Growth Support
                </div>

              </div>

            </div>


            {/* RIGHT */}

            <div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-black/30">

                {/* Journey Header */}

                <div className="rounded-2xl bg-slate-950 p-7 text-white">

                  <p className="text-sm font-medium tracking-wide text-violet-300">
                    YOUR BUSINESS JOURNEY
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    Idea → Growth
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Everything you need to build and grow your business,
                    connected through one partner.
                  </p>

                </div>


                {/* Journey Cards */}

                <div className="mt-5 grid grid-cols-2 gap-4">

                  {/* Business Setup */}

                  <button
                    type="button"
                    onClick={() => scrollToSection("business-setup")}
                    className="
                      group rounded-2xl bg-violet-500/10 p-5 text-left
                      transition duration-300
                      hover:-translate-y-1
                      hover:bg-violet-500/20
                      hover:shadow-md
                    "
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-800 text-violet-400 shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Building2
                        className="h-5 w-5"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="mt-3 font-bold text-slate-100">
                      Business Setup
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      Build the foundation
                    </p>

                    <span className="mt-3 inline-flex items-center text-sm font-semibold text-violet-400">
                      Explore
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>

                  </button>


                  {/* Branding */}

                  <button
                    type="button"
                    onClick={() => scrollToSection("branding")}
                    className="
                      group rounded-2xl border border-indigo-400/10 bg-indigo-500/10 p-5 text-left
                      transition duration-300
                      hover:-translate-y-1
                      hover:bg-indigo-500/20
                      hover:shadow-md
                    "
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-indigo-600 shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Palette
                        className="h-5 w-5"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="mt-3 font-bold text-slate-100">
                      Branding
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      Create your identity
                    </p>

                    <span className="mt-3 inline-flex items-center text-sm font-semibold text-violet-400">
                      Explore
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>

                  </button>


                  {/* Marketing */}

                  <button
                    type="button"
                    onClick={() => scrollToSection("marketing")}
                    className="
                      group rounded-2xl border border-sky-400/10 bg-sky-500/10 p-5 text-left
                      transition duration-300
                      hover:-translate-y-1
                      hover:bg-sky-500/20
                      hover:shadow-md
                    "
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sky-600 shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <TrendingUp
                        className="h-5 w-5"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="mt-3 font-bold text-slate-100">
                      Marketing
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      Generate leads
                    </p>

                    <span className="mt-3 inline-flex items-center text-sm font-semibold text-violet-400">
                      Explore
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>

                  </button>


                  {/* Growth */}

                  <button
                    type="button"
                    onClick={() => scrollToSection("packages")}
                    className="
                      group rounded-2xl border border-violet-400/10 bg-violet-500/10 p-5 text-left
                      transition duration-300
                      hover:-translate-y-1
                      hover:bg-violet-500/20
                      hover:shadow-md
                    "
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-violet-600 shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Rocket
                        className="h-5 w-5"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="mt-3 font-bold text-slate-100">
                      Growth
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      Scale your business
                    </p>

                    <span className="mt-3 inline-flex items-center text-sm font-semibold text-violet-400">
                      Explore
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>

                  </button>

                </div>


                {/* Progress */}

                <div className="mt-5 rounded-2xl bg-slate-950 p-5">

                  <div className="flex items-center justify-between text-sm">

                    <span className="font-semibold text-slate-400">
                      Your business journey
                    </span>

                    <span className="font-semibold text-violet-400">
                      4 Key Stages
                    </span>

                  </div>

                  <div className="mt-5 h-px w-full bg-white/10" />

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            SERVICES
        ================================================= */}

        <Services />


        {/* =================================================
            WHY CHOOSE US
        ================================================= */}

        <WhyChooseUs />


        {/* =================================================
            HOW IT WORKS
        ================================================= */}

        <HowItWorks />


        {/* =================================================
            BUSINESS SETUP
        ================================================= */}

        <BusinessSetup />


        {/* =================================================
            BRANDING
        ================================================= */}

        <BrandingDigital />


        {/* =================================================
            MARKETING
        ================================================= */}

        <Marketing />


        {/* =================================================
            SALES
        ================================================= */}

        <SalesSupport />


        {/* =================================================
            HR & OPERATIONS
        ================================================= */}

        <HRAndOperations />


        {/* =================================================
            PACKAGES
        ================================================= */}

        <Packages />


        {/* =================================================
            PORTFOLIO
        ================================================= */}

        <PortfolioSection />


        {/* =================================================
            TESTIMONIALS
        ================================================= */}

        <Testimonials />


        {/* =================================================
            ABOUT
        ================================================= */}

        <About />


        {/* =================================================
            FINAL CTA
        ================================================= */}

        <FinalCTA />


        {/* =================================================
            FAQ
        ================================================= */}

        <FAQ />


        {/* =================================================
            CONTACT
        ================================================= */}

        <Contact />

      </main>
    </>
  )
}

export default App