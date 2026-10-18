
import { useState } from "react";
import { motion } from "motion/react";

const disciplines = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Positioning, funnel math, and budget architecture before anything ships or any campaign goes live.",
    image:
      "/assets/pov1.png",
  },
  {
    number: "02",
    title: "Paid media",
    description:
      "Smarter channel allocation, disciplined testing, and campaigns built to turn spend into profitable growth.",
    image:
      "/assets/pov2.png",
  },
  {
    number: "03",
    title: "Creative",
    description:
      "Creative concepts, rapid iterations, and performance-led storytelling that earns attention and drives action.",
    image:
      "/assets/pov3.png",
  },
  {
    number: "04",
    title: "Analytics",
    description:
      "Clear attribution, meaningful measurement, and the insights that make the next growth decision smarter.",
    image:
      "/assets/pov4.png",
  },
];

const services = [
  "Programmatic",
  "GTA4",
  "TikTok",
  "Google Ads",
  "Incrementality",
  "Meta Ads",
];

const teamImages = [
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&h=300&q=85",
    alt: "Team collaborating",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=85",
    alt: "Team member",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=85",
    alt: "Team member",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=300&q=85",
    alt: "Team member",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 65 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SectionLabel({ children }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full
      bg-white/[0.07] px-4 py-2 text-xs font-medium tracking-tight
      text-white sm:text-sm">
      <span className="size-1.5 rounded-full bg-white" />
      {children}
      <span className="size-1.5 rounded-full bg-white" />
    </span>
  );
}

function TeamAvatars() {
  return (
    <div className="flex shrink-0 items-center gap-2.5">
      {teamImages.map((person, index) => (
        <img
          key={person.alt + index}
          src={person.src}
          alt={person.alt}
          loading="lazy"
          className="size-[66px] rounded-[20px] object-cover
            sm:size-[84px] sm:rounded-[23px]"
        />
      ))}
    </div>
  );
}

function DisciplineList({ active, onChange }) {
  return (
    <div className="mt-8 flex flex-col gap-2 sm:mt-12">
      {disciplines.map((item, index) => {
        const isActive = active === index;

        return (
          <button
            type="button"
            key={item.number}
            onClick={() => onChange(index)}
            aria-pressed={isActive}
            className={`group flex w-full items-center gap-4 rounded-[18px]
              px-4 py-4 text-left transition-all duration-300
              sm:gap-5 sm:px-6 sm:py-5 ${
                isActive
                  ? "bg-white/[0.07]"
                  : "bg-transparent hover:bg-white/[0.04]"
              }`}
          >
            <span
              className={`text-sm font-medium transition-colors sm:text-lg ${
                isActive ? "text-[#a1ff63]" : "text-[#669b48]"
              }`}
            >
              {item.number}
            </span>

            <span
              className={`text-[26px] font-medium tracking-[-1.2px]
                transition-colors sm:text-[34px] sm:tracking-[-1.6px]
                ${
                  isActive
                    ? "text-white"
                    : "text-white/55 group-hover:text-white/85"
                }`}
            >
              {item.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ServicesMarquee() {
  return (
    <div className="services-marquee relative overflow-hidden rounded-b-[30px]
      bg-[#f5b8f4] py-6 text-black sm:rounded-b-[36px] sm:py-7">
      <div className="services-track flex w-max items-center">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex shrink-0 items-center"
          >
            {services.map((service) => (
              <div
                key={`${copy}-${service}`}
                className="flex shrink-0 items-center gap-5 px-5
                  sm:gap-7 sm:px-7 lg:gap-9 lg:px-9"
              >
                <svg
                  viewBox="0 0 40 40"
                  className="size-7 shrink-0 sm:size-8"
                  fill="none"
                >
                  <circle cx="20" cy="20" r="19" fill="#fff" />
                  <path
                    d="M20 7v26M11 13l9 9 9-9M9 23l11 9 11-9M15 7l5 7 5-7"
                    stroke="#f5b8f4"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="whitespace-nowrap text-[19px] font-medium
                  tracking-[-0.7px] sm:text-[25px]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PointOfViewSection() {
  const [active, setActive] = useState(0);
  const selected = disciplines[active];

  return (
    <section id="about" className="px-4 pb-8 sm:px-6 lg:px-[34px]">
      <div className="overflow-hidden rounded-tr-[30px] rounded-tl-[30px] bg-[#090909]
        text-white sm:rounded-tr-[36px] sm:rounded-tl-[36px]">

        {/* Our point of view */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="p-6 sm:p-10 md:p-14 lg:px-[9%] lg:pb-16 lg:pt-[150px]"
        >
          <SectionLabel>Our point of view</SectionLabel>

          <h2 className="mt-7 max-w-[1150px] text-[clamp(2.25rem,4.2vw,4.5rem)]
            font-medium leading-[1.13] tracking-[-0.055em] text-[#f4f4f4]">
            Most agencies sell activity. We sell outcomes.{" "}
            <span className="text-[#a1ff63]">
              Every test we run has a number attached
            </span>
            , and every number feeds the next decision, that loop is the
            entire agency.
          </h2>

          <div className="mt-12 flex flex-col items-start gap-6 sm:mt-16
            sm:flex-row sm:items-center sm:gap-8 lg:mt-20">
            <TeamAvatars />

            <p className="max-w-[360px] text-base font-medium leading-[1.3]
              tracking-[-0.5px] text-white/70 sm:text-lg">
              A senior team on every account.
              <br />
              No hand-offs, no black boxes, no 40-page decks that say nothing.
            </p>
          </div>
        </motion.div>

        {/* Four disciplines */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-10 px-6 pb-16 pt-10
            sm:px-10 md:px-14 lg:grid-cols-[1fr_1fr] lg:gap-16
            lg:px-[9%] lg:pb-[150px] lg:pt-[100px]"
        >
          <div>
            <SectionLabel>Four disciplines, one system growth</SectionLabel>

            <h2 className="mt-7 max-w-[520px] text-[clamp(2.3rem,4vw,3.7rem)]
              font-medium leading-[1.12] tracking-[-0.055em]">
              Where should your next dollar work?
            </h2>

            <DisciplineList active={active} onChange={setActive} />
          </div>

          <motion.div
            key={selected.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col justify-center lg:pt-12"
          >
            <div className="overflow-hidden rounded-[25px] bg-[#18211e]
              sm:rounded-[32px]">
              <img
                src={selected.image}
                alt={`${selected.title} discipline`}
                loading="lazy"
                className="aspect-[1.08/1] w-full object-cover
                  transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <p className="mt-6 max-w-[570px] text-base font-medium
              leading-[1.35] tracking-[-0.5px] text-white/70 sm:text-lg">
              {selected.description}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Moving services strip */}
      <ServicesMarquee />
    </section>
  );
}
