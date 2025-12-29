// // PostsList.jsx
// import React, { useEffect, useState } from "react";

// export default function Blogs() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const WP_BASE = "https://blogs.esyride.in//wp-json/wp/v2";

//   useEffect(() => {
//     async function load() {
//       try {
//         // _embed to get featured image data in the same response
//         const res = await fetch(`${WP_BASE}/posts?_embed&per_page=10`);
//         if (!res.ok) throw new Error("Failed to fetch posts");
//         const data = await res.json();
//         setPosts(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     load();
//   }, []);

//   if (loading) return <div>Loading posts…</div>;
//   if (!posts.length) return <div>No posts found.</div>;

//   return (
//     <div>
//       {posts.map(post => {
//         // featured image if present
//         const img =
//           post._embedded &&
//           post._embedded['wp:featuredmedia'] &&
//           post._embedded['wp:featuredmedia'][0] &&
//           post._embedded['wp:featuredmedia'][0].source_url;
//         return (
//             <>
//           <article key={post.id} style={{ marginBottom: 24 }}>
//             <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
//             {img && <img src={img} alt={post.title.rendered} style={{ maxWidth: "100%" }} />}
//             <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
//             <a href={`/blog/${post.slug}`}>Read more</a>
//           </article>
//           </>
//         );
//       })}
//     </div>
//   );
// }


// PostsList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

/*
  Notes:
  - Tailwind CSS required for styles.
  - Install DOMPurify: npm i dompurify
  - Set REACT_APP_WP_BASE in .env, e.g.
      REACT_APP_WP_BASE=https://blogs.esyride.in/wp-json/wp/v2
  - This component uses the local hero image uploaded by you:
      /mnt/data/ff22191b-2e62-4d1f-b59b-6a038f7dbfbb.png
*/

const WP_BASE = "https://blogs.esyride.in/wp-json/wp/v2";
const HERO_IMG = "./newbanners/Blog Banner.png"; // replace with your uploaded image path

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
  // sanitize and remove tags
  const clean = DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
  const arr = clean.split(/\s+/).filter(Boolean);
  if (arr.length <= maxWords) return clean;
  return arr.slice(0, maxWords).join(" ") + "...";
}

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [cats, setCats] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [loadingCats, setLoadingCats] = useState(true);
  const [error, setError] = useState(null);
  const [activeCat, setActiveCat] = useState(0); // 0 = All

  // Fetch categories
  useEffect(() => {
    let mounted = true;
    async function loadCats() {
      try {
        setLoadingCats(true);
        const res = await fetch(`${WP_BASE}/categories?per_page=50`);
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        if (!mounted) return;
        // sort categories by count or name if desired
        const sorted = data.sort((a, b) => b.count - a.count);
        setCats(sorted);
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setLoadingCats(false);
      }
    }
    loadCats();
    return () => (mounted = false);
  }, []);

  // Fetch posts (optionally by category)
  useEffect(() => {
    let mounted = true;
    async function loadPosts() {
      setLoadingPosts(true);
      setError(null);
      try {
        const catParam = activeCat && activeCat !== 0 ? `&categories=${activeCat}` : "";
        const res = await fetch(`${WP_BASE}/posts?_embed&per_page=12${catParam}`);
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        if (!mounted) return;
        setPosts(data);
      } catch (err) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to load posts");
      } finally {
        if (mounted) setLoadingPosts(false);
      }
    }
    loadPosts();
    return () => (mounted = false);
  }, [activeCat]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* HERO */}
      {/* <div
        className="relative rounded-b-2xl overflow-hidden mb-8 mt-28"
        style={{ height: "340px", backgroundColor: "#111" }}
        aria-hidden
      >
        <img src={HERO_IMG} alt="Blog hero" className="w-full h-full object-cover opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute left-8 bottom-8 text-white max-w-2xl">
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full inline-block mb-3">Destination</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Exploring the Wonders of Hiking</h1>
          <p className="mt-2 text-sm sm:text-base text-white/80 max-w-xl">An iconic landmark, this post unveils the secrets that make this destination a traveler's paradise.</p>

          <div className="mt-4 flex items-center gap-3 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <img src="https://via.placeholder.com/40" alt="author" className="w-8 h-8 rounded-full" />
              <div>
                <div className="text-white font-medium text-sm">Theodore Reginald</div>
                <div className="text-xs">24 Jan 2024 • 10 mins read</div>
              </div>
            </div>
            <div className="ml-4 text-xs bg-white/10 px-3 py-1 rounded-full">•••</div>
          </div>
        </div>
      </div> */}
              <img src={HERO_IMG} alt="Blog hero" className="w-full h-full object-cover opacity-95" />


      {/* Page header & filters */}
      <div className="px-4 sm:px-6 mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-12">
        <div>
          <h2 className="text-2xl font-extrabold">Blog</h2>
          {/* <p className="text-gray-600 mt-1">Here, we share travel tips, destination guides, and stories that inspire your next adventure.</p> */}
        </div>

        <div className="flex items-center gap-4">
          {/* Category chips */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveCat(0)}
              className={`px-3 py-1 text-sm rounded-full transition ${activeCat === 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
            >
              All
            </button>

            {loadingCats ? (
              <div className="text-sm text-gray-500 px-3">Loading categories…</div>
            ) : (
              cats.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCat(c.id)}
                  className={`px-3 py-1 text-sm rounded-full transition ${activeCat === c.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                >
                  {c.name}
                </button>
              ))
            )}
          </div>

          {/* Sort select (simple) */}
          {/* <select
            onChange={(e) => {
              const val = e.target.value;
              if (val === "newest") setActiveCat((s) => s); 
            }}
            className="text-sm border rounded px-3 py-1 bg-white"
            defaultValue="newest"
          >
            <option value="newest">Sort: Newest</option>
            <option value="oldest">Sort: Oldest</option>
          </select> */}
        </div>
      </div>

      {/* Posts grid */}
      <div className="px-4 sm:px-6 pb-12">
        {loadingPosts ? (
          <div className="min-h-[40vh] flex items-center justify-center text-gray-500">Loading posts…</div>
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : posts.length === 0 ? (
          <div className="min-h-[40vh] flex items-center justify-center">No posts found.</div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const img =
                post._embedded &&
                  post._embedded["wp:featuredmedia"] &&
                  post._embedded["wp:featuredmedia"][0]
                  ? post._embedded["wp:featuredmedia"][0].source_url
                  : null;

              // WP returns terms in _embedded['wp:term'] as arrays; flatten to find first category name
              const terms = post._embedded && post._embedded["wp:term"] ? post._embedded["wp:term"].flat() : [];
              const primaryCat = terms.find((t) => t.taxonomy === "category") || null;

              return (
                <article key={post.id} className="bg-white/10 rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
                  <div className=" h-44">
                    {img ? (
                      <img src={img} alt={post.title.rendered} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">No image</div>
                    )}
                    {primaryCat && (
                      <span className="absolute left-4 top-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                        {primaryCat.name}
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex flex-col ">
                    <h3 className="text-lg font-semibold mb-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.title.rendered) }} />

                    <p className="text-sm text-gray-600 flex-grow">{excerptText(post.excerpt.rendered || post.content.rendered, 28)}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-gray-500">{formatDate(post.date)} • {estimateReadTime(post.content.rendered)}</div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition"
                        dangerouslySetInnerHTML={null}
                      >
                        <span>Read more</span>
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
