import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { blogs } from "../data/blogData";
import WaveButton from "../components/WaveButton";

const extraBlogs = [
  {
    id: 7,
    slug: "when-to-increase-ad-spend",
    category: "Growth",
    readTime: "5 min read",
    title: "When should you increase ad spend?",
    description:
      "Know when performance is strong enough to justify scaling your advertising budget.",
    image: "/assets/blog/blog7.png",
    content: [
      {
        heading: "Scale when the evidence is clear",
        paragraphs: [
          "Increasing ad spend should be a decision based on repeatable performance, reliable tracking, and a clear understanding of your margins.",
          "Before scaling, make sure your campaigns are bringing in the right customers and your business can support the additional demand.",
        ],
      },
      {
        heading: "Make gradual, informed changes",
        paragraphs: [
          "Set clear performance thresholds, monitor the impact of changes, and avoid increasing budgets based on a single strong day.",
        ],
      },
    ],
  },
  {
    id: 8,
    slug: "building-a-better-creative-system",
    category: "Creative",
    readTime: "5 min read",
    title: "Building a better creative testing system",
    description:
      "Turn creative experimentation into a repeatable process your team can learn from.",
    image: "/assets/blog/blog8.png",
    content: [
      {
        heading: "Make creative testing repeatable",
        paragraphs: [
          "A strong creative system gives every test a clear purpose. Start with a hypothesis about the audience, message, hook, or offer you want to validate.",
          "Record what you tested and what the results tell you, so each new round builds on the previous one.",
        ],
      },
      {
        heading: "Learn from every result",
        paragraphs: [
          "Not every variation will win. The value comes from identifying patterns and applying those lessons to the next creative iteration.",
        ],
      },
    ],
  },
  {
    id: 9,
    slug: "the-growth-dashboard-that-matters",
    category: "Analytics",
    readTime: "6 min read",
    title: "The growth dashboard that actually matters",
    description:
      "Focus your reporting on the signals that help you make confident decisions.",
    image: "/assets/blog/blog9.png",
    content: [
      {
        heading: "Keep reporting focused",
        paragraphs: [
          "A dashboard should help your team understand performance without getting lost in a wall of numbers.",
          "Choose a small set of metrics that connect directly to acquisition, conversion, retention, and profitability.",
        ],
      },
      {
        heading: "Turn insights into action",
        paragraphs: [
          "Every report should help answer what changed, why it changed, and what the team should do next.",
        ],
      },
    ],
  },
];

const allBlogs = [...blogs, ...extraBlogs];

function ArticleSection({ section }) {
  return (
    <section className="mb-10">
      <h2 className="mb-5 text-2xl font-medium tracking-[-1px] text-[#101010] sm:text-3xl">
        {section.heading}
      </h2>

      {section.intro && (
        <p className="mb-5 text-lg leading-[1.65] text-[#737373]">
          {section.intro}
        </p>
      )}

      {section.paragraphs?.map((paragraph, index) => (
        <p
          key={index}
          className="mb-5 text-base leading-[1.7] text-[#737373] sm:text-lg"
        >
          {paragraph}
        </p>
      ))}

      {section.list && (
        <ul className="mb-6 list-disc space-y-2 pl-6 text-base leading-[1.6] text-[#737373] sm:text-lg">
          {section.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function BlogDetailPage() {
  const { slug } = useParams();

  const blog = allBlogs.find((item) => item.slug === slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const relatedBlogs = allBlogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);


  return (
    <main className="bg-white px-4 pb-24 text-[#101010] sm:px-8 lg:px-12">
      {/* Article hero */}
      <section className="mx-auto max-w-[1600px] rounded-[28px] bg-[#f0f0f0] px-4 pb-8 pt-20 sm:rounded-[36px] sm:px-8 sm:pb-12 sm:pt-28 lg:px-12 lg:pt-28">
        <div className="mx-auto max-w-[900px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-[#737373] sm:text-base"
          >
            <span className="rounded-full bg-[#101010] px-3 py-1.5 text-white">
              {blog.category}
            </span>
            <span>{blog.readTime}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl font-medium leading-[1.05] tracking-[-2px] sm:text-6xl sm:tracking-[-3px] lg:text-[76px] lg:tracking-[-4px]"
          >
            {blog.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-6 max-w-[620px] text-base leading-[1.5] text-[#737373] sm:text-xl"
          >
            {blog.description}
          </motion.p>

        </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-12 overflow-hidden rounded-[22px] sm:mt-16 sm:rounded-[30px]"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="max-h-[580px] min-h-[200px] w-full object-cover sm:min-h-[300px]"
            />
          </motion.div>
      </section>

      {/* Article content */}
      <article className="mx-auto mt-16 max-w-[760px] sm:mt-24">
       

        {blog.content?.map((section, index) => (
          <div key={section.heading}>
            <ArticleSection section={section} />

            
          </div>
        ))}

        <div className="mt-14 border-t border-black/10 pt-8">
          <p className="text-sm font-medium uppercase tracking-[1.5px] text-[#737373]">
            Keep learning
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-1.5px] sm:text-4xl">
            Better decisions start with better insights.
          </h2>
          <div className="mt-6">
            <WaveButton label="Explore all blogs" href="/blog" />
          </div>
        </div>
      </article>

      {/* Related blogs */}
      <section className="mx-auto mt-24 max-w-[1600px] sm:mt-32">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-5 sm:mb-14">
          <h2 className="text-3xl font-medium tracking-[-1.8px] sm:text-5xl">
            Recent blogs
          </h2>

          <WaveButton
            label="See all blogs"
            href="/blog"
            variant="primary"
            className="shadow-[0_12px_30px_rgba(0,0,0,0.2)]"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {relatedBlogs.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link to={`/blog/${item.slug}`} className="group block">
                <div className="aspect-[1.05/1] overflow-hidden rounded-[24px] bg-[#efefef]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm text-[#737373]">
                  <span>{item.category}</span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </div>

                <h3 className="mt-3 text-xl font-medium leading-snug tracking-[-0.7px] transition-colors group-hover:text-[#555] sm:text-2xl">
                  {item.title}
                </h3>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}