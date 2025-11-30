// TechnologiesLogoGrid.jsx
import React from "react";

export default function TechnologiesLogoGrid() {
  const tabs = [
    {
      id: "xdr",
      label: "Security & XDR",
      subtitle: "Endpoint · EDR · XDR",
      color: "#0ea5a4",
      items: [
        { name: "CrowdStrike Falcon", initials: "CF", logoBg: "#111827" },
        { name: "SentinelOne", initials: "S1", logoBg: "#0f172a" },
        { name: "Microsoft Defender", initials: "MD", logoBg: "#0b1220" },
        { name: "Palo Alto Cortex XDR", initials: "PX", logoBg: "#081425" },
        { name: "Splunk", initials: "SP", logoBg: "#09203a" },
      ],
    },
    {
      id: "vci",
      label: "Vuln · Cloud · Identity",
      subtitle: "Cloud posture · VM · IAM",
      color: "#7c3aed",
      items: [
        { name: "Tenable One", initials: "T1", logoBg: "#0b1220" },
        { name: "Qualys VMDR", initials: "QV", logoBg: "#122031" },
        { name: "Rapid7 InsightVM", initials: "R7", logoBg: "#06202b" },
        { name: "Wiz", initials: "WZ", logoBg: "#082235" },
        { name: "Okta", initials: "OK", logoBg: "#0b1b2b" },
        { name: "CyberArk", initials: "CA", logoBg: "#0f1320" },
      ],
    },
    {
      id: "intel",
      label: "Threat Intel",
      subtitle: "Contextual alerts & dark web",
      color: "#ef4444",
      items: [
        { name: "Recorded Future", initials: "RF", logoBg: "#081426" },
        { name: "Mandiant", initials: "MD", logoBg: "#0b1220" },
        { name: "IBM X-Force", initials: "XF", logoBg: "#081425" },
        { name: "Anomali", initials: "AN", logoBg: "#0b1730" },
      ],
    },
  ];

  // flatten all items
  const allItems = tabs.flatMap((t) => t.items);

  return (
    <section
      className="py-12"
      style={{ background: "linear-gradient(180deg,#0c1b34 0%, #000A1F 100%)" }}
    >
      <div className="max-w-7xl mx-auto  text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold text-white">
          Advanced Tools & Technologies We Expertise In
        </h3>
        <p className="mt-2 text-slate-300 max-w-2xl mx-auto">
          A curated selection of enterprise-grade cybersecurity tools.
        </p>

        {/* LOGOS GRID */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {allItems.map((tool) => (
            <div
              key={tool.name}
              data-aos="fade-up"
              className="bg-white/10 rounded-xl p-4  border shadow flex flex-col items-center justify-center hover:scale-[1.04] transition"
            >
              {/* logo placeholder */}
              {/* <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-lg font-semibold"
                style={{ backgroundColor: tool.logoBg }}
              >
                {tool.initials}
              </div> */}

              {/* tool name */}
              <div className=" text-lg font-semibold text-white text-center">
                {tool.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
