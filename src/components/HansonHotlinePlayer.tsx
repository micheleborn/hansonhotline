import { useEffect, useRef, useState } from "react";

const AUDIO_URL = "https://hansonhotline.com/audio/hansonhotline-12-20-99.mp3";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function HansonHotlinePlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(60); // fallback until metadata loads

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoadedMetadata = () => {
      if (Number.isFinite(audio.duration)) setDuration(audio.duration);
    };

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);

    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  const progressPct =
    duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <>
      <audio ref={audioRef} src={AUDIO_URL} preload="metadata" />

      <div className="mt-5 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
        <button
          type="button"
          onClick={toggle}
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        <div className="relative h-[3px] flex-1 rounded-full bg-white/10">
          <div
            className="absolute left-0 top-0 h-[3px] rounded-full bg-[#ec7d33]"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <span className="text-sm text-white/50">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
    </>
  );
}