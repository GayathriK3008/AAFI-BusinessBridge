import { useEffect, useState } from "react";
import {
  Building2,
  Palette,
  TrendingUp,
  BriefcaseBusiness,
  Users,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Check,
} from "lucide-react";

/* =========================================================
   SERVICE LINKS
========================================================= */

const serviceLinks = [
  {
    label: "Business Setup",
    href: "#business-setup",
    description: "Build your business foundation",
    icon: Building2,
  },
  {
    label: "Branding & Digital",
    href: "#branding",
    description: "Build your brand & online presence",
    icon: Palette,
  },
  {
    label: "Marketing",
    href: "#marketing",
    description: "Generate leads & visibility",
    icon: TrendingUp,
  },
  {
    label: "Sales & Business Support",
    href: "#sales-hr",
    description: "Convert leads into customers",
    icon: BriefcaseBusiness,
  },
  {
    label: "HR & Operations",
    href: "#hr-operations",
    description: "Organize & manage your business",
    icon: Users,
  },
];

/* =========================================================
   MAIN NAVIGATION
========================================================= */

const mainLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Packages",
    href: "#packages",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Why Us",
    href: "#why-us",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [activeSection, setActiveSection] =
    useState("home");

  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  /* =======================================================
     ACTIVE SECTION OBSERVER
  ======================================================= */

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "business-setup",
      "branding",
      "marketing",
      "sales-hr",
      "hr-operations",
      "how-it-works",
      "packages",
      "portfolio",
      "why-us",
      "faq",
      "contact",
    ];

    const sections = sectionIds
      .map((id) =>
        document.getElementById(id)
      )
      .filter(Boolean);

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleSections =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              );

          if (
            visibleSections.length > 0
          ) {
            setActiveSection(
              visibleSections[0].target.id
            );
          }
        },
        {
          rootMargin:
            "-100px 0px -55% 0px",
          threshold: [
            0.1,
            0.25,
            0.5,
          ],
        }
      );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () =>
      observer.disconnect();
  }, []);

  /* =======================================================
     SCROLL
  ======================================================= */

  const scrollToSection = (href) => {
    setServicesOpen(false);
    setMobileOpen(false);

    const element =
      document.querySelector(href);

    if (!element) return;

    const navbarHeight = 90;

    const targetPosition =
      element.getBoundingClientRect()
        .top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: Math.max(
        0,
        targetPosition
      ),
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      href
    );

    setActiveSection(
      href.replace("#", "")
    );
  };

  /* =======================================================
     ACTIVE SERVICE
  ======================================================= */

  const isServiceActive =
    serviceLinks.some(
      (item) =>
        item.href ===
        `#${activeSection}`
    );

  /* =======================================================
     DESKTOP NAV BUTTON
  ======================================================= */

  const desktopNavClass = (
    href
  ) => {
    const active =
      activeSection ===
      href.replace("#", "");

    return `
      group
      flex
      h-10
      min-w-max
      shrink-0
      items-center
      justify-center
      whitespace-nowrap
      rounded-lg
      px-3
      text-[14px]
      font-semibold
      leading-none
      transition-all
      duration-200
      ${
        active
          ? "bg-blue-50 text-blue-600 shadow-sm"
          : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
      }
    `;
  };

  return (
    <nav
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        border-b
        border-slate-200
        bg-white
        shadow-sm
      "
    >

      {/* ===================================================
          NEW DESKTOP NAVBAR
      =================================================== */}

      <div
        className="
          mx-auto
          flex
          h-[76px]
          w-full
          max-w-[1500px]
          items-center
          gap-5
          px-5
          xl:px-6
        "
      >

        {/* =================================================
            LOGO
        ================================================= */}

        <button
          type="button"
          onClick={() =>
            scrollToSection(
              "#home"
            )
          }
          className="
            flex
            shrink-0
            items-center
            gap-2.5
            text-left
          "
        >
          <img
            src="/logo.png"
            alt="AAFI BusinessBridge Solutions"
            className="
              h-12
              w-12
              shrink-0
              rounded-xl
              object-cover
              shadow-md
              transition
              duration-300
              hover:scale-105
            "
          />

          <div
            className="
              hidden
              shrink-0
              sm:block
            "
          >
            <div
              className="
                whitespace-nowrap
                text-[21px]
                font-bold
                leading-none
                tracking-tight
                text-slate-950
              "
            >
              AAFI
            </div>

            <div
              className="
                mt-1
                whitespace-nowrap
                text-[11px]
                font-medium
                tracking-wide
                text-slate-500
              "
            >
              BusinessBridge Solutions
            </div>
          </div>
        </button>


        {/* =================================================
            DESKTOP NAVIGATION AREA

            IMPORTANT:
            This is the main fix.
        ================================================= */}

        <div
          className="
            hidden
            min-w-0
            flex-1
            items-center
            justify-center
            gap-1
            lg:flex
          "
          style={{
            flexWrap: "nowrap",
          }}
        >

          {/* =================================================
              HOME
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              scrollToSection(
                "#home"
              )
            }
            className={
              desktopNavClass(
                "#home"
              )
            }
          >
            <span className="whitespace-nowrap">
              Home
            </span>

            {activeSection ===
              "home" && (
              <Check
                className="
                  ml-1.5
                  h-3.5
                  w-3.5
                  shrink-0
                "
                strokeWidth={3}
              />
            )}
          </button>


          {/* =================================================
              ABOUT
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              scrollToSection(
                "#about"
              )
            }
            className={
              desktopNavClass(
                "#about"
              )
            }
          >
            <span className="whitespace-nowrap">
              About
            </span>

            {activeSection ===
              "about" && (
              <Check
                className="
                  ml-1.5
                  h-3.5
                  w-3.5
                  shrink-0
                "
                strokeWidth={3}
              />
            )}
          </button>


          {/* =================================================
              SERVICES
          ================================================= */}

          <div
            className="
              relative
              shrink-0
            "
            onMouseEnter={() =>
              setServicesOpen(true)
            }
            onMouseLeave={() =>
              setServicesOpen(false)
            }
          >

            <button
              type="button"
              onClick={() =>
                setServicesOpen(
                  (prev) => !prev
                )
              }
              className={`
                flex
                h-10
                min-w-max
                shrink-0
                items-center
                justify-center
                gap-1.5
                whitespace-nowrap
                rounded-lg
                px-3
                text-[14px]
                font-semibold
                leading-none
                transition-all
                duration-200
                ${
                  isServiceActive ||
                  servicesOpen
                    ? "bg-blue-50 text-blue-600 shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }
              `}
            >

              <span className="whitespace-nowrap">
                Services
              </span>

              <span
                className="
                  whitespace-nowrap
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-slate-400
                "
              >
                Explore
              </span>

              <ChevronDown
                className={`
                  h-3.5
                  w-3.5
                  shrink-0
                  transition-transform
                  duration-200
                  ${
                    servicesOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
                strokeWidth={2.5}
              />

            </button>


            {/* =============================================
                SERVICES DROPDOWN
            ============================================= */}

            {servicesOpen && (
              <div
                className="
                  absolute
                  left-1/2
                  top-full
                  z-50
                  w-[400px]
                  -translate-x-1/2
                  pt-3
                "
              >

                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-2
                    shadow-2xl
                    shadow-slate-300/40
                  "
                >

                  {/* Dropdown Header */}

                  <div
                    className="
                      px-4
                      pb-3
                      pt-3
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <p
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-widest
                          text-blue-600
                        "
                      >
                        Explore Services
                      </p>

                      <span
                        className="
                          rounded-full
                          bg-blue-50
                          px-2.5
                          py-1
                          text-[10px]
                          font-bold
                          text-blue-600
                        "
                      >
                        {
                          serviceLinks.length
                        }{" "}
                        Areas
                      </span>

                    </div>

                    <p
                      className="
                        mt-1
                        text-xs
                        text-slate-500
                      "
                    >
                      Select a service area
                      to explore
                    </p>

                  </div>


                  {/* Service Items */}

                  {serviceLinks.map(
                    (item) => {
                      const Icon =
                        item.icon;

                      const isActive =
                        activeSection ===
                        item.href.replace(
                          "#",
                          ""
                        );

                      return (
                        <button
                          key={
                            item.href
                          }
                          type="button"
                          onClick={() =>
                            scrollToSection(
                              item.href
                            )
                          }
                          className={`
                            group/item
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-xl
                            p-3
                            text-left
                            transition
                            ${
                              isActive
                                ? "bg-blue-50"
                                : "hover:bg-slate-50"
                            }
                          `}
                        >

                          <div
                            className={`
                              flex
                              h-11
                              w-11
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              ${
                                isActive
                                  ? "bg-blue-100 text-blue-600"
                                  : "bg-slate-50 text-slate-500 group-hover/item:bg-blue-50 group-hover/item:text-blue-600"
                              }
                            `}
                          >
                            <Icon
                              className="h-5 w-5"
                              strokeWidth={
                                1.8
                              }
                            />
                          </div>


                          <div
                            className="
                              min-w-0
                              flex-1
                            "
                          >

                            <div
                              className={`
                                text-sm
                                font-semibold
                                ${
                                  isActive
                                    ? "text-blue-600"
                                    : "text-slate-900"
                                }
                              `}
                            >
                              {
                                item.label
                              }
                            </div>

                            <div
                              className="
                                mt-0.5
                                text-xs
                                text-slate-500
                              "
                            >
                              {
                                item.description
                              }
                            </div>

                          </div>


                          <ChevronRight
                            className="
                              h-4
                              w-4
                              shrink-0
                              text-slate-300
                              transition
                              group-hover/item:translate-x-1
                              group-hover/item:text-blue-500
                            "
                          />

                        </button>
                      );
                    }
                  )}

                </div>
              </div>
            )}

          </div>


          {/* =================================================
              HOW IT WORKS
              FORCED SINGLE LINE
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              scrollToSection(
                "#how-it-works"
              )
            }
            className={`
              flex
              h-10
              min-w-max
              shrink-0
              items-center
              justify-center
              whitespace-nowrap
              rounded-lg
              px-3
              text-[14px]
              font-semibold
              leading-none
              transition-all
              duration-200
              ${
                activeSection ===
                "how-it-works"
                  ? "bg-blue-50 text-blue-600 shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              }
            `}
          >
            How It Works
          </button>


          {/* =================================================
              PACKAGES
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              scrollToSection(
                "#packages"
              )
            }
            className={
              desktopNavClass(
                "#packages"
              )
            }
          >
            Packages
          </button>


          {/* =================================================
              PORTFOLIO
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              scrollToSection(
                "#portfolio"
              )
            }
            className={
              desktopNavClass(
                "#portfolio"
              )
            }
          >
            Portfolio
          </button>


          {/* =================================================
              WHY US
              FORCED SINGLE LINE
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              scrollToSection(
                "#why-us"
              )
            }
            className={`
              flex
              h-10
              min-w-max
              shrink-0
              items-center
              justify-center
              whitespace-nowrap
              rounded-lg
              px-3
              text-[14px]
              font-semibold
              leading-none
              transition-all
              duration-200
              ${
                activeSection ===
                "why-us"
                  ? "bg-blue-50 text-blue-600 shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              }
            `}
          >
            Why Us
          </button>


          {/* =================================================
              FAQ
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              scrollToSection(
                "#faq"
              )
            }
            className={
              desktopNavClass(
                "#faq"
              )
            }
          >
            FAQ
          </button>


          {/* =================================================
              CONTACT
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              scrollToSection(
                "#contact"
              )
            }
            className={
              desktopNavClass(
                "#contact"
              )
            }
          >
            Contact
          </button>

        </div>


        {/* =================================================
            DESKTOP GET STARTED
        ================================================= */}

        <button
          type="button"
          onClick={() =>
            scrollToSection(
              "#contact"
            )
          }
          className="
            hidden
            shrink-0
            items-center
            justify-center
            gap-2
            whitespace-nowrap
            rounded-xl
            bg-blue-600
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-blue-600/20
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-blue-700
            lg:flex
          "
        >
          Get Started

          <ArrowRight
            className="h-4 w-4"
            strokeWidth={2.5}
          />
        </button>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() =>
            setMobileOpen(
              (prev) => !prev
            )
          }
          className="
            ml-auto
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            text-slate-700
            transition
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-blue-600
            lg:hidden
          "
          aria-label="Toggle navigation"
          aria-expanded={
            mobileOpen
          }
        >
          {mobileOpen ? (
            <X
              className="h-5 w-5"
              strokeWidth={2}
            />
          ) : (
            <Menu
              className="h-5 w-5"
              strokeWidth={2}
            />
          )}
        </button>

      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileOpen && (
        <div
          className="
            max-h-[calc(100vh-76px)]
            overflow-y-auto
            border-t
            border-slate-100
            bg-white
            px-5
            pb-5
            pt-3
            shadow-xl
            lg:hidden
          "
        >

          {/* Mobile Main Links */}

          {mainLinks
            .slice(0, 2)
            .map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() =>
                  scrollToSection(
                    link.href
                  )
                }
                className={`
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  px-3
                  py-3
                  text-left
                  text-sm
                  font-semibold
                  transition
                  ${
                    activeSection ===
                    link.href.replace(
                      "#",
                      ""
                    )
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }
                `}
              >
                {link.label}

                <ArrowRight className="h-4 w-4" />
              </button>
            ))}


          <div
            className="
              my-2
              border-t
              border-slate-100
            "
          />


          {/* Mobile Services Heading */}

          <div
            className="
              flex
              items-center
              justify-between
              px-3
              py-2
            "
          >
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-blue-600
              "
            >
              Services
            </p>

            <span
              className="
                rounded-full
                bg-blue-50
                px-2
                py-1
                text-[10px]
                font-bold
                text-blue-600
              "
            >
              {
                serviceLinks.length
              }{" "}
              Areas
            </span>
          </div>


          {/* Mobile Services */}

          {serviceLinks.map(
            (item) => {
              const Icon =
                item.icon;

              const isActive =
                activeSection ===
                item.href.replace(
                  "#",
                  ""
                );

              return (
                <button
                  key={
                    item.href
                  }
                  type="button"
                  onClick={() =>
                    scrollToSection(
                      item.href
                    )
                  }
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
                      isActive
                        ? "bg-blue-50"
                        : "hover:bg-slate-50"
                    }
                  `}
                >

                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      ${
                        isActive
                          ? "bg-blue-100 text-blue-600"
                          : "bg-slate-50 text-slate-500"
                      }
                    `}
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={
                        1.8
                      }
                    />
                  </div>

                  <div className="flex-1">

                    <span
                      className={`
                        block
                        text-sm
                        font-semibold
                        ${
                          isActive
                            ? "text-blue-600"
                            : "text-slate-800"
                        }
                      `}
                    >
                      {
                        item.label
                      }
                    </span>

                    <span
                      className="
                        mt-0.5
                        block
                        text-xs
                        text-slate-500
                      "
                    >
                      {
                        item.description
                      }
                    </span>

                  </div>

                  <ChevronRight
                    className="
                      h-4
                      w-4
                      text-slate-300
                    "
                  />

                </button>
              );
            }
          )}


          <div
            className="
              my-2
              border-t
              border-slate-100
            "
          />


          {/* Mobile Remaining Links */}

          {mainLinks
            .slice(2)
            .map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() =>
                  scrollToSection(
                    link.href
                  )
                }
                className={`
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  px-3
                  py-3
                  text-left
                  text-sm
                  font-semibold
                  transition
                  ${
                    activeSection ===
                    link.href.replace(
                      "#",
                      ""
                    )
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }
                `}
              >
                {link.label}

                <ArrowRight className="h-4 w-4" />
              </button>
            ))}


          {/* Mobile CTA */}

          <button
            type="button"
            onClick={() =>
              scrollToSection(
                "#contact"
              )
            }
            className="
              mt-3
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-600
              px-5
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-blue-600/20
              transition
              hover:bg-blue-700
            "
          >
            Get Started

            <ArrowRight
              className="h-4 w-4"
              strokeWidth={2.5}
            />
          </button>

        </div>
      )}

    </nav>
  );
}