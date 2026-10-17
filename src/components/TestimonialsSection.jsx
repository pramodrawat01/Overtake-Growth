
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Clara Morgan",
    role: "Growth Director, Brightline Co",
    quote:
      "We finally understand what’s driving performance. Overtake helped us simplify our marketing.",
    image: "/assets/people/clara.png",
    company: "Ararat",
  },
  {
    id: 2,
    name: "Jordan Mitchell",
    role: "Operations Manager, CloudSync Ltd",
    quote:
      "Manual reporting vanished overnight. Overtake rebuilt our tracking and our CRM finally tells the truth.",
    image: "/assets/people/jordan.png",
    company: "CloudSync",
  },
  {
    id: 3,
    name: "Sophie Bennett",
    role: "Marketing Director, Northstar",
    quote:
      "Our creative and media finally work together. We’re making better decisions and seeing measurable growth.",
    image: "/assets/people/emily.png",
    company: "Northstar",
  },
];

function SectionPill({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full
        bg-[#f0f0f0] px-4 py-2 text-sm font-medium text-[#111111]"
    >
      <span className="size-2 rounded-full bg-black" />
      {children}
      <span className="size-2 rounded-full bg-black" />
    </span>
  );
}

function StarRating() {
  return (
    <div
      className="flex gap-0.5 text-[32px] leading-none
        tracking-[-2px] text-[#ff9900] sm:text-[36px]"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const selectTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className="overflow-hidden bg-white px-4 pb-28 pt-20
        sm:px-8 sm:pb-36 sm:pt-24 lg:px-10 lg:pb-40"
      id="testimonials"
    >
      <div className="mx-auto max-w-[1000px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="text-center"
        >
          <SectionPill>Our customers</SectionPill>

          <h2
            className="mt-7 text-4xl font-medium
              tracking-[-0.06em] text-[#111111]
              sm:text-5xl lg:text-[56px]"
          >
            Our success stories
          </h2>
        </motion.div>

        {/* Testimonials layout */}
        <div
          className="mx-auto mt-16 grid max-w-[1050px]
            grid-cols-1 items-center gap-7
            sm:mt-20 sm:grid-cols-[105px_1fr]
            sm:gap-10 lg:grid-cols-[145px_1fr] lg:gap-20"
        >
          {/* Customer portraits */}
          <div
            className="flex items-center justify-center gap-4
              sm:flex-col sm:gap-3"
            aria-label="Select a customer review"
          >
            {testimonials.map((testimonial, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={testimonial.id}
                  type="button"
                  onClick={() => selectTestimonial(index)}
                  aria-label={`Read ${testimonial.name}'s review`}
                  aria-pressed={isActive}
                  animate={{
                    width: isActive ? 138 : 94,
                    height: isActive ? 138 : 94,
                    opacity: isActive ? 1 : 0.75,
                    scale: isActive ? 1 : 0.94,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative shrink-0 overflow-hidden
                    rounded-[25px] border-[2px] bg-[#f0f0f0]
                    transition-colors duration-300
                    ${
                      isActive
                        ? "border-[#a1ff63]"
                        : "border-transparent"
                    }`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable="false"
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Active testimonial card */}
          <div className="min-w-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activeTestimonial.id}
                initial={{
                  opacity: 0,
                  y: activeIndex > 0 ? 35 : -35,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: activeIndex > 0 ? -35 : 35,
                }}
                transition={{
                  duration: 0.38,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex min-h-[310px] flex-col
                  justify-between rounded-[28px] bg-[#f0f0f0]
                  p-6 sm:min-h-[310px] sm:p-9
                  lg:min-h-[308px] lg:rounded-[34px] lg:p-11"
              >
                <div>
                  <StarRating />

                  <blockquote
                    className="mt-6 max-w-[690px] text-xl
                      font-medium leading-[1.4] tracking-[-0.8px]
                      text-[#111111] sm:text-2xl lg:text-[25px]"
                  >
                    “{activeTestimonial.quote}”
                  </blockquote>
                </div>

                <div
                  className="mt-10 flex flex-wrap items-end
                    justify-between gap-4"
                >
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span
                      className="text-lg font-medium
                        tracking-[-0.5px] text-[#111111] sm:text-xl"
                    >
                      {activeTestimonial.name}
                    </span>

                    <span className="text-sm text-[#777777]">
                      · {activeTestimonial.role}
                    </span>
                  </div>

                  <span
                    className="text-xl font-semibold
                      tracking-[-1px] text-[#111111] sm:text-2xl"
                  >
                    {activeTestimonial.company}
                  </span>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
