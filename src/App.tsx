import { useEffect, useMemo, useState } from "react"
import Header from "./components/header"
import Hero from "./components/Hero"
import HansonHotlinePlayer from "./components/HansonHotlinePlayer"
import type { Tone } from "./components/Message"
import TranscriptPanel from "./components/TranscriptPanel"

type Segment = {
  speaker: string
  initial: string
  tone: Tone
  text: string
}

type Entry = {
  date: string
  dateLabel: string
  segments: Segment[]
}

const modules = Object.values(
  import.meta.glob("./data/*.ts", { eager: true })
) as { entry: Entry }[]

const allEntriesSorted = modules
  .map((m) => m.entry)
  .sort((a, b) => a.date.localeCompare(b.date))

export default function App() {
  const years = useMemo(() => {
    return Array.from(
      new Set(allEntriesSorted.map((e) => e.date.slice(0, 4)))
    ).sort()
  }, [])

  const [cursor, setCursor] = useState(0)

  useEffect(() => {
    setCursor((c) => {
      const max = Math.max(allEntriesSorted.length - 1, 0)
      return Math.min(Math.max(c, 0), max)
    })
  }, [])

  const entry = allEntriesSorted[cursor]
  const year = entry?.date.slice(0, 4) ?? ""

  const jumpToYear = (newYear: string) => {
    const firstIndex = allEntriesSorted.findIndex((e) =>
      e.date.startsWith(newYear)
    )

    if (firstIndex !== -1) {
      setCursor(firstIndex)
    }
  }

  const goPrevEntry = () => {
    setCursor((c) => Math.max(c - 1, 0))
  }

  const goNextEntry = () => {
    setCursor((c) =>
      Math.min(c + 1, Math.max(allEntriesSorted.length - 1, 0))
    )
  }

  const prevDisabled = cursor === 0

  const nextDisabled =
    cursor === Math.max(allEntriesSorted.length - 1, 0)

  const [calendarOpen, setCalendarOpen] = useState(false)

  const [calMonth, setCalMonth] = useState(() => {
    const m = entry?.date
      ? Number(entry.date.slice(5, 7))
      : 1

    return Number.isFinite(m) ? m : 1
  })

  useEffect(() => {
    const m = entry?.date
      ? Number(entry.date.slice(5, 7))
      : 1

    if (Number.isFinite(m)) {
      setCalMonth(m)
    }
  }, [cursor])

  const calYear = entry?.date
    ? Number(entry.date.slice(0, 4))
    : new Date().getFullYear()

  const availableDates = useMemo(() => {
    return new Set(allEntriesSorted.map((e) => e.date))
  }, [])

  const jumpToDate = (iso: string) => {
    const idx = allEntriesSorted.findIndex(
      (e) => e.date === iso
    )

    if (idx !== -1) {
      setCursor(idx)
    }
  }

  if (!entry) {
    return (
      <div className="min-h-screen bg-white p-10 text-black">
        No entries yet.
      </div>
    )
  }

  const segments = Array.isArray(entry.segments)
    ? entry.segments
    : []

  return (
    <div className="relative min-h-screen bg-white text-black">

      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />


      {/* =====================================================
          FEATURED AUDIO
      ====================================================== */}

      <section className="mx-auto mt-20 max-w-[1200px] px-6 md:px-10">
        <HansonHotlinePlayer />
      </section>


      {/* =====================================================
          ARCHIVE / TRANSCRIPTS
      ====================================================== */}

      <main id="archive" className="bg-white">

        <div className="mx-auto max-w-[900px] px-6">

          <TranscriptPanel
            dateLabel={entry.dateLabel}
            activeYear={year}
            years={years}
            onPickYear={jumpToYear}
            calendarOpen={calendarOpen}
            setCalendarOpen={setCalendarOpen}
            calYear={calYear}
            calMonth={calMonth}
            setCalMonth={setCalMonth}
            availableDates={availableDates}
            onPickDate={jumpToDate}
            segments={segments}
            onPrev={goPrevEntry}
            onNext={goNextEntry}
            prevDisabled={prevDisabled}
            nextDisabled={nextDisabled}
          />


          {/* =================================================
              FOOTER
          ================================================== */}

          <footer className="mt-32 border-t border-black/10 pb-16 pt-10 text-center text-sm text-black/50">
            <div className="space-y-2">

              <p>
                Created by{" "}
                <a
                  href="https://quietoode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-black underline underline-offset-2 transition-opacity hover:opacity-50"
                >
                  Quietoode.com
                </a>
              </p>

              <p>
                We are in no way affiliated with the band Hanson.
                Hanson&apos;s official website is{" "}
                <a
                  href="https://hanson.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-black underline underline-offset-2 transition-opacity hover:opacity-50"
                >
                  Hanson.net
                </a>
                .
              </p>

            </div>
          </footer>

        </div>
      </main>

    </div>
  )
}