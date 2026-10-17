
const caseStudies = [
  {
    slug: "halegrove",
    name: "Halegrove",
    category: "DTC skincare",
    description:
      "Rebuilt the creative testing engine and consolidated spend around three hero angles.",
    image: "/assets/case-studies/case_study_1.png",
    metric: "8.1x",
    metricLabel: "ROAS, up from 5.2x",
    client: "Halegrove",
    industry: "DTC skincare",
    timeline: "6 months",
    services: "Paid media, Creative",

    challenge: [
      "Halegrove came to us spending well but reporting badly. Three ad platforms, three sets of numbers, and no single view of what was actually driving revenue. The team was busy but couldn't point to the work that mattered.",
      "Creative had gone stale too. The same three hero videos had been running for eight months, and fatigue was quietly eating into every campaign.",
    ],

    approachIntro:
      "We started where every engagement starts: with the numbers. Before touching a single campaign, we rebuilt reporting so every dollar traced back to revenue in one place.",

    approach: [
      {
        title: "A weekly creative loop.",
        text: "Shipped a fresh angle every seven days and let performance pick the winners.",
      },
      {
        title: "Outcome-first media.",
        text: "Rebuilt the account around revenue and payback instead of channel silos.",
      },
      {
        title: "Ruthless cuts.",
        text: "Killed anything that couldn't prove it moved revenue, CAC, or payback.",
      },
      {
        title: "One source of truth.",
        text: "Consolidated tracking across all three platforms into a CFO-ready dashboard.",
      },
    ],

    approachConclusion:
      "By week six the testing loop had found three winning angles the old account never would have surfaced. Spend followed performance instead of habit, and the compounding started. Each new test gave the team a clearer signal for the next decision.",

    outcomeImage: "/assets/case-studies/campaign1.png",

    outcome:
      "Six months in, Halegrove was doing more than triple its previous revenue on a leaner cost base. The team finally had a dashboard they trusted and a creative engine that never ran dry.",

    results: [
      { value: "8.1x", label: "ROAS, up from 5.2x" },
      { value: "-41%", label: "Acquisition cost reduction" },
      { value: "212%", label: "Annual revenue increase" },
    ],

    testimonial: {
      name: "Emily Nguyen",
      role: "Growth Lead, Halegrove",
      quote: "Better tracking that turns marketing data into clarity.",
      image: "/assets/people/emily.png",
    },
  },

  {
    slug: "marrow-and-co",
    name: "Marrow & Co",
    category: "Subscription coffee",
    description:
      "Reworked onboarding offers and lifecycle creative to lift lifetime value without touching acquisition budget.",
    image: "/assets/case-studies/case_study_2.png",
    metric: "3.1x",
    metricLabel: "Subscriber LTV",
    client: "Marrow & Co",
    industry: "Subscription coffee",
    timeline: "4 months",
    services: "Retention, Creative",

    challenge: [
      "Marrow & Co was bringing new customers through the door but wasn't giving enough of them a reason to stay. The onboarding experience treated every subscriber the same, regardless of what they bought or what they needed next.",
      "The result was avoidable churn, missed repeat orders, and a customer acquisition budget that had to work harder than it should.",
    ],

    approachIntro:
      "We rebuilt the customer journey around the moments that matter most: the first order, the first refill, and the decision to make coffee a habit.",

    approach: [
      {
        title: "Smarter onboarding.",
        text: "Built welcome journeys around customer preferences and first-order behavior.",
      },
      {
        title: "Retention creative.",
        text: "Created lifecycle messages that gave subscribers a clear reason to return.",
      },
      {
        title: "Better timing.",
        text: "Aligned replenishment reminders with expected product usage.",
      },
      {
        title: "Revenue visibility.",
        text: "Measured repeat purchases and subscriber value beyond the first conversion.",
      },
    ],

    approachConclusion:
      "The new lifecycle system helped turn one-time purchases into repeat behavior. Instead of relying on acquisition to carry growth, Marrow & Co could build more value from the customers it already had.",

    outcomeImage: "/assets/case-studies/campaign2.png",

    outcome:
      "Marrow & Co built a more consistent retention engine, improved the subscriber experience, and created a clearer path to sustainable customer lifetime value.",

    results: [
      { value: "3.1x", label: "Subscriber LTV" },
      { value: "24%", label: "Lower subscriber churn" },
      { value: "32%", label: "More repeat orders" },
    ],

    testimonial: {
      name: "Jordan Mitchell",
      role: "Operations Manager, CloudSync Ltd",
      quote:
        "Manual reporting vanished overnight. Overtake rebuilt our tracking and our CRM finally tells the truth.",
      image: "/assets/people/jordan.png",
    },
  },

  {
    slug: "nordhaus",
    name: "Nordhaus",
    category: "Home & interiors",
    description:
      "Launched a net-new paid social program that hit profitable ROAS inside the first 60 days.",
    image: "/assets/case-studies/case_study_3.png",
    metric: "4.6x",
    metricLabel: "First-order ROAS",
    client: "Nordhaus",
    industry: "Home & interiors",
    timeline: "3 months",
    services: "Paid media, Strategy",

    challenge: [
      "Nordhaus had a strong product and a clear visual identity, but lacked a repeatable paid social acquisition system. Campaigns were difficult to scale because creative learnings weren't being turned into consistent decisions.",
      "The goal was to establish profitable acquisition without sacrificing the premium feel of the brand.",
    ],

    approachIntro:
      "We connected audience research, creative testing, and campaign structure into one performance system designed to find profitable demand quickly.",

    approach: [
      {
        title: "Clear positioning.",
        text: "Translated product benefits into focused creative angles for paid social.",
      },
      {
        title: "Structured testing.",
        text: "Tested hooks, formats, and offers with clear performance criteria.",
      },
      {
        title: "Focused spend.",
        text: "Moved budget toward winning campaigns instead of spreading it too thin.",
      },
      {
        title: "Weekly iteration.",
        text: "Used campaign signals to refresh creative and improve acquisition efficiency.",
      },
    ],

    approachConclusion:
      "Within the first 60 days, the team had a clearer view of the creative angles and audiences that drove profitable purchases. That gave Nordhaus a foundation to scale with confidence.",

    outcomeImage: "/assets/case-studies/campaign3.png",

    outcome:
      "Nordhaus established a profitable paid social acquisition program and a repeatable testing process that could support future growth.",

    results: [
      { value: "4.6x", label: "First-order ROAS" },
      { value: "60 days", label: "To profitable acquisition" },
      { value: "3", label: "Core winning creative angles" },
    ],

    testimonial: {
      name: "Sophie Bennett",
      role: "Marketing Director, Northstar",
      quote:
        "Our creative and media finally work together. We're making better decisions and seeing measurable growth.",
      image: "/assets/people/sophie.png",
    },
  },

  {
    slug: "fieldnote",
    name: "Fieldnote",
    category: "DTC lifestyle",
    description:
      "Rebuilt the growth system and turned scattered marketing data into a clear path to scale.",
    image: "/assets/case-studies/case_study_4.png",
    metric: "6.4x",
    metricLabel: "Blended ROAS, up from 3.1x",
    client: "Fieldnote",
    industry: "DTC lifestyle",
    timeline: "5 months",
    services: "Analytics, Paid media",

    challenge: [
      "Fieldnote needed a more reliable way to understand which campaigns and creative were contributing to profitable growth. Marketing data lived across disconnected platforms, making decisions slower and less confident.",
      "The team needed a reporting foundation and an operating rhythm that connected activity to business outcomes.",
    ],

    approachIntro:
      "We brought campaign reporting, creative insights, and commercial metrics into one operating system so the team could make faster, more informed decisions.",

    approach: [
      {
        title: "Unified reporting.",
        text: "Connected campaign data into a single view of performance.",
      },
      {
        title: "Creative insights.",
        text: "Identified which messages and formats drove meaningful results.",
      },
      {
        title: "Budget discipline.",
        text: "Aligned spend with revenue, efficiency, and payback targets.",
      },
      {
        title: "Repeatable reviews.",
        text: "Established a weekly process for learning and optimization.",
      },
    ],

    approachConclusion:
      "With cleaner reporting and a consistent review process, Fieldnote could identify what worked, cut wasted spend, and reinvest in the opportunities most likely to drive profitable growth.",

    outcomeImage: "/assets/case-studies/campaign4.png",


    outcome:
      "Fieldnote moved from fragmented marketing data to a clearer, measurable growth system with better visibility into performance.",

    results: [
      { value: "6.4x", label: "Blended ROAS, up from 3.1x" },
      { value: "35%", label: "Lower wasted media spend" },
      { value: "5 months", label: "To establish the system" },
    ],

    testimonial: {
      name: "Clara Morgan",
      role: "Growth Director, Brightline Co",
      quote:
        "We finally understand what's driving performance. Overtake helped us simplify our marketing.",
      image: "/assets/people/clara.png",
    },
  },

  
  {
    slug: "cadence",
    name: "Cadence",
    category: "DTC wellness",
    description:
      "Rebuilt the growth engine with sharper creative, media buying, and a clearer path from clicks to customers.",
    image: "/assets/case-studies/case_study_5.png",
    metric: "6.4x",
    metricLabel: "ROAS: Blended return",
    client: "Cadence",
    industry: "DTC wellness",
    timeline: "5 months",
    services: "Paid media, Creative",
    challenge: [
      "Cadence needed a more consistent growth engine that connected creative performance with efficient customer acquisition.",
      "The team needed clearer measurement and a repeatable way to identify winning campaigns.",
    ],
    approachIntro:
      "We connected creative testing, media buying, and performance reporting into a focused growth system.",
    approach: [
      {
        title: "Sharper creative.",
        text: "Developed focused messaging and creative variations to improve engagement.",
      },
      {
        title: "Smarter media buying.",
        text: "Prioritized budget toward campaigns with stronger commercial results.",
      },
      {
        title: "Clearer measurement.",
        text: "Improved reporting to understand the journey from clicks to customers.",
      },
    ],
    approachConclusion:
      "With a more structured testing process and clearer performance signals, Cadence built a stronger foundation for sustainable growth.",
    outcomeImage: "/assets/case-studies/campaign5.png",

    outcome:
      "Cadence established a clearer acquisition system with stronger creative testing and improved visibility into blended return.",
    results: [
      { value: "6.4x", label: "Blended ROAS" },
      { value: "32%", label: "Improvement in acquisition efficiency" },
      { value: "5 months", label: "Growth system implementation" },
    ],
    testimonial: {
      name: "Cadence Team",
      role: "Growth Team, Cadence",
      quote:
        "We have a clearer view of performance and a more consistent approach to growth.",
      image: "/assets/peopleclara.png",
    },
  },
  {
    slug: "northline",
    name: "Northline",
    category: "DTC apparel",
    description:
      "Built a clearer acquisition system that connected creative and conversion strategy to drive efficient growth.",
    image: "/assets/case-studies/case_study_6.png",
    metric: "5.7x",
    metricLabel: "ROAS better returns",
    client: "Northline",
    industry: "DTC apparel",
    timeline: "4 months",
    services: "Paid media, Strategy",
    challenge: [
      "Northline needed a more consistent way to connect its creative, paid acquisition, and conversion strategy.",
      "Campaigns needed clearer measurement and a stronger relationship between marketing spend and business outcomes.",
    ],
    approachIntro:
      "We aligned the acquisition strategy around customer intent, stronger creative, and measurable campaign performance.",
    approach: [
      {
        title: "Creative alignment.",
        text: "Built campaign messaging around product value and customer intent.",
      },
      {
        title: "Conversion strategy.",
        text: "Improved the connection between ad creative and the shopping experience.",
      },
      {
        title: "Efficient acquisition.",
        text: "Refined campaign structure and allocated spend toward stronger performers.",
      },
    ],
    approachConclusion:
      "The new system gave Northline a more repeatable way to test creative, evaluate performance, and make acquisition decisions.",
    outcomeImage: "/assets/case-studies/campaign6.png",

    outcome:
      "Northline built a clearer acquisition system designed to support efficient growth and stronger campaign returns.",
    results: [
      { value: "5.7x", label: "ROAS" },
      { value: "28%", label: "Improvement in acquisition efficiency" },
      { value: "4 months", label: "Acquisition system rollout" },
    ],
    testimonial: {
      name: "Northline Team",
      role: "Marketing Team, Northline",
      quote:
        "Our creative and acquisition strategy now work together toward clearer business outcomes.",
      image: "/assets/people/sophie.png",
    },
  },

];

export default caseStudies;
