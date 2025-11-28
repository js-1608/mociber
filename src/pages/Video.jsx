// src/components/PlaylistVideos.jsx
import React, { useEffect, useState } from "react";

export default function PlaylistVideos({ playlistId }) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!playlistId) return;
    setLoading(true);
    setError(null);

    fetch(`/api/playlist?playlistId=${encodeURIComponent(playlistId)}`)
      .then(async (res) => {
        const ct = res.headers.get("content-type") || "";
        if (!res.ok) {
          const txt = await res.text();
          throw new Error(`Server ${res.status}: ${txt.substring(0,400)}`);
        }
        if (!ct.includes("application/json")) {
          const txt = await res.text();
          throw new Error(`Expected JSON but got ${ct}. First chars: ${txt.slice(0,200)}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.error) throw new Error(data.error.details || data.error);
        setItems(data.items || []);
      })
      .catch((e) => {
        console.error("Fetch playlist error:", e);
        setError(e.message || "Failed to load playlist");
      })
      .finally(() => setLoading(false));
  }, [playlistId]);

  const filtered = items.filter((it) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (it.title || "").toLowerCase().includes(q) || (it.description || "").toLowerCase().includes(q);
  });

  return (
    <div className="p-6">
      <header className="mb-4">
        <h2 className="text-2xl font-bold">Playlist videos</h2>
        <p className="text-sm text-gray-600">Showing all videos for playlist: {playlistId}</p>
      </header>

      <div className="mb-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search title or description..."
          className="border px-3 py-2 rounded w-full max-w-md"
        />
      </div>

      {loading && <div className="text-sm text-gray-500">Loading...</div>}
      {error && <div className="text-sm text-red-600">Error: {error}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((it) => (
          <div key={it.videoId || it.id} className="bg-white shadow rounded overflow-hidden">
            <div className="relative">
              <img
                src={it.thumbnails?.high?.url || it.thumbnails?.default?.url}
                alt={it.title}
                className="w-full h-40 object-cover"
              />
              <button
                onClick={() => setActive(it.videoId)}
                className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center"
                aria-label="Play"
              >
                ▶
              </button>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-sm">{it.title}</h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-3">{it.description}</p>
              <div className="text-xs text-gray-400 mt-2">{new Date(it.publishedAt).toLocaleDateString()}</div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && !loading && <div className="mt-6 text-gray-600">No videos found.</div>}

      {/* Modal player */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60" onClick={() => setActive(null)} />
          <div className="relative w-full max-w-3xl bg-black rounded overflow-hidden">
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                title="player"
                src={`https://www.youtube.com/embed/${active}?autoplay=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", width: "100%", height: "100%", left: 0, top: 0 }}
              />
            </div>
            <div className="p-2 text-right bg-gray-900">
              <button onClick={() => setActive(null)} className="px-3 py-1 rounded bg-white/10 text-white">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
// https://www.youtube.com/playlist?list=PL3HEfE6UXwE8t8fSIkpNpmWpLxs_X1P6n