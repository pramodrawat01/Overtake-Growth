
import { motion } from "framer-motion";

const sections = [
  {
    title: "Information we collect",
    paragraphs: [
      "We may collect information you provide directly to us, such as your name, email address, company name, phone number, project details, and any other information you submit through our forms or when communicating with us.",
      "We may also automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, pages viewed, and general usage activity.",
    ],
  },
  {
    title: "How we use your information",
    intro: "We use the information we collect to:",
    list: [
      "Respond to inquiries and requests",
      "Provide and improve our services",
      "Understand how visitors use our website",
      "Personalize and improve your experience",
      "Send relevant updates or communications",
    ],
    paragraphs: [
      "We only use your information when we have a legitimate reason to do so and in accordance with applicable privacy laws.",
    ],
  },
  {
    title: "Cookies & analytics",
    paragraphs: [
      "Our website may use cookies and similar technologies to understand website traffic, remember preferences, and improve functionality.",
      "We may use analytics and marketing tools to measure website performance and understand how visitors interact with our content. You can control or disable cookies through your browser settings, although some website features may not function as intended.",
    ],
  },
  {
    title: "How we share information",
    paragraphs: [
      "We do not sell or rent your personal information.",
      "We may share information with trusted service providers who help us operate our website, manage communications, analyze performance, or deliver our services. These providers may only use your information for the purposes we authorize.",
    ],
  },
  {
    title: "Data retention",
    paragraphs: [
      "We retain personal information only for as long as necessary to provide our services, fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.",
      "When information is no longer required, we take reasonable steps to securely delete or anonymize it.",
    ],
  },
  {
    title: "Data security",
    paragraphs: [
      "We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, misuse, alteration, or disclosure.",
      "However, no method of transmitting or storing information online is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Third-party links",
    paragraphs: [
      "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or security of those websites.",
      "We encourage you to review the privacy policies of any third-party websites you visit.",
    ],
  },
  {
    title: "Your privacy rights",
    intro:
      "Depending on where you live, you may have certain rights regarding your personal information, including the right to:",
    list: [
      "Access the information we hold about you",
      "Request corrections to inaccurate information",
      "Request deletion of your information",
      "Object to or restrict certain processing",
    ],
    paragraphs: [
      "To exercise these rights, please contact us using the details below.",
    ],
  },
  {
    title: "Contact us",
    paragraphs: [
      "If you have questions about this Privacy Policy or how we handle your information, please contact us through our website's contact page.",
    ],
  },
];

function PolicySection({ section, index }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-12 sm:mt-14"
    >
      <h2 className="text-[27px] font-medium leading-tight tracking-[-1.3px] text-[#111] sm:text-[38px] sm:tracking-[-1.8px]">
        {index + 1}. {section.title}
      </h2>

      {section.intro && (
        <p className="mt-5 text-base font-medium leading-[1.3] tracking-[-0.4px] text-[#747775] sm:text-xl">
          {section.intro}
        </p>
      )}

      {section.paragraphs?.map((paragraph, paragraphIndex) => (
        <p
          key={paragraphIndex}
          className="mt-5 text-base font-medium leading-[1.3] tracking-[-0.4px] text-[#747775] sm:text-xl"
        >
          {paragraph}
        </p>
      ))}

      {section.list && (
        <ul className="mt-3 list-disc space-y-0.5 pl-6 text-base font-medium leading-[1.3] tracking-[-0.4px] text-[#747775] sm:text-xl">
          {section.list.map((item) => (
            <li key={item} className="pl-1">
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.section>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="bg-white px-5 pb-24 pt-16 sm:px-8 sm:pt-20">
      <header className="mx-auto max-w-[1000px] text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl font-semibold leading-[1.05] tracking-[-3px] text-[#090909] sm:text-7xl lg:text-[88px] lg:tracking-[-5px]"
        >
          Privacy policy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-sm font-medium text-[#747775] sm:text-base"
        >
          Last updated: Oct 17, 2026
        </motion.p>
      </header>

      <div className="mx-auto mt-16 max-w-[730px] sm:mt-16">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-base font-medium leading-[1.3] tracking-[-0.4px] text-[#747775] sm:text-xl"
        >
          At Overtake, we respect your privacy and are committed to
          protecting the information you share with us. This Privacy
          Policy explains what information we collect, how we use it,
          and the choices you have when using our website and services.
        </motion.p>

        {sections.map((section, index) => (
          <PolicySection
            key={section.title}
            section={section}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
