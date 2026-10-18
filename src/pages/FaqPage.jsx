
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "../data/faqData";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="bg-white px-4 pb-24 pt-16 sm:px-8 sm:pt-24">
      {/* Heading */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 text-center sm:mb-20"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-[#f0f0f0] px-4 py-1.5 text-sm font-medium text-black">
          <span className="size-1.5 rounded-full bg-black" />
          Common questions
          <span className="size-1.5 rounded-full bg-black" />
        </span>

        <h1 className="mt-6 text-4xl font-medium tracking-[-2px] text-[#090909] sm:text-5xl lg:text-[56px] lg:tracking-[-2.8px]">
          Frequently asked questions
        </h1>
      </motion.header>

      {/* FAQ list */}
      <div className="mx-auto max-w-[885px] space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.article
              key={item.question}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden rounded-[22px] bg-[#f0f0f0] sm:rounded-[24px]"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-8 sm:py-[22px]"
              >
                <span className="text-base font-medium tracking-[-0.45px] text-[#111] sm:text-xl">
                  {item.question}
                </span>

                <span className="flex size-9 shrink-0 items-center cursor-pointer justify-center rounded-full bg-[#090909] text-white">
                  <motion.svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="none"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <path
                        d="M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    ) : (
                      <path
                        d="M5 12h14M12 5v14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    )}
                  </motion.svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.3, ease: "easeInOut" },
                      opacity: { duration: 0.2 },
                    }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[680px] px-5 pb-6 text-base font-medium leading-[1.35] tracking-[-0.4px] text-[#747775] sm:px-8 sm:pb-7 sm:text-xl">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </main>
  );
}
