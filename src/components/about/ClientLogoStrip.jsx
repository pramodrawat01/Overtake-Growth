
import { motion } from "framer-motion";
import { FaGlobe, FaLeaf, FaArrowRight } from "react-icons/fa";
import { SiSnowflake } from "react-icons/si";

const clientLogos = [
  { name: "Snowflake", Icon: SiSnowflake },
  { name: "Ararat", Icon: null },
  { name: "Hamilton", Icon: null },
  { name: "PinPoint", Icon: FaGlobe },
  { name: "Scale", Icon: FaArrowRight },
  { name: "Leafe", Icon: FaLeaf },
  { name: "vision", Icon: FaGlobe },
  { name: "Madrid", Icon: null },
  { name: "alaska", Icon: null },
  { name: "KOBE", Icon: null },
  { name: "U-Turn", Icon: FaArrowRight },
  { name: "monaco", Icon: null },
];

export default function ClientLogoStrip() {
  return (
    <section className="px-4 sm:px-8">
      {/* Green box stays in place */}
      <div className="overflow-hidden rounded-b-[28px] bg-[#a1ff63] py-8 sm:py-10">
        {/* Only the logos animate into view */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="client-logo-track flex w-max items-center">
            {[0, 1].map((group) => (
              <div
                key={group}
                aria-hidden={group === 1}
                className="flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16 lg:gap-20 lg:pr-20"
              >
                {clientLogos.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="flex shrink-0 items-center gap-2 text-black"
                    title={name}
                  >
                    {Icon && <Icon className="size-6 shrink-0 sm:size-7" />}

                    <span className="whitespace-nowrap text-lg font-semibold tracking-[-0.8px] sm:text-2xl">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .client-logo-track {
          animation: client-logo-marquee 100s linear infinite;
          will-change: transform;
        }

        @keyframes client-logo-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .client-logo-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
