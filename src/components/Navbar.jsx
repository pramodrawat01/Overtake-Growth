
import { Link, useLocation } from "react-router-dom";
import WaveButton from "./WaveButton";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About", to: "/about" },
  { label: "Pages", to: "/pages", dropdown: true },
  { label: "Blog", to: "/blog" },
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

export default function Navbar() {
  const location = useLocation();

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
              location.pathname === item.to ||
              (item.to !== "/" &&
                location.pathname.startsWith(`${item.to}/`));

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

                {item.dropdown && (
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="size-4"
                    aria-hidden="true"
                  >
                    <path
                      d="m5 7 5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
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

        <details className="relative sm:hidden">
          <summary
            aria-label="Open navigation"
            className="flex size-11 cursor-pointer list-none items-center
              justify-center rounded-full border border-black/15"
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
            className="absolute right-0 top-14 flex w-56 flex-col gap-1
              rounded-2xl border border-black/10 bg-white p-3 shadow-xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-xl px-4 py-3 text-sm text-black
                  hover:bg-[#f1f1f1]"
              >
                {item.label}
                {item.dropdown ? " ↘" : ""}
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
