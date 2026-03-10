import { useEffect, useMemo, useRef } from "react"

type Props = {
  years: string[]
  activeYear: string
  onPickYear: (y: string) => void
}

export default function YearRail({ years, activeYear, onPickYear }: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  // (Optional) helps avoid findIndex every render if you expand later
  const activeIndex = useMemo(() => {
    const idx = years.indexOf(activeYear)
    return idx === -1 ? 0 : idx
  }, [years, activeYear])

  // Keep active year centered-ish when it changes
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const target = el.querySelector<HTMLButtonElement>(
      `button[data-year="${activeYear}"]`
    )
    if (!target) return
    target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
  }, [activeYear])

  const goPrev = () => {
    const nextIdx = Math.max(activeIndex - 1, 0)
    onPickYear(years[nextIdx])
  }

  const goNext = () => {
    const nextIdx = Math.min(activeIndex + 1, years.length - 1)
    onPickYear(years[nextIdx])
  }

  const prevDisabled = activeIndex <= 0
  const nextDisabled = activeIndex >= years.length - 1

  return (
    <div className="flex items-center justify-center gap-3">
      {/* Left arrow */}
      <button
        type="button"
        onClick={goPrev}
        disabled={prevDisabled}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 disabled:opacity-40"
        aria-label="Previous year"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Segmented container */}
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-1">
        <div
          ref={scrollerRef}
          className="flex max-w-[360px] items-center gap-1 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Year selector"
        >
          {years.map((y) => {
            const isActive = y === activeYear
            return (
              <button
                key={y}
                type="button"
                data-year={y}
                onClick={() => onPickYear(y)}
                className={[
                  "relative whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                <span>{y}</span>

                {/* subtle “selected” indicator inside the pill */}
                {isActive ? (
                  <span className="ml-2 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-[2px] text-[10px] uppercase tracking-wider text-white/60">
                    Selected
                  </span>
                ) : null}
              </button>
            )
          })}
        </div>
      </div>

      {/* Right arrow */}
      <button
        type="button"
        onClick={goNext}
        disabled={nextDisabled}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 disabled:opacity-40"
        aria-label="Next year"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}