"use client";
import HeroBanner from "@/components/ServiceHero";
import React, { useMemo, useState } from "react";

/**
 * Cleaned ReportsPage.jsx
 * - Minimal, focused design for listing reports
 * - Search + sort + featured hero + immediate download on Preview (no signup)
 * - Replace `sampleReports` with your API when integrating
 */

const sampleReports = [
  {
    id: "rep-1",
    title: "Global Security Landscape 2025",
    excerpt:
      "A comprehensive look at breach trends, attacker economics, and defensive postures across industries.",
    cover: "/Banners/About.jpg",
    size: "6.8 MB",
    pages: 110,
    tags: ["Industry", "Trends", "Analysis"],
    fileUrl: "/downloads/global-security-2025.pdf",
    gated: true,
    featured: true,
    publishedAt: "2025-10-02",
  },
  {
    id: "rep-2",
    title: "Cloud Migration Risks & Controls",
    excerpt:
      "Practical control matrix for teams migrating critical services to public clouds.",
    cover: "/reports/cloud-migration.jpg",
    size: "3.2 MB",
    pages: 46,
    tags: ["Cloud", "Controls"],
    fileUrl: "/downloads/cloud-migration.pdf",
    gated: false,
    featured: false,
    publishedAt: "2025-06-18",
  },
  {
    id: "rep-3",
    title: "SMB Cyber Hygiene Checklist",
    excerpt:
      "Lean checklist for small & medium businesses to reduce common exposures quickly.",
    cover: "/reports/smb-checklist.jpg",
    size: "1.2 MB",
    pages: 18,
    tags: ["SMB", "Checklist"],
    fileUrl: "/downloads/smb-checklist.pdf",
    gated: false,
    featured: false,
    publishedAt: "2024-11-11",
  },
  {
    id: "rep-4",
    title: "Ransomware Response Playbook",
    excerpt:
      "Step-by-step procedures and runbooks for incident responders during ransomware events.",
    cover: "/reports/ransomware-playbook.jpg",
    size: "4.4 MB",
    pages: 72,
    tags: ["Incidents", "Playbook"],
    fileUrl: "/downloads/ransomware-playbook.pdf",
    gated: true,
    featured: false,
    publishedAt: "2025-03-04",
  },
];

export default function ReportsPage({ reports = sampleReports }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured"); // featured | newest | pages

  const list = useMemo(() => {
    let arr = reports.filter((r) => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return (
        r.title.toLowerCase().includes(q) ||
        r.excerpt.toLowerCase().includes(q) ||
        (r.tags || []).some((t) => t.toLowerCase().includes(q))
      );
    });

    if (sort === "featured") {
      arr.sort((a, b) =>
        a.featured === b.featured
          ? new Date(b.publishedAt) - new Date(a.publishedAt)
          : a.featured
          ? -1
          : 1
      );
    } else if (sort === "newest") {
      arr.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    } else if (sort === "pages") {
      arr.sort((a, b) => (b.pages || 0) - (a.pages || 0));
    }

    return arr;
  }, [reports, query, sort]);

  // Trigger direct download (no signup). If cross-origin, will open in new tab.
  function handleDirectDownload(report) {
    if (!report?.fileUrl) return;
    try {
      // create anchor to trigger download where possible
      const a = document.createElement("a");
      a.href = report.fileUrl;
      // use download attribute only for same-origin or CORS-enabled endpoints
      a.setAttribute("download", "");
      a.setAttribute("rel", "noopener noreferrer");
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      // fallback: open in new tab
      window.open(report.fileUrl, "_blank", "noopener");
    }
  }

  // Featured hero report (first featured or first item)
  const hero = reports.find((r) => r.featured) || reports[0];

  return (
    <>
      <HeroBanner
        image="/Banners/About.jpg"
        heading={<></>}
        subtext=""
        primaryCta=""
        secondaryCta=""
      />

      <div className="min-h-screen py-12 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* HEADER / HERO */}
          <div className="grid lg:grid-cols-3 gap-8 items-start mb-10">
            <div className="lg:col-span-2">
              <div className="rounded-3xl overflow-hidden shadow-lg relative">
                {hero ? (
                  <div className="md:flex">
                    <div className="md:w-1/2 h-72 md:h-auto">
                      <img
                        src={hero.cover}
                        alt={hero.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:p-10 bg-white md:flex-1">
                      <span className="text-sm text-amber-600 font-semibold">
                        Featured
                      </span>
                      <h1 className="text-3xl md:text-4xl font-extrabold mt-3 text-slate-900">
                        {hero.title}
                      </h1>
                      <p className="text-slate-600 mt-4">{hero.excerpt}</p>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => handleDirectDownload(hero)}
                          className="px-5 py-2 rounded-full bg-blue-900 border border-slate-200 font-semibold shadow-sm hover:shadow-lg text-white"
                        >
                          Download
                        </button>

                        <div className="ml-auto text-sm text-slate-500">
                          {hero.pages} pages • {hero.size}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                      Reports
                    </h1>
                    <p className="mt-3 text-slate-600">
                      In-depth research, industry analysis, and practical
                      playbooks.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right column: quick search and subscribe CTA */}
            <aside className="space-y-6">
              

              <div className="bg-gradient-to-r from-[#032152] to-[#0b3b6b] text-white p-5 rounded-2xl shadow-lg">
                <h4 className="text-lg font-bold">New report drops</h4>
                <p className="mt-2 text-sm text-slate-200">
                  Subscribe for alerts when new reports and playbooks are
                  published.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Subscribed — we'll email you new reports.");
                  }}
                  className="mt-4 flex gap-2"
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-3 py-2 rounded-md border-2 border-white focus:outline-none"
                  />
                  <button className="px-4 py-2 rounded-md bg-white text-[#032152] font-semibold">
                    Subscribe
                  </button>
                </form>
              </div>
              {/* <div className="bg-white rounded-2xl p-5 shadow">
                <label className="block text-sm font-medium text-slate-600">
                  Search reports
                </label>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Find by title, excerpt or tag"
                  className="mt-3 w-full px-4 py-2 border text-black border-slate-200 rounded-lg focus:outline-none"
                />
              </div> */}
            </aside>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-3 ">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-2 rounded-md border text-black bg-white"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="pages">Most pages</option>
              </select>

              <div className="text-sm text-slate-600">
                Showing <strong>{list.length}</strong> reports
              </div>
            </div>

            <div className="text-sm text-slate-500" />
          </div>

          {/* Masonry-like grid */}
          <section className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {list.map((r) => (
              <article
                key={r.id}
                className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow group hover:shadow-lg transition"
              >
                <div className="relative">
                  <img
                    src={r.cover}
                    alt={r.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    {r.gated ? (
                      <span className="text-xs px-2 py-1 rounded bg-amber-100 text-amber-800">
                        Gated
                      </span>
                    ) : (
                      <span className="text-xs px-2 py-1 rounded bg-slate-800 text-white">
                        Free
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 line-clamp-3">
                    {r.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      {r.pages} pages • {r.size}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => handleDirectDownload(r)}
                      className="px-4 py-2 rounded-md border hover:bg-slate-50 text-black"
                    >
                      Preview & Download
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
