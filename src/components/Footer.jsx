
import { useState } from "react";
import { motion } from "framer-motion";
import WaveButton from "./WaveButton";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
];

const supportLinks = [
  { label: "FAQs", href: "/faq" },
  { label: "Contact us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

function FooterGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 grid grid-cols-3"
    >
      {[0, 1, 2].map((item) => (
        <div
          key={item}
          className="border-r border-white/[0.07] last:border-r-0"
        />
      ))}
    </div>
  );
}

function SocialIcon({ type }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="size-[19px]">
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <circle cx="17.6" cy="6.7" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (type === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-[19px]">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 13.9 4.9 22H1.8l7.3-8.4L1.3 2h6.5l4.4 7.5L18.9 2Zm-1.1 17.9h1.7L6.8 4H5L17.8 19.9Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-[19px]">
        <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.6h.1A4.1 4.1 0 0 1 16.8 8c4 0 4.7 2.6 4.7 6V21h-3.8v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.4V9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[19px]">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
    </svg>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) return;

    // Connect this handler to your newsletter API or email service.
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="flex h-[66px] items-center rounded-[23px] bg-[#1c2b29] p-[6px]">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setSubmitted(false);
          }}
          placeholder="Your email address*"
          aria-label="Your email address"
          className="min-w-0 flex-1 bg-transparent px-4 text-[16px] text-white outline-none placeholder:text-white/40"
        />

        <button
          type="submit"
          aria-label="Subscribe to newsletter"
          className="flex size-[54px] shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 hover:scale-95"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-7">
            <path
              d="M4 12h15m-7-7 7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {submitted && (
        <p role="status" className="mt-3 text-sm text-[#a1ff63]">
          Thanks for subscribing!
        </p>
      )}
    </form>
  );
}

function FooterLinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold tracking-[-0.4px] text-white">
        {title}
      </h3>

      <ul className="mt-8 space-y-[18px]">
        {links.map((link, index) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`text-[21px] font-medium tracking-[-0.7px] transition-colors duration-200 hover:text-[#a1ff63] ${
                title === "Pages" && index === 0
                  ? "text-[#a1ff63]"
                  : "text-white/65"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PartnerBadge({ type }) {
  return (
    <div className="flex h-[79px] min-w-[80px] flex-col items-center justify-center rounded-[13px] bg-white px-3 text-[#222]">
      {type === "google" && (
        <>
          <span className="text-[28px] font-bold leading-none">
            <span className="text-[#4285f4]">G</span>
          </span>
          <span className="mt-1 text-[9px] font-medium">Google Partner</span>
        </>
      )}

      {type === "meta" && (
        <>
          <span className="text-[26px] font-semibold leading-none tracking-[-2px] text-[#2878db]">
            ∞ <span className="text-[16px] tracking-[-0.5px] text-[#303d4b]">Meta</span>
          </span>
          <span className="mt-1 text-[9px] font-medium">Business Partner</span>
        </>
      )}

      {type === "keap" && (
        <>
          <span className="text-[28px] font-extrabold leading-none tracking-[-1.5px] text-[#35a843]">
            keap
          </span>
          <span className="mt-1 text-[11px] font-semibold">Certified</span>
        </>
      )}
    </div>
  );
}

function OvertakeMark() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
      <circle cx="50" cy="50" r="50" fill="#2EA080" />
      <path
        d="M50 0V100M27 26l23 23 23-23M12 45l20 20M88 45 50 83M23 67l9 9"
        stroke="#10201e"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative mx-4 mb-4 overflow-hidden rounded-[30px] bg-[#10201e] text-white sm:mx-6 sm:mb-6 lg:mx-8 lg:mb-8 lg:rounded-[34px]">
      <FooterGrid />

      <div className="relative z-10">
        {/* CTA */}
        <section className="flex min-h-[570px] flex-col items-center justify-center px-5 py-24 text-center sm:min-h-[620px] lg:min-h-[680px]">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[1000px] text-[43px] font-semibold leading-[1.1] tracking-[-2.5px] text-[#f5f5f5] sm:text-6xl lg:text-[100px] lg:leading-[1.18] lg:tracking-[-5px]"
          >
            Ready to outpace
            <br />
            your category?
          </motion.h2>

          <WaveButton
            label="Book a growth audit"
            href="/contact"
            variant="green"
            tilted
            className="mt-5"
          />
        </section>

        {/* Newsletter and navigation */}
        <div className="grid grid-cols-1 gap-14 px-6 pb-20 sm:px-10 lg:grid-cols-[1.8fr_0.6fr_0.7fr_1.5fr] lg:gap-12 lg:px-[5.5%] lg:pb-36">
          <div className="max-w-[450px]">
            <h2 className="text-[30px] font-medium tracking-[-1.2px]">
              Stay connected
            </h2>

            <p className="mt-5 max-w-[400px] text-[19px] font-medium leading-[1.25] tracking-[-0.5px] text-white/70">
              Join our newsletter for tips, updates, and project highlights only the good stuff.
            </p>

            <NewsletterForm />

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="mr-2 text-[21px] font-semibold tracking-[-0.7px]">
                Follow us on:
              </span>

              {[
                ["instagram", "#"],
                ["x", "#"],
                ["linkedin", "#"],
                ["facebook", "#"],
              ].map(([type, href]) => (
                <a
                  key={type}
                  href={href}
                  aria-label={type}
                  className="flex size-[38px] items-center justify-center rounded-[12px] bg-[#1c2b29] text-white transition-colors hover:bg-[#2b403b] hover:text-[#a1ff63]"
                >
                  <SocialIcon type={type} />
                </a>
              ))}
            </div>
          </div>

          <FooterLinkColumn title="Pages" links={pageLinks} />

          <FooterLinkColumn title="Support" links={supportLinks} />

          <div>
            <h3 className="text-[15px] font-semibold tracking-[-0.4px] text-white">
              Stay Connected
            </h3>

            <div className="mt-8 space-y-5 text-[21px] font-medium tracking-[-0.7px] text-white/65">
              <a
                href="mailto:hello@yourbrand.com"
                className="block transition-colors hover:text-[#a1ff63]"
              >
                hello@yourbrand.com
              </a>

              <a
                href="tel:+12025550147"
                className="block transition-colors hover:text-[#a1ff63]"
              >
                +1 (202) 555 0147
              </a>
            </div>

            <h4 className="mt-16 text-[15px] font-semibold">Offline</h4>

            <p className="mt-8 max-w-[390px] text-[21px] font-medium leading-[1.5] tracking-[-0.7px] text-white/65">
              1238 Echo Ridge Blvd, Suite 400, San Francisco, CA 94103, United States
            </p>
          </div>
        </div>


        {/* Oversized brand wordmark */}
        <div className="overflow-hidden px-5 sm:px-10 lg:px-[5.5%]">
        <div className="flex items-center gap-5 sm:gap-8 lg:gap-10">
            {/* Logo icon */}
            <div className="h-[85px] w-[85px] shrink-0 sm:h-[140px] sm:w-[140px] lg:h-[220px] lg:w-[220px]">
            <OvertakeMark />
            </div>

            {/* Logo text */}
            <div className="whitespace-nowrap text-[clamp(75px,14vw,230px)] font-semibold leading-none tracking-[5px] text-white">
            Overtake
            <span className="ml-1 inline-block translate-y-[-1.1em] text-[18px] tracking-normal sm:text-[28px] lg:text-[38px]">
                ®
            </span>
            </div>
        </div>
        </div>

        {/* Copyright and partner badges */}
        <div className="px-6 pb-10 pt-14 sm:px-10 lg:px-[5.5%] lg:pt-20">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="text-[17px] font-semibold tracking-[-0.5px]">
              © 2026 Overtake Growth Inc.
            </p>

            <p className="text-[16px] font-medium text-white/65">
              Design by <span className="text-white">Webestica</span>, Powered by{" "}
              <span className="text-white">Framer</span>
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <PartnerBadge type="google" />
            <PartnerBadge type="meta" />
            <PartnerBadge type="keap" />
          </div>

          <p className="mt-6 max-w-[1180px] text-[13px] font-medium leading-[1.35] tracking-[-0.2px] text-white/65">
            Overtake Growth Inc. is an independent performance-marketing agency.
            Results referenced across this site reflect specific client
            engagements and are not a guarantee of future performance; media
            outcomes vary by budget, category, offer, and market conditions.
            Platform names and logos are trademarks of their respective owners
            and are used for identification only; reference to them does not
            imply partnership, endorsement, or certification unless explicitly
            stated.
          </p>
        </div>
      </div>
    </footer>
  );
}
