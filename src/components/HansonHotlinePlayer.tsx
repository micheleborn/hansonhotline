import { useEffect, useRef, useState } from "react"

const AUDIO_URL =
  "https://micheborn.wordpress.com/wp-content/uploads/2018/05/12-20-99.mp3"

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00"

  const minutes = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)

  return `${minutes}:${String(secs).padStart(2, "0")}`
}

const waveform = [
  18, 30, 22, 44, 28, 54, 36, 24, 42, 60,
  32, 48, 26, 64, 40, 22, 54, 36, 28, 46,
  32, 58, 40, 24, 50, 34, 22, 44, 60, 30,
  48, 36, 24, 52, 38, 22, 46, 56, 32, 42,
  28, 52, 34, 22, 46, 60, 36, 28, 50, 38,
  24, 44, 54, 30, 40, 26, 48, 34, 22, 44,
]

export default function HansonHotlinePlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(60)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onLoadedMetadata = () => {
      if (Number.isFinite(audio.duration)) {
        setDuration(audio.duration)
      }
    }

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const onEnded = () => {
      setIsPlaying(false)
    }

    audio.addEventListener("loadedmetadata", onLoadedMetadata)
    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("ended", onEnded)

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata)
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("ended", onEnded)
    }
  }, [])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (audio.paused) {
        await audio.play()
        setIsPlaying(true)
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    } catch {
      setIsPlaying(false)
    }
  }

  const seek = (value: number) => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = value
    setCurrentTime(value)
  }

  const progressPct =
    duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0

  return (
    <>
      <audio ref={audioRef} src={AUDIO_URL} preload="metadata" />

    <div className="mx-auto max-w-[870px] rounded-[34px] bg-black px-8 py-8 text-white md:px-12 md:py-10">
        {/* Top row */}
        <div className="flex items-center justify-between gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c98652]">
            Featured audio
          </p>

          <span className="rounded-full bg-[#fcf9be] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-black/65">
            Archive audio
          </span>
        </div>

        {/* Recording info */}
        <div className="mt-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
            Hotline recording
          </p>

          <h2 className="mt-3 text-[clamp(34px,4vw,52px)] font-medium tracking-[-0.045em] text-white">
            December 20, 1999
          </h2>
        </div>

        {/* Player */}
        <div className="mt-12 flex items-center gap-6">

          <button
            type="button"
            onClick={toggle}
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:bg-[#ffc000]"
          >
            {isPlaying ? (
              <span className="text-xl leading-none">Ⅱ</span>
            ) : (
              <span className="ml-[2px] text-xl leading-none">▶</span>
            )}
          </button>

          <div className="min-w-0 flex-1">
            <div className="relative h-16">

          <div className="absolute inset-0 flex items-center gap-[3px]">
  {waveform.map((height, index) => {
    const barPct =
      (index / Math.max(waveform.length - 1, 1)) * 100

    const played = barPct <= progressPct

    return (
      <span
        key={index}
        className={[
          "min-w-[2px] flex-1 rounded-full transition-colors",
          played ? "bg-[#ffc000]" : "bg-white/20",
        ].join(" ")}
        style={{
          height: `${height}%`,
        }}
      />
    )
  })}
</div>

              <input
                type="range"
                min="0"
                max={duration || 0}
                step="0.1"
                value={currentTime}
                onChange={(e) => seek(Number(e.target.value))}
                aria-label="Audio progress"
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
            </div>

            <div className="mt-3 flex justify-between text-[11px] font-medium tabular-nums text-white/40">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}