
import { motion } from "framer-motion";
import WaveButton from "./WaveButton";

const posts = [
  {
    id: 1,
    category: "Attribution",
    readTime: "4 min read",
    title: "Why blended ROAS lies and the cuts we trust instead",
    image: "/assets/blog/blog1.png",
    featured: true,
  },
  {
    id: 2,
    category: "Creative",
    readTime: "4 min read",
    title: "The 4-frame hook test that doubled our thumb-stop",
    image: "/assets/blog/blog2.png",
  },
  {
    id: 3,
    category: "Budgeting",
    readTime: "5 min read",
    title: "How we set budgets so the algorithm stops guessing",
    image: "/assets/blog/blog3.png",
  },
];

function SectionPill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#f0f0f0] px-[17px] py-[8px] text-[14px] font-medium leading-none tracking-[-0.3px] text-[#111]">
      <span className="size-[7px] rounded-full bg-black" />
      {children}
      <span className="size-[7px] rounded-full bg-black" />
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-[23px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      <path
        d="M5 19 19 5M7 5h12v12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PostMeta({ category, readTime, light = false }) {
  return (
    <div
      className={`flex items-center gap-[10px] text-[14px] font-medium tracking-[-0.35px] ${
        light ? "text-white/70" : "text-[#747775]"
      }`}
    >
      <span>{category}</span>
      <span>•</span>
      <span>{readTime}</span>
    </div>
  );
}

function FeaturedPost({ post }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="group relative h-[485px] overflow-hidden rounded-[28px] bg-[#101010] sm:h-[485px] lg:h-[485px]"
    >
      <img
        src={post.image}
        alt={post.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.03] to-[#070a10]" />

      <div className="absolute left-[36px] top-[45px]">
        <span className="inline-flex rounded-full bg-white/90 px-[13px] py-[7px] text-[14px] font-medium leading-none tracking-[-0.3px] text-black">
          Featured Post
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-[36px]">
        <PostMeta
          category={post.category}
          readTime={post.readTime}
          light
        />

        <h3 className="mt-[27px] max-w-[440px] text-[30px] font-medium leading-[1.22] tracking-[-1.2px] text-white">
          {post.title}
        </h3>
      </div>
    </motion.article>
  );
}

function StandardPost({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group min-w-0"
    >
      <div className="overflow-hidden rounded-[27px] bg-[#f0f0f0]">
        <img
          src={post.image}
          alt={post.title}
          className="aspect-[1.18/1] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="mt-[23px]">
        <PostMeta
          category={post.category}
          readTime={post.readTime}
        />

        <h3 className="mt-[15px] text-[23px] font-medium leading-[1.32] tracking-[-0.85px] text-[#111111]">
          {post.title}
        </h3>
      </div>
    </motion.article>
  );
}

export default function BlogInsightsSection() {
  return (
    <section
      id="blog-insights"
      className="bg-white px-5 pb-[100px] pt-[105px] sm:px-8 lg:px-10 lg:pb-[110px] lg:pt-[105px]"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="flex items-center justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionPill>The growth playbook</SectionPill>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-[27px] text-[42px] font-medium leading-[1.08] tracking-[-2.5px] text-[#101010] sm:text-[50px] lg:text-[56px] lg:tracking-[-3px]"
            >
              Blog &amp; Insights
            </motion.h2>
          </div>

          <WaveButton
            label="View all insights"
            href="blog"
          />
        </div>

        {/* Exact three-column blog layout */}
        <div className="mt-[65px] grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr] lg:gap-[33px]">
          <FeaturedPost post={posts[0]} />

          {posts.slice(1).map((post, index) => (
            <StandardPost
              key={post.id}
              post={post}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
