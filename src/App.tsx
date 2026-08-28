import { useEffect, useMemo, useState } from "react"

import Header from "./components/header"
import Hero from "./components/Hero"
import ArchiveClosing from "./components/ArchiveClosing"
import HansonHotlinePlayer from "./components/HansonHotlinePlayer"
import TranscriptPanel from "./components/TranscriptPanel"

import type { Tone } from "./components/Message"

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
  /* =========================================================
     YEARS
  ========================================================= */

  const years = useMemo(() => {
    return Array.from(
      new Set(
        allEntriesSorted.map((entry) =>
          entry.date.slice(0, 4)
        )
      )
    ).sort()
  }, [])


  /* =========================================================
     ACTIVE ARCHIVE ENTRY
  ========================================================= */

  const [cursor, setCursor] = useState(0)

  useEffect(() => {
    setCursor((current) => {
      const max = Math.max(
        allEntriesSorted.length - 1,
        0
      )

      return Math.min(
        Math.max(current, 0),
        max
      )
    })
  }, [])

  const entry = allEntriesSorted[cursor]

  const year =
    entry?.date.slice(0, 4) ?? ""


  /* =========================================================
     YEAR NAVIGATION
  ========================================================= */

  const jumpToYear = (newYear: string) => {
    const firstIndex =
      allEntriesSorted.findIndex((entry) =>
        entry.date.startsWith(newYear)
      )

    if (firstIndex !== -1) {
      setCursor(firstIndex)
    }
  }


  /* =========================================================
     PREVIOUS / NEXT RECORDING
  ========================================================= */

  const goPrevEntry = () => {
    setCursor((current) =>
      Math.max(current - 1, 0)
    )
  }

  const goNextEntry = () => {
    setCursor((current) =>
      Math.min(
        current + 1,
        Math.max(
          allEntriesSorted.length - 1,
          0
        )
      )
    )
  }

  const prevDisabled =
    cursor === 0

  const nextDisabled =
    cursor ===
    Math.max(
      allEntriesSorted.length - 1,
      0
    )


  /* =========================================================
     RANDOM RECORDING
  ========================================================= */

  const goRandomEntry = () => {
    if (allEntriesSorted.length === 0) {
      return
    }

    if (allEntriesSorted.length === 1) {
      setCursor(0)
    } else {
      let randomIndex = cursor

      while (randomIndex === cursor) {
        randomIndex = Math.floor(
          Math.random() *
            allEntriesSorted.length
        )
      }

      setCursor(randomIndex)
    }

    window.setTimeout(() => {
      document
        .getElementById("archive")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
    }, 100)
  }


  /* =========================================================
     CALENDAR
  ========================================================= */

  const [calendarOpen, setCalendarOpen] =
    useState(false)

  const [calMonth, setCalMonth] =
    useState(() => {
      const month = entry?.date
        ? Number(entry.date.slice(5, 7))
        : 1

      return Number.isFinite(month)
        ? month
        : 1
    })

  useEffect(() => {
    const month = entry?.date
      ? Number(entry.date.slice(5, 7))
      : 1

    if (Number.isFinite(month)) {
      setCalMonth(month)
    }
  }, [cursor, entry?.date])

  const calYear = entry?.date
    ? Number(entry.date.slice(0, 4))
    : new Date().getFullYear()

  const availableDates = useMemo(() => {
    return new Set(
      allEntriesSorted.map(
        (entry) => entry.date
      )
    )
  }, [])

  const jumpToDate = (iso: string) => {
    const index =
      allEntriesSorted.findIndex(
        (entry) => entry.date === iso
      )

    if (index !== -1) {
      setCursor(index)
    }
  }


  /* =========================================================
     EMPTY STATE
  ========================================================= */

  if (!entry) {
    return (
      <div className="min-h-screen bg-white p-10 text-black">
        No entries yet.
      </div>
    )
  }

  const segments =
    Array.isArray(entry.segments)
      ? entry.segments
      : []


  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <div className="relative min-h-screen bg-white text-black">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header />


      {/* =====================================================
          INTERACTIVE HERO
      ====================================================== */}

      <Hero
        onRandomMessage={goRandomEntry}
      />


      {/* =====================================================
          FEATURED AUDIO
      ====================================================== */}

     <section
  id="featured-audio"
  className="px-6 py-20 md:px-10 md:py-24"
>
  <HansonHotlinePlayer />
</section>


      {/* =====================================================
          ARCHIVE
      ====================================================== */}

      <main
        id="archive"
        className="bg-white"
      >
        <div className="mx-auto max-w-[900px] px-6">

          <TranscriptPanel
            dateLabel={entry.dateLabel}
            activeYear={year}
            years={years}
            onPickYear={jumpToYear}

            calendarOpen={calendarOpen}
            setCalendarOpen={
              setCalendarOpen
            }

            calYear={calYear}
            calMonth={calMonth}
            setCalMonth={setCalMonth}

            availableDates={
              availableDates
            }

            onPickDate={jumpToDate}

            segments={segments}

            onPrev={goPrevEntry}
            onNext={goNextEntry}

            prevDisabled={
              prevDisabled
            }

            nextDisabled={
              nextDisabled
            }
          />

        </div>
      </main>


      {/* =====================================================
          CLOSING / ORIGINAL HERO
      ====================================================== */}

      <section className="mt-28 md:mt-36">
        <ArchiveClosing />
      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-14 text-center text-sm text-black/50 md:px-10">

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
              We are in no way affiliated
              with the band Hanson.
              Hanson&apos;s official website
              is{" "}
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

        </div>
      </footer>

    </div>
  )
}