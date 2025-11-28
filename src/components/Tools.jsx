// ToolsTabsDark.jsx
import React, { useState } from "react";

/**
 * ToolsTabsDark
 * - Dark-gradient background
 * - Highly visible tab pills with icons/logos
 * - Accessible (role=tablist/tabpanel)
 * - Replace LogoPlaceholder with <img src="..."> if you have logos
 *
 * Usage: <ToolsTabsDark />
 */

function LogoPlaceholder({ initials = "TT", bg = "#1f2937", alt }) {
  // simple rounded logo circle (replace with <img> for real logos)
  return (
    <div
      aria-hidden
      style={{ backgroundColor: bg }}
      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
    >
      <span className="text-sm font-semibold text-white/90">{initials}</span>
    </div>
  );
}

export default function ToolsTabsDark() {
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

  const [active, setActive] = useState(tabs[0].id);

  return (
    <section
      id="tools"
      className="py-12"
      style={{ background: "linear-gradient(180deg,#0c1b34 0%, #000A1F 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Advanced Tools & Technologies We Expertise In</h3>
          <p className="mt-2 text-slate-300 max-w-2xl mx-auto">We partner with leading security vendors and leverage emerging technologies to deliver defense-in-depth.</p>
        </div>

        <div className="mt-8 grid lg:grid-cols-12 gap-6 items-start">
          {/* Left: Tabs column */}
          <div className="lg:col-span-3">
            <div className="bg-white/6 backdrop-blur-sm border border-white/6 rounded-2xl p-3">
              <div role="tablist" aria-label="Tool categories" className="space-y-3">
                {tabs.map((t) => {
                  const isActive = active === t.id;
                  return (
                    <button
                      key={t.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(t.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-shadow focus:outline-none
                        ${isActive ? "bg-gradient-to-r from-white/6 to-white/3 ring-1 ring-white/20 shadow-md" : "hover:bg-white/3"}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-1.5 h-10 rounded-full ${isActive ? "bg-white" : "bg-transparent"} transition-all`}
                          aria-hidden
                        />
                        <LogoPlaceholder initials={t.label.split(" ").map(x => x[0]).slice(0,2).join("")} bg={t.color} />
                      </div>
                      <div className="text-left flex-1">
                        <div className={`text-sm font-semibold ${isActive ? "text-white" : "text-slate-200"}`}>{t.label}</div>
                        <div className={`text-xs ${isActive ? "text-slate-200" : "text-slate-400"}`}>{t.subtitle}</div>
                      </div>

                      <div className="text-xs px-3 py-1 rounded-full" style={{ background: isActive ? "rgba(255,255,255,0.06)" : "transparent" }}>
                        <span className={`font-medium text-[11px] ${isActive ? "text-white" : "text-slate-300"}`}>{t.items.length}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Panel */}
          <div className="lg:col-span-9">
            <div className="bg-white/4 border border-white/6 rounded-2xl p-6">
              {tabs.map((t) => {
                const isActive = active === t.id;
                return (
                  <div key={t.id} role="tabpanel" hidden={!isActive} aria-labelledby={t.id} className={isActive ? "block" : "hidden"}>
                    {/* header inside panel */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{t.label}</h4>
                        <p className="text-sm text-slate-300 mt-1">{t.subtitle}</p>
                      </div>
                      <div className="text-sm text-slate-300">Trusted enterprise vendors</div>
                    </div>

                    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {t.items.map((it) => (
                        <div
                          key={it.name}
                          className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/6 hover:scale-[1.01] transition-transform"
                        >
                          {/* logo: replace with <img src=... alt=... /> for actual logos */}
                          <LogoPlaceholder initials={it.initials} bg={it.logoBg} />
                          <div>
                            <div className="text-sm font-semibold text-white">{it.name}</div>
                            <div className="text-xs text-slate-300 mt-1">Enterprise-grade</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* quick pills */}
                    <div className="mt-6 border-t border-white/6 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {t.items.map((it) => (
                          <span key={it.name} className="px-3 py-1 rounded-full text-xs bg-white/6 text-slate-200">
                            {it.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* small legend / instructions to emphasize tab view */}
            <div className="mt-4 text-sm text-slate-400 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/80" />
              <div>Click a category on the left to explore vendor logos & short descriptions.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
