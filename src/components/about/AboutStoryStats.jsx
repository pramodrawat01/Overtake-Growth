
import { motion } from "framer-motion";

const stats = [
  {
    label: "Brands scaled\npast $1M/mo",
    value: "40",
    suffix: "+",
    className:
      "left-[3%] top-[2%] rotate-[-20deg] bg-[#f0f0f0] text-[#090909]",
    valueClass: "text-[#090909]",
  },
  {
    label: "Brands scaled\npast $1M/mo",
    value: "10+",
    className:
      "right-[2%] top-[12%] rotate-[21deg] bg-[#f5b8f4] text-[#090909]",
    valueClass: "text-[#090909]",
  },
  {
    label: "Client\nretention rate",
    value: "94",
    suffix: "%",
    className:
      "left-[25%] bottom-[1%] rotate-[10deg] bg-[#10201e] text-white",
    valueClass: "text-white",
  },
];

function StatCard({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, rotate: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: Number(
          stat.className.match(/rotate-\[(-?\d+)deg\]/)?.[1] ?? 0
        ),
      }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`absolute flex h-[190px] w-[190px] flex-col justify-between rounded-[30px] p-7 sm:h-[220px] sm:w-[220px] sm:rounded-[36px] sm:p-9 ${stat.className}`}
    >
      <p className="whitespace-pre-line text-sm font-medium leading-[1.2] tracking-[-0.4px] text-[#747775]">
        {stat.label}
      </p>

      <p
        className={`text-5xl font-semibold leading-none tracking-[-2.5px] sm:text-6xl ${stat.valueClass}`}
      >
        {stat.value}
        {stat.suffix && (
          <span className="text-[#f5b8f4]">{stat.suffix}</span>
        )}
      </p>
    </motion.div>
  );
}

export default function AboutStoryStats() {
  return (
    <section className="px-4 py-20 sm:px-8 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1260px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* Story content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[640px]"
        >
          <h2 className="text-3xl font-medium leading-[1.12] tracking-[-1.7px] text-[#090909] sm:text-4xl lg:text-[40px] lg:tracking-[-2px]">
            Our founders spent a decade inside agencies that billed for
            activity and hid behind reach metrics. Growth teams deserved
            better.
          </h2>

          <p className="mt-8 max-w-[560px] text-lg font-medium leading-[1.3] tracking-[-0.6px] text-[#747775] sm:text-xl">
            So in 2019 we built the opposite: a small, senior team that ties
            every decision to revenue, runs creative and media as one loop,
            and reports numbers a CFO would sign off on. Six years later,
            that discipline manages over $180M in spend for brands that
            refuse to plateau.
          </p>
        </motion.div>

        {/* Floating statistic cards */}
        <div className="relative mx-auto h-[440px] w-full max-w-[540px] sm:h-[500px]">
          {stats.map((stat, index) => (
            <StatCard key={stat.label + index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
