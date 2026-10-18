
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import WaveButton from "./WaveButton";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About", to: "/about" },
  { label: "Pages", to: "/pages", dropdown: true },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const pageLinks = [
  {
    title: "Case Studies",
    description: "Proven growth strategies",
    to: "/case-studies",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2Zm-2 7h8v2h-3v3h-2v-3H8v-2Z" />
      </svg>
    ),
  },
  {
    title: "FAQs",
    description: "Answers to questions",
    to: "/faq",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 3C6.48 3 2 6.81 2 11.5c0 2.14.91 4.08 2.42 5.54L4 21l4.57-2.28c1.08.35 2.23.53 3.43.53 5.52 0 10-3.81 10-8.5S17.52 3 12 3Zm-4 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
      </svg>
    ),
  },
  {
    title: "Privacy Policy",
    description: "Your data protected",
    to: "/privacy-policy",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 2 3 6v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4Zm4.2 8.7-4.9 5a1 1 0 0 1-1.42 0l-2.1-2.1 1.42-1.42 1.39 1.39 4.19-4.29 1.42 1.42Z" />
      </svg>
    ),
  },
];

function BrandLogo() {
  return (
    <Link
      to="/"
      aria-label="Overtake home"
      className="flex shrink-0 items-center gap-2"
    >
      <svg viewBox="0 0 40 40" className="size-9" fill="none">
        <circle cx="20" cy="20" r="19" fill="#2CA582" />
        <path
          d="M20 7v26M11 13l9 9 9-9M9 23l11 9 11-9M15 7l5 7 5-7"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="text-[27px] font-semibold tracking-[-1.6px] text-black">
        Overtake<sup className="ml-0.5 text-[10px]">®</sup>
      </span>
    </Link>
  );
}

function PagesDropdown({ onNavigate }) {
  return (
    <div
      className="absolute left-1/2 top-full z-50 w-[316px]
        -translate-x-1/2 pt-3"
    >
      <div
        className="rounded-[13px] bg-[#10201e] p-3.5
          shadow-[0_20px_50px_rgba(0,0,0,0.16)]"
      >
        {pageLinks.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            onClick={onNavigate}
            className="group flex items-center gap-3 rounded-lg
              px-2 py-3 transition-colors duration-200
              hover:bg-white/[0.07]"
          >
            <span
              className="flex size-12 shrink-0 items-center justify-center
                rounded-md bg-[#f0f0f0] text-black"
            >
              {item.icon}
            </span>

            <span className="min-w-0">
              <span className="block text-[17px] font-semibold
                leading-tight tracking-[-0.5px] text-white">
                {item.title}
              </span>
              <span className="mt-1 block text-[15px] font-medium
                tracking-[-0.4px] text-white/65">
                {item.description}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white px-5 sm:px-8 lg:px-[34px]">
      <div className="flex min-h-[98px] items-center justify-between gap-5">
        <BrandLogo />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-3 lg:flex"
        >
          {navItems.map((item) => {
            const active =
              item.dropdown
                ? ["/case-studies", "/faq", "/privacy-policy"].some(
                    (path) =>
                      location.pathname === path ||
                      location.pathname.startsWith(`${path}/`)
                  )
                : location.pathname === item.to ||
                  (item.to !== "/" &&
                    location.pathname.startsWith(`${item.to}/`));

            if (item.dropdown) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setPagesOpen(true)}
                  onMouseLeave={() => setPagesOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={pagesOpen}
                    aria-haspopup="true"
                    onClick={() => setPagesOpen((open) => !open)}
                    className={`flex items-center gap-1 rounded-full
                      px-5 py-3 text-[16px] font-medium
                      tracking-[-0.5px] transition-colors duration-200
                      ${
                        active || pagesOpen
                          ? "bg-[#f0f0f0] text-black"
                          : "text-[#686868] hover:bg-[#f4f4f4] hover:text-black"
                      }`}
                  >
                    Pages
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`size-4 transition-transform duration-200
                        ${pagesOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        d="m5 7 5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {pagesOpen && (
                    <PagesDropdown
                      onNavigate={() => setPagesOpen(false)}
                    />
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-1 rounded-full px-5 py-3
                  text-[16px] font-medium tracking-[-0.5px]
                  transition-colors duration-200 ${
                    active
                      ? "bg-[#f0f0f0] text-black"
                      : "text-[#686868] hover:bg-[#f4f4f4] hover:text-black"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:block">
          <WaveButton
            label="Start a project"
            href="/contact"
            className="text-sm sm:text-base"
          />
        </div>

        {/* Mobile navigation */}
        <details className="relative sm:hidden">
          <summary
            aria-label="Open navigation"
            className="flex size-11 cursor-pointer list-none
              items-center justify-center rounded-full
              border border-black/15"
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-6">
              <path
                d="M4 8h16M4 16h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </summary>

          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-14 flex w-60 flex-col gap-1
              rounded-2xl border border-black/10 bg-white p-3 shadow-xl"
          >
            {navItems.filter((item) => !item.dropdown).map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-xl px-4 py-3 text-sm text-black
                  hover:bg-[#f1f1f1]"
              >
                {item.label}
              </Link>
            ))}

            <div className="my-1 border-t border-black/10" />

            {pageLinks.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="rounded-xl px-4 py-3 text-sm text-black
                  hover:bg-[#f1f1f1]"
              >
                {item.title}
              </Link>
            ))}

            <Link
              to="/contact"
              className="rounded-xl bg-black px-4 py-3 text-sm text-white"
            >
              Start a project ↗
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
