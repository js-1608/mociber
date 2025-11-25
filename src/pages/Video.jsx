// components/PodcastPlaylist.jsx
import React, { useEffect, useState } from "react";

export default function Videos({ playlistId }) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [activeVideo, setActiveVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!playlistId) return;
    setLoading(true);
    setError(null);
    fetch(`/api/playlist?playlistId=${encodeURIComponent(playlistId)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error.details || data.error);
        setItems(data.items || []);
      })
      .catch((e) => {
        console.error(e);
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
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Podcast Videos</h1>
            <p className="text-slate-600 mt-1">Auto-imported from the YouTube playlist.</p>
          </div>

          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title or description"
              className="rounded-md px-4 py-2 border border-slate-200 w-64"
            />
          </div>
        </header>

        {loading && <div className="text-sm text-slate-600">Loading playlist...</div>}
        {error && <div className="text-sm text-red-600">Error: {error}</div>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((it) => (
            <article key={it.videoId || it.id} className="bg-white rounded-2xl shadow overflow-hidden">
              <div className="relative">
                <img
                  src={it.thumbnails?.high?.url || it.thumbnails?.default?.url}
                  alt={it.title}
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/40 rounded-full p-3 pointer-events-auto">
                    <button
                      onClick={() => setActiveVideo(it.videoId)}
                      className="text-white text-lg font-medium px-3 py-2"
                    >
                      ▶
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
                <p className="text-sm text-slate-500 mt-1 line-clamp-3">{it.description}</p>
                <div className="mt-3 text-xs text-slate-400">{new Date(it.publishedAt).toLocaleDateString()}</div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && !loading && <div className="mt-8 text-center text-slate-600">No videos found.</div>}
      </div>

      {/* Player modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60" onClick={() => setActiveVideo(null)} />
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="YouTube Player"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-3 bg-slate-900 text-white text-right">
              <button onClick={() => setActiveVideo(null)} className="px-3 py-2 rounded bg-white/10">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
