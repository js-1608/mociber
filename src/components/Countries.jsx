import React from "react";
const countries = [
  { name: "India", flag: "https://flagcdn.com/in.svg" },
  { name: "United States", flag: "https://flagcdn.com/us.svg" },
  { name: "UK", flag: "https://flagcdn.com/gb.svg" },
  { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
  { name: "Australia", flag: "https://flagcdn.com/au.svg" },
  { name: "Singapore", flag: "https://flagcdn.com/sg.svg" },
  { name: "UAE", flag: "https://flagcdn.com/ae.svg" },
  { name: "Saudi Arabia", flag: "https://flagcdn.com/sa.svg" },
  { name: "New Zealand", flag: "https://flagcdn.com/nz.svg" },
  { name: "Kuwait", flag: "https://flagcdn.com/kw.svg" },
  { name: "Qatar", flag: "https://flagcdn.com/qa.svg" },
  { name: "Oman", flag: "https://flagcdn.com/om.svg" },
  { name: "Germany", flag: "https://flagcdn.com/de.svg" },
  { name: "Netherlands", flag: "https://flagcdn.com/nl.svg" },
  { name: "France", flag: "https://flagcdn.com/fr.svg" },
  { name: "Ireland", flag: "https://flagcdn.com/ie.svg" },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg rounded-2xl p-4 transition duration-300 w-full max-w-[180px] flex flex-col items-center"
            >
              <img
                src={country.flag}
                alt={country.name}
                className="w-24 h-16   object-cover border border-gray-200"
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









