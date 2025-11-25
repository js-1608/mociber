// PostsList.jsx
import React, { useEffect, useState } from "react";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const WP_BASE = "https://blogs.esyride.in//wp-json/wp/v2";

  useEffect(() => {
    async function load() {
      try {
        // _embed to get featured image data in the same response
        const res = await fetch(`${WP_BASE}/posts?_embed&per_page=10`);
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <div>Loading posts…</div>;
  if (!posts.length) return <div>No posts found.</div>;

  return (
    <div>
      {posts.map(post => {
        // featured image if present
        const img =
          post._embedded &&
          post._embedded['wp:featuredmedia'] &&
          post._embedded['wp:featuredmedia'][0] &&
          post._embedded['wp:featuredmedia'][0].source_url;
        return (
            <>
          <article key={post.id} style={{ marginBottom: 24 }}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            {img && <img src={img} alt={post.title.rendered} style={{ maxWidth: "100%" }} />}
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <a href={`/blog/${post.slug}`}>Read more</a>
          </article>
          </>
        );
      })}
    </div>
  );
}
