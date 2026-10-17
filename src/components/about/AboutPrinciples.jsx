
import { motion } from "framer-motion";
import { principles } from "./aboutData";

export default function AboutPrinciples() {
  return (
    <section className="px-4 sm:px-8">
      <div className="relative isolate overflow-hidden rounded-tr-[28px] rounded-tl-[28px] bg-[#090909] py-20 text-white sm:py-28 lg:py-48">
        {/* Full-height background grid lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 grid grid-cols-3"
        >
          <div className="border-r border-white/[0.08]" />
          <div className="border-r border-white/[0.08]" />
          <div />
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="px-4 text-center text-3xl font-medium tracking-[-1.5px] sm:text-5xl"
        >
          What we stand on
        </motion.h2>

        {/* Principle cards */}
        <div className="mx-auto mt-12 grid max-w-[1250px] grid-cols-1 gap-5 px-5 sm:mt-16 sm:px-8 md:grid-cols-3 md:gap-6 lg:mt-20">
          {principles.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex min-h-[260px] flex-col items-center rounded-[28px] bg-[#171717] px-5 py-8 text-center sm:min-h-[290px] sm:px-7 sm:py-10"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#f5b8f4] text-lg font-medium text-black">
                {item.number}
              </span>

              <h3 className="mt-7 text-xl font-medium tracking-[-0.8px] sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-3 max-w-[290px] text-base font-medium leading-[1.4] tracking-[-0.4px] text-white/65 sm:text-lg">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
