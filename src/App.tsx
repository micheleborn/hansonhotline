import { useEffect, useMemo, useState } from "react"
import Header from "./components/header"
import Hero from "./components/Hero"
import HansonHotlinePlayer from "./components/HansonHotlinePlayer"
import type { Tone } from "./components/Message"
import AboutGridSection from "./components/AboutGridSection"
import TranscriptPanel from "./components/TranscriptPanel"

type Segment = {
  speaker: string
  initial: string
  tone: Tone
  text: string
}

type Entry = {
  date: string // YYYY-MM-DD
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
  // Years in chronological order
  const years = useMemo(() => {
    return Array.from(
      new Set(allEntriesSorted.map((e) => e.date.slice(0, 4)))
    ).sort()
  }, [])

  // Single source of truth: global index in the full timeline
  const [cursor, setCursor] = useState(0)

  // Clamp cursor safely if data changes
  useEffect(() => {
    setCursor((c) => {
      const max = Math.max(allEntriesSorted.length - 1, 0)
      return Math.min(Math.max(c, 0), max)
    })
  }, [])

  const entry = allEntriesSorted[cursor]
  const year = entry?.date.slice(0, 4) ?? ""

  // Jump year helper (choose FIRST entry of that year)
  const jumpToYear = (newYear: string) => {
    const firstIndex = allEntriesSorted.findIndex((e) =>
      e.date.startsWith(newYear)
    )
    if (firstIndex !== -1) setCursor(firstIndex)
  }

  // Timeline nav
  const goPrevEntry = () => setCursor((c) => Math.max(c - 1, 0))
  const goNextEntry = () =>
    setCursor((c) => Math.min(c + 1, Math.max(allEntriesSorted.length - 1, 0)))

  const prevDisabled = cursor === 0
  const nextDisabled = cursor === Math.max(allEntriesSorted.length - 1, 0)

  if (!entry) {
    return <div className="min-h-screen bg-black p-10 text-white">No entries yet.</div>
  }

  // Calendar state
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [calMonth, setCalMonth] = useState(() => {
    const m = entry?.date ? Number(entry.date.slice(5, 7)) : 1
    return Number.isFinite(m) ? m : 1
  })

  // keep month in sync when cursor changes
  useEffect(() => {
    const m = entry?.date ? Number(entry.date.slice(5, 7)) : 1
    if (Number.isFinite(m)) setCalMonth(m)
  }, [cursor]) // eslint-disable-line react-hooks/exhaustive-deps

  const calYear = entry?.date
    ? Number(entry.date.slice(0, 4))
    : new Date().getFullYear()

  // all available dates in dataset
  const availableDates = useMemo(() => {
    return new Set(allEntriesSorted.map((e) => e.date))
  }, [])

  const jumpToDate = (iso: string) => {
    const idx = allEntriesSorted.findIndex((e) => e.date === iso)
    if (idx !== -1) setCursor(idx)
  }

  const segments = Array.isArray(entry.segments) ? entry.segments : []

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 1) Background image */}
        <div
          className="absolute inset-0 bg-top bg-no-repeat bg-contain"
          style={{
            backgroundImage: "url(/hh-bg.png)",
            opacity: 0.28,
          }}
        />

        {/* 2) Glow blobs */}
        <div className="absolute inset-0">
          {/* ===== TOP GLOWS ===== */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 
                    w-[300px] h-[180px] md:w-[500px] md:h-[300px]
                    bg-[#ec7d33]/30 blur-[90px] md:blur-[120px]"
          />

          <div
            className="absolute top-0 left-[15%] 
                    w-[250px] h-[150px] md:w-[400px] md:h-[250px]
                    bg-[#b24c7f]/25 blur-[90px] md:blur-[120px]"
          />

          <div
            className="absolute top-0 right-[10%] 
                    w-[280px] h-[160px] md:w-[450px] md:h-[280px]
                    bg-[#ff0050]/25 blur-[90px] md:blur-[120px]"
          />

          {/* ===== BOTTOM GLOWS ===== */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 
                    w-[350px] h-[220px] md:w-[600px] md:h-[350px]
                    bg-[#ec7d33]/20 blur-[100px] md:blur-[140px]"
          />

          <div
            className="absolute bottom-0 left-[20%] 
                    w-[250px] h-[180px] md:w-[450px] md:h-[300px]
                    bg-[#b24c7f]/18 blur-[100px] md:blur-[130px]"
          />

          <div
            className="absolute bottom-0 right-[15%] 
                    w-[280px] h-[200px] md:w-[500px] md:h-[320px]
                    bg-[#ff0050]/18 blur-[100px] md:blur-[130px]"
          />
        </div>
      </div>

      {/* Noise */}
      <div className="noise" />

      {/* Page container */}
      <div className="relative z-10 px-6 pt-32">
        <Header />
        <Hero />

        <div className="mx-auto max-w-[800px]">
          {/* Recording card */}
          <section className="mt-32">
            <div className="mx-auto w-full max-w-[720px] rounded-2xl border border-white/10 bg-white/5 px-6 py-6">
              <div className="flex items-center justify-center gap-3">
                <div className="text-center">
                  <p className="text-[11px] uppercase tracking-widest text-white/50">
                    Featured audio
                  </p>
                  <h2 className="mt-2 text-2xl font-regular tracking-tight text-white">
                  December 20, 1999
                  </h2>
                </div>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <HansonHotlinePlayer />
              </div>
            </div>
          </section>

       

          {/* Transcript */}
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

          <AboutGridSection />

          {/* Footer */}
          <footer className="mt-32 border-t border-white/10 pb-16 pt-10 text-center text-sm text-white/50">
            <div className="space-y-2">
              <p>
                Created by{" "}
                <a
                  href="https://quietoode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ec7d33] transition hover:opacity-80"
                >
                  Quietoode.com
                </a>
              </p>

              <p>
                We are in no way affiliated with the band Hanson. Hanson’s official
                website is{" "}
                <a
                  href="https://hanson.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ec7d33] transition hover:opacity-80"
                >
                  Hanson.net
                </a>
                .
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}