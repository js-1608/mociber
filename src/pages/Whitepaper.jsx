import HeroBanner from "@/components/ServiceHero";
import React, { useMemo, useState } from "react";

// WhitePapersPage.jsx
// Single-file React + Tailwind component. Drop into your app and adjust PDF URLs.

export default function WhitePapersPage() {
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(() => new Set());
    const [activePreview, setActivePreview] = useState(null);
    const [sortBy, setSortBy] = useState("date");

    const whitePapers = useMemo(
        () => [
            {
                id: "wp-1",
                title: "Modern E‑Commerce: Growth Strategies 2025",
                subtitle: "Data-driven playbook for scaling D2C brands.",
                date: "2025-07-01",
                size: "3.4 MB",
                tags: ["E‑commerce", "Growth"],
                url: "/papers/modern-ecommerce-2025.pdf",
                cover: "/papers/covers/ecommerce.jpg",
            },
            {
                id: "wp-2",
                title: "Headless Commerce — Practical Guide",
                subtitle: "Architecture, tradeoffs and migration checklist.",
                date: "2024-11-15",
                size: "2.8 MB",
                tags: ["Headless", "Architecture"],
                url: "/papers/headless-commerce-guide.pdf",
                cover: "/papers/covers/headless.jpg",
            },
            {
                id: "wp-3",
                title: "SEO for Marketplaces",
                subtitle: "How to win organic discoverability on marketplaces.",
                date: "2023-12-06",
                size: "1.9 MB",
                tags: ["SEO", "Marketplaces"],
                url: "/papers/seo-marketplaces.pdf",
                cover: "/papers/covers/seo.jpg",
            },
            {
                id: "wp-4",
                title: "Payments & Fraud Prevention",
                subtitle: "Best practices for secure, low-friction checkout.",
                date: "2025-02-20",
                size: "4.1 MB",
                tags: ["Payments", "Security"],
                url: "/papers/payments-fraud.pdf",
                cover: "/papers/covers/payments.jpg",
            },
        ],
        []
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = whitePapers.filter((w) => {
            if (!q) return true;
            return (
                w.title.toLowerCase().includes(q) ||
                w.subtitle.toLowerCase().includes(q) ||
                w.tags.join(" ").toLowerCase().includes(q)
            );
        });

        if (sortBy === "date") {
            list = list.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortBy === "title") {
            list = list.sort((a, b) => a.title.localeCompare(b.title));
        }
        return list;
    }, [query, sortBy, whitePapers]);

    function toggleSelect(id) {
        setSelected((prev) => {
            const copy = new Set(prev);
            if (copy.has(id)) copy.delete(id);
            else copy.add(id);
            return copy;
        });
    }

    function downloadPaper(url, filename) {
        // Create and click anchor to download
        const a = document.createElement("a");
        a.href = url;
        a.download = filename || url.split("/").pop();
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    function downloadSelected() {
        // Trigger individual downloads for each selected paper
        if (selected.size === 0) return;
        const ids = Array.from(selected);
        ids.forEach((id) => {
            const paper = whitePapers.find((p) => p.id === id);
            if (paper) downloadPaper(paper.url, `${paper.title}.pdf`);
        });
    }

    function clearSelection() {
        setSelected(new Set());
    }

    return (
        <>

            <HeroBanner
                image="/Banners/About.jpg"
                heading={<></>}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />
            <div className="min-h-screen    py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-extrabold ">White Papers</h1>
                            <p className=" mt-1">Download in-depth technical & business white papers.</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search by title, topic or tag"
                                    className="w-72 md:w-96 rounded-md border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    aria-label="Search white papers"
                                />
                            </div>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="rounded-md border border-slate-200 px-3 py-2 bg-white text-gray-800"
                            >
                                <option value="date">Sort: Newest</option>
                                <option value="title">Sort: Title</option>
                            </select>

                            <button
                                onClick={downloadSelected}
                                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow"
                                aria-disabled={selected.size === 0}
                            >
                                Download Selected
                              </button>
                        </div>
                    </div>

                    {/* Controls row for small screens */}
                    <div className="mb-6 flex items-center justify-between text-sm text-slate-600">
                        <div>{filtered.length} results</div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => {
                                    setQuery("");
                                    setSortBy("date");
                                    clearSelection();
                                }}
                                className="underline cursor-pointer text-gray-200"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((wp) => (
                            <article key={wp.id} className="group bg-white rounded-2xl shadow-sm border hover:shadow-md transition-shadow overflow-hidden">
                                <div className="relative h-44 md:h-36 lg:h-44">
                                    <img
                                        src={wp.cover}
                                        alt={wp.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-3 right-3 flex gap-2">
                                        <label className="inline-flex items-center bg-white/80 backdrop-blur rounded-full p-1">
                                            <input
                                                type="checkbox"
                                                checked={selected.has(wp.id)}
                                                onChange={() => toggleSelect(wp.id)}
                                                className="form-checkbox h-4 w-4"
                                                aria-label={`Select ${wp.title}`}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-slate-900">{wp.title}</h3>
                                    <p className="text-sm text-slate-600 mt-1">{wp.subtitle}</p>

                                    <div className="mt-3 flex items-center justify-between">
                                        <div className="text-xs text-slate-500">
                                            <div>{new Date(wp.date).toLocaleDateString()}</div>
                                            <div>{wp.size}</div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            {/* <button
                                                onClick={() => setActivePreview(wp)}
                                                className="text-sm px-3 py-1 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-gray-800"
                                            >
                                                Preview
                                            </button> */}

                                            <button
                                                onClick={() => downloadPaper(wp.url, `${wp.title}.pdf`)}
                                                className="text-sm px-3 py-1 rounded-md bg-indigo-600 text-white"
                                            >
                                                Download
                                            </button>
                                        </div>
                                    </div>

                                    {/* <div className="mt-3 flex flex-wrap gap-2">
                                        {wp.tags.map((t) => (
                                            <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded-full">{t}</span>
                                        ))}
                                    </div> */}
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Empty state */}
                    {filtered.length === 0 && (
                        <div className="mt-12 text-center text-slate-600">No white papers match your search.</div>
                    )}

                    {/* Preview Modal */}
                    {activePreview && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                            <div className="absolute inset-0 bg-black/50" onClick={() => setActivePreview(null)} />
                            <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="flex items-center justify-between p-4 border-b">
                                    <div>
                                        <h2 className="text-lg font-semibold">{activePreview.title}</h2>
                                        <p className="text-sm text-slate-500">{activePreview.subtitle}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <a
                                            href={activePreview.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 rounded-md text-sm border"
                                        >
                                            Open in new tab
                                        </a>
                                        <button
                                            onClick={() => downloadPaper(activePreview.url, `${activePreview.title}.pdf`)}
                                            className="px-3 py-2 rounded-md bg-indigo-600 text-white"
                                        >
                                            Download
                                        </button>
                                        <button onClick={() => setActivePreview(null)} className="px-3 py-2 text-sm">Close</button>
                                    </div>
                                </div>

                                <div className="h-[70vh]">
                                    {/* Preview PDF using <iframe>. Some browsers block local file previews — host PDFs on public URL for best results. */}
                                    <iframe src={activePreview.url} title={activePreview.title} className="w-full h-full" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>

    );
}
