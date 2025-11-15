import React from "react";
import { ArrowUpRight } from "lucide-react";

const jobs = [
  {
    title: "Cybersecurity Engineer",
    description: "Secure enterprise systems, perform threat assessments, and support managed security operations.",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Business Continuity Analyst",
    description:
      "Assist clients in resilience planning, continuity audits, and risk mitigation processes.",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Digital Transformation Consultant",
    description:
      "Enable enterprises to transform digitally through automation, cloud adoption, and AI-driven innovation.",
    remote: true,
    type: "Full-time",
  },{
    title: "Sustainability & ESG Advisor",
    description:
      "Advise clients on sustainable business practices and ESG compliance frameworks.",
    remote: true,
    type: "Full-time",
  },
];

const JobsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-white text-center">
        Open Positions
      </h2>

      <div className=" shadow-sm rounded-xl p-6">
        {jobs.map((job, i) => (
          <JobCard
            key={i}
            title={job.title}
            description={job.description}
            remote={job.remote}
            type={job.type}
          />
        ))}
      </div>
    </section>
  );
};

export default JobsSection;




const JobCard = ({ title, description, remote, type }) => {
  const handleApply = () => {
    const subject = `Application for ${title}`;
    const body = `Hello,\n\nI would like to apply for the position: ${title}.\nPlease share further details.\n\nRegards,`;
    const email = `mailto:careers@mociber.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = email;
  };

  return (
    <div className="border-b border-gray-200 py-6 flex justify-between items-start">
      {/* LEFT */}
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 mt-1">{description}</p>

        <div className="flex gap-3 mt-4">
          {remote && (
            <span className="px-3 py-1 text-sm border rounded-full text-blue-500 border-gray-300">
              100% remote
            </span>
          )}
          {type && (
            <span className="px-3 py-1 text-sm border rounded-full text-blue-500 border-gray-300">
              {type}
            </span>
          )}
        </div>
      </div>

      {/* APPLY */}
      <button
        onClick={handleApply}
        className="flex items-center gap-1 text-white-900 font-medium hover:text-black  cursor-pointer"
      >
        Apply <ArrowUpRight size={18} />
      </button>
    </div>
  );
};

