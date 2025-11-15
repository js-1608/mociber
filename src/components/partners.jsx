import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  { src: "/Recognised/Recognised (1).jpeg", alt: "CREST" },
  { src: "https://entrepreneurstoday.in/wp-content/uploads/2021/09/1.png", alt: "MSSP Alert" },
  { src: "/Recognised/Recognised (3).jpeg", alt: "InfoSec Awards Winner" },
  { src: "/Recognised/Recognised (1).jpeg", alt: "CREST" },
  { src: "https://entrepreneurstoday.in/wp-content/uploads/2021/09/1.png", alt: "MSSP Alert" },
  { src: "/Recognised/Recognised (3).jpeg", alt: "InfoSec Awards Winner" },
  // { src: "/Recognised/Recognised (1).jpeg", alt: "CREST" },
  // { src: "https://entrepreneurstoday.in/wp-content/uploads/2021/09/1.png", alt: "MSSP Alert" },
  // { src: "/Recognised/Recognised (3).jpeg", alt: "InfoSec Awards Winner" },
  // { src: "/images/partner (4).webp", alt: "CyberTech100" },
  // { src: "/images/partner (5).webp", alt: "Cyber Security Excellence" },
  // { src: "/images/partner (1).webp", alt: "Big Innovation Award" },
];

const PartnersCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-5xl font-bold  text-white mb-8" data-aos="fade-up">
          Affiliations, Awards and Recoginations
        </h2>
      </div>
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center items-center px-4 ">
            <img
              src={partner.src}
              alt={partner.alt}
              className="w-full h-48 object-contain  transition duration-300 bg-white/10 p-4 rounded m-auto hover:scale-105 items-center"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PartnersCarousel;
