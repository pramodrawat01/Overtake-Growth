
import { motion } from "framer-motion";
// import { Check, X, Leaf } from "lucide-react"

const comparisons = [
  {
    typical: "Juniors run the account after the pitch team leaves",
    overtake: "Senior operators on your account from day one",
  },
  {
    typical: "Monthly reports full of impressions and reach",
    overtake: "Reporting tied to revenue, CAC, and payback",
  },
  {
    typical: "Creative and media in separate silos",
    overtake: "Creative and media run as one testing loop",
  },
  {
    typical: "Long retainers, slow to prove value",
    overtake: "90-day sprints — value proven fast or we part ways",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="mt-1 size-5 shrink-0 text-[#a1ff63]"
      aria-hidden="true"
    >
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="mt-1 size-5 shrink-0 text-[#a5a5a5]"
      aria-hidden="true"
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function OvertakeIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className="size-7 shrink-0 text-black"
      aria-hidden="true"
    >
      <path
        d="M16 3v26M16 16 6 7M16 22 5 15M16 16 26 7M16 22l11-7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12a13 13 0 1 1 24 0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function WhyOvertakeSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 sm:py-24 lg:px-10">
      <div
        className="relative mx-auto max-w-[1600px] overflow-hidden
          rounded-[30px] bg-[#090909] px-5 py-20 text-white
          sm:rounded-[36px] sm:px-10 sm:py-28 lg:px-16 lg:py-32"
      >
        {/* Background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 grid
            grid-cols-2 opacity-100 sm:grid-cols-3"
        >
          <div className="border-r border-white/[0.07]" />
          <div className="border-r border-white/[0.07]" />
          <div className="hidden border-r border-white/[0.07] sm:block" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px]">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span
              className="inline-flex items-center gap-3 rounded-full
                bg-[#191919] px-4 py-2 text-sm font-semibold"
            >
              <span className="size-1.5 rounded-full bg-white" />
              Why teams switch to us
              <span className="size-1.5 rounded-full bg-white" />
            </span>

            <h2
              className="mx-auto mt-8 max-w-[850px] text-5xl
                font-semibold leading-[1.08] tracking-[-0.065em]
                text-[#f5f5f5] sm:text-6xl lg:text-[84px]"
            >
              Same budget.
              <br />
              Different math.
            </h2>
          </motion.div>

          {/* Comparison headings */}
          <div className="relative mt-16 grid grid-cols-1 gap-5 sm:mt-20 sm:grid-cols-2 sm:gap-8">
            <div
              className="flex min-h-[80px] items-center justify-center
                rounded-xl bg-[#191919] px-4 py-5 text-center
                text-lg font-semibold tracking-[-0.6px] sm:text-xl"
            >
              The typical agency
            </div>

            <div
              className="flex min-h-[80px] items-center justify-center
                gap-2 rounded-xl bg-[#a1ff63] px-4 py-5
                text-xl font-semibold tracking-[-1px] text-black"
            >
              {/* <Leaf size={27} strokeWidth={2.5} /> */}
              <OvertakeIcon/>
              <span>
                Overtake<sup className="ml-0.5 text-xs">®</sup>
              </span>
            </div>

            {/* VS badge */}
            <div
              className="absolute left-1/2 top-1/2 z-20 hidden
                size-[62px] -translate-x-1/2 -translate-y-1/2
                items-center justify-center rounded-full
                border border-white/15 bg-[#111111] text-base
                font-semibold sm:flex"
            >
              VS
            </div>
          </div>

          {/* Comparison rows */}
          <div className="mt-7 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8">
            <div className="space-y-6 sm:px-10">
              {comparisons.map((item) => (
                <div
                  key={item.typical}
                  className="flex items-start gap-3 text-base
                    font-medium leading-relaxed tracking-[-0.5px]
                    text-[#b5b5b5] sm:text-lg"
                >
                    <CrossIcon/>
                  <span>{item.typical}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6 sm:px-10">
              {comparisons.map((item) => (
                <div
                  key={item.overtake}
                  className="flex items-start gap-3 text-base
                    font-medium leading-relaxed tracking-[-0.5px]
                    text-white sm:text-lg"
                >
                 <CheckIcon/>
                  <span>{item.overtake}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-20 flex max-w-[770px] flex-col
              gap-5 rounded-[28px] bg-[#191919] p-3 sm:mt-28
              sm:flex-row sm:items-stretch sm:gap-8 sm:p-3"
          >
            <img
              src="/assets/people/alex.png"
              alt="Alex Carter, Founder and CEO"
              className="h-[220px] w-full rounded-[22px] object-cover
                sm:h-[200px] sm:w-[180px] sm:shrink-0"
            />

            <div className="flex flex-col justify-between gap-6 p-3 sm:py-4 sm:pr-5">
              <blockquote
                className="text-lg font-medium leading-[1.5]
                  tracking-[-0.5px] text-[#bdbdbd] sm:text-xl"
              >
                “The best marketing isn't the loudest. It's the
                marketing that proves its true value with every
                measurable result.”
              </blockquote>

              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-xl font-semibold tracking-[-0.6px]">
                  Alex Carter
                </span>
                <span className="text-sm text-[#b5b5b5]">
                  · Founder &amp; CEO
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
