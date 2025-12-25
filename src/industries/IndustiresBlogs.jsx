import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

/*
  LatestBlogs.jsx
  - Reusable WP latest blog fetcher by CATEGORY
  - category = category slug (e.g. "industries", "startup", "air-defense")
  - limit = number of latest posts
*/

const WP_BASE = "https://blogs.esyride.in/wp-json/wp/v2";
const FALLBACK_IMG = "/mnt/data/8e321088-9348-4be6-910b-3ab5e1f949e4.png";

/* ================= Helpers ================= */

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

function estimateReadTime(html = "") {
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function excerptText(html = "", maxWords = 22) {
  const clean = DOMPurify.sanitize(html || "", { ALLOWED_TAGS: [] });
  const words = clean.split(/\s+/).filter(Boolean);
  return words.length <= maxWords
    ? clean
    : words.slice(0, maxWords).join(" ") + "...";
}

/* ================= Component ================= */

export default function IndustiresBlogs({
  category,
  limit = 2,
  title,
  description,
}) {
  const [categoryId, setCategoryId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ========== Resolve Category ID from slug ========== */
  useEffect(() => {
    if (!category) return;

    let mounted = true;

    async function resolveCategory() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `${WP_BASE}/categories?slug=${encodeURIComponent(category)}`
        );

        if (!res.ok) throw new Error("Failed to resolve category");

        const data = await res.json();
        if (!data.length) {
          throw new Error(`Category "${category}" not found`);
        }

        if (mounted) setCategoryId(data[0].id);
      } catch (err) {
        if (mounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    resolveCategory();
    return () => (mounted = false);
  }, [category]);

  /* ========== Fetch Latest Posts ========== */
  useEffect(() => {
    if (!categoryId) return;

    let mounted = true;

    async function fetchPosts() {
      try {
        const res = await fetch(
          `${WP_BASE}/posts?_embed&categories=${categoryId}&per_page=${limit}&orderby=date&order=desc`
        );

        if (!res.ok) throw new Error("Failed to fetch posts");

        const data = await res.json();
        if (mounted) setPosts(data);
      } catch (err) {
        if (mounted) setError(err.message);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchPosts();
    return () => (mounted = false);
  }, [categoryId, limit]);

  /* ================= UI States ================= */

  if (loading) {
    return (
      <div className="py-8 text-center text-slate-400">
        Loading latest blogs…
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-6 text-red-500 text-sm">
        {error}
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="py-6 text-slate-500 text-sm">
        No blogs available.
      </div>
    );
  }

  /* ================= Render ================= */

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Optional Header */}
      {(title || description) && (
        <div className="mb-8">
          {title && (
            <h2 className="text-3xl font-bold text-white">{title}</h2>
          )}
          {description && (
            <p className="mt-2 text-slate-400 max-w-2xl">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(post => {
          const img =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            FALLBACK_IMG;

          return (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <Link to={`/blog/${post.slug}`}>
                <img
                  src={img}
                  alt={post.title.rendered}
                  className="w-full h-48 object-cover"
                />
              </Link>

              <div className="p-5">
                <h3
                  className="text-lg font-semibold text-black leading-snug mb-2"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.title.rendered),
                  }}
                />

                <p className="text-sm text-gray-600 mb-4">
                  {excerptText(
                    post.excerpt?.rendered || post.content?.rendered
                  )}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{formatDate(post.date)}</span>
                  <span>{estimateReadTime(post.content?.rendered)}</span>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-block mt-4 text-sm font-medium text-blue-700 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
