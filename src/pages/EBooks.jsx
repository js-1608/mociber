"use client";
import HeroBanner from "@/components/ServiceHero";
import React, { useMemo, useState } from "react";

/**
 * EbooksPage.jsx
 * - Tailwind-ready single-file component
 * - Replace `sampleEbooks` with API fetch or props when integrating
 * - Includes search, tag filter, sort, gated download modal
 */

const sampleEbooks = [
    {
        id: "ebook-1",
        title: "Cybersecurity in the Emerging Tech Era",
        subtitle: "Practical guidance for modern threats",
        description:
            "An operational guide covering detection, response, and continuous monitoring for cloud systems.",
        cover: "ebookpdf/ebook1.PNG",
        size: "0.5 MB",
        pages: 9,
        tags: ["Security", "Cloud"],
        fileUrl: "/ebookpdf/E-Book Cybersecurity in the Emerging Tech Era.pdf",
        gated: false,
        publishedAt: "2025-07-01",
    },
    {
        id: "ebook-2",
        title: "Cybersecurity in the Era of Emerging Tech",
        subtitle: "Design patterns & best practices",
        description:
            "Short, actionable checklist for architects and SREs to harden workloads in public clouds.",
        cover: "ebookpdf/ebook2.PNG",
        size: "0.5 MB",
        pages: 10,
        tags: ["Cloud"],
        fileUrl: "/ebookpdf/E-Book Cybersecurity in the Era of Emerging Tech.pdf",
        gated: false,
        publishedAt: "2024-11-15",
    },
];

function IconSearch(props) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            width="18"
            height="18"
            className="inline-block"
            {...props}
        >
            <path
                d="M21 21l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                cx="11"
                cy="11"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function EbooksPage({ ebooks = sampleEbooks }) {
    const [query, setQuery] = useState("");
    const [activeTag, setActiveTag] = useState("All");
    const [sort, setSort] = useState("newest"); // newest | oldest | pages
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEbook, setSelectedEbook] = useState(null);
    const [email, setEmail] = useState("");
    const [downloadReady, setDownloadReady] = useState(false);

    // derive tags
    const tags = useMemo(() => {
        const unique = new Set();
        ebooks.forEach((e) => e.tags?.forEach((t) => unique.add(t)));
        return ["All", ...Array.from(unique)];
    }, [ebooks]);

    const filtered = useMemo(() => {
        let list = ebooks.filter((e) => {
            const q = query.trim().toLowerCase();
            if (!q) return true;
            return (
                e.title.toLowerCase().includes(q) ||
                (e.subtitle || "").toLowerCase().includes(q) ||
                (e.description || "").toLowerCase().includes(q)
            );
        });

        if (activeTag !== "All") {
            list = list.filter((e) => e.tags?.includes(activeTag));
        }

        if (sort === "newest") {
            list.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        } else if (sort === "oldest") {
            list.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
        } else if (sort === "pages") {
            list.sort((a, b) => (b.pages || 0) - (a.pages || 0));
        }

        return list;
    }, [ebooks, query, activeTag, sort]);

    // open gated-download modal
    function handleDownloadClick(ebook) {
        if (ebook.gated) {
            setSelectedEbook(ebook);
            setModalOpen(true);
            setDownloadReady(false);
            setEmail("");
        } else {
            // open direct download in new tab
            window.open(ebook.fileUrl, "_blank", "noopener");
        }
    }

    // simulate submit -> show direct link (replace with real submission + analytics)
    function handleGatedSubmit(e) {
        e.preventDefault();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return alert("Please enter a valid email.");
        }

        // TODO: replace with API call to save lead & send download link
        // fetch("/api/leads", { method: "POST", body: JSON.stringify({ email, ebookId: selectedEbook.id }) })
        setDownloadReady(true);
    }

    return (
        <>
            <img src='/newbanners/ebooks.png' alt="Blog hero" className="w-full h-full object-cover opacity-95 mt-20 lg:mt-1" />

            <div className="min-h-screen  py-12 px-4 md:px-10 lg:px-20">

                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold">
                                E-Books Library
                            </h1>
                            <p className="text-slate-200 mt-1">
                                Download in-depth guides, reports and short handbooks — free and
                                gated where noted.
                            </p>
                        </div>

                        {/* Search + Sort */}
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <label className="relative flex items-center w-full md:w-80">
                                <span className="absolute left-3 text-slate-400">
                                    <IconSearch />
                                </span>
                                <input
                                    type="search"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search by title, topic or description"
                                    className="pl-10 pr-3 py-2.5 rounded-lg border border-slate-200  w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    aria-label="Search ebooks"
                                />
                            </label>

                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="py-2 px-3 rounded-lg border border-slate-200 bg-white text-black text-sm focus:outline-none"
                                aria-label="Sort ebooks"
                            >
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                                <option value="pages">Most pages</option>
                            </select>
                        </div>
                    </header>

                    {/* Tags */}
                    <nav className="flex flex-wrap gap-3 mb-8" aria-label="Ebook categories">
                        {tags.map((t) => (
                            <button
                                key={t}
                                onClick={() => setActiveTag(t)}
                                className={`text-sm px-3 py-1.5 rounded-full border transition ${activeTag === t
                                    ? "bg-gradient-to-r from-[#032152] to-[#0b3b6b] text-white border-transparent"
                                    : "bg-white border-slate-200 text-slate-700 hover:shadow-sm"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </nav>

                    {/* Grid */}
                    <section
                        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        aria-live="polite"
                    >
                        {filtered.length === 0 && (
                            <div className="col-span-full text-center text-slate-500 py-12">
                                No e-books found for your search.
                            </div>
                        )}

                        {filtered.map((eb) => (
                            <article
                                key={eb.id}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col"
                            >
                                <div className="h-64 bg-slate-100">
                                    <img
                                        src={eb.cover}
                                        alt={`Cover of ${eb.title}`}
                                        className="w-full h-full object-fill"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900">
                                                {eb.title}
                                            </h3>
                                            <p className="text-sm text-slate-500 mt-1">{eb.subtitle}</p>
                                        </div>

                                        <div className="text-right text-xs text-slate-500">
                                            <div>{eb.size}</div>
                                            <div>{eb.pages} pages</div>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-sm mt-4 line-clamp-3">
                                        {eb.description}
                                    </p>

                                    <div className="mt-4 flex items-center justify-between gap-3">
                                        <div className="flex flex-wrap gap-2">
                                            {eb.tags?.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            {/* {eb.gated && (
                                                <span className="text-xs px-2 py-1 rounded-md bg-amber-100 text-amber-800">
                                                    Gated
                                                </span>
                                            )} */}

                                            <button
                                                onClick={() => handleDownloadClick(eb)}
                                                className="inline-flex items-center gap-2 bg-[#032152] hover:bg-[#0b3b6b] text-white text-sm font-semibold py-2 px-3 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                aria-label={`Download ${eb.title}`}
                                            >
                                                {eb.gated ? "Get Access" : "Download"}
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    aria-hidden
                                                >
                                                    <path
                                                        d="M12 3v12"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M5 12l7 7 7-7"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </section>

                    {/* Modal: Gated download */}
                    {modalOpen && selectedEbook && (
                        <div
                            role="dialog"
                            aria-modal="true"
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >
                            <div
                                className="absolute inset-0 bg-black/40"
                                onClick={() => setModalOpen(false)}
                                aria-hidden
                            />
                            <div className="relative max-w-xl w-full bg-white rounded-2xl shadow-2xl p-6">
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="absolute top-4 right-4 text-slate-600 hover:text-slate-900"
                                    aria-label="Close modal"
                                >
                                    ✕
                                </button>

                                <div className="flex gap-4">
                                    <img
                                        src={selectedEbook.cover}
                                        alt="image"
                                        className="w-24 h-32 object-cover rounded-md flex-none"
                                    />

                                    <div className="flex-1">
                                        <h2 className="text-xl font-bold text-slate-900">
                                            {selectedEbook.title}
                                        </h2>
                                        <p className="text-slate-600 mt-1">{selectedEbook.subtitle}</p>

                                        <p className="text-sm text-slate-500 mt-3">
                                            To access this e-book, please enter your email. We’ll send a
                                            direct download link and occasional product updates (you can
                                            unsubscribe anytime).
                                        </p>

                                        {!downloadReady ? (
                                            <form
                                                onSubmit={handleGatedSubmit}
                                                className="mt-4 flex flex-col sm:flex-row gap-3"
                                            >
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    placeholder="name@company.com"
                                                    className="flex-1 px-4 py-2 rounded-lg border border-slate-200 focus:outline-none"
                                                    aria-label="Your email"
                                                />
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 rounded-lg bg-[#032152] text-white font-semibold hover:bg-[#0b3b6b] transition"
                                                >
                                                    Send link
                                                </button>
                                            </form>
                                        ) : (
                                            <div className="mt-4 flex flex-col gap-3">
                                                <div className="text-sm text-slate-700">
                                                    Thank you! Your download is ready:
                                                </div>
                                                <a
                                                    href={selectedEbook.fileUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block text-sm font-medium px-4 py-2 bg-gradient-to-r from-[#032152] to-[#0b3b6b] text-white rounded-lg"
                                                >
                                                    Download {selectedEbook.title}
                                                </a>

                                                <div className="text-xs text-slate-500">
                                                    We also emailed the download link to <strong>{email}</strong>.
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
