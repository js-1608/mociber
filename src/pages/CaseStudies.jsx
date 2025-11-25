// CaseStudies.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

/*
  What this does
  - Finds the WP tag whose name equals "case studies" (case-insensitive).
  - Fetches posts that include that tag (WP endpoint: /posts?tags=<id>&_embed).
  - Renders a hero, filter header, and a responsive card grid of posts.
  - Uses a local hero image uploaded earlier:
      /mnt/data/f7c8ca9b-cbbe-423f-a1d4-b163c032edb5.png
  Notes:
  - Tailwind CSS required for styles.
  - Install DOMPurify: npm i dompurify
  - Set REACT_APP_WP_BASE in .env or edit WP_BASE below.
*/

const WP_BASE = "https://blogs.esyride.in/wp-json/wp/v2";
const HERO_IMG = "/mnt/data/f7c8ca9b-cbbe-423f-a1d4-b163c032edb5.png"; // developer-provided local image

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

function excerptText(html = "", maxWords = 28) {
  const clean = DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
  const arr = clean.split(/\s+/).filter(Boolean);
  if (arr.length <= maxWords) return clean;
  return arr.slice(0, maxWords).join(" ") + "...";
}

export default function CaseStudies() {
  const [tagId, setTagId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loadingTag, setLoadingTag] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [error, setError] = useState(null);

  // 1) resolve tag id for name "case studies" (case-insensitive)
  useEffect(() => {
    let mounted = true;
    setLoadingTag(true);
    setError(null);

    // We try a couple of approaches:
    //  - query by slug if likely 'case-studies'
    //  - fallback to /tags?search=...
    async function findTag() {
      try {
        // first try by slug (common): 'case-studies'
        const slugTry = await fetch(`${WP_BASE}/tags?slug=case-studies`);
        if (!slugTry.ok) throw new Error("Tag slug lookup failed");
        const slugData = await slugTry.json();
        if (mounted && Array.isArray(slugData) && slugData.length > 0) {
          setTagId(slugData[0].id);
          return;
        }

        // fallback: search by name (case-insensitive)
        const searchRes = await fetch(`${WP_BASE}/tags?search=${encodeURIComponent("case studies")}&per_page=50`);
        if (!searchRes.ok) throw new Error("Tag search failed");
        const searchData = await searchRes.json();
        if (mounted) {
          // try to find exact name match (case-insensitive)
          const found = (searchData || []).find(
            (t) => typeof t.name === "string" && t.name.trim().toLowerCase() === "case studies"
          );
          if (found) {
            setTagId(found.id);
            return;
          }
          // if no exact match, pick first reasonably matching tag (if present)
          if (searchData && searchData.length > 0) {
            setTagId(searchData[0].id);
            return;
          }
          // not found
          setError("Tag 'case studies' not found on this WordPress site.");
        }
      } catch (err) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to find tag");
      } finally {
        if (mounted) setLoadingTag(false);
      }
    }

    findTag();
    return () => (mounted = false);
  }, []);

  // 2) when tagId obtained, fetch posts with that tag
  useEffect(() => {
    if (!tagId) return;
    let mounted = true;
    setLoadingPosts(true);
    setError(null);

    async function loadPosts() {
      try {
        // fetch posts for this tag (per_page default set to 12)
        const res = await fetch(`${WP_BASE}/posts?_embed&per_page=12&tags=${tagId}`);
        if (!res.ok) throw new Error(`Failed to fetch posts (status ${res.status})`);
        const data = await res.json();
        if (mounted) setPosts(data);
      } catch (err) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to load posts");
      } finally {
        if (mounted) setLoadingPosts(false);
      }
    }

    loadPosts();
    return () => (mounted = false);
  }, [tagId]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* HERO */}
      <div className="relative rounded-b-2xl overflow-hidden mb-8" style={{ height: "340px" }}>
        <img src={HERO_IMG} alt="Case studies hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute left-8 bottom-8 text-white max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Case Studies</h1>
          <p className="mt-2 text-sm sm:text-base text-white/80 max-w-xl">
            Real results and deep dives — browse only posts tagged as <strong>Case Studies</strong>.
          </p>
        </div>
      </div>

      {/* Header & meta */}
      <div className="px-4 sm:px-6 mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold">Case Studies</h2>
          <p className="text-gray-600 mt-1">In-depth project writeups and results tagged as case studies.</p>
        </div>

        <div className="text-sm text-gray-500">
          {loadingTag ? "Resolving tag…" : tagId ? `Tag ID: ${tagId}` : "Tag not found"}
        </div>
      </div>

      {/* Body */}
      <div className="px-4 sm:px-6 pb-12">
        {error && (
          <div className="mb-6 text-red-600">
            {error}
          </div>
        )}

        {loadingPosts ? (
          <div className="min-h-[40vh] flex items-center justify-center text-gray-500">Loading posts…</div>
        ) : posts.length === 0 ? (
          <div className="min-h-[40vh] flex items-center justify-center text-gray-600">
            No case studies found.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const img =
                post._embedded &&
                post._embedded["wp:featuredmedia"] &&
                post._embedded["wp:featuredmedia"][0]
                  ? post._embedded["wp:featuredmedia"][0].source_url
                  : null;

              // find tag names for display (only those tags present on post)
              const terms = post._embedded && post._embedded["wp:term"] ? post._embedded["wp:term"].flat() : [];
              const postTags = terms.filter((t) => t.taxonomy === "post_tag");

              return (
                <article key={post.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
                  <div className="relative h-44">
                    {img ? (
                      <img src={img} alt={post.title.rendered} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">No image</div>
                    )}
                    {/* show "Case Studies" badge if present */}
                    {postTags.some(t => t.name.toLowerCase() === "case studies" || t.slug === "case-studies") && (
                      <span className="absolute left-4 top-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                        Case Study
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex flex-col h-full">
                    <h3 className="text-lg font-semibold mb-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.title.rendered) }} />

                    <p className="text-sm text-gray-600 mb-4 flex-grow">{excerptText(post.excerpt?.rendered || post.content?.rendered, 28)}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-gray-500">{formatDate(post.date)} • {estimateReadTime(post.content.rendered)}</div>
                      <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition">
                        Read case study
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
