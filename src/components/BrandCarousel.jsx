import { motion } from "motion/react";

const brands = [
  { name: "Ararat", style: "text-[30px] font-medium tracking-tight" },
  { name: "Hamilton", style: "text-[29px] font-normal tracking-tight" },
  { name: "PinPoint", style: "text-[23px] font-bold tracking-tight" },
  { name: "Scale", style: "text-[30px] font-semibold tracking-tight" },
  { name: "Leaf", style: "text-[29px] font-medium tracking-tight" },
];

function BrandMark({ name }) {
  if (name === "Hamilton") {
    return (
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" fill="none">
        <path
          d="M5 4 27 28M27 4 5 28M16 2v7M2 16h7"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    );
  }

  if (name === "PinPoint") {
    return (
      <svg viewBox="0 0 32 32" className="size-7 shrink-0" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="4" />
        <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="3" />
        <path d="m19 19 8 8" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  }

  if (name === "Scale") {
    return (
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" fill="none">
        <path
          d="M5 13V5h8M5 5l13 13M18 5h9v22H5v-9"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    );
  }

  if (name === "Leaf") {
    return (
      <svg viewBox="0 0 32 32" className="size-7 shrink-0" fill="currentColor">
        <path d="M26 3C12 3 5 9 5 17c0 3 2 5 5 5 8 0 14-7 16-19Z" />
        <path d="M5 29c5-9 10-13 18-18" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <span className="text-[32px] font-semibold tracking-[-2px]">
      A
    </span>
  );
}

function BrandItem({ brand }) {
  return (
    <div
      className="flex shrink-0 items-center gap-2.5 px-8 text-[#11121b]
        sm:px-10 lg:px-12"
      aria-label={brand.name}
    >
      <BrandMark name={brand.name} />

      <span className={brand.style}>
        {brand.name}
        {brand.name === "Ararat" && (
          <sup className="text-[10px]">✳</sup>
        )}
      </span>
    </div>
  );
}

function AvatarStack() {
  const avatars = [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces",
      alt: "Customer portrait one",
    },
    {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces",
      alt: "Customer portrait two",
    },
    {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=faces",
      alt: "Customer portrait three",
    },
  ];

  return (
    <div className="flex shrink-0 items-center pl-1">
      {avatars.map((avatar, index) => (
        <img
          key={avatar.alt}
          src={avatar.src}
          alt={avatar.alt}
          className={`relative size-[58px] rounded-full border-0 object-cover
            sm:size-[68px] lg:size-[76px] ${
              index > 0 ? "-ml-5 sm:-ml-6" : ""
            }`}
          style={{ zIndex: avatars.length - index }}
          loading="lazy"
        />
      ))}
    </div>
  );
}

export default function BrandCarousel() {
  return (
    <section
      aria-label="Trusted brands"
      className="grid items-center gap-8 overflow-hidden bg-white
        py-12 lg:grid-cols-[525px_minmax(0,1fr)]
        lg:gap-0 lg:py-[70px]"
    >
      {/* LEFT SECTION — appears first on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 flex items-center gap-5 bg-white pr-5
          sm:gap-6 lg:pr-10"
      >
        <AvatarStack />

        <p className="max-w-[290px] text-[16px] font-medium leading-[1.2]
          tracking-[-0.5px] text-[#707472] sm:text-lg">
          Trusted by 40+ growth
          <br />
          teams from seed to 9 figures
        </p>
      </motion.div>

      {/* RIGHT SECTION — appears second on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="brand-carousel relative min-w-0 overflow-hidden"
      >
        <div className="brand-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              {brands.map((brand) => (
                <BrandItem
                  key={`${copy}-${brand.name}`}
                  brand={brand}
                />
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}