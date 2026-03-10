import type { ReactNode } from "react"

type Stat = {
  label: string
  value: string
  sub?: string
}

type Item = {
  eyebrow?: string
  title: string
  body: ReactNode
  bullets?: string[]
  stats?: Stat[]
  flip?: boolean
}

const DEFAULT_ITEMS: Item[] = [
  {
    eyebrow: "Context",
    title: "What was the Hanson Hotline?",
    body:
      "Hanson Hotline was a fan call-in line active in the late 1990s and early 2000s where the band recorded short voice updates about tours, albums, and current projects. Before social media, this is how fans stayed connected.",
    bullets: [
      "Browse by year or date",
      "Listen to original recordings",
      "Read transcripts as structured entries",
    ],
    stats: [
      { label: "Era", value: "1997–2003", sub: "peak archive range" },
      { label: "Format", value: "Voicemail", sub: "short audio updates" },
    ],
  },
]

function StatCard({ label, value, sub }: Stat) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <p className="text-[11px] uppercase tracking-widest text-white/50">
        {label}
      </p>
      <p className="mt-2 text-2xl tracking-tight text-white">
        {value}
      </p>
      {sub ? (
        <p className="mt-2 text-sm leading-relaxed text-white/60">{sub}</p>
      ) : null}
    </div>
  )
}

function CopyBlock({
  eyebrow,
  title,
  body,
  bullets,
}: Pick<Item, "eyebrow" | "title" | "body" | "bullets">) {
  return (
    <div>
      {eyebrow ? (
        <p className="text-[11px] uppercase tracking-widest text-white/50">
          {eyebrow}
        </p>
      ) : null}

      <h3 className="mt-3 text-2xl tracking-tight text-white">
        {title}
      </h3>

      <p className="mt-5 text-base leading-relaxed text-white/70">
        {body}
      </p>

      {bullets?.length ? (
        <>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ec7d33]" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-white/60">
            Contact us on Instagram{" "}
            <a
              href="https://instagram.com/mmmbopnet"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#ec7d33] transition hover:opacity-80"
            >
              @mmmbopnet
            </a>
          </p>
        </>
      ) : null}
    </div>
  )
}

function SectionRow({ item }: { item: Item }) {
  const textCol = (
    <div className="min-w-0">
      <CopyBlock
        eyebrow={item.eyebrow}
        title={item.title}
        body={item.body}
        bullets={item.bullets}
      />
    </div>
  )

  const asideCol = (
    <div className="min-w-0">
      <div className="grid gap-4">
        {(item.stats ?? []).map((s) => (
          <StatCard key={`${s.label}-${s.value}`} {...s} />
        ))}

        <div className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md">
          <p className="text-[11px] uppercase tracking-widest text-white/50">
            Notes
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            This archive preserves recordings and transcripts. It’s not the live
            service, and it’s not affiliated with the band.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
      {item.flip ? (
        <>
          {asideCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {asideCol}
        </>
      )}
    </div>
  )
}

export default function AboutGridSection({
  items = DEFAULT_ITEMS,
}: {
  items?: Item[]
}) {
  return (
    <section className="mt-24 border-t border-white/10 pt-16">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-[720px]">
            <p className="text-[11px] uppercase tracking-widest text-white/50">
              About
            </p>
            <h2
              className="mt-3 text-3xl tracking-tight text-white"
              id="what-is-hotline"
            >
              Context and credits
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              A structured archive built as a modern React + TypeScript
              application — designed for browsing by year/date and reading
              transcripts as clean UI components.
            </p>
          </div>
        </div>

        <div className="mt-14 space-y-16">
          {items.map((item) => (
            <SectionRow key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}