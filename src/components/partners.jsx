// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const partners = [
//   { src: "/Recognised/Recognised (1).jpeg", alt: "CREST" },
//   { src: "https://entrepreneurstoday.in/wp-content/uploads/2021/09/1.png", alt: "MSSP Alert" },
//   { src: "/Recognised/Recognised (3).jpeg", alt: "InfoSec Awards Winner" },
//   { src: "/Recognised/Recognised (1).jpeg", alt: "CREST" },
//   { src: "https://entrepreneurstoday.in/wp-content/uploads/2021/09/1.png", alt: "MSSP Alert" },
//   { src: "/Recognised/Recognised (3).jpeg", alt: "InfoSec Awards Winner" },
//   // { src: "/Recognised/Recognised (1).jpeg", alt: "CREST" },
//   // { src: "https://entrepreneurstoday.in/wp-content/uploads/2021/09/1.png", alt: "MSSP Alert" },
//   // { src: "/Recognised/Recognised (3).jpeg", alt: "InfoSec Awards Winner" },
//   // { src: "/images/partner (4).webp", alt: "CyberTech100" },
//   // { src: "/images/partner (5).webp", alt: "Cyber Security Excellence" },
//   // { src: "/images/partner (1).webp", alt: "Big Innovation Award" },
// ];

// const PartnersCarousel = () => {
//   const settings = {
//   dots: false,
//   infinite: true,
//   speed: 1000,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 1500,
//   cssEase: "linear",
//   pauseOnHover: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 4, // Show 4 slides on medium screens
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2, // Show 2 slides on smaller screens
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1, // Show 1 slide on mobile screens
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

//   return (
//   <section className="py-16">
//     <div className="max-w-7xl mx-auto text-center mb-16">
//       <h2 className="text-2xl md:text-5xl font-bold text-white mb-8" data-aos="fade-up">
//         Affiliations, Awards, and Recognitions
//       </h2>
//     </div>
//     <Slider {...settings}>
//       {partners.map((partner, index) => (
//         <div key={index} className="flex justify-center items-center px-4">
//           <img
//             src={partner.src}
//             alt={partner.alt}
//             className="w-full h-96 lg:h-48 object-contain transition duration-300 bg-white/10 p-4 rounded m-auto hover:scale-105 items-center"
//           />
//         </div>
//       ))}
//     </Slider>
//   </section>
// );
// };

// export default PartnersCarousel;
import React from "react";

const partners = [
  { src: "/Recognised/Recognised (1).jpeg", alt: "CREST" },
  { src: "https://entrepreneurstoday.in/wp-content/uploads/2021/09/1.png", alt: "MSSP Alert" },
  { src: "/Recognised/Recognised (3).jpeg", alt: "InfoSec Awards Winner" },
  { src: "/Recognised/msme.png", alt: "CREST" },
  { src: "/Recognised/Recognised (1).jpeg", alt: "CREST" },
  { src: "https://entrepreneurstoday.in/wp-content/uploads/2021/09/1.png", alt: "MSSP Alert" },
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
