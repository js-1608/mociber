// export default PartnersCarousel;
import React from "react";

const partners = [
  { src: "/Recognised/Recognised (1).jpeg", alt: "CREST" },
  { src: "/enterprisetoday.png", alt: "MSSP Alert" },
  { src: "/Recognised/Recognised (3).jpeg", alt: "InfoSec Awards Winner" },
  { src: "/Recognised/msme.png", alt: "CREST" },
  { src: "/Recognised/Recognised (1).jpeg", alt: "CREST" },
  { src: "/enterprisetoday.png", alt: "MSSP Alert" },
  { src: "/Recognised/Recognised (3).jpeg", alt: "InfoSec Awards Winner" },
  { src: "/Recognised/msme.png", alt: "CREST" },
];

const PartnersCarousel = () => {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-8">
          Affiliations, Awards and Recognitions
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="
            flex gap-8 whitespace-nowrap 
            animate-scroll
            hover:[animation-play-state:paused]
          "
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              className="flex justify-center items-center min-w-[180px] md:min-w-[220px]"
              key={index}
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-32 md:h-40 object-contain bg-white/10 p-4 rounded-xl 
                           transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
