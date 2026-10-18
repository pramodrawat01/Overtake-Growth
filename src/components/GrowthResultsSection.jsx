
import { motion } from "framer-motion";
import WaveButton from "./WaveButton";

const revealUp = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ResultLabel({ children, dark = false }) {
  return (
    <span
      className={`inline-flex w-fit rounded-full px-3 py-1.5
        text-xs font-medium sm:text-sm ${
          dark
            ? "bg-black text-white"
            : "bg-white text-black"
        }`}
    >
      {children}
    </span>
  );
}

function PeakRoasCard() {
  return (
    <motion.article
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex min-h-[330px] flex-col justify-between rounded-[28px]
        bg-[#ffe68b] p-7 text-[#101010] sm:min-h-[390px] sm:p-9
        lg:rounded-[34px] lg:p-10"
    >
      <ResultLabel dark>Peak ROAS</ResultLabel>

      <div className="mt-12">
        <p className="text-5xl font-medium tracking-[-2.5px] sm:text-6xl">
          8.1x
        </p>

        <p className="mt-3 max-w-[310px] text-base leading-[1.3]
          tracking-[-0.5px] text-black/70 sm:text-xl">
          Return on ad spend — DTC skincare, peak quarter
        </p>
      </div>
    </motion.article>
  );
}

function SpendingEfficiencyCard() {
  const bars = [74, 74, 74, 74, 74, 74, 74, 74, 74];

  return (
    <motion.article
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.12 }}
      className="flex min-h-[330px] flex-col rounded-[28px] bg-[#f0f0f0]
        p-7 text-[#111111] sm:min-h-[390px] sm:p-9
        lg:rounded-[34px] lg:p-10"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="max-w-[175px] text-lg leading-[1.15]
          tracking-[-0.6px] text-[#777777] sm:text-xl">
          Spending
          <br />
          efficiency
        </h3>

        <ResultLabel>90-day sprint</ResultLabel>
      </div>

      <div className="flex flex-1 items-center justify-center py-6">
        <p className="text-5xl font-medium tracking-[-2px] sm:text-[56px]">
          −41%
        </p>
      </div>

      <div className="flex items-end gap-2">
        {bars.map((height, index) => (
          <motion.span
            key={index}
            initial={{ height: 0 }}
            whileInView={{ height }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.06,
              ease: "easeOut",
            }}
            className={`min-w-0 flex-1 rounded-md ${
              index === 4 || index === 5
                ? "bg-[#f5b8f4]"
                : "bg-[#d9d9d9]"
            }`}
          />
        ))}
      </div>

      <p className="mt-3 text-base leading-[1.25] tracking-[-0.4px]
        text-[#777777] sm:text-lg">
        $68 → $40 blended CAC,
        <br />
        outdoor ecommerce
      </p>
    </motion.article>
  );
}

function FeaturedCaseStudy() {
  return (
    <motion.article
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className="grid gap-7 rounded-[28px] bg-[#10201e] p-5 text-white
        sm:p-7 md:grid-cols-[0.95fr_1fr] md:items-center md:gap-10
        lg:rounded-[34px] lg:p-8"
    >
      <div className="group relative overflow-hidden rounded-full bg-[#25312f]">
        <img
          src="/assets/growthportrait.png"
          alt="Featured client case study"
          loading="lazy"
          className="aspect-[1.5/0.85] w-full object-cover object-center
            transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 flex justify-center
          bg-gradient-to-t from-black/90 via-black/60 to-transparent
          pb-5 pt-12">
          <span className="text-xl font-medium tracking-[-0.7px] sm:text-2xl">
            ✳ Hamilton
          </span>
        </div>
      </div>

      <div className="flex flex-col items-start py-2 md:py-3">
        <p className="text-base font-medium tracking-[-0.4px] text-white/70
          sm:text-lg">
          Avg. YoY client revenue growth
        </p>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-3 text-5xl font-medium tracking-[-2px]
            text-[#a1ff63] sm:text-6xl"
        >
          212%
        </motion.p>

        <div className="mt-8 sm:mt-12">
          <WaveButton
            label="Read the case study"
            href="case-studies"
            variant="secondary"
            className="border-white/20 bg-white text-black
              hover:bg-white/90"
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function GrowthResultsSection() {
  return (
    <section
      id="results"
      className="overflow-hidden bg-white px-4 pb-24 pt-24
        sm:px-6 sm:pb-32 sm:pt-32 lg:px-8 lg:pb-40 lg:pt-40"
    >
      {/* Section heading */}
      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto mb-12 max-w-[650px] text-center
          sm:mb-16 lg:mb-20"
      >
        <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-medium
          leading-[1.12] tracking-[-0.06em] text-[#101010]">
          Growth you can point at.
        </h2>

        <p className="mx-auto mt-5 max-w-[460px] text-base leading-[1.35]
          tracking-[-0.4px] text-[#737775] sm:text-xl">
          Every engagement starts with a target and ends
          with a number. Here’s the last twelve months.
        </p>
      </motion.div>

      {/* Performance cards */}
      <div className="mx-auto grid max-w-[860px] grid-cols-1 gap-3
        sm:grid-cols-2 sm:gap-3">
        <PeakRoasCard />
        <SpendingEfficiencyCard />

        <div className="sm:col-span-2">
          <FeaturedCaseStudy />
        </div>
      </div>
    </section>
  );
}
