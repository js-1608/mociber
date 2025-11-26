import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import HeroBanner from "@/components/ServiceHero";

/*
  CaseStudiesList.jsx
  - Fetches the tag "case studies" (robust lookup) and then fetches posts with that tag.
  - Renders them in a vertical list layout (thumbnail left, content right) matching the provided design.
  - Uses a developer-provided local fallback image for posts missing featured images:
      /mnt/data/8e321088-9348-4be6-910b-3ab5e1f949e4.png
  - Tailwind CSS required.
  - Install DOMPurify: npm i dompurify
  - Set REACT_APP_WP_BASE in .env to override WP_BASE if needed.
*/

const WP_BASE = "https://blogs.esyride.in/wp-json/wp/v2";
const FALLBACK_IMG = "/mnt/data/8e321088-9348-4be6-910b-3ab5e1f949e4.png"; // developer-provided image path

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}

function estimateReadTime(html = "") {
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

function excerptText(html = "", maxWords = 30) {
  const clean = DOMPurify.sanitize(html || "", { ALLOWED_TAGS: [] });
  const arr = clean.split(/\s+/).filter(Boolean);
  if (arr.length <= maxWords) return clean;
  return arr.slice(0, maxWords).join(" ") + "...";
}

export default function CaseStudiesList() {
  const [tagId, setTagId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Resolve tag id for "case studies" (slug try then search)
  useEffect(() => {
    let mounted = true;
    async function findTag() {
      try {
        const slugRes = await fetch(`${WP_BASE}/tags?slug=case-studies`);
        if (slugRes.ok) {
          const arr = await slugRes.json();
          if (mounted && Array.isArray(arr) && arr.length > 0) {
            setTagId(arr[0].id);
            return;
          }
        }

        const searchRes = await fetch(`${WP_BASE}/tags?search=${encodeURIComponent("case studies")}&per_page=50`);
        if (searchRes.ok) {
          const data = await searchRes.json();
          if (mounted) {
            const found = (data || []).find(t => t.name && t.name.trim().toLowerCase() === "case studies");
            if (found) {
              setTagId(found.id);
              return;
            }
            if (data && data.length > 0) {
              setTagId(data[0].id);
              return;
            }
          }
        }

        if (mounted) setError("Tag 'case studies' not found on this site.");
      } catch (err) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to resolve tag");
      }
    }
    findTag();
    return () => (mounted = false);
  }, []);

  // Fetch posts when tagId is available
  useEffect(() => {
    if (!tagId) {
      setLoading(false);
      return;
    }
    let mounted = true;
    setLoading(true);
    setError(null);

    async function loadPosts() {
      try {
        const res = await fetch(`${WP_BASE}/posts?_embed&per_page=20&tags=${tagId}`);
        if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
        const data = await res.json();
        if (mounted) setPosts(data);
      } catch (err) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to load posts");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadPosts();
    return () => (mounted = false);
  }, [tagId]);

  return (
    <>
      <HeroBanner
        image="/Banners/About.jpg"
        heading={<></>}
        subtext=""
        primaryCta=""
        secondaryCta=""
      />
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* HERO */}
        {/* <div className="relative rounded-b-2xl overflow-hidden mb-8" style={{ height: "340px" }}>
          <img src="" alt="Case studies hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute left-8 bottom-8 text-white max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Case Studies</h1>
            <p className="mt-2 text-sm sm:text-base text-white/80 max-w-xl">
              Real results and deep dives — browse only posts tagged as <strong>Case Studies</strong>.
            </p>
          </div>
        </div> */}


        <header className="mb-6">
          <h1 className="text-3xl font-extrabold mb-2">Case Studies</h1>
          <p className="text-gray-300">In-depth writeups, project outcomes and learnings tagged as <strong>Case Studies</strong>.</p>
        </header>

        {error && <div className="mb-4 text-red-600">{error}</div>}
        {loading && <div className="py-12 text-center text-gray-500">Loading case studies…</div>}

        {!loading && !posts.length && !error && (
          <div className="py-12 text-center text-gray-600">No case studies found.</div>
        )}

        <div className="space-y-6">
          {posts.map(post => {
            const img = post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]
              ? post._embedded['wp:featuredmedia'][0].source_url
              : FALLBACK_IMG;

            // Short category/tag label — prefer categories
            const terms = post._embedded && post._embedded['wp:term'] ? post._embedded['wp:term'].flat() : [];
            const primaryCat = terms.find(t => t.taxonomy === 'category');

            return (
              <article key={post.id} className="flex gap-4 items-start bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <Link to={`/blog/${post.slug}`} className="flex-shrink-0 w-64 h-auto overflow-hidden rounded-md">
                  <img src={img} alt={post.title.rendered} className="w-full h-full object-cover" />
                </Link>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {primaryCat && <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">{primaryCat.name}</span>}
                      </div>

                      <h2 className="text-lg font-semibold leading-tight mb-2 text-black">
                        <Link to={`/blog/${post.slug}`} className="hover:underline" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.title.rendered) }} />
                      </h2>

                      <p className="text-sm text-gray-600 mb-3">{excerptText(post.excerpt?.rendered || post.content?.rendered, 28)}</p>

                      <div className="text-xs text-gray-500">{formatDate(post.date)} • {estimateReadTime(post.content.rendered)}</div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <Link to={`/blog/${post.slug}`} className="px-4 py-2 border rounded-full text-sm text-blue-800 hover:bg-gray-50">See Details</Link>
                      {/* <button className="px-3 py-2 bg-black text-white rounded-full text-sm">Buy ticket</button> */}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
