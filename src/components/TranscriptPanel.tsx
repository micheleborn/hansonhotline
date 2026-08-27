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
    <section className="mt-20 bg-white">
      <div className="mx-auto max-w-[900px]">


        {/* Archive introduction */}
<div className="mx-auto max-w-[900px] px-6 pb-12 pt-24">
  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
    The archive
  </p>

  <h2 className="mt-4 text-[clamp(42px,6vw,72px)] font-semibold leading-[0.95] tracking-[-0.055em] text-black">
    Browse the archive.
  </h2>

  <p className="mt-6 max-w-[600px] text-lg leading-relaxed text-black/55">
    Explore Hanson Hotline recordings and transcripts by year and date.
  </p>
</div>



        {/* Year navigation */}
          <YearRail
            years={years}
            activeYear={activeYear}
            onPickYear={onPickYear}
          />

        {/* Transcript heading */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">

            {/* Calendar icon */}
            <span className="inline-flex h-10 w-10 items-center justify-center text-black/65">
              <svg
                className="h-5 w-5"
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

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/40">
                Transcript
              </p>

              <h2 className="mt-1 text-xl font-medium tracking-tight text-black">
                {dateLabel}
              </h2>
            </div>
          </div>

          {/* Date picker */}
          <div className="relative">
            <button
              onClick={() => setCalendarOpen(!calendarOpen)}
              type="button"
              className="rounded-[10px] bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-black/80"
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

        {/* Transcript card */}
        <div className="mt-6 rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.04)] md:p-8">
          <div className="space-y-5">
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

          {/* Previous / next */}
          <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
            <button
              onClick={onPrev}
              disabled={prevDisabled}
              className="inline-flex items-center gap-2 rounded-[10px] border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-[#f5f5f5] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <span aria-hidden="true">←</span>
              Previous
            </button>

            <button
              onClick={onNext}
              disabled={nextDisabled}
              className="inline-flex items-center gap-2 rounded-[10px] bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Next
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}