
import BrandCarousel from "./BrandCarousel";
import WaveButton from "./WaveButton";
import { motion } from "motion/react";

function MoneyBadge() {
  return (
    <span
      className="inline-flex border  pl-2 h-[0.75em] -translate-y-[0.02em] items-center
        gap-2 rounded-full bg-[#10201e] px-[0.09em] align-middle
        text-[1em] leading-none"
      aria-label="Money moving forward "
    >
      <span className="flex aspect-square h-[0.83em] items-center
        justify-center rounded-full border-[2px] border-black
        bg-[#a1ff63] text-[0.62em] font-bold text-black
        ring-2 ring-[#a1ff63] ring-offset-1 ring-offset-[#10201e]">
        $
      </span>

      <span className="flex items-center gap-0.5 pr-4 md:pb-4 text-white">
        <span>›</span>
        <span>›</span>
        <span>›</span>
      </span>
    </span>
  );
}

function PerformanceCard() {
  const dots = Array.from({ length: 19 }, (_, i) => i);
  const bars = [40, 28, 48, 48, 60, 69, 69, 53, 34, 48, 53, 44, 34];

  return (
    <motion.div
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative flex min-h-[440px] flex-col overflow-hidden
          rounded-[30px] border border-white/5 bg-[#10201e] p-6 text-white
          sm:p-8 lg:min-h-[610px] lg:rounded-[36px] lg:p-11"
      >

      <div className="pointer-events-none absolute inset-3 rounded-[24px]
        border border-white/[0.12] lg:inset-3 lg:rounded-[30px]" />

      <div className="relative grid grid-cols-7 gap-2 sm:gap-3">
        {dots.map((dot) => (
          <span
            key={dot}
            className={`aspect-square rounded-full ${
              dot < 8 ? "bg-[#a1ff63]" : "bg-[#293937]"
            }`}
          />
        ))}
      </div>

      <div className="relative mt-8 flex items-center justify-between gap-4
        sm:mt-10 lg:mt-12">
        <span className="text-5xl font-semibold tracking-[-3px]
          sm:text-6xl lg:text-[84px] lg:tracking-[-5px]">
          6.4x
        </span>

        <span className="text-right text-sm tracking-tight text-white/65
          sm:text-base lg:text-xl">
          Blended ROAS
        </span>
      </div>

      <div className="relative mt-8 border-t border-white/15 pt-8
        sm:mt-10 lg:mt-11 lg:pt-11">
        <h3 className="max-w-[390px] text-2xl font-medium leading-[1.15]
          tracking-[-1.1px] sm:text-3xl lg:text-[32px]">
          Built for clarity, control,
          <br className="hidden sm:block" /> and compounding growth
        </h3>

        <div className="mt-8 flex items-end justify-between gap-3
          sm:mt-10 lg:mt-12">
          <span className="text-sm text-white/70 sm:text-base lg:text-xl">
            CAC in 90 days
          </span>

          <span className="text-4xl font-semibold tracking-[-2px]
            text-[#f7b8f4] sm:text-5xl lg:text-[52px]">
            −41%
          </span>
        </div>
      </div>

      <div className="relative mt-auto flex h-16 items-end gap-1.5
        pt-5 sm:gap-2">
        {bars.map((height, index) => (
          <span
            key={index}
            className={`min-w-0 flex-1 rounded-t-md ${
              index >= 4 && index <= 6
                ? "bg-[#f5b8f1]"
                : "bg-[#293937]"
            }`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <main id="home" className="px-4 pb-8 sm:px-6 lg:px-[34px]">
      <section className="overflow-hidden rounded-[30px] bg-gradient-to-b from-[#f0f0f0] to-white
        sm:rounded-[36px] lg:rounded-[38px]">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hero-grid-bg px-4 pb-12 pt-6  text-center
            sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pb-[60px] lg:pt-[80px]"
        >

          <div className="mx-auto mb-5 inline-flex items-center gap-2
            rounded-full bg-white px-4 py-2 text-xs font-medium
            tracking-tight text-black sm:text-sm">
            <span className="size-2 rounded-full bg-black" />
            Performance marketing studio
            <span className="size-2 rounded-full bg-black" />
          </div>

          <h1 className="mx-auto max-w-[1150px] text-[clamp(2.7rem,6.1vw,6rem)]
            font-semibold leading-[1] tracking-[-0.065em] text-[#090909]">
            What if every <MoneyBadge /> dollar
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            knew exactly where to go?
          </h1>

          <p className="mx-auto mt-4 max-w-[750px] text-base
            leading-[1.8] tracking-[-0.5px] text-[#6b6e6c]
            sm:mt-6 sm:text-lg lg:text-[21px]">
            <span className="rounded-xl bg-[#f6b7f3] px-2 py-1 text-black">
              Paid media,
            </span>{" "}
            <span className="rounded-xl bg-white px-2 py-1 text-black">
              performance creative,
            </span>{" "}
            and{" "}
            <span className="rounded-xl bg-black px-2 py-1 text-white">
              analytics
            </span>{" "}
            under one roof
            <br className="hidden sm:block" />
            <span className="block">
              built for compounding growth not vanity metrics.
            </span>
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center
            gap-4 sm:mt-8">
            <WaveButton
              label="Book a growth audit"
              href="#contact"
              className="shadow-[0_12px_30px_rgba(0,0,0,0.24)]"
            />

            <WaveButton
              label="See our case studies"
              href="#case-studies"
              variant="secondary"
              showArrow={false}
              className="px-6 py-[17px]"
            />
          </div>
        </motion.div>

        <div id="case-studies" className="grid grid-cols-1 gap-5
          px-3 pb-3 sm:px-4 sm:pb-4 lg:grid-cols-[1.75fr_1fr]
          lg:gap-6 lg:px-[10px] lg:pb-[10px]">

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-h-[360px] overflow-hidden rounded-[25px]
              bg-[#5a9fc1] sm:min-h-[460px] lg:min-h-[610px] lg:rounded-[34px]"
          >
            <img
              src='/assets/hero_img_1.png'
              alt="Lifestyle campaign photography"
              className="h-full min-h-[360px] w-full object-cover
                object-center sm:min-h-[460px] lg:min-h-[610px]"
            />
          </motion.div>

          <PerformanceCard />
        </div>

        <BrandCarousel/>
      </section>
    </main>
  );
}
