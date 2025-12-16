import React from "react";

/**
 * HeroBanner
 *
 * Props:
 *  - image: string (url or imported image) — background image
 *  - heading: string | node
 *  - subtext: string | node
 *  - primaryCta: { label, to, onClick } (optional)
 *  - secondaryCta: { label, to, onClick } (optional)
 *  - height: tailwind-like height classes (default: "h-[420px]" on desktop, grows on small screens)
 *  - className: additional classes for the wrapper
 *  - children: if provided, renders instead of subtext + CTAs
 *
 * Usage:
 *  import banner from "../assets/iam-banner.jpg";
 *  <HeroBanner
 *    image={banner}
 *    heading={<><span className="block">Identity & Access Management</span> — <span className="block">Redefining Digital Trust</span></>}
 *    subtext="Empower your enterprise with intelligent identity governance..."
 *    primaryCta={{ label: "Request a Consultation", to: "/contact" }}
 *    secondaryCta={{ label: "Explore Our IAM Solutions", to: "/solutions/iam" }}
 *  />
 */
export default function HeroBanner({
  image,
  heading,
  subtext,
  primaryCta,
  secondaryCta,
  height = "min-h-[420px]",
  className = "",
  children,
}) {
  const bg = `url(${image})`;

  return (
    <header
      className={`relative overflow-hidden ${height} flex items-center ${className}`}
      style={{
        backgroundImage: bg,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="page hero"
    >
      {/* subtle overlay to keep text readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,6,23,0.25) 0%, rgba(2,6,23,0.35) 30%, rgba(2,6,23,0.55) 100%)",
          zIndex: 0,
        }}
      />

      {/* optional decorative tint (soft) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-indigo-900/10 mix-blend-multiply pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <div className="mx-auto max-w-4xl">
          {heading && (
            <h1 className="text-2xl lg:text-5xl  font-bold leading-tight text-white">
              {heading}
            </h1>
          )}

          {children ? (
            <div className="mt-6 text-center">{children}</div>
          ) : (
            <>
              {subtext && (
                <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
                  {subtext}
                </p>
              )}

              {(primaryCta || secondaryCta) && (
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {primaryCta && (
                    <a
                      href={primaryCta.to || "#"}
                      onClick={(e) => {
                        if (primaryCta.onClick) {
                          e.preventDefault();
                          primaryCta.onClick(e);
                        }
                      }}
                      className="inline-flex items-center justify-center bg-white text-slate-900 font-semibold px-6 py-3 rounded-md shadow hover:scale-[1.02] transition"
                      aria-label={primaryCta.label}
                    >
                      {primaryCta.label}
                    </a>
                  )}

                  {secondaryCta && (
                    <a
                      href={secondaryCta.to || "#"}
                      onClick={(e) => {
                        if (secondaryCta.onClick) {
                          e.preventDefault();
                          secondaryCta.onClick(e);
                        }
                      }}
                      className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/5 transition"
                      aria-label={secondaryCta.label}
                    >
                      {secondaryCta.label}
                    </a>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

