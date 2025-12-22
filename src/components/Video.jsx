// import React from "react";
// const SAMPLE_VIDEO_IFRAME = "https://player.vimeo.com/video/76979871?autoplay=1"; // replace with your URL
// import { useState,useEffect } from "react";
// const Video = () => {
//     const [open, setOpen] = useState(false);

//     useEffect(() => {
//         function onKey(e) {
//             if (e.key === "Escape") setOpen(false);
//         }
//         window.addEventListener("keydown", onKey);
//         return () => window.removeEventListener("keydown", onKey);
//     }, []);
//     return (
//         <section className="py-16 px-6 bg-linear-to-b from-[#0c1b34] to-[#000A1F]">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center md:text-left mb-8">

//                     {/* <h2 className="mt-4 text-3xl md:text-4xl font-extrabold ">
//                             Realizing Growth with <span className="text-[#7A3EFF]">Security Partnerships</span>
//                         </h2> */}
//                     <p className="mt-3 text-center">
//                         Watch our CEO discuss how deep technology partnerships accelerate secure growth — real customer stories, practical insights, and tactical takeaways.
//                     </p>
//                 </div>

//                 {/* Video Card */}
//                 <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
//                     {/* Background thumbnail (replace URL with your thumbnail) */}
//                     <div
//                         className="w-full h-[420px] md:h-[520px] bg-cover bg-center"
//                         style={{
//                             backgroundImage:
//                                 "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0c9be52a23f9b86a5a6e06b8c0242c89')",
//                         }}
//                         aria-hidden
//                     />

//                     {/* Gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent mix-blend-multiply" />

//                     {/* Decorative top-left speaker badge */}
//                     <div className="absolute left-6 top-6 md:left-10 md:top-8 flex items-center gap-4">
//                         <div className="bg-white/10 rounded-md px-3 py-2 text-white text-xs md:text-sm">
//                             Mohsin  <span className="font-bold ml-1">Margoob</span>
//                         </div>
//                         <div className="text-xs text-white/80 bg-white/6 px-2 py-1 rounded">Founder & CEO</div>
//                     </div>

//                     {/* Caption bar (bottom) */}
//                     <div className="absolute left-0 right-0 bottom-0 p-5 md:p-8">
//                         <div className="max-w-5xl mx-auto">
//                             {/* Play / Info row */}
//                             <div className="flex items-center justify-between md:items-end gap-4">
//                                 {/* Play button + label */}
//                                 <div className="flex items-center gap-4">
//                                     <button
//                                         onClick={() => setOpen(true)}
//                                         className="relative flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-5 py-3 rounded-full shadow-lg transform transition hover:-translate-y-0.5"
//                                         aria-label="Play video"
//                                     >
//                                         <span className="w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center text-lg font-bold shadow-sm">
//                                             ▶
//                                         </span>
//                                         <div className="text-left">
//                                             <div className="text-sm font-semibold">Watch interview</div>
//                                             <div className="text-xs text-white/80">3:07 • CEO Interview</div>
//                                         </div>
//                                     </button>

//                                     {/* small CTA */}
//                                     <button
//                                         onClick={() => alert("Navigate to case study")}
//                                         className="hidden md:inline-flex items-center gap-2 text-sm text-white/90 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
//                                     >
//                                         View case study →
//                                     </button>
//                                 </div>

//                                 {/* Right: subtle metadata */}
//                                 <div className="text-sm text-white/80 hidden md:flex flex-col items-end">
//                                     <span>Interview • Growth & Security</span>
//                                     <span className="text-xs mt-1">Published: Jan 03, 2025</span>
//                                 </div>
//                             </div>

//                             {/* mock caption text with progress accent */}
//                             <div className="mt-4 bg-black/50 p-3 rounded-md text-white/90">
//                                 <div className="text-sm md:text-base leading-snug">
//                                     “The data is growing, the infrastructure is growing, customers are being more aggressive in terms of cloud adoption...”
//                                 </div>
//                                 {/* 
//                                     <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
//                                         <div className="h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full w-[32%] animate-[progress_6s_linear_infinite]" />
//                                     </div> */}
//                             </div>
//                         </div>
//                     </div>

//                     {/* top-right floating action */}
//                     <div className="absolute right-6 top-6 hidden md:block">
//                         <div className="bg-white/6 px-3 py-2 rounded-lg text-white text-sm">Case Study</div>
//                     </div>
//                 </div>
//             </div>

//             {/* Modal */}
//             {open && (
//                 <div
//                     className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
//                     role="dialog"
//                     aria-modal="true"
//                 >
//                     <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
//                         <button
//                             onClick={() => setOpen(false)}
//                             className="absolute right-3 top-3 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full w-9 h-9 flex items-center justify-center"
//                             aria-label="Close video"
//                         >
//                             ✕
//                         </button>

//                         {/* responsive iframe */}
//                         <iframe
//                             title="CEO Interview"
//                             src={SAMPLE_VIDEO_IFRAME}
//                             className="w-full h-full"
//                             frameBorder="0"
//                             allow="autoplay; fullscreen"
//                             allowFullScreen
//                         />
//                     </div>
//                 </div>
//             )}

//             <style>{`
//                     @keyframes progress {
//                     0% { width: 0% }
//                     50% { width: 50% }
//                     100% { width: 30% }
//                     }
//                     .animate-[progress_6s_linear_infinite] {
//                     animation: progress 6s linear infinite;
//                     }
//                 `}</style>
//         </section>
//     )
// }
// export default Video;


"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * YouTubeAutoplaySection
 * - props.videoId (string) e.g. "OwHwUwBJrf0"
 *
 * Usage: <YouTubeAutoplaySection videoId="OwHwUwBJrf0" />
 */
export default function YouTubeAutoplaySection({ videoId = "OwHwUwBJrf0" }) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const playerReadyRef = useRef(false);
  const intervalRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true); // start muted so autoplay will work
  const [progress, setProgress] = useState(0); // 0..1
  const [duration, setDuration] = useState(0);

  // Load YT IFrame API if not loaded
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
  }, []);

  // Initialize player when YT API ready
  useEffect(() => {
    let mounted = true;

    function createPlayer() {
      if (!mounted) return;
      if (!window.YT || playerRef.current) return;

      playerRef.current = new window.YT.Player(`yt-player-${videoId}`, {
        videoId,
        playerVars: {
          autoplay: 0, // we'll control play programmatically
          controls: 0, // hide native controls (we provide custom)
          rel: 0,
          modestbranding: 1,
          enablejsapi: 1,
          playsinline: 1,
          mute: 1 // ensure initial muted state
        },
        events: {
          onReady: (event) => {
            playerReadyRef.current = true;
            // ensure muted initially so autoplay works in most browsers
            try { event.target.mute(); } catch (e) {}
            setMuted(true);
            // capture duration if available
            const dur = event.target.getDuration();
            if (dur) setDuration(dur);
          },
          onStateChange: (e) => {
            const YT = window.YT;
            if (!YT) return;
            if (e.data === YT.PlayerState.PLAYING) {
              setPlaying(true);
              setDuration(playerRef.current.getDuration() || 0);
              startProgressTicker();
            } else {
              setPlaying(false);
              stopProgressTicker();
            }
          }
        }
      });
    }

    // If API already loaded, create immediately; otherwise wait for global callback
    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      // Attach global callback expected by YouTube API
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () {
        if (prev) prev();
        createPlayer();
      };
    }

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  // IntersectionObserver: autoplay when in view, pause when out
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting && entry.intersectionRatio > 0.5;
          // require ~50% visible before autoplay
          if (isVisible) {
            // start (muted) to satisfy autoplay policies
            if (playerReadyRef.current && playerRef.current) {
              try {
                playerRef.current.mute(); // mute to allow autoplay
                setMuted(true);
                playerRef.current.playVideo();
              } catch (e) {
                // ignore
              }
            }
          } else {
            if (playerReadyRef.current && playerRef.current) {
              try {
                playerRef.current.pauseVideo();
              } catch (e) {}
            }
          }
        });
      },
      { threshold: [0.5] }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Progress ticker to update current time -> progress
  const startProgressTicker = () => {
    stopProgressTicker();
    intervalRef.current = setInterval(() => {
      if (playerRef.current && playerReadyRef.current) {
        try {
          const t = playerRef.current.getCurrentTime();
          const d = playerRef.current.getDuration() || duration || 0;
          setDuration(d);
          if (d > 0) setProgress(Math.min(1, Math.max(0, t / d)));
        } catch (e) {}
      }
    }, 500);
  };
  const stopProgressTicker = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Manual controls
  const handleTogglePlay = () => {
    if (!playerReadyRef.current || !playerRef.current) return;
    const YT = window.YT;
    try {
      const state = playerRef.current.getPlayerState();
      if (state === (YT ? YT.PlayerState.PLAYING : 1)) {
        playerRef.current.pauseVideo();
      } else {
        // If currently muted and user hit play, that's a user interaction and should allow unmute later
        playerRef.current.playVideo();
      }
    } catch (e) {}
  };

  const handleToggleMute = () => {
    if (!playerReadyRef.current || !playerRef.current) return;
    try {
      if (muted) {
        playerRef.current.unMute();
        setMuted(false);
        // unmute is user-initiated — browsers allow sound once user interacted
      } else {
        playerRef.current.mute();
        setMuted(true);
      }
    } catch (e) {}
  };

  // allow clicking progress bar to seek
  const handleSeek = (e) => {
    if (!playerReadyRef.current || !playerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, x / rect.width));
    const targetTime = (playerRef.current.getDuration() || duration || 0) * pct;
    try {
      playerRef.current.seekTo(targetTime, true);
      setProgress(pct);
    } catch (err) {}
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      stopProgressTicker();
      try {
        if (playerRef.current) {
          playerRef.current.destroy();
          playerRef.current = null;
        }
      } catch (e) {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // small helper icons (inline svg) — swap or style as you like
  const PlayIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
  const PauseIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
  const SoundOn = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2c0-1.77-.77-3.37-2-4.47v8.94c1.23-1.1 2-2.7 2-4.47z" />
    </svg>
  );
  const SoundOff = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.5 12c0-1.77-.77-3.37-2-4.47v8.94c1.23-1.1 2-2.7 2-4.47zM3 9v6h4l5 5V4L7 9H3zM21 4.27L19.73 3 12 10.73 4.27 3 3 4.27 10.73 12 3 19.73 4.27 21 12 13.27 19.73 21 21 19.73 13.27 12 21 4.27z" />
    </svg>
  );

  return (
    <section
      ref={containerRef}
      className="relative max-w-6xl mx-auto my-2 lg:my-24 rounded-2xl overflow-hidden bg-slate-900/60"
      aria-label="Autoplay video section"
    >
      {/* Iframe placeholder controlled by YT API */}
      <div className="relative" style={{ paddingTop: "46.25%" /* 16:9 */ }}>
        <div
          id={`yt-player-${videoId}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Overlay controls */}
      <div
        className="absolute bottom-4 left-4 right-4 flex items-center gap-4 pointer-events-none"
        aria-hidden="true"
      >
        {/* Play/Pause */}
        <button
          onClick={handleTogglePlay}
          aria-pressed={playing}
          aria-label={playing ? "Pause video" : "Play video"}
          className="pointer-events-auto bg-black/60 text-white p-2 rounded-md hover:bg-black/70 focus:outline-none"
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>

        {/* Mute toggle */}
        <button
          onClick={handleToggleMute}
          aria-pressed={!muted}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="pointer-events-auto bg-black/60 text-white p-2 rounded-md hover:bg-black/70 focus:outline-none"
        >
          {muted ? <SoundOff /> : <SoundOn />}
        </button>

        {/* Progress bar (seekable) */}
        <div
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          onClick={handleSeek}
          className="pointer-events-auto flex-1 h-2 rounded bg-white/20 cursor-pointer"
          style={{ position: "relative" }}
        >
          <div
            style={{
              width: `${progress * 100}%`,
              height: "100%",
              background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
            }}
          />
        </div>

        {/* Time label */}
        <div className="text-xs text-white/90 pointer-events-none ml-3">
          {formatTime(progress * (duration || 0))} / {formatTime(duration || 0)}
        </div>
      </div>
    </section>
  );
}

// small helper to format seconds -> mm:ss
function formatTime(sec = 0) {
  if (!sec || isNaN(sec)) return "0:00";
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  const m = Math.floor(sec / 60).toString();
  return `${m}:${s}`;
}
