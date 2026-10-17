
import { motion } from "framer-motion";
import { clientLogos } from "./aboutData";

export default function ClientLogoStrip() {
  return (
    <section className="px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 items-center gap-x-5 gap-y-7 rounded-b-[28px] bg-[#a1ff63] px-6 py-8 text-center text-black sm:grid-cols-3 sm:px-8 md:grid-cols-5 lg:grid-cols-10 lg:gap-6 lg:py-10"
      >
        {clientLogos.map((logo, index) => (
          <span
            key={logo}
            className={`whitespace-nowrap text-lg font-semibold tracking-[-0.8px] sm:text-xl ${
              index === 0 || index === 6 ? "font-bold" : ""
            }`}
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
