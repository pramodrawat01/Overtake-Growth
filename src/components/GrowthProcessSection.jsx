
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const metrics = [
//   {
//     value: "40",
//     suffix: "+",
//     label: "Brands scaled past $1M/mo",
//   },
//   {
//     value: "$180M",
//     suffix: "+",
//     label: "Media spend managed",
//   },
//   {
//     value: "94",
//     suffix: "%",
//     label: "Client retention rate",
//   },
// ];

// const steps = [
//   {
//     number: "01",
//     title: "Diagnose",
//     description: "Audit media, creative, and tracking.",
//   },
//   {
//     number: "02",
//     title: "Uncover",
//     description: "Identify what's working and where growth is being lost.",
//   },
//   {
//     number: "03",
//     title: "Compound",
//     description: "Reinvest in winners and improve results every week.",
//   },
// ];

// const revealUp = {
//   hidden: { opacity: 0, y: 45 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// function SectionPill({ children }) {
//   return (
//     <span className="inline-flex items-center gap-2 rounded-full
//       bg-[#f0f0f0] px-4 py-2 text-sm font-medium text-[#111111]">
//       <span className="size-2 rounded-full bg-black" />
//       {children}
//       <span className="size-2 rounded-full bg-black" />
//     </span>
//   );
// }

// function MetricsSection() {
//   return (
//     <div className="mx-auto max-w-[1250px]">
//       <motion.div
//         variants={revealUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         className="flex justify-center"
//       >
//         <SectionPill>The numbers behind the noise</SectionPill>
//       </motion.div>

//       <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3
//         sm:gap-5 lg:mt-12 lg:gap-12">
//         {metrics.map((metric, index) => (
//           <motion.div
//             key={metric.label}
//             variants={revealUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.35 }}
//             transition={{ delay: index * 0.12 }}
//             className="text-center"
//           >
//             <div className="flex items-baseline justify-center
//               whitespace-nowrap text-[58px] font-semibold
//               leading-none tracking-[-0.065em] text-[#0b0b0b]
//               sm:text-[clamp(2.8rem,5vw,5rem)] lg:text-[82px]">
//               <span>{metric.value}</span>
//               <span className="text-[#f6b5f2]">
//                 {metric.suffix}
//               </span>
//             </div>

//             <p className="mt-5 text-base font-medium tracking-[-0.5px]
//               text-[#747775] sm:text-sm lg:text-lg">
//               {metric.label}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


// function ProcessSteps() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((current) => (current + 1) % steps.length);
//     }, 4500);

//     return () => clearInterval(interval);
//   }, []);

//   const activeStep = steps[activeIndex];

//   const cardColors = [
//     {
//       background: "#a1ff63",
//       text: "#101010",
//       muted: "rgba(16,16,16,0.7)",
//       numberBg: "#ffffff",
//       numberText: "#101010",
//     },
//     {
//       background: "#f5b8f4",
//       text: "#101010",
//       muted: "rgba(16,16,16,0.7)",
//       numberBg: "#ffffff",
//       numberText: "#101010",
//     },
//     {
//       background: "#090909",
//       text: "#ffffff",
//       muted: "rgba(255,255,255,0.42)",
//       numberBg: "#10201e",
//       numberText: "#a1ff63",
//     },
//   ];

//   const color = cardColors[activeIndex];

//   return (
//     <div
//       className="relative mx-auto flex min-h-[540px] w-full
//         max-w-[820px] flex-col items-center overflow-hidden
//         rounded-[48%] bg-[#10201e] px-5 py-14 text-white
//         sm:min-h-[620px] sm:px-8 sm:py-16
//         lg:min-h-[680px] lg:rounded-[45%]"
//     >
//       {/* Inner oval outline */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-3
//           rounded-[48%] border border-white/15
//           lg:rounded-[45%]"
//       />

//       {/* Heading */}
//       <h3 className="relative z-10 mt-3 text-center
//         text-lg font-semibold tracking-[-0.7px] sm:text-xl">
//         3 Simple steps
//       </h3>

//       {/* Animated step card */}
//       <div className="relative z-10 flex w-full flex-1
//         items-center justify-center py-8">
//         <AnimatePresence mode="wait" initial={false}>
//           <motion.div
//             key={activeStep.number}
//             initial={{ opacity: 0, x: 90 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -90 }}
//             transition={{
//               duration: 0.55,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             style={{
//               backgroundColor: color.background,
//               color: color.text,
//             }}
//             className="flex min-h-[300px] w-full max-w-[450px]
//               flex-col items-center justify-center rounded-[28px]
//               px-6 py-8 text-center sm:min-h-[335px]
//               sm:rounded-[34px] sm:px-10"
//           >
//             {/* Number */}
//             <div
//               className="flex size-[58px] shrink-0 items-center
//                 justify-center rounded-full text-lg font-semibold"
//               style={{
//                 backgroundColor: color.numberBg,
//                 color: color.numberText,
//               }}
//             >
//               {activeStep.number}
//             </div>

//             {/* Title */}
//             <h4 className="mt-8 text-3xl font-medium
//               tracking-[-1.5px] sm:text-[40px]">
//               {activeStep.title}
//             </h4>

//             {/* Description */}
//             <p
//               className="mt-5 max-w-[370px] text-base
//                 leading-[1.3] tracking-[-0.4px] sm:text-xl"
//               style={{ color: color.muted }}
//             >
//               {activeIndex === 0
//                 ? "Full-funnel audit of media, creative, and tracking. We find where growth is leaking before spending a dollar."
//                 : activeIndex === 1
//                 ? "We analyze your media, creative, and tracking to uncover what's working, where growth is being lost."
//                 : "Winners get budget, losers get killed. The learning loop tightens every single week, driving better results."}
//             </p>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Progress indicators */}
//       <div className="relative z-10 mb-2 flex w-full
//         max-w-[285px] items-center justify-center gap-2">
//         {steps.map((step, index) => (
//           <button
//             key={step.number}
//             type="button"
//             aria-label={`Show step ${step.number}`}
//             onClick={() => setActiveIndex(index)}
//             className="h-[2px] flex-1 overflow-hidden bg-white/20"
//           >
//             <motion.span
//               key={`${step.number}-${activeIndex}`}
//               initial={{ width: "0%" }}
//               animate={{
//                 width:
//                   index < activeIndex
//                     ? "100%"
//                     : index === activeIndex
//                     ? "100%"
//                     : "0%",
//               }}
//               transition={{
//                 duration: index === activeIndex ? 4.5 : 0.2,
//                 ease: "linear",
//               }}
//               className="block h-full bg-white"
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }


// function ProcessIntroduction() {
//   return (
//     <motion.div
//       variants={revealUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       className="flex min-h-[420px] flex-col justify-between
//         rounded-[30px] bg-[#f0f0f0] p-7 sm:min-h-[520px]
//         sm:p-10 lg:min-h-[680px] lg:rounded-[36px] lg:p-12"
//     >
//       <div className="flex items-start justify-between gap-5">
//         <h2 className="max-w-[300px] text-4xl font-medium
//           leading-[1.08] tracking-[-0.06em] text-[#111111]
//           sm:text-5xl lg:text-[58px]">
//           How we
//           <br />
//           compound.
//         </h2>

//         <p className="hidden max-w-[220px] text-right text-base
//           leading-[1.25] tracking-[-0.5px] text-[#747775] sm:block
//           lg:text-xl">
//           A weekly operating rhythm, not a quarterly report.
//         </p>
//       </div>

//       <div className="mt-12">
//         <p className="max-w-[400px] text-lg leading-relaxed
//           tracking-[-0.4px] text-[#666967] sm:text-xl">
//           Every experiment creates a signal. Every signal informs
//           the next move. That's how we turn individual wins into
//           a repeatable growth system.
//         </p>

//         <div className="mt-8 flex flex-wrap gap-2">
//           {["Strategy", "Paid media", "Creative", "Analytics"].map(
//             (discipline) => (
//               <span
//                 key={discipline}
//                 className="rounded-full border border-black/10 bg-white
//                   px-4 py-2 text-sm font-medium text-[#252525]"
//               >
//                 {discipline}
//               </span>
//             )
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function GrowthProcessSection() {
//   return (
//     <section
//       id="growth-process"
//       className="overflow-hidden bg-white px-4 pb-24 pt-24
//         sm:px-8 sm:pb-32 sm:pt-32 lg:px-10 lg:pb-40 lg:pt-36"
//     >
//       <MetricsSection />

//       <div className="mx-auto mt-24 grid max-w-[1450px] grid-cols-1
//         items-stretch gap-5 sm:mt-36 lg:mt-52
//         lg:grid-cols-2 lg:gap-8">
//         <ProcessIntroduction />
//         <ProcessSteps />
//       </div>
//     </section>
//   );

// }




import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const metrics = [
  {
    value: "40",
    suffix: "+",
    label: "Brands scaled past $1M/mo",
  },
  {
    value: "$180M",
    suffix: "+",
    label: "Media spend managed",
  },
  {
    value: "94",
    suffix: "%",
    label: "Client retention rate",
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "Full-funnel audit of media, creative, and tracking. We find where growth is leaking before spending a dollar.",
    background: "#a1ff63",
    text: "#101010",
    muted: "rgba(16,16,16,0.72)",
    numberBackground: "#ffffff",
    numberColor: "#101010",
  },
  {
    number: "02",
    title: "Uncover",
    description:
      "We analyze your media, creative, and tracking to uncover what's working, where growth is being lost.",
    background: "#f5b8f4",
    text: "#101010",
    muted: "rgba(16,16,16,0.72)",
    numberBackground: "#ffffff",
    numberColor: "#101010",
  },
  {
    number: "03",
    title: "Compound",
    description:
      "Winners get budget, losers get killed. The learning loop tightens every single week, driving better results.",
    background: "#090909",
    text: "#ffffff",
    muted: "rgba(255,255,255,0.42)",
    numberBackground: "#10201e",
    numberColor: "#a1ff63",
  },
];

const revealUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SectionPill({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full
        bg-[#f0f0f0] px-4 py-2 text-sm font-medium text-[#111111]"
    >
      <span className="size-2 rounded-full bg-black" />
      {children}
      <span className="size-2 rounded-full bg-black" />
    </span>
  );
}

function MetricsSection() {
  return (
    <div className="mx-auto max-w-[1250px]">
      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center"
      >
        <SectionPill>The numbers behind the noise</SectionPill>
      </motion.div>

      <div
        className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3
          sm:gap-5 lg:mt-12 lg:gap-12"
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.12 }}
            className="text-center"
          >
            <div
              className="flex items-baseline justify-center
                whitespace-nowrap text-[58px] font-semibold
                leading-none tracking-[-0.065em] text-[#0b0b0b]
                sm:text-[clamp(2.8rem,5vw,5rem)] lg:text-[82px]"
            >
              <span>{metric.value}</span>
              <span className="text-[#f6b5f2]">{metric.suffix}</span>
            </div>

            <p
              className="mt-5 text-base font-medium tracking-[-0.5px]
                text-[#747775] sm:text-sm lg:text-lg"
            >
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProcessIntroduction() {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex min-h-[520px] flex-col justify-between
        rounded-[30px] bg-[#f0f0f0] p-7 sm:p-10
        lg:min-h-[680px] lg:rounded-[36px] lg:p-11"
    >
      {/* Heading */}
      <div className="flex items-start justify-between gap-4">
        <h2
          className="max-w-[300px] text-4xl font-medium
            leading-[1.08] tracking-[-0.06em] text-[#111111]
            sm:text-5xl lg:text-[46px] xl:text-[52px]"
        >
          How we
          <br />
          compound.
        </h2>

        <p
          className="hidden max-w-[220px] text-right text-base
            leading-[1.25] tracking-[-0.5px] text-[#747775]
            sm:block lg:text-lg"
        >
          A weekly operating rhythm, not a quarterly report.
        </p>
      </div>

      {/* Image and experience metric */}
      <div
        className="mt-12 flex flex-1 items-end justify-between
          gap-4 sm:gap-6"
      >
        <img
          src="/assets/compound_img.png"
          alt="Happy customers enjoying a moment together"
          className="h-[230px] w-[48%] shrink-0 rounded-[24px]
            object-cover sm:h-[300px] sm:rounded-[28px]
            lg:h-[360px] lg:w-[46%]"
        />

        <div className="flex min-w-0 flex-1 flex-col items-end pb-1 text-right">
          <span
            className="whitespace-nowrap text-6xl font-semibold
              leading-none tracking-[-0.07em] text-[#111111]
              sm:text-7xl lg:text-[90px]"
          >
            10+
          </span>

          <p
            className="mt-4 max-w-[250px] text-xs leading-[1.3]
              tracking-[-0.4px] text-[#747775] sm:text-sm
              lg:text-base"
          >
            Years spending and scaling media across every cycle and platform shift.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ProcessSteps() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const activeStep = steps[activeIndex];

  return (
    <div
      className="relative mx-auto flex min-h-[540px] w-full
        max-w-[820px] flex-col items-center overflow-hidden
        rounded-[50%] bg-[#10201e] px-5 py-14 text-white
        sm:min-h-[620px] sm:px-8 sm:py-16
        lg:min-h-[680px] lg:rounded-[45%]"
    >
      {/* Inner oval border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3
          rounded-[48%] border border-white/15
          lg:rounded-[45%]"
      />

      {/* Heading */}
      <h3
        className="relative z-10 mt-3 text-center text-lg
          font-semibold tracking-[-0.7px] sm:text-xl"
      >
        3 Simple steps
      </h3>

      {/* Sliding card */}
      <div
        className="relative z-10 flex w-full flex-1
          items-center justify-center py-8"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeStep.number}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              backgroundColor: activeStep.background,
              color: activeStep.text,
            }}
            className="flex min-h-[300px] w-full max-w-[450px]
              flex-col items-center justify-center rounded-[28px]
              px-6 py-8 text-center sm:min-h-[335px]
              sm:rounded-[34px] sm:px-10"
          >
            {/* Step number */}
            <div
              className="flex size-[68px] shrink-0 items-center
                justify-center rounded-full text-lg font-semibold"
              style={{
                backgroundColor: activeStep.numberBackground,
                color: activeStep.numberColor,
              }}
            >
              {activeStep.number}
            </div>

            {/* Step title */}
            <h4
              className="mt-8 text-3xl font-medium
                tracking-[-1.5px] sm:text-[40px]"
            >
              {activeStep.title}
            </h4>

            {/* Step description */}
            <p
              className="mt-5 max-w-[370px] text-base
                leading-[1.3] tracking-[-0.4px] sm:text-xl"
              style={{ color: activeStep.muted }}
            >
              {activeStep.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bars */}
      <div
        className="relative z-10 mb-2 flex w-full max-w-[285px]
          items-center justify-center gap-2"
      >
        {steps.map((step, index) => (
          <button
            key={step.number}
            type="button"
            aria-label={`Show step ${step.number}`}
            onClick={() => setActiveIndex(index)}
            className="h-[2px] flex-1 overflow-hidden bg-white/20"
          >
            <motion.span
              key={`${step.number}-${activeIndex}`}
              initial={{ width: "0%" }}
              animate={{
                width:
                  index <= activeIndex ? "100%" : "0%",
              }}
              transition={{
                duration: index === activeIndex ? 4.5 : 0.2,
                ease: "linear",
              }}
              className="block h-full bg-white"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function GrowthProcessSection() {
  return (
    <section
      id="growth-process"
      className="overflow-hidden bg-white px-4 pb-24 pt-24
        sm:px-8 sm:pb-32 sm:pt-32 lg:px-10 lg:pb-40 lg:pt-36"
    >
      <MetricsSection />

      <div
        className="mx-auto mt-24 grid max-w-[1450px]
          grid-cols-1 items-stretch gap-6 sm:mt-36
          lg:mt-40 lg:grid-cols-[1fr_1.08fr] lg:gap-8"
      >
        <ProcessIntroduction />
        <ProcessSteps />
      </div>
    </section>
  );
}

