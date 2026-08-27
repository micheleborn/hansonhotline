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
  month,
  setMonth,
  availableDates,
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
    return new Date(year, month - 1, 1).toLocaleString(undefined, {
      month: "long",
    })
  }, [year, month])

  const totalDays = daysInMonth(year, month)
  const start = firstWeekdayIndex(year, month)

  const cells = useMemo(() => {
    const out: Array<{
      day: number | null
      iso?: string
      enabled?: boolean
    }> = []

    for (let i = 0; i < start; i++) {
      out.push({ day: null })
    }

    for (let d = 1; d <= totalDays; d++) {
      const iso = `${year}-${pad2(month)}-${pad2(d)}`
      const enabled = availableDates.has(iso)

      out.push({
        day: d,
        iso,
        enabled,
      })
    }

    while (out.length % 7 !== 0) {
      out.push({ day: null })
    }

    return out
  }, [year, month, totalDays, start, availableDates])

  if (!open) return null

  const portalRoot = document.getElementById("portal-root")

  if (!portalRoot) {
    return null
  }

  return createPortal(
    <>
      {/* Soft page overlay */}
      <button
        type="button"
        aria-label="Close calendar"
        onClick={onClose}
        className="fixed inset-0 z-[9998] cursor-default bg-black/10 backdrop-blur-[2px]"
      />

      {/* Calendar */}
      <div
        className="fixed left-1/2 top-28 z-[9999] w-[340px] -translate-x-1/2 rounded-[28px] border border-black/10 bg-[#fffdf8] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
        role="dialog"
        aria-modal="true"
        aria-label="Calendar"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-[#fcf9be] disabled:cursor-not-allowed disabled:opacity-25"
            onClick={() => setMonth(Math.max(1, month - 1))}
            disabled={month === 1}
            aria-label="Previous month"
          >
            ←
          </button>

          <div className="text-center">
            <div className="text-sm font-semibold tracking-tight text-black">
              {monthName} {year}
            </div>

            <div className="mt-1 text-[11px] text-black/45">
              Pick a day with a recording
            </div>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-[#fcf9be] disabled:cursor-not-allowed disabled:opacity-25"
            onClick={() => setMonth(Math.min(12, month + 1))}
            disabled={month === 12}
            aria-label="Next month"
          >
            →
          </button>
        </div>

        {/* Weekdays */}
        <div className="mt-6 grid grid-cols-7 gap-2 text-center">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <div
              key={`${day}-${index}`}
              className="py-1 text-[10px] font-bold uppercase tracking-widest text-black/35"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="mt-2 grid grid-cols-7 gap-2">
          {cells.map((cell, index) => {
            if (!cell.day) {
              return <div key={index} className="h-9" />
            }

            if (!cell.enabled) {
              return (
                <div
                  key={index}
                  className="flex h-9 items-center justify-center rounded-full text-xs text-black/20"
                >
                  {cell.day}
                </div>
              )
            }

            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  onPickDate(cell.iso!)
                  onClose()
                }}
                className="flex h-9 items-center justify-center rounded-full bg-[#fcf9be] text-xs font-semibold text-black transition hover:bg-[#ffc000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc000] focus-visible:ring-offset-2"
                title="Open recording"
              >
                {cell.day}
              </button>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-black/45">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffc000]" />
          Recording available
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-full border border-black/10 bg-white py-2.5 text-sm font-medium text-black transition hover:bg-[#fcf9be]"
        >
          Close
        </button>
      </div>
    </>,
    portalRoot
  )
}