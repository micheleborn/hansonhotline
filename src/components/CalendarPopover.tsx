import { useMemo } from "react"
import { createPortal } from "react-dom"

function pad2(n: number) {
  return String(n).padStart(2, "0")
}

function daysInMonth(year: number, month1to12: number) {
  return new Date(year, month1to12, 0).getDate()
}

function firstWeekdayIndex(year: number, month1to12: number) {
  // 0=Sun..6=Sat
  return new Date(year, month1to12 - 1, 1).getDay()
}

export default function CalendarPopover({
  open,
  onClose,
  year,
  month, // 1..12
  setMonth,
  availableDates, // Set of YYYY-MM-DD
  onPickDate,
}: {
  open: boolean
  onClose: () => void
  year: number
  month: number
  setMonth: (m: number) => void
  availableDates: Set<string>
  onPickDate: (iso: string) => void
}) {
  const monthName = useMemo(() => {
    return new Date(year, month - 1, 1).toLocaleString(undefined, { month: "long" })
  }, [year, month])

  const totalDays = daysInMonth(year, month)
  const start = firstWeekdayIndex(year, month)

  const cells = useMemo(() => {
    const out: Array<{ day: number | null; iso?: string; enabled?: boolean }> = []
    for (let i = 0; i < start; i++) out.push({ day: null })
    for (let d = 1; d <= totalDays; d++) {
      const iso = `${year}-${pad2(month)}-${pad2(d)}`
      const enabled = availableDates.has(iso)
      out.push({ day: d, iso, enabled })
    }
    while (out.length % 7 !== 0) out.push({ day: null })
    return out
  }, [year, month, totalDays, start, availableDates])

  if (!open) return null

  const portalRoot = document.getElementById("portal-root")
  if (!portalRoot) {
    // If you forget to add <div id="portal-root"></div> in index.html,
    // the calendar won't render (so we fail safely instead of crashing).
    return null
  }

  return createPortal(
    <div
      className="fixed left-1/2 top-32 z-[9999] w-[320px] -translate-x-1/2 rounded-3xl border border-white/10 bg-black/50 p-4 backdrop-blur-md"
      role="dialog"
      aria-label="Calendar"
    >
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 text-[#c7c7c7]"
          onClick={() => setMonth(Math.max(1, month - 1))}
          aria-label="Previous month"
        >
          ←
        </button>

        <div className="text-center">
          <div className="text-[12px] uppercase tracking-widest text-[#ec7d33]">
            {monthName} {year}
          </div>
          <div className="text-xs text-white/50">Pick a day with a recording</div>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 text-[#c7c7c7]"
          onClick={() => setMonth(Math.min(12, month + 1))}
          aria-label="Next month"
        >
          →
        </button>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs text-white/50">
        {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
          <div key={d} className="py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-2">
        {cells.map((c, i) => {
          if (!c.day) return <div key={i} className="h-9" />

          if (!c.enabled) {
            return (
              <div
                key={i}
                className="flex h-9 items-center justify-center rounded-xl border border-white/5 bg-white/0 text-white/20"
              >
                {c.day}
              </div>
            )
          }

          return (
            <button
              key={i}
              type="button"
              onClick={() => {
                onPickDate(c.iso!)
                onClose()
              }}
              className="flex h-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
              title="Open recording"
            >
              {c.day}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        onClick={onClose}
        className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 py-2 text-sm text-white/70 hover:bg-white/10"
      >
        Close
      </button>
    </div>,
    portalRoot
  )
}