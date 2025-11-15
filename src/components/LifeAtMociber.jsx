import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Props:
 *  - index: number
 *  - title: string
 *  - description: string
 *  - isOpen: boolean
 *  - onHoverEnter: () => void
 *  - onHoverLeave: () => void
 *  - onToggle: () => void
 */
const AccordionItem = ({ index, title, description, isOpen, onHoverEnter, onHoverLeave, onToggle }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div
      className="border-b border-gray-200"
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
    >
      <button
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 focus:outline-none"
      >
        <div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 font-semibold flex items-center justify-center">
              {index}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500">Apply</div>
          <ChevronDown
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
            size={18}
          />
        </div>
      </button>

      {/* Collapsible content */}
      <div
        ref={contentRef}
        style={{ maxHeight, transition: "max-height 300ms ease" }}
        className="overflow-hidden px-6"
        aria-hidden={!isOpen}
      >
        <div className="py-4 text-gray-600 text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};




/* content list */
const values = [
  {
    title: "Learn Relentlessly",
    description:
      "We believe growth never stops. Every project, challenge, and conversation is an opportunity to learn, upskill, and lead.",
  },
  {
    title: "Own What You Build",
    description:
      "We trust our people with responsibility and autonomy — because great outcomes come from ownership, not oversight.",
  },
  {
    title: "Collaborate Without Boundaries",
    description:
      "From engineers to consultants, every idea matters. We thrive in an open, inclusive culture where collaboration fuels innovation.",
  },
  {
    title: "Innovate with Purpose",
    description:
      "We don’t innovate for the sake of it — we simplify, secure, and sustain businesses with real-world impact.",
  },
  {
    title: "Empower Each Other",
    description:
      "We rise by lifting others. Mentorship, recognition, and support define how we grow as a team.",
  },
  {
    title: "Diversity Drives Strength",
    description:
      "Different perspectives create better solutions. We celebrate individuality and value inclusion across all we do.",
  },
  {
    title: "Integrity in Action",
    description:
      "Transparency, honesty, and ethics guide our work — even when no one’s watching.",
  },
  {
    title: "Balance and Well-being",
    description:
      "We care about results and people. Flexibility, wellness, and respect for personal time are part of our DNA.",
  },
  {
    title: "Lead with Impact",
    description:
      "We encourage everyone — from interns to leaders — to make decisions that create lasting value for our clients and communities.",
  },
  {
    title: "Build for the Future",
    description:
      "Every role at Mociber contributes to shaping a safer, smarter, and sustainable digital world.",
  },
];

const LifeAtMociberAccordion = () => {
  // openIndex = currently hovered/open preview
  // pinnedIndex = clicked/pinned open (persist until toggled)
  const [openIndex, setOpenIndex] = useState(null);
  const [pinnedIndex, setPinnedIndex] = useState(null);

  const handleHoverEnter = (idx) => {
    if (pinnedIndex === idx) {
      setOpenIndex(idx);
    } else {
      setOpenIndex(idx);
    }
  };
  const handleHoverLeave = (idx) => {
    if (pinnedIndex === idx) {
      setOpenIndex(pinnedIndex);
    } else {
      setOpenIndex(null);
    }
  };

  const handleToggle = (idx) => {
    if (pinnedIndex === idx) {
      // unpin
      setPinnedIndex(null);
      setOpenIndex(null);
    } else {
      // pin this one open
      setPinnedIndex(idx);
      setOpenIndex(idx);
    }
  };

  const handleJoin = () => {
    const subject = "Application - Life at Mociber";
    const body = `Hello,\n\nI’m interested in opportunities at Mociber after reading about "Life at Mociber". Please share open roles or next steps.\n\nRegards,`;
    window.location.href = `mailto:careers@voilastudio.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Life at Mociber</h2>
            <p className="mt-2 text-gray-600">
              Our culture is centered on growth, ownership, collaboration and doing work that matters.
            </p>
          </div>

          <div className="mt-1">
            <button
              onClick={handleJoin}
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-700 transition"
            >
              Join Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3l7 7m0 0v7a2 2 0 0 1-2 2h-7M21 10L10 21" />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
          {values.map((v, i) => (
            <AccordionItem
              key={i}
              index={i + 1}
              title={v.title}
              description={v.description}
              isOpen={openIndex === i}
              onHoverEnter={() => handleHoverEnter(i)}
              onHoverLeave={() => handleHoverLeave(i)}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Tip: Hover to preview a value; click to pin it open. Use Enter/Space to toggle with keyboard.
        </p>
      </div>
    </section>
  );
};

export default LifeAtMociberAccordion;

