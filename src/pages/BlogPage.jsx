import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WaveButton from "../components/WaveButton";
import { blogs } from "../data/blogData";

const additionalBlogs = [
  {
    id: 7,
    slug: "when-to-increase-ad-spend",
    category: "Growth",
    readTime: "5 min read",
    title: "When should you increase ad spend?",
    description:
      "Know when performance is strong enough to justify scaling your advertising budget.",
    image: "/assets/blog/blog7.png",
  },
  
];

function BlogCard({ blog, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-w-0"
    >
      <Link to={`/blog/${blog.slug}`} className="group block">
        <div className="relative aspect-[1.05/1] overflow-hidden rounded-[24px] h-[300px] w-full bg-[#efefef] sm:rounded-[28px] ">
          <img
            src={blog.image}
            alt={blog.title}
            loading={index < 3 ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {blog.featured && (
            <span className="absolute left-6 top-6 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-black">
              Featured Post
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#737373] sm:text-base">
          <span>{blog.category}</span>
          <span aria-hidden="true">•</span>
          <span>{blog.readTime}</span>
        </div>

        <h2 className="mt-3 max-w-[460px] text-xl font-medium leading-[1.25] tracking-[-0.8px] text-[#101010] transition-colors duration-300 group-hover:text-[#555] sm:text-2xl sm:tracking-[-1px]">
          {blog.title}
        </h2>
      </Link>
    </motion.article>
  );
}

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const allBlogs = [...blogs, ...additionalBlogs];
  const visibleBlogs = allBlogs.slice(0, visibleCount);

  return (
    <main className="bg-white px-4 pb-24 pt-20 text-[#101010] sm:px-8 sm:pt-28 lg:px-12">
      {/* Hero */}
      <section className="mx-auto mb-20 max-w-[760px] text-center sm:mb-24 lg:mb-28">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl font-medium tracking-[-3px] sm:text-7xl lg:text-[88px] lg:tracking-[-5px]"
        >
          Our blog
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mt-5 max-w-[650px] text-base font-medium leading-[1.35] tracking-[-0.45px] text-[#737373] sm:text-xl"
        >
          Practical insights, honest lessons on paid media, creative,
          attribution, and building marketing systems that drive real growth.
        </motion.p>
      </section>

      {/* Blog grid */}
      <section className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {visibleBlogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

        {/* Load more */}
        {visibleCount < allBlogs.length && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 flex justify-center sm:mt-20"
          >
            <WaveButton
              label="Load more"
              href="#more-blogs"
              variant="primary"
              onClick={(event) => {
                event.preventDefault();
                setVisibleCount((count) =>
                  Math.min(count + 3, allBlogs.length),
                );
              }}
            />
          </motion.div>
        )}

        {visibleCount >= allBlogs.length && (
          <p className="mt-20 text-center text-base font-medium text-[#858585]">
            That’s everything for now!
          </p>
        )}
      </section>
    </main>
  );
}