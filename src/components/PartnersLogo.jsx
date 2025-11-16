import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const partners = [
  { name: "India", flag: "/Partners/partners (1).jpg" },
  { name: "United States", flag: "/Partners/partners (1).png" },
  { name: "UK", flag: "/Partners/partners (2).jpg" },
  { name: "Canada", flag: "/Partners/partners (3).jpg" },
  { name: "Australia", flag: "/Partners/partners (4).jpg" },
  { name: "UK", flag: "/Partners/partners (2).png" },
  { name: "Canada", flag: "/Partners/partners (3).png" },
];

const Partner = () => {
  return (
    <section className="bg-linear-to-b to-[#000A1F] from-[#011f52] py-16">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-aos="fade-up">
          Partners
        </h2>
        <p className="text-gray-100 mb-10">
          We are ready to deliver our AI-driven services and solutions worldwide
        </p>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          className="p-6"
        >
          {partners.map((country, index) => (
            <SwiperSlide key={index}>
              <div
                data-aos="zoom-in"
                className="bg-white rounded-xl p-2 shadow-xl shadow-blue-700 w-full max-w-[180px] mx-auto flex flex-col items-center hover:scale-100 scale-90 transition-transform duration-500"
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-full h-36 object-contain border border-gray-200"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Partner;



// import React from "react";
// const partners = [
//   { name: "India", flag: "/Partners/partners (1).jpg" },
//   { name: "United States", flag: "/Partners/partners (1).png" },
//   { name: "UK", flag: "/Partners/partners (2).jpg" },
//   { name: "Canada", flag: "/Partners/partners (3).jpg" },
//   { name: "Australia", flag: "/Partners/partners (4).jpg" },
//    { name: "UK", flag: "/Partners/partners (2).png" },
//   { name: "Canada", flag: "/Partners/partners (3).png" },
// ];


// const Partner = () => {
//   return (
//     <section className="bg-linear-to-b to-[#000A1F] from-[#011f52] py-16">
//       <div className="max-w-7xl mx-auto  text-center">
//         {/* Section Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-aos="fade-up">
//           Partners
//         </h2>
//         <p className="text-gray-100 mb-10">
//           We are ready to deliver our AI-driven services and solution worldwide        
//           </p>

//         {/* Country Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
//           {partners.map((country, index) => (
//             <div
//             data-aos="zoom-in"
//               key={index}
//               className="bg-white  rounded-xl p-2 shadow-lg shadow-blue-700 w-full max-w-[180px] flex flex-col items-center hover:scale-105 transition-transform duration-500"
//             >
//               <img
//                 src={country.flag}
//                 alt={country.name}
//                 className="w-full h-36   object-contain border border-gray-200 "
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partner;









