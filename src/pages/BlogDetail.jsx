// BlogDetailWithSidebar.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

/*
  Notes:
  - Tailwind CSS required.
  - Install DOMPurify: npm i dompurify
  - Set WP_BASE or edit the constant below.
  - The developer-provided fallback image path is used for cards without featured image:
      /mnt/data/f7c8ca9b-cbbe-423f-a1d4-b163c032edb5.png
*/

const WP_BASE = "https://blogs.mociber.com/wp-json/wp/v2";
const FALLBACK_IMG = "/mnt/data/f7c8ca9b-cbbe-423f-a1d4-b163c032edb5.png";

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

export default function BlogDetailWithSidebar() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loadingPost, setLoadingPost] = useState(true);
  const [errorPost, setErrorPost] = useState(null);

  const [sidebarPosts, setSidebarPosts] = useState([]);
  const [loadingSidebar, setLoadingSidebar] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoadingPost(true);
    setErrorPost(null);

    fetch(`${WP_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed`)
      .then((r) => {
        if (!r.ok) throw new Error(`WP returned ${r.status}`);
        return r.json();
      })
      .then((arr) => {
        if (!arr || !arr.length) throw new Error("Post not found");
        setPost(arr[0]);
      })
      .catch((err) => setErrorPost(err.message || "Failed to load post"))
      .finally(() => setLoadingPost(false));
  }, [slug]);

  // fetch recent posts for sidebar; refetch when main post loads so we can exclude it
  useEffect(() => {
    let mounted = true;
    setLoadingSidebar(true);
    fetch(`${WP_BASE}/posts?_embed&per_page=8`)
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch sidebar posts");
        return r.json();
      })
      .then((data) => {
        if (!mounted) return;
        // exclude current post if present
        const filtered = post ? data.filter((p) => p.id !== post.id) : data;
        setSidebarPosts(filtered.slice(0, 6));
      })
      .catch((err) => {
        console.error(err);
        if (mounted) setSidebarPosts([]);
      })
      .finally(() => {
        if (mounted) setLoadingSidebar(false);
      });
    return () => (mounted = false);
  }, [post]); // dependency on post so we can exclude it

  if (loadingPost)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-gray-500">Loading post…</div>
      </div>
    );

  if (errorPost)
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6">
        <div className="text-red-600 mb-4">{errorPost}</div>
        <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-800 text-white rounded">
          Go back
        </button>
      </div>
    );

  if (!post)
    return <div className="min-h-[60vh] flex items-center justify-center">No post found.</div>;

  // featured image for main post
  const featured =
    post._embedded &&
    post._embedded["wp:featuredmedia"] &&
    post._embedded["wp:featuredmedia"][0]
      ? post._embedded["wp:featuredmedia"][0].source_url
      : null;

  // collect taxonomy terms (categories/tags) if available
  const terms = post._embedded && post._embedded["wp:term"] ? post._embedded["wp:term"].flat() : [];
  const categories = terms.filter((t) => t.taxonomy === "category");

  const safeTitle = { __html: DOMPurify.sanitize(post.title.rendered) };
  const safeContent = { __html: DOMPurify.sanitize(post.content.rendered) };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 lg:px-8  mt-8 lg:mt-16">
      {/* breadcrumb / small meta */}
      <div className="text-sm text-gray-500 mb-6">
        <Link to="/blog" className="hover:underline">Blog</Link> <span className="mx-2">/</span> <span className="text-gray-700">Blog Details</span>
      </div>

      {/* Two-column layout: left sidebar (cards) + main content */}
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
        {/* LEFT: Sidebar with recent posts (cards) */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl shadow p-4">
            <h4 className="text-lg text-black font-semibold mb-3">Recent posts</h4>

            {loadingSidebar ? (
              <div className="text-gray-500">Loading…</div>
            ) : sidebarPosts.length === 0 ? (
              <div className="text-gray-500">No posts available</div>
            ) : (
              <ul className="space-y-4">
                {sidebarPosts.map((p) => {
                  const pImg =
                    p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0]
                      ? p._embedded["wp:featuredmedia"][0].source_url
                      : FALLBACK_IMG;
                  // excerpt sanitize and trim
                  const excerpt = DOMPurify.sanitize(p.excerpt?.rendered || p.content?.rendered || "", { ALLOWED_TAGS: [] })
                    .split(/\s+/)
                    .slice(0, 20)
                    .join(" ") + "...";

                  return (
                    <li key={p.id} className="flex items-start gap-3">
                      <Link to={`/blog/${p.slug}`} className="block w-20 h-16 rounded overflow-hidden flex-shrink-0">
                        <img src={pImg} alt={p.title.rendered} className="w-full h-full object-cover" />
                      </Link>
                      <div className="flex-1">
                        <Link to={`/blog/${p.slug}`} className="text-sm font-medium hover:underline text-black" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(p.title.rendered) }} />
                        <div className="text-xs text-gray-500 mt-1">{formatDate(p.date)} • {estimateReadTime(p.content.rendered)}</div>
                        <p className="text-xs text-gray-600 mt-2">{excerpt}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* optional: categories list */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h4 className="text-lg font-semibold mb-3 text-black">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.length ? (
                categories.map((c) => (
                  <span key={c.id} className="px-3 py-1 text-xs bg-gray-300 rounded-full text-gray-700">{c.name}</span>
                ))
              ) : (
                <div className="text-sm text-gray-500">No categories</div>
              )}
            </div>
          </div>

          {/* optional: share / CTA */}
          {/* <div className="bg-white rounded-2xl shadow p-4 text-center">
            <div className="text-sm font-semibold mb-2">Enjoying this post?</div>
            <Link to="/subscribe" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700">Subscribe</Link>
          </div> */}
        </aside>

        {/* RIGHT: Main post content */}
        <main>
          {/* main featured image */}
          {featured && (
            <div className="rounded-lg overflow-hidden mb-6 shadow">
              <img src={featured} alt={post.title.rendered} className="w-full h-64 object-cover" />
            </div>
          )}

          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3" dangerouslySetInnerHTML={safeTitle} />
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-3">
                <div className="text-xs">{formatDate(post.date)}</div>
                <div className="text-xs">•</div>
                <div className="text-xs">{estimateReadTime(post.content.rendered)}</div>
              </div>
              <div className="text-sm">
                {/* simple share icons (placeholder) */}
                <button className="px-2 py-1 rounded text-gray-600 hover:bg-gray-100">Share</button>
              </div>
            </div>

            {/* categories */}
            <div className="flex gap-2 flex-wrap mb-2">
              {categories.map((c) => (
                <span key={c.id} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">{c.name}</span>
              ))}
            </div>
          </header>

          <article className="prose max-w-none mb-8" dangerouslySetInnerHTML={safeContent} />

          <footer className="flex items-center justify-between mt-8">
            <Link to="/blog" className="text-sm text-gray-600 hover:underline">← Back to blog</Link>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-sm text-gray-600 hover:underline">Back to top</button>
          </footer>
        </main>
      </div>
    </div>
  );
}
