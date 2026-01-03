import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

const WP_BASE = "https://blogs.mociber.com/wp-json/wp/v2";
const FALLBACK_IMG = "/images/blog-fallback.jpg";

export default function LatestBlogsByTag({ tag, limit = 2 }) {
  const [tagId, setTagId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ===============================
     1. Resolve TAG ID from slug
  =============================== */
  useEffect(() => {
    if (!tag) return;

    let mounted = true;

    async function resolveTag() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `${WP_BASE}/tags?slug=${encodeURIComponent(tag)}`
        );

        if (!res.ok) throw new Error("Failed to resolve tag");

        const data = await res.json();
        if (!data.length) {
          throw new Error(`Tag "${tag}" not found`);
        }

        if (mounted) setTagId(data[0].id);
      } catch (err) {
        if (mounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    resolveTag();
    return () => (mounted = false);
  }, [tag]);

  /* ===============================
     2. Fetch latest posts by TAG
  =============================== */
  useEffect(() => {
    if (!tagId) return;

    let mounted = true;

    async function fetchPosts() {
      try {
        const res = await fetch(
          `${WP_BASE}/posts?_embed&tags=${tagId}&per_page=${limit}&orderby=date&order=desc`
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
  }, [tagId, limit]);

  /* ===============================
     UI States
  =============================== */
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

  /* ===============================
     Render
  =============================== */
  return (
    <section className=" mx-auto  py-10">
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(post => {
          const image =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            FALLBACK_IMG;

          return (
            <article
              key={post.id}
              className="bg-[#151522] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition "
            >
              <Link to={`/blog/${post.slug}`}>
                <img
                  src={image}
                  alt={post.title.rendered}
                  className="w-full h-64 object-cover"
                />
              </Link>

              <div className="p-5 justify-between flex flex-col">
                <h3
                  className="text-base font-semibold text-white mb-2"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.title.rendered),
                  }}
                />

                {/* <p className="text-sm text-gray-600 mb-4">
                  {DOMPurify.sanitize(
                    post.excerpt?.rendered || "",
                    { ALLOWED_TAGS: [] }
                  )}
                </p> */}

                <Link
                  to={`/blog/${post.slug}`}
                  className="text-sm font-medium text-blue-600 hover:underline"
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
