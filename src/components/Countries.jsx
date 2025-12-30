import React from "react";
const countries = [
  { name: "India", flag: "countries/india.svg" },
  { name: "United States", flag: "countries/us.svg" },
  { name: "UK", flag: "countries/uk.svg" },
  { name: "Canada", flag: "countries/canada.svg" },
  { name: "Australia", flag: "countries/australia.svg" },
  { name: "Singapore", flag: "countries/singapore.svg" },
  { name: "UAE", flag: "countries/uae.svg" },
  { name: "Saudi Arabia", flag: "countries/sa.svg" },
  { name: "New Zealand", flag: "countries/nz.svg" },
  { name: "Kuwait", flag: "countries/kw.svg" },
  { name: "Qatar", flag: "countries/qa.svg" },
  { name: "Oman", flag: "countries/om.svg" },
  { name: "Germany", flag: "countries/germany.svg" },
  { name: "Netherlands", flag: "countries/nl.svg" },
  { name: "France", flag: "countries/fr.svg" },
  // { name: "Ireland", flag: "countries/ie.svg" },
];


const CountriesSection = () => {
  return (
    <section className="bg-linear-to-b to-[#000A1F] from-[#011f52] py-16">
      <div className="max-w-7xl mx-auto  text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold  mb-4" data-aos="fade-up">
          Countries
        </h2>
        <p className="text-gray-100 mb-10">
          We are ready to deliver our AI-driven services and solution worldwide        
          </p>

        {/* Country Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 place-items-center">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg rounded-2xl p-4 transition duration-300 w-full max-w-[200px] flex flex-col items-center"
            >
              <img
                src={country.flag}
                alt={country.name}
                className="w-28 h-16   object-cover border border-gray-200"
              />
              <h3 className="text-gray-800 font-semibold">{country.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;









