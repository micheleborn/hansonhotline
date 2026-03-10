import YearRail from "./YearRail"
import CalendarPopover from "./CalendarPopover"
import Message from "./Message"
import type { Tone } from "./Message"

type Segment = {
  speaker: string
  initial: string
  tone: Tone
  text: string
}

type Props = {
  dateLabel: string
  activeYear: string
  years: string[]
  onPickYear: (y: string) => void

  calendarOpen: boolean
  setCalendarOpen: (v: boolean) => void
  calYear: number
  calMonth: number
  setCalMonth: (m: number) => void
  availableDates: Set<string>
  onPickDate: (iso: string) => void

  segments: Segment[]

  onPrev: () => void
  onNext: () => void
  prevDisabled: boolean
  nextDisabled: boolean
}

export default function TranscriptPanel({
  dateLabel,
  activeYear,
  years,
  onPickYear,

  calendarOpen,
  setCalendarOpen,
  calYear,
  calMonth,
  setCalMonth,
  availableDates,
  onPickDate,

  segments,

  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}: Props) {
  return (
    <section className="mt-14">
      <div className="mx-auto max-w-[900px]">
        {/* Years FIRST */}
        <div className="border-t border-white/10 pt-8">
          <YearRail years={years} activeYear={activeYear} onPickYear={onPickYear} />
        </div>

        {/* Header row */}
        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
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
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>

            <div className="leading-tight">
              <p className="text-[11px] font-medium uppercase tracking-widest text-white/50">
                Transcript
              </p>
              <p className="text-sm font-medium text-white">{dateLabel}</p>
            </div>

            {/* Calendar */}
            <div className="relative ml-2">
              <button
                onClick={() => setCalendarOpen(!calendarOpen)}
                type="button"
                className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70 transition hover:bg-white/10"
              >
                Pick date
              </button>

              <CalendarPopover
                open={calendarOpen}
                onClose={() => setCalendarOpen(false)}
                year={calYear}
                month={calMonth}
                setMonth={setCalMonth}
                availableDates={availableDates}
                onPickDate={onPickDate}
              />
            </div>
          </div>
        </div>

        {/* Main panel */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]">
          <div className="space-y-6">
            {segments.map((s, i) => (
              <Message
                key={`${dateLabel}-${i}`}
                initial={s.initial}
                name={s.speaker}
                tone={s.tone}
              >
                {s.text}
              </Message>
            ))}
          </div>

          {/* Footer actions */}
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
            <button
              onClick={onPrev}
              disabled={prevDisabled}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 disabled:opacity-40"
            >
              ← Previous
            </button>

            <button
              onClick={onNext}
              disabled={nextDisabled}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}