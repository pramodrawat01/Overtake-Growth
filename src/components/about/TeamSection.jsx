
import { motion } from "framer-motion";
import { teamMembers } from "./aboutData";

export default function TeamSection() {
  return (
    <section className="px-5 pb-24 pt-24 sm:px-10 sm:pt-32 lg:px-[12.5%]">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_2.05fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f0f0f0] px-4 py-2 text-sm font-medium text-black">
            <span>•</span>
            The senior team promise
            <span>•</span>
          </span>

          <h2 className="mt-6 max-w-[530px] text-4xl font-medium leading-[1.08] tracking-[-2px] text-[#090909] sm:text-5xl lg:text-[clamp(42px,4vw,62px)] lg:tracking-[-3px]">
            No juniors hiding behind the pitch deck.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {teamMembers.map((person, index) => (
            <motion.article
              key={person.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group min-w-0"
            >
              <div className="relative aspect-[0.86/1] overflow-hidden rounded-[22px] bg-[#e9e9e9] sm:rounded-[28px]">
                <img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <h3 className="mt-5 text-xl font-medium tracking-[-0.8px] text-[#111] sm:text-2xl">
                {person.name}
              </h3>

              <p className="mt-1 text-sm font-medium leading-snug text-[#747775] sm:text-base">
                {person.role}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
