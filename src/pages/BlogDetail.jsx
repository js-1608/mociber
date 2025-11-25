import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

// Usage:
// 1) Add route: <Route path="/blog/:slug" element={<BlogDetail />} />
// 2) In the posts list use a link: <Link to={`/blog/${post.slug}`}>Read more</Link>
// 3) Set REACT_APP_WP_BASE in your .env (or edit WP_BASE below)

const WP_BASE = "https://blogs.esyride.in/wp-json/wp/v2";

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString();
  } catch (e) {
    return iso;
  }
}

function estimateReadTime(html) {
  const text = html ? html.replace(/<[^>]*>/g, "") : "";
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(null);

    fetch(`${WP_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed`)
      .then((r) => {
        if (!r.ok) throw new Error(`WP returned ${r.status}`);
        return r.json();
      })
      .then((arr) => {
        if (!arr || !arr.length) throw new Error("Post not found");
        setPost(arr[0]);
      })
      .catch((err) => setError(err.message || "Failed to load post"))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-gray-500">Loading post…</div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6">
        <div className="text-red-600 mb-4">{error}</div>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Go back
        </button>
      </div>
    );

  if (!post)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">No post found.</div>
    );

  // featured image
  const featured =
    post._embedded &&
    post._embedded["wp:featuredmedia"] &&
    post._embedded["wp:featuredmedia"][0]
      ? post._embedded["wp:featuredmedia"][0].source_url
      : null;

  const safeTitle = { __html: DOMPurify.sanitize(post.title.rendered) };
  const safeContent = { __html: DOMPurify.sanitize(post.content.rendered) };

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <header className="mb-8">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <div>{formatDate(post.date)}</div>
          <div>{estimateReadTime(post.content.rendered)}</div>
        </div>

        <h1
          className="text-3xl font-bold leading-tight mb-4"
          dangerouslySetInnerHTML={safeTitle}
        />

        {featured && (
          <div className="mb-6">
            <img
              src={featured}
              alt={post.title.rendered}
              className="w-full h-auto rounded shadow"
            />
          </div>
        )}

        {/* categories / tags (if present) */}
        <div className="flex flex-wrap gap-2 text-xs mb-4">
          {post._embedded && post._embedded["wp:term"] &&
            // wp:term contains arrays for categories & tags
            post._embedded["wp:term"].flat().map((t) => (
              <span
                key={t.id}
                className="px-2 py-1 bg-gray-100 rounded text-gray-700"
              >
                {t.name}
              </span>
            ))}
        </div>
      </header>

      <section className="prose max-w-none mb-12" dangerouslySetInnerHTML={safeContent} />

      <footer className="flex items-center justify-between">
        <Link to="/" className="text-sm text-gray-600 hover:underline">
          ← Back to home
        </Link>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-gray-600 hover:underline"
        >
          Back to top
        </button>
      </footer>
    </article>
  );
}
