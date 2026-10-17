
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import caseStudies from "../data/caseStudies";
import WaveButton from "../components/WaveButton";

function ArrowButton({ to, children, variant = "light" }) {
  const isGreen = variant === "green";

  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-4 rounded-full py-1.5 pl-6 pr-2 text-sm font-semibold transition-transform duration-300 hover:-translate-y-1 ${
        isGreen
          ? "bg-[#a1ff63] text-black shadow-[0_10px_30px_rgba(161,255,99,0.3)]"
          : "bg-black text-white"
      }`}
    >
      {children}
      <span
        className={`flex size-10 items-center justify-center rounded-full text-2xl leading-none ${
          isGreen ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        ↗
      </span>
    </Link>
  );
}

function ProjectMeta({ label, value }) {
  return (
    <div>
      <p className="text-sm font-medium text-white/55">{label}</p>
      <p className="mt-2 text-lg font-medium tracking-[-0.5px] text-white sm:text-xl">
        {value}
      </p>
    </div>
  );
}

function ContentSection({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-16 sm:mt-20"
    >
      <h2
        className="text-3xl font-medium leading-[1.1]
          tracking-[-0.055em] text-[#111111]
          sm:text-[40px] sm:leading-[1.08]"
      >
        {title}
      </h2>

      <div
        className="mt-6 space-y-6 text-base font-normal
          leading-[1.7] tracking-[-0.2px] text-[#707472]
          sm:text-lg sm:leading-[1.65]
          lg:text-[19px]"
      >
        {children}
      </div>
    </motion.section>
  );
}


function RevealSection({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const project = caseStudies.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/case-studies" replace />;
  }

  const otherProjects = caseStudies.filter(
    (item) => item.slug !== project.slug
  );

  return (
    <main className="bg-white px-3 pb-24 pt-5 sm:px-8">
      {/* Black project header */}
    {/* Black project header */}
<motion.section
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.08 }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  className="overflow-hidden rounded-[28px] bg-[#090909] pb-6 pt-14 sm:rounded-[34px] sm:pb-8 sm:pt-16 lg:pt-20"
>
  <div className="grid grid-cols-1 items-center gap-6 px-6 sm:px-10 lg:grid-cols-[1.7fr_0.8fr] lg:gap-16 lg:px-[10.5%]">
    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-5xl font-medium leading-[1.02] tracking-[-0.065em] text-white sm:text-7xl lg:text-[clamp(70px,7vw,110px)]"
    >
      {project.name}
    </motion.h1>

    <div>
      <p className="max-w-[350px] text-lg font-medium leading-[1.25] tracking-[-0.5px] text-white/65 sm:text-xl">
        {project.description}
      </p>

      <div className="mt-6">
        <WaveButton
          label="Build with us"
          href="/contact"
          variant="green"
        />
      </div>
    </div>
  </div>

  {/* Project metadata */}
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    className="mx-6 mt-8 border-t border-white/10 pt-6 sm:mx-10 sm:mt-10 sm:pt-7 lg:mx-[10.5%]"
  >
    <div className="grid grid-cols-2 gap-x-5 gap-y-6 lg:grid-cols-4 lg:gap-8">
      <ProjectMeta label="Client" value={project.client} />
      <ProjectMeta label="Industry" value={project.industry} />
      <ProjectMeta label="Timeline" value={project.timeline} />
      <ProjectMeta label="Services" value={project.services} />
    </div>
  </motion.div>

  {/* Main campaign image */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.08 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="mx-1 mt-10 overflow-hidden rounded-[22px] border-[6px] border-[#090909] sm:mt-12 sm:rounded-[28px]"
  >
    <img
      src={project.image}
      alt={`${project.name} campaign`}
      className="block h-[340px] w-full object-cover sm:h-[500px] lg:h-[min(60vw,600px)]"
    />
  </motion.div>
</motion.section>

      {/* Case study narrative */}
      <div className="mx-auto max-w-[690px] px-3 pb-8 pt-8 sm:pt-20">
        <ContentSection title="The challenge">
          {project.challenge.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </ContentSection>

        <ContentSection title="What we did">
          <p>{project.approachIntro}</p>

          <ul className="space-y-1">
            {project.approach.map((item) => (
              <li
                key={item.title}
                className="relative pl-7 before:absolute before:left-0 before:top-0 before:content-['·']"
              >
                <strong className="font-semibold text-[#747775]">
                  {item.title}
                </strong>{" "}
                {item.text}
              </li>
            ))}
          </ul>

          <p>{project.approachConclusion}</p>
        </ContentSection>

        {/* Supporting campaign image */}
        <div className="mt-12 overflow-hidden rounded-[24px] sm:mt-16 sm:rounded-[30px]">
          <img
            src={project.outcomeImage}
            alt={`${project.name} campaign creative`}
            loading="lazy"
            className="block aspect-[1.85/1] w-full object-cover"
          />
        </div>

        <ContentSection title="The outcome">
          <p>{project.outcome}</p>
        </ContentSection>

        {/* Results */}
        <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-5">
          {project.results.map((result) => (
            <div key={result.label}>
              <p className="text-2xl font-medium tracking-[-1px] text-[#111] sm:text-3xl">
                {result.value}
              </p>
              <p className="mt-2 text-sm font-medium leading-[1.35] text-[#747775] sm:text-base">
                {result.label}
              </p>
            </div>
          ))}
        </div>

        {/* Client testimonial */}
        <div className="mt-16 grid grid-cols-1 gap-5 border-t border-black/10 pt-8 sm:grid-cols-[1fr_1fr] sm:items-center sm:gap-10">
          <div className="flex items-center gap-3">
            <img
              src={project.testimonial.image}
              alt={project.testimonial.name}
              loading="lazy"
              className="size-14 shrink-0 rounded-full object-cover sm:size-16"
            />
            <div>
              <p className="text-lg font-medium tracking-[-0.5px] text-[#111] sm:text-xl">
                {project.testimonial.name}
              </p>
              <p className="mt-1 text-sm font-medium text-[#747775] sm:text-base">
                {project.testimonial.role}
              </p>
            </div>
          </div>

          <blockquote className="text-lg font-medium leading-[1.3] tracking-[-0.5px] text-[#747775] sm:text-xl">
            “{project.testimonial.quote}”
          </blockquote>
        </div>
      </div>

      {/* Other case studies */}
      <section className="mx-auto mt-20 max-w-[1600px] px-1 sm:mt-28 sm:px-4">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h2 className="text-4xl font-medium tracking-[-0.06em] text-[#111] sm:text-5xl lg:text-[60px]">
            Other case studies
          </h2>

            <WaveButton
            label="See all case studies"
            href="/case-studies"
            variant="primary"
            />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
          {otherProjects.slice(0, 2).map((item) => (
            <Link
              key={item.slug}
              to={`/case-studies/${item.slug}`}
              className="group grid min-w-0 grid-cols-1 gap-5 rounded-[24px] bg-[#f0f0f0] p-3 transition-colors hover:bg-[#eaeaea] sm:grid-cols-[1fr_0.95fr] sm:gap-7 sm:rounded-[28px]"
            >
              <div className="relative min-h-[250px] overflow-hidden rounded-[18px] sm:min-h-[300px]">
                <img
                  src={item.image}
                  alt={`${item.name} campaign`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-col px-1 pb-3 pt-2 sm:py-5 sm:pr-3">
                <div>
                  <span className="inline-flex rounded-full bg-black px-3 py-1 text-xs font-semibold text-white sm:text-sm">
                    {item.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-medium tracking-[-1px] text-[#111] sm:text-[28px]">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-base font-medium leading-[1.25] text-[#747775] sm:text-lg">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 sm:mt-auto sm:pt-8">
                  <p className="text-4xl font-medium tracking-[-1.5px] text-[#111]">
                    {item.metric}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#747775] sm:text-base">
                    {item.metricLabel}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
