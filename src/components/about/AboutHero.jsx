
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="px-5 pb-12 pt-16 sm:px-10 sm:pb-16 sm:pt-24 lg:px-[12.5%] lg:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black">
          <span>•</span>
          Our story
          <span>•</span>
        </span>

        <h1 className="mt-7 max-w-[1250px] text-[clamp(42px,6.1vw,94px)] font-semibold leading-[1.05] tracking-[-0.075em] text-[#090909]">
          We started{" "}
          <span className="inline-block rounded-full bg-[#a1ff63] px-4 py-1">
            overtake
          </span>{" "}
          because good{" "}
          <span className="text-[#f5b8f4]">work</span> kept dying in bad
          dashboards.
        </h1>
      </motion.div>
    </section>
  );
}
