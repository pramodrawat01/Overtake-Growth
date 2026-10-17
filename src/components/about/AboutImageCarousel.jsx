
import { carouselImages } from "./aboutData";

export default function AboutImageCarousel() {
  const images = [...carouselImages, ...carouselImages];

  return (
    <section className="overflow-hidden pb-16">
      <div className="about-carousel-track flex w-max items-end gap-4 pl-4 sm:gap-5 sm:pl-6">
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`relative w-[230px] shrink-0 overflow-hidden rounded-[22px] sm:w-[320px] lg:w-[360px] ${image.height}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              draggable="false"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <style>{`
        .about-carousel-track {
          animation: about-marquee 100s linear infinite;
          will-change: transform;
        }

        .about-carousel-track:hover {
          animation-play-state: paused;
        }

        @keyframes about-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-carousel-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
