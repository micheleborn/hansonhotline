type Props = {
  years: string[]
  activeYear: string
  onPickYear: (year: string) => void
}

export default function YearRail({
  years,
  activeYear,
  onPickYear,
}: Props) {
  return (
    <div className="sticky top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] justify-center px-6 py-4 md:px-10">
        <nav
          className="inline-flex max-w-full overflow-x-auto rounded-full border border-black/10 bg-[#f5f5f5] p-1"
          aria-label="Archive years"
        >
          {years.map((year) => {
            const isActive = year === activeYear

            return (
              <button
                key={year}
                type="button"
                onClick={() => onPickYear(year)}
                aria-pressed={isActive}
                className={[
                  "whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black",
                  isActive
                    ? "bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                    : "text-black/55 hover:bg-white hover:text-black",
                ].join(" ")}
              >
                {year}
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}