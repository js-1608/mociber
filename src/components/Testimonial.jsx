import React, { useEffect, useRef, useState } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "As consultant on SOC 2 Type II and ISO 27001 projects, demonstrated deep expertise, professionalism, and a practical approach in implementing standards and guiding the team through compliance requirements. Mociber ability to simplify complex frameworks and deliver results within timelines was impressive. I highly recommend Mociber for his strong knowledge in information security and compliance.",
      name: "Information Security Officer",
      role: "Minosha India Ltd.  (Ricoh)",
      rating: 5,
    },
    {
      quote:
        "I had the privilege of supporting Mohsin during the SAMA cybersecurity framework implementation at one of the largest financial institutions in KSA. As Security Architect, he designed and led the implementation with remarkable technical expertise and clarity, ensuring both regulatory and business needs were met. His collaborative approach and deep knowledge made the project a success and a great learning experience for the team.",
      name: "",
      role: "Sr. Consultant – Cybersecurity (KSA)",
      rating: 4,
    },
    {
      quote:
        "and the relentless dedication that later evolved into Mociber. What truly defines Mohsin is his blend of sharp cybersecurity expertise with a deep sense of leadership and integrity. He doesn’t just build businesses — he builds trust, relationships, and a culture of innovation around him.",
      name: "",
      role: "Sr. HVAC Engineer - Kuwait",
      rating: 5,
    },
     {
      quote:"I know Mohsin from American Express and we worked together. He is a thorough professional and an asset to any organization where he works. ",
      name: "Senior Manager – Internal Audit",
      role: "American Express - KSA",
      rating: 5,
    },
     {
      quote:"	Mohsin is very practical, organized and always open to ideas and suggestions. If you ask for help and guidance, he will always support you. He also knows people, is good with customers, goes out of his way to help colleagues and get things done.",
      name: "Hed Human Resource",
      role: "Certprofessionl - India",
      rating: 5,
    },
  ];

  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3); // default to desktop

  // set responsive perView
  useEffect(() => {
    function updatePerView() {
      const w = window.innerWidth;
      if (w < 640) setPerView(1); // mobile
      else if (w < 1024) setPerView(2); // tablet
      else setPerView(3); // desktop
    }
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  // clamp index when perView changes
  useEffect(() => {
    const maxIndex = Math.max(0, testimonials.length - perView);
    setIndex((i) => Math.min(i, maxIndex));
  }, [perView, testimonials.length]);

  const prev = () => {
    setIndex((i) => Math.max(0, i - 1));
  };
  const next = () => {
    const maxIndex = Math.max(0, testimonials.length - perView);
    setIndex((i) => Math.min(maxIndex, i + 1));
  };

  // Allow keyboard left/right
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [perView, testimonials.length]);

  // compute transform percent
  const slideWidth = 100 / perView;
  const translateX = -(index * slideWidth);

  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-600"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.288-3.967z" />
      </svg>
    ));
  };

  return (
    <section className="text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <p className="text-sm bg-blue-900/30 inline-block px-3 py-1 rounded-full text-blue-300">
          What our clients say
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2" data-aos="fade-up">Trusted by Industry Leaders</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover how businesses across industries rely on our cybersecurity expertise to stay protected
          and compliant.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Prev/Next buttons */}
        <button
          aria-label="Previous testimonials"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-md bg-white/5 hover:bg-white/10 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          aria-label="Next testimonials"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-md bg-white/5 hover:bg-white/10 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* viewport */}
        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex transition-transform duration-500"
            style={{
              width: `${(testimonials.length * 100) / perView}%`,
              transform: `translateX(${translateX}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div
              data-aos="zoom-in"
                key={i}
                className="p-4"
                style={{ width: `${slideWidth}%` }}
              >
                {/* Card: h-full ensures equal height; flex-col + justify-between makes content stretch */}
                <div className="bg-[#0d1025] border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-blue-600/30 transition-transform hover:-translate-y-1 duration-300 h-full flex flex-col">
                  <div className="mb-4 flex-1">
                    <div className="mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-blue-500 mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h5m-5 4h10" />
                      </svg>
                      <p className="text-gray-300 text-base leading-relaxed">“{item.quote}”</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-1">
                    {/* <div className="flex gap-1 mb-1">{renderStars(item.rating)}</div> */}
                    <h4 className="text-lg font-semibold text-white">{item.name || "—"}</h4>
                    <p className="text-sm text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: Math.max(1, testimonials.length - perView + 1) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
