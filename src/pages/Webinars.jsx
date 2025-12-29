"use client";
import HeroBanner from "@/components/ServiceHero";
import { Search } from "lucide-react";
import React, { useMemo, useState } from "react";

/**
 * WebinarsPage.jsx
 * - Tailwind-ready single-file component
 * - Replace `sampleWebinars` with fetch to your backend when integrating
 * - Includes registration modal + simple .ics generator
 */

/* ---------------------- Sample data ---------------------- */
const sampleWebinars = [
    {
        id: "web-1",
        title: "Future of Cloud Security — Live Panel",
        dateTime: "2025-12-10T14:30:00+05:30", // ISO string with timezone
        durationMin: 60,
        host: "Aarti Mehra",
        tags: ["Cloud", "Security"],
        thumbnail: "/Banners/About.jpg",
        type: "upcoming", // upcoming | recorded
        description:
            "Join industry leaders discussing trends, best practices, and migration patterns for secure cloud adoption.",
        registrationRequired: true,
        registrationLink: "", // left blank — handled by in-app modal
        recordingUrl: "", // empty — not recorded yet
        youtubeId: "", // empty while upcoming
        timezone: "Asia/Kolkata",
    },
    {
        id: "web-2",
        title: "Threat Hunting Playbooks (Recorded)",
        dateTime: "2025-08-12T16:00:00+05:30",
        durationMin: 45,
        host: "Rohit Singh",
        tags: ["Threat Intel", "SOC"],
        thumbnail: "/Banners/About.jpg",
        type: "recorded",
        description:
            "Step-by-step playbooks to operationalize threat hunting in small SOC teams.",
        registrationRequired: false,
        recordingUrl: "https://www.example.com/recordings/threat-hunting.mp4",
        youtubeId: "dQw4w9WgXcQ", // sample youtube id
    },
    {
        id: "web-3",
        title: "Intro to DevSecOps — Live Workshop",
        dateTime: "2025-12-18T11:00:00+05:30",
        durationMin: 90,
        host: "Neha Chopra",
        tags: ["DevSecOps", "Workshop"],
        thumbnail: "/Banners/About.jpg",
        type: "upcoming",
        description:
            "Hands-on workshop covering CI/CD security gates, scanning, and SCA tooling.",
        registrationRequired: true,
        registrationLink: "",
        recordingUrl: "",
        youtubeId: "",
    },
];

/* ---------------------- Helpers ---------------------- */
function formatDateTime(iso) {
    try {
        const d = new Date(iso);
        return d.toLocaleString("en-IN", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        });
    } catch {
        return iso;
    }
}

function minutesToHours(mins) {
    if (!mins) return "";
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h ? `${h}h ${m}m` : `${m}m`;
}

/* create a basic .ics calendar file content for download */
function createICS(webinar) {
    const dtStart = new Date(webinar.dateTime);
    const dtEnd = new Date(dtStart.getTime() + (webinar.durationMin || 60) * 60000);

    const toICSDate = (d) =>
        d
            .toISOString()
            .replace(/[-:]/g, "")
            .split(".")[0] + "Z"; // UTC format

    const icsLines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//mociber//Webinar//EN",
        "CALSCALE:GREGORIAN",
        "BEGIN:VEVENT",
        `UID:${webinar.id}@mociber.com`,
        `DTSTAMP:${toICSDate(new Date())}`,
        `DTSTART:${toICSDate(dtStart)}`,
        `DTEND:${toICSDate(dtEnd)}`,
        `SUMMARY:${webinar.title}`,
        `DESCRIPTION:${webinar.description || ""}`,
        "END:VEVENT",
        "END:VCALENDAR",
    ];

    return icsLines.join("\r\n");
}

/* ---------------------- Component ---------------------- */
export default function WebinarsPage({ webinars = sampleWebinars }) {
    const [tab, setTab] = useState("upcoming"); // upcoming | recorded | all
    const [query, setQuery] = useState("");
    const [activeTag, setActiveTag] = useState("All");
    const [sort, setSort] = useState("soonest"); // soonest | newest | longest
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedWebinar, setSelectedWebinar] = useState(null);
    const [regEmail, setRegEmail] = useState("");
    const [registered, setRegistered] = useState(false);

    // collect unique tags
    const tags = useMemo(() => {
        const s = new Set();
        webinars.forEach((w) => (w.tags || []).forEach((t) => s.add(t)));
        return ["All", ...Array.from(s)];
    }, [webinars]);

    // filtered list
    const filtered = useMemo(() => {
        let list = webinars.filter((w) => {
            if (tab === "upcoming") return w.type === "upcoming";
            if (tab === "recorded") return w.type === "recorded";
            return true;
        });

        if (query.trim()) {
            const q = query.trim().toLowerCase();
            list = list.filter(
                (w) =>
                    w.title.toLowerCase().includes(q) ||
                    (w.description || "").toLowerCase().includes(q) ||
                    (w.host || "").toLowerCase().includes(q)
            );
        }

        if (activeTag !== "All") {
            list = list.filter((w) => (w.tags || []).includes(activeTag));
        }

        if (sort === "soonest") {
            list.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        } else if (sort === "newest") {
            list.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
        } else if (sort === "longest") {
            list.sort((a, b) => (b.durationMin || 0) - (a.durationMin || 0));
        }

        return list;
    }, [webinars, tab, query, activeTag, sort]);

    /* open registration modal for upcoming webinar (or quick watch for recorded) */
    function handlePrimaryAction(webinar) {
        if (webinar.type === "upcoming") {
            setSelectedWebinar(webinar);
            setModalOpen(true);
            setRegEmail("");
            setRegistered(false);
        } else {
            // recorded -> open YouTube embed modal or open recordingUrl
            setSelectedWebinar(webinar);
            setModalOpen(true);
        }
    }

    function handleRegisterSubmit(e) {
        e.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regEmail)) {
            return alert("Please enter a valid email.");
        }

        // TODO: Replace this with real API call (save lead + send confirmation + signed recording link)
        setRegistered(true);

        // optionally create and offer ICS
        // also you would normally send webinar join link in email from server
    }

    function handleDownloadICS(w) {
        const ics = createICS(w);
        const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${w.title.replace(/\s+/g, "_")}.ics`;
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <>
            <img src='/newbanners/Webinar.png' alt="Blog hero" className="w-full h-full object-cover opacity-95 mt-20 lg:mt-1" />

            <div className="min-h-screen py-12 px-4 md:px-10 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold">
                                Webinars
                            </h1>
                            <p className="text-slate-200 mt-1">
                                Live events and recorded sessions — register for upcoming
                                webinars or watch recordings on demand.
                            </p>
                        </div>

                        {/* Search + Sort */}
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <label className="relative flex items-center w-full md:w-80">
                                <span className="absolute left-3 text-slate-400">
                                    <Search/>
                                </span>
                                <input
                                    type="search"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search title, host or topic"
                                    className="pl-10 pr-3 py-2.5 rounded-lg border border-slate-200 bg-white text-black w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    aria-label="Search webinars"
                                />
                            </label>

                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="py-2 px-3 rounded-lg border text-black border-slate-200 bg-white text-sm focus:outline-none"
                                aria-label="Sort webinars"
                            >
                                <option value="soonest">Soonest</option>
                                <option value="newest">Newest</option>
                                <option value="longest">Longest</option>
                            </select>
                        </div>
                    </header>

                    {/* Tabs */}
                    <div className="flex items-center gap-3 mb-6">
                        {[
                            { key: "upcoming", label: "Upcoming" },
                            { key: "recorded", label: "Recorded" },
                            { key: "all", label: "All" },
                        ].map((t) => (
                            <button
                                key={t.key}
                                onClick={() => setTab(t.key)}
                                className={`px-4 py-2 rounded-full font-semibold border transition ${tab === t.key
                                        ? "bg-gradient-to-r from-[#032152] to-[#0b3b6b] text-white border-transparent"
                                        : "bg-white border-slate-200 text-slate-700"
                                    }`}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>

                    {/* Tags */}
                    {/* <nav className="flex flex-wrap gap-3 mb-8" aria-label="Webinar tags">
                        {tags.map((t) => (
                            <button
                                key={t}
                                onClick={() => setActiveTag(t)}
                                className={`text-sm px-3 py-1.5 rounded-full border transition ${activeTag === t
                                        ? "bg-sky-700 text-white border-transparent"
                                        : "bg-white border-slate-200 text-slate-700 hover:shadow-sm"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </nav> */}

                    {/* Grid */}
                    <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.length === 0 && (
                            <div className="col-span-full text-center text-slate-500 py-12">
                                No webinars found.
                            </div>
                        )}

                        {filtered.map((w) => (
                            <article
                                key={w.id}
                                className="bg-white/10 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col border"
                            >
                                <div className="h-44 bg-slate-100">
                                    <img
                                        src={w.thumbnail}
                                        alt={`Thumbnail for ${w.title}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {w.title}
                                            </h3>
                                            {/* <p className="text-sm text-slate-500 mt-1">{w.host}</p> */}
                                        </div>

                                        <div className="text-right text-xs text-slate-500">
                                            <div>{formatDateTime(w.dateTime)}</div>
                                        </div>
                                    </div>

                                    <p className="text-slate-200 text-sm mt-4 line-clamp-3">
                                        {w.description}
                                    </p>

                                    <div className="mt-4 flex items-center justify-between gap-3">
                                        {/* <div className="flex flex-wrap gap-2">
                                            {(w.tags || []).map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div> */}

                                        <div className="flex items-center gap-2">
                                            {w.type === "upcoming" && (
                                                <button
                                                    onClick={() => handlePrimaryAction(w)}
                                                    className="inline-flex items-center gap-2 bg-[#032152] hover:bg-[#0b3b6b] text-white text-sm font-semibold py-2 px-3 rounded-lg transition"
                                                >
                                                    Register
                                                </button>
                                            )}

                                            {w.type === "recorded" && w.youtubeId && (
                                                <button
                                                    onClick={() => handlePrimaryAction(w)}
                                                    className="inline-flex items-center gap-2 bg-[#032152] hover:bg-[#0b3b6b] text-white text-sm font-semibold py-2 px-3 rounded-lg transition"
                                                >
                                                    Watch
                                                </button>
                                            )}

                                            {w.type === "recorded" && w.recordingUrl && !w.youtubeId && (
                                                <a
                                                    href={w.recordingUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 bg-[#032152] hover:bg-[#0b3b6b] text-white text-sm font-semibold py-2 px-3 rounded-lg transition"
                                                >
                                                    Watch recording
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* footer small actions */}
                                {/* <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between text-xs">
                                    <div className="text-slate-500">
                                        {w.registrationRequired ? "Registration required" : "Free"}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleDownloadICS(w)}
                                            className="text-slate-600 hover:text-slate-900"
                                            title="Add to calendar"
                                        >
                                            📅 Add to calendar
                                        </button>
                                        <a
                                            href={`#webinar-${w.id}`}
                                            className="text-slate-600 hover:text-slate-900"
                                            title="Details"
                                        >
                                            Details →
                                        </a>
                                    </div>
                                </div> */}
                            </article>
                        ))}
                    </section>

                    {/* Modal (Register or Watch) */}
                    {modalOpen && selectedWebinar && (
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
                            <div className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-6">
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="absolute top-4 right-4 text-slate-600 hover:text-slate-900"
                                    aria-label="Close modal"
                                >
                                    ✕
                                </button>

                                <div className="flex flex-col md:flex-row gap-6">
                                    <img
                                        src={selectedWebinar.thumbnail}
                                        alt="image"
                                        className="w-full md:w-48 h-auto object-cover rounded-md flex-none"
                                    />

                                    <div className="flex-1">
                                        <h2 className="text-xl font-bold text-slate-900">
                                            {selectedWebinar.title}
                                        </h2>
                                        <div className="text-sm text-slate-600 mt-1">
                                            {selectedWebinar.host} • {formatDateTime(selectedWebinar.dateTime)} •{" "}
                                            {minutesToHours(selectedWebinar.durationMin)}
                                        </div>

                                        <p className="text-sm text-slate-600 mt-4">
                                            {selectedWebinar.description}
                                        </p>

                                        {/* Upcoming -> registration form */}
                                        {selectedWebinar.type === "upcoming" ? (
                                            <div className="mt-4">
                                                {!registered ? (
                                                    <form onSubmit={handleRegisterSubmit} className="flex flex-col sm:flex-row gap-3">
                                                        <input
                                                            type="email"
                                                            value={regEmail}
                                                            onChange={(e) => setRegEmail(e.target.value)}
                                                            required
                                                            placeholder="your.email@company.com"
                                                            className="flex-1 px-4 py-2 rounded-lg border border-slate-200 focus:outline-none"
                                                            aria-label="Email to register"
                                                        />
                                                        <button className="px-4 py-2 rounded-lg bg-[#032152] text-white font-semibold hover:bg-[#0b3b6b] transition">
                                                            Register & Get Link
                                                        </button>
                                                    </form>
                                                ) : (
                                                    <div className="mt-4">
                                                        <div className="text-sm text-slate-700 mb-3">You're registered — a confirmation was sent to <strong>{regEmail}</strong>.</div>
                                                        {/*      */}
                                                    </div>
                                                )}
                                                <p className="text-xs text-slate-500 mt-3">
                                                    We may send event reminders and product updates. You can unsubscribe anytime.
                                                </p>
                                            </div>
                                        ) : (
                                            /* Recorded -> embed YouTube if available, or link */
                                            <div className="mt-4">
                                                {selectedWebinar.youtubeId ? (
                                                    <div className="aspect-video">
                                                        <iframe
                                                            title={selectedWebinar.title}
                                                            src={`https://www.youtube.com/embed/${selectedWebinar.youtubeId}`}
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                            className="w-full h-full rounded-md"
                                                        />
                                                    </div>
                                                ) : selectedWebinar.recordingUrl ? (
                                                    <a
                                                        href={selectedWebinar.recordingUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-block px-4 py-2 bg-[#032152] text-white rounded-lg"
                                                    >
                                                        Open recording
                                                    </a>
                                                ) : (
                                                    <div className="text-sm text-slate-500">Recording not available yet.</div>
                                                )}
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
