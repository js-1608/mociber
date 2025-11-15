import React from "react";
import JobCard from "./JobCard";

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
