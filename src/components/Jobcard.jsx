import React from "react";
import { ArrowUpRight } from "lucide-react";

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

export default JobCard;
