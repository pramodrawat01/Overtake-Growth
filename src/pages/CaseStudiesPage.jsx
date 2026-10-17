
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import caseStudies from "../data/caseStudies";
import WaveButton from "../components/WaveButton";

function SectionPill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#f0f0f0] px-4 py-2 text-sm font-medium text-[#111]">
      <span className="size-2 rounded-full bg-black" />
      {children}
      <span className="size-2 rounded-full bg-black" />
    </span>
  );
}

function ArrowButton({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-4 rounded-full bg-black py-1.5 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1"
    >
      {children}
      <span className="flex size-10 items-center justify-center rounded-full bg-white text-2xl leading-none text-black">
        ↗
      </span>
    </Link>
  );
}

function CaseStudyCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08 }}
      className="group min-w-0 overflow-hidden rounded-[24px] bg-[#f0f0f0] p-3 sm:rounded-[28px] sm:p-3.5"
    >
      <Link
        to={`/case-studies/${project.slug}`}
        aria-label={`Read the ${project.name} case study`}
        className="grid h-full grid-cols-1 gap-5 sm:grid-cols-[1fr_0.94fr] sm:gap-7"
      >
        <div className="relative min-h-[260px] overflow-hidden rounded-[18px] sm:min-h-[310px] lg:min-h-[370px]">
          <img
            src={project.image}
            alt={`${project.name} campaign`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>

        <div className="flex min-w-0 flex-col px-1 pb-3 pt-1 sm:py-5 sm:pr-4">
          <div>
            <span className="inline-flex rounded-full bg-[#111] px-3 py-1 text-xs font-semibold text-white sm:text-sm">
              {project.category}
            </span>

            <h3 className="mt-4 text-2xl font-medium tracking-[-1px] text-[#111] sm:text-[28px]">
              {project.name}
            </h3>

            <p className="mt-3 max-w-[340px] text-base font-medium leading-[1.25] tracking-[-0.4px] text-[#747775] sm:text-lg">
              {project.description}
            </p>
          </div>

          <div className="mt-10 sm:mt-auto sm:pt-8">
            <p className="text-4xl font-medium leading-none tracking-[-1.8px] text-[#111] sm:text-[44px]">
              {project.metric}
            </p>
            <p className="mt-3 text-sm font-medium text-[#747775] sm:text-base">
              {project.metricLabel}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function CaseStudiesPage() {
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleProjects = caseStudies.slice(0, visibleCount);

  return (
    <main className="bg-white px-4 pb-28 pt-20 sm:px-8 sm:pt-24 lg:px-10 lg:pt-28">
      <div className="mx-auto max-w-[1600px]">
        <motion.header
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[720px] text-center"
        >
          <h1 className="text-5xl font-medium leading-[1.05] tracking-[-0.065em] text-[#111] sm:text-6xl lg:text-[88px]">
            Case studies
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] text-lg font-medium leading-[1.3] tracking-[-0.5px] text-[#747775] sm:text-xl">
            See how smarter media, stronger creative, and clear strategy turn
            marketing challenges into measurable growth.
          </p>
        </motion.header>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:mt-20 lg:grid-cols-2 lg:gap-8">
          {visibleProjects.map((project, index) => (
            <CaseStudyCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {visibleCount < caseStudies.length && (
            <div className="mt-20 flex justify-center">
                <WaveButton
                label="Load more"
                onClick={() =>
                    setVisibleCount((count) =>
                    Math.min(count + 4, caseStudies.length)
                    )
                }
                />
            </div>
        )}
      </div>
    </main>
  );
}
