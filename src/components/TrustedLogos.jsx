import React from "react";

export default function TrustedLogos() {
  const logos = [
    {
      name: "Xcitium",
      logo: "/tech/xctium.svg",
    },
    {
      name: "Microsoft",
      logo: "/tech/microsft.png",
    },
    {
      name: "Oracle",
      logo: "/tech/oracle.svg",
    },
    {
      name: "AWS",
      logo: "/tech/aws.svg",
    },
    {
      name: "Azure",
      logo: "/Azure.png",
    },
    {
      name: "SAP",
      logo: "/tech/sap.svg",
    },
    {
      name: "Cisco",
      logo: "/tech/cisco.svg",
    },
    {
      name: "Salesforce",
      logo: "/tech/saleforce.svg",
    },
    {
      name: "ServiceNow",
      logo: "/serviceNow.png",
    },
    {
      name: "RSA Archer",
      logo: "/tech/rsa.svg",
    },
  ];

  return (
    <section className="bg-linear-to-b to-[#000A1F] from-[#0c1b34] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* pill */}
        {/* <div className="flex justify-center">
          <div className="inline-block bg-white/5 text-sm text-gray-300 px-4 py-2 rounded-full tracking-wide" >
            TRUSTED BY 10K COMPANIES IN THE WORLD
          </div>
        </div> */}

        {/* heading */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mt-6 mb-10" data-aos="fade-up">
          Niche Talents in Technologies
        </h2>

        {/* grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
          {logos.map((item) => (
            <div
            data-aos="zoom-in"
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffffff] border border-white/10 rounded-xl p-6 flex items-center justify-center min-h-[80px]
                         hover:shadow-lg hover:shadow-indigo-700/30 transition-transform transform hover:-translate-y-1 group"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-8 md:h-10 group-hover:brightness-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
