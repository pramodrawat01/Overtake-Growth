
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";

const interests = [
  "Paid social",
  "Full funnel",
  "Creative",
  "Analytics",
];

const faqs = [
  {
    question: "How fast can we start?",
    answer:
      "Most engagements kick off within two weeks of the audit, sooner if your tracking is already clean.",
  },
  {
    question: "What's the minimum commitment?",
    answer:
      "Our minimum engagement is a 90-day sprint. This gives us enough time to test, optimize, and measure meaningful results without locking you into a long retainer.",
  },
  {
    question: "Do you work with our budget size?",
    answer:
      "We work with growing brands across different budget levels. Share your monthly ad spend and goals, and we'll help determine whether we're a good fit.",
  },
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  budget: "$200k+ / month",
  message: "",
  interests: [],
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [activeFaq, setActiveFaq] = useState(0);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (interest) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((item) => item !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this to your backend contact API.
    console.log("Contact form data:", form);
  };

  const inputClass =
    "w-full rounded-full border border-transparent bg-white px-7 py-5 text-base text-[#111] outline-none transition-colors placeholder:text-[#858585] focus:border-black/20";

  return (
    <main className="overflow-hidden bg-white text-[#090909]">
      {/* CONTACT HERO */}
      <section className="px-4 pb-24 pt-24 sm:px-8 lg:pt-36">
        <div className="mx-auto grid max-w-[1650px] grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col"
          >
            <div className="mb-9 w-fit rounded-full bg-[#f0f0f0] px-4 py-2 text-sm font-medium">
              <span className="mr-2">•</span>
              Book a growth audit
              <span className="ml-2">•</span>
            </div>

            <h1 className="max-w-[750px] text-[clamp(55px,6vw,100px)] font-semibold leading-[1.08] tracking-[-4px] lg:tracking-[-6px]">
              Find your
              <br />
              growth leaking.
            </h1>

            <p className="mt-7 max-w-[680px] text-lg font-medium leading-[1.3] tracking-[-0.5px] text-[#777] sm:text-xl">
              Tell us a little about your business. We'll come back
              within one working day with a 30-minute audit slot
              no deck, no pitch, just the numbers.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "A senior operator reviews your account before the call",
                "You leave with 2–3 clear wins, whether you hire us or not.",
                "Minimum engagement is a 90-day sprint, not a long retainer",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <Check
                    size={20}
                    strokeWidth={3}
                    className="mt-1 shrink-0 text-[#91f454]"
                  />

                  <p className="text-base font-medium leading-[1.4] text-[#777] sm:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CONTACT CARDS */}
            <div className="mt-20 grid max-w-[650px] grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-28">
              <a
                href="mailto:hello@yourbrand.com"
                className="group flex min-h-[205px] flex-col justify-between rounded-[32px] bg-[#f5b8f4] p-7 transition-transform duration-300 hover:-translate-y-2"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-white text-black">
                  <Mail size={27} fill="black" strokeWidth={1.5} />
                </span>

                <div>
                  <p className="mb-1 text-sm text-black/70">
                    Email
                  </p>
                  <p className="break-all text-xl font-semibold tracking-[-0.7px]">
                    hello@yourbrand.com
                  </p>
                </div>
              </a>

              <div className="flex min-h-[205px] flex-col justify-between rounded-[32px] bg-[#090909] p-7 text-white">
                <span className="flex size-14 items-center justify-center rounded-full bg-white text-black">
                  <MapPin size={27} strokeWidth={3} />
                </span>

                <div>
                  <p className="mb-1 text-sm text-white/65">
                    Studio
                  </p>
                  <p className="text-xl font-semibold tracking-[-0.7px]">
                    New York / Remote
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="rounded-[30px] bg-[#f0f0f0] p-5 sm:p-8 lg:p-9"
          >
            <form onSubmit={handleSubmit} className="space-y-8">

              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-3 block text-lg font-medium"
                >
                  Full name*
                </label>

                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) =>
                    updateField("name", e.target.value)
                  }
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-3 block text-lg font-medium"
                  >
                    Email address*
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="hello@yourbrand.com"
                    value={form.email}
                    onChange={(e) =>
                      updateField("email", e.target.value)
                    }
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-3 block text-lg font-medium"
                  >
                    Company*
                  </label>

                  <input
                    id="contact-company"
                    type="text"
                    required
                    placeholder="Company name"
                    value={form.company}
                    onChange={(e) =>
                      updateField("company", e.target.value)
                    }
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-budget"
                  className="mb-3 block text-lg font-medium"
                >
                  Monthly ad budget
                </label>

                <div className="relative">
                  <select
                    id="contact-budget"
                    value={form.budget}
                    onChange={(e) =>
                      updateField("budget", e.target.value)
                    }
                    className={`${inputClass} appearance-none pr-14`}
                  >
                    <option value="$200k+ / month">
                      $200k+ / month
                    </option>
                    <option value="$100k–$200k / month">
                      $100k–$200k / month
                    </option>
                    <option value="$50k–$100k / month">
                      $50k–$100k / month
                    </option>
                    <option value="$10k–$50k / month">
                      $10k–$50k / month
                    </option>
                    <option value="Under $10k / month">
                      Under $10k / month
                    </option>
                  </select>

                  <ChevronDown
                    size={20}
                    className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-3 block text-lg font-medium"
                >
                  What are you trying to grow?
                </label>

                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="A sentence or about your goals and current setup."
                  value={form.message}
                  onChange={(e) =>
                    updateField("message", e.target.value)
                  }
                  className="min-h-[145px] w-full resize-y rounded-[32px] border border-transparent bg-white px-7 py-6 text-base outline-none transition-colors placeholder:text-[#858585] focus:border-black/20"
                />
              </div>

              {/* CHECKBOXES */}
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {interests.map((interest) => (
                  <label
                    key={interest}
                    className="flex cursor-pointer items-center gap-3 text-base font-medium text-[#777]"
                  >
                    <input
                      type="checkbox"
                      checked={form.interests.includes(interest)}
                      onChange={() => toggleInterest(interest)}
                      className="size-5 cursor-pointer accent-[#a1ff63]"
                    />
                    {interest}
                  </label>
                ))}
              </div>

              <div className="flex flex-col items-start justify-between gap-5 pt-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="group flex items-center gap-4 rounded-full bg-[#b7f59b] py-1.5 pl-6 pr-1.5 text-base font-medium text-[#777] transition-colors duration-300 hover:bg-[#a1ff63]"
                >
                  Send message

                  <span className="flex size-11 items-center justify-center rounded-full bg-[#777] text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-black">
                    <ArrowUpRight size={24} />
                  </span>
                </button>

                <p className="text-left text-sm font-medium leading-tight text-[#777] sm:text-right">
                  We reply within one
                  <br />
                  working day. No spam, ever
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="px-4 pb-40 pt-16 sm:px-8 lg:pt-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-4xl font-medium tracking-[-2px] sm:text-6xl"
        >
          Before you ask.
        </motion.h2>

        <div className="mx-auto max-w-[850px] space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="overflow-hidden rounded-[24px] bg-[#f0f0f0] px-6 sm:px-9"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setActiveFaq(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-lg font-medium tracking-[-0.5px] sm:text-xl">
                    {faq.question}
                  </span>

                  <span className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#090909] text-white">
                    {isOpen ? (
                      <Minus size={23} strokeWidth={2} />
                    ) : (
                      <Plus size={23} strokeWidth={2} />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[650px] pb-7 text-base font-medium leading-[1.35] tracking-[-0.3px] text-[#777] sm:text-xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
