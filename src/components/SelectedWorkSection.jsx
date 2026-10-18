
import { motion } from "framer-motion";
import { useRef } from "react";
import WaveButton from "./WaveButton";

const projects = [
  {
    id: "halegrove",
    name: "Halegrove",
    category: "DTC skincare",
    service: "Paid media + creative",
    description:
      "Rebuilt the creative testing engine and consolidated spend around three hero angles.",
    metric: "8.1x",
    metricLabel: "ROAS, up from 5.2x",
    image: "/assets/case-studies/case_study_1.png",
    imagePosition: "center",
    color: "#247da0",
    slug: "case-studies/halegrove",
  },
  {
    id: "marrow",
    name: "Marrow & Co",
    category: "Subscription coffee",
    service: "Retention",
    description:
      "Reworked onboarding offers and lifecycle creative to lift lifetime value without touching acquisition budget.",
    metric: "+38%",
    metricLabel: "Customer lifetime value",
    image: "/assets/case-studies/case_study_2.png",
    imagePosition: "center",
    color: "#d91c24",
    slug: "case-studies/marrow-and-co",
  },
  {
    id: "nordhaus",
    name: "Nordhaus",
    category: "Home & interiors",
    service: "Paid media + creative",
    description:
      "Launched a net-new paid social program that hit profitable ROAS inside the first 60 days.",
    metric: "4.6x",
    metricLabel: "First-order ROAS",
    image: "/assets/case-studies/case_study_3.png",
    imagePosition: "center",
    color: "#b8a58b",
    slug: "case-studies/nordhaus",
  },
];

function CaseStudyCard({ project, index, cardRef }) {
  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        "--stack-top": `${120 + index * 14}px`,
        zIndex: index + 1,
      }}
      className="selected-work-card group sticky mb-10 min-h-[540px]
        overflow-hidden rounded-[28px] sm:min-h-[600px]
        sm:rounded-[34px] lg:min-h-[650px]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: project.color }}
      >
        <img
          src={project.image}
          alt={`${project.name} campaign`}
          loading={index === 0 ? "eager" : "lazy"}
         className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: project.imagePosition }}
        />
      </div>

      {/* Project details */}
      <div className="relative flex min-h-[540px] items-end justify-end
        p-3 sm:min-h-[600px] sm:p-4 lg:min-h-[650px] lg:p-[10px]">

        <div className="flex min-h-[470px] w-full flex-col rounded-[24px]
          bg-[#090909] p-5 text-white sm:min-h-[520px] sm:w-[54%]
          sm:p-7 lg:min-h-[610px] lg:w-[34%] lg:rounded-[29px] lg:p-8">

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-white/[0.07] px-3 py-1.5
              text-xs font-medium text-white/90 sm:text-sm">
              {project.category}
            </span>

            <span className="rounded-full bg-white/[0.07] px-3 py-1.5
              text-xs font-medium text-white/90 sm:text-sm">
              {project.service}
            </span>
          </div>

          <h3 className="mt-8 text-3xl font-medium tracking-[-1.6px]
            sm:text-4xl lg:text-[40px] lg:tracking-[-2px]">
            {project.name}
          </h3>

          <p className="mt-3 max-w-[390px] text-base font-medium
            leading-[1.3] tracking-[-0.5px] text-white/70 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-auto">
            <div className="mb-6 border-t border-white/15" />

            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-5xl font-medium tracking-[-2.5px]
                text-[#a1ff63] sm:text-6xl">
                {project.metric}
              </span>

              <span className="text-sm font-medium tracking-[-0.4px]
                text-white/70 sm:text-base lg:text-lg">
                {project.metricLabel}
              </span>
            </div>

            <div className="mt-8">
              <WaveButton
                label="View full case study"
                href={project.slug}
                variant="secondary"
                className="w-full justify-between border-transparent
                  bg-white text-black hover:bg-[#f5b8f4]"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function SelectedWorkSection() {
  const cardRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  return (
    <section
      id="selected-work"
      className="bg-white px-4 pb-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1150px]">

        {/* Sticky header */}
        <div
          className="sticky top-0 flex items-center justify-between
            gap-4 bg-white/95 py-5 backdrop-blur-md sm:py-7"
        >
          <h2 className="text-3xl font-medium tracking-[-1.8px]
            text-[#101010] sm:text-5xl lg:text-[56px]
            lg:tracking-[-3px]">
            Selected work
          </h2>

          <WaveButton
            label="All case studies"
            href="/case-studies"
            className="shrink-0 text-xs shadow-[0_12px_30px_rgba(0,0,0,0.2)]
              sm:text-sm"
          />
        </div>

        {/* Straight sticky cards */}
        <div className="relative mt-12 sm:mt-16">
          {projects.map((project, index) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              index={index}
              cardRef={cardRefs[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
