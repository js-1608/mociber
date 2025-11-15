import React from "react";

const team = [
  {
    name: "Mohsin Margoob",
    title: "Founder & CEO — Global 40 Under 40",
    img: "/Team/Mohsin_Margoob_Pic.png",
    bio: `Mohsin Margoob brings over 15 years of experience as a dynamic strategist, thought leader, and seasoned professional in information security, data privacy, cybersecurity, business continuity, digital transformation, and sustainability. He has executed managed security services, projects, and audits for renowned organisations and acted as a vCISO.`,
    certifications: ["CISM", "CRISC", "CEH", "CHFI", "LA-ISO27001", "LA-ISO22301", "AI in Cybersecurity"],
    highlights: `Projects for American Express, STC, Mobily, Altran, Yanal Finance, Sanctum, Riyadh Airport Company (RAC), Live Healthier, gMed, Canvas, Equinox, Sapienza, WorldPay, FINRA, and more. Experience across USA, UK, Middle East and India.`,
    linkedIn: "https://www.linkedin.com/in/mohsin-m-10b05549/",
  },
  {
    name: "Mohammad Iqbal",
    title: "Director - Cybersecurity & Data Privacy",
    img: "/Team/Mohammad_Iqbal_Pic.png",
    bio: `Mohammad Iqbal has 18+ years of experience in Information & Cyber Security and Data Privacy/GDPR with deep expertise in GRC and IT service/infrastructure management across Banking, Insurance, Automotive, R&D and Healthcare.`,
    certifications: ["CISM", "CISA", "FIP", "CIPP/E", "CIPM", "CPISI", "ISO 27001", "ISO 9001"],
    highlights: `Winner — Super 50 CISO Award 2024 & Cybersecurity Leader Award 2024. Strong experience with SOC 2, HIPAA and risk management frameworks.`,
  },
  {
    name: "Saurabh Sharma",
    title: "Asst. Director – IT & Cloud Infrastructure",
    img: "/Team/Sorabh_Sharma_Pic.png",
    bio: `Saurabh Sharma is an IT leader with 17+ years in IT infrastructure, service delivery and operations. Former Deputy General Manager - IT at Sinch India with hands-on experience in data centres, ITSM and IT compliance.`,
    certifications: ["ISO 27001", "ISO 20000"],
    highlights: `Expert in governance, risk & compliance, ITSM functions (Service Desk, Asset Management, Incident, Change), vendor and procurement management.`,
  },
  {
    name: "Shafaq Siddiqui",
    title: "Head – HR & Business Operations",
    img: "/Team/Shafaq_AIPic.png",
    bio: `Shafaq is a dynamic HR and operations professional with 10+ years building high-performing teams, niche talent acquisition and international business operations. Focused on remote workforce efficiency and global mobility.`,
    certifications: [],
    highlights: `Skilled in project management, employee engagement, visa & travel coordination, and scaling distributed teams.`,
    linkedIn: "https://www.linkedin.com/in/shafaq-siddiqui-ai-pic-78ab00387/",
  },
];

export default function OurTeamSection() {
  return (
    <section className="py-16 px-6 bg-[#000A1F] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-blue-200" >
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        Our Expert Team
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mt-6 leading-tight" data-aos="fade-up">
                        The minds, innovators, and problem-solvers <br className="hidden md:block" />
                        driving our mission to <span className="text-blue-300">real world</span>
                    </h2>
                </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden bg-[#0f1724] border border-white/5 shadow-lg hover:translate-y-[-6px] transition-transform duration-300">
              <div className="h-64 w-full overflow-hidden bg-gray-800 flex items-center justify-center">
                {/* replace with <img> once real assets available */}
                <img src={member.img} alt={member.name} className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="p-5 text-justify">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-blue-200 mb-3">{member.title}</p>
                <p className="text-sm text-gray-300 mb-3 text-justify">{member.bio}</p>

                <details className="text-sm text-gray-300 mb-3">
                  <summary className="cursor-pointer text-gray-200 font-medium">Certifications & Highlights</summary>
                  <div className="mt-3 text-xs text-gray-300">
                    {member.certifications.length > 0 && (
                      <div className="mb-2">
                        <div className="font-semibold text-sm text-white">Certifications</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {member.certifications.map((c, i) => (
                            <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded">{c}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <div className="font-semibold text-sm text-white">Select highlights</div>
                      <p className="text-xs text-gray-300 mt-2">{member.highlights}</p>
                    </div>
                  </div>
                </details>

                <div className="mt-4 flex items-center gap-3">
                  {
                    member.linkedIn && (
                      <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-500 transition" aria-label="LinkedIn">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 21H3.46V9h3.48v12zM5.2 7.54a2 2 0 1 1 0-4.001 2 2 0 0 1 0 4zm16.8 13.46h-3.47v-5.83c0-1.39-.03-3.17-1.93-3.17-1.93 0-2.22 1.51-2.22 3.07V21h-3.47V9h3.33v1.64h.05c.46-.87 1.57-1.79 3.24-1.79 3.47 0 4.11 2.28 4.11 5.25V21z"/></svg>
                     </a>
                    )

                  }

                  {/* <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-500 transition" aria-label="Email">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6l10 7L22 6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z"/></svg>
                  </a> */}

                  {/* <a href="#" className="ml-auto text-xs text-gray-400">View profile →</a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
