import HeroBanner from "@/components/ServiceHero";
import React, { useEffect, useState } from "react";

const PLAYLIST_ID = "PL3HEfE6UXwE8t8fSIkpNpmWpLxs_X1P6n";
const API_KEY = "AIzaSyCWqXlKKULN9T_EA2_4x7sT71MeI1aiOl4";

const PlaylistVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      let allVideos = [];
      let nextPageToken = null;

      try {
        do {
          const url = new URL(
            "https://www.googleapis.com/youtube/v3/playlistItems"
          );

          url.searchParams.set("part", "snippet");
          url.searchParams.set("playlistId", PLAYLIST_ID);
          url.searchParams.set("maxResults", "50");
          url.searchParams.set("key", API_KEY);

          if (nextPageToken) {
            url.searchParams.set("pageToken", nextPageToken);
          }

          const res = await fetch(url);
          const data = await res.json();

          if (data.error) throw new Error(data.error.message);

          allVideos.push(...data.items);
          nextPageToken = data.nextPageToken;
        } while (nextPageToken);

        setVideos(allVideos);
      } catch (err) {
        setError(err.message || "Failed to load playlist");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylistVideos();
  }, []);

  if (loading)
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-lg">
        Loading videos…
      </div>
    );

  if (error)
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <section className="bg-[#020617] text-white py-20 mt-4 lg:mt-10">
       <HeroBanner
              image="/newbanners/video.png"
              heading={<></>}
              subtext=""
              primaryCta=""
              secondaryCta=""
            />

      <div className="max-w-7xl mx-auto px-6 mt-12">
        {/* ================= HEADER ================= */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Video Learning Playlist
          </h1>
          <p className="mt-3 text-slate-400 max-w-2xl">
            Watch all videos from this playlist. Click any video to open it
            directly on YouTube.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((item, index) => {
            const snippet = item.snippet;
            if (!snippet || !snippet.resourceId) return null;

            const videoId = snippet.resourceId.videoId;

            return (
              <a
                key={videoId}
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0b1220] rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative">
                  <img
                    src={snippet.thumbnails?.high?.url}
                    alt={snippet.title}
                    className="w-full aspect-video object-cover"
                  />

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-cyan-500/90 flex items-center justify-center">
                      ▶
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h3 className="text-sm md:text-base font-semibold leading-snug">
                    {snippet.title}
                  </h3>

                  <p className="text-xs text-slate-400">
                    Video {index + 1}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlaylistVideos;
