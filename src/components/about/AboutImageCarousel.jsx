
// import { carouselImages } from "./aboutData";

// export default function AboutImageCarousel() {
//   const images = [...carouselImages, ...carouselImages];

//   return (
//     <section className="overflow-hidden pb-16">
//       <div className="about-carousel-track flex w-max items-end gap-4 pl-4 sm:gap-5 sm:pl-6">
//         {images.map((image, index) => (
//           <div
//             key={`${image.src}-${index}`}
//             className={`relative w-[230px] shrink-0 overflow-hidden rounded-[22px] sm:w-[320px] lg:w-[360px] ${image.height}`}
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               loading="lazy"
//               draggable="false"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       <style>{`
//         .about-carousel-track {
//           animation: about-marquee 100s linear infinite;
//           will-change: transform;
//         }

//         .about-carousel-track:hover {
//           animation-play-state: paused;
//         }

//         @keyframes about-marquee {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .about-carousel-track {
//             animation: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }




import { carouselImages } from "./aboutData";

export default function AboutImageCarousel() {
  return (
    <section className="overflow-hidden pb-16 sm:pb-20">
      <div className="about-carousel-track flex w-max">
        {[0, 1].map((group) => (
          <div
            key={group}
            aria-hidden={group === 1}
            className="flex shrink-0 items-end gap-4 pr-4 sm:gap-5 sm:pr-5"
          >
            {carouselImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
className={`relative shrink-0 overflow-hidden rounded-[22px] ${image.width} ${image.height}`}              >
                <img
                  src={image.src}
                  alt={group === 0 ? image.alt : ""}
                  loading={index < 3 ? "eager" : "lazy"}
                  draggable="false"
                  className="block h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        .about-carousel-track {
          animation: about-marquee 100s linear infinite;
          will-change: transform;
        }

        @keyframes about-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
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
