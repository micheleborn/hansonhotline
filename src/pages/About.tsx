import Header from "../components/header"

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* =====================================================
          ABOUT SUB-NAVIGATION
      ====================================================== */}
      <div className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] justify-center px-6 py-4 md:px-10">
          <nav
            className="inline-flex rounded-full border border-black/10 bg-[#f5f5f5] p-1"
            aria-label="About page navigation"
          >
            <a
              href="#project"
              className="rounded-full px-5 py-2 text-sm font-medium text-black/55 transition hover:bg-white hover:text-black"
            >
              Project
            </a>

            <a
              href="#hotline"
              className="rounded-full px-5 py-2 text-sm font-medium text-black/55 transition hover:bg-white hover:text-black"
            >
              The Hotline
            </a>

            <a
              href="#creator"
              className="rounded-full px-5 py-2 text-sm font-medium text-black/55 transition hover:bg-white hover:text-black"
            >
              About Michele
            </a>
          </nav>
        </div>
      </div>

      <main>

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="mx-auto max-w-[1200px] px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
            About the archive
          </p>

        <h1 className="mt-5 max-w-[1000px] text-[clamp(52px,7vw,94px)] font-semibold leading-[0.94] tracking-[-0.035em] text-black">
  Old messages.
            <br />
            New interface.
          </h1>

          <p className="mt-10 max-w-[720px] text-xl leading-relaxed text-black/60 md:text-2xl">
            Hanson Hotline is a digital archive preserving recordings and
            transcripts from a fan call-in service used by Hanson during the
            late 1990s and early 2000s.
          </p>
        </section>


        {/* =====================================================
            PROJECT
        ====================================================== */}
        <section
          id="project"
          className="scroll-mt-28 border-t border-black/10"
        >
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-32">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
                The project
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Preserving an archive without preserving its old UX.
              </h2>
            </div>

            <div className="max-w-[700px] space-y-6 text-lg leading-8 text-black/65">
              <p>
                The content may be from another era, but the interface does
                not need to be.
              </p>

              <p>
                I designed Hanson Hotline as a modern way to navigate a
                chronological collection of audio recordings and transcripts.
                Instead of presenting the material as a long list of files,
                the archive is structured around years, individual dates,
                recordings and readable transcript entries.
              </p>

              <p>
                The visual system deliberately combines contemporary interface
                patterns with references to the original period: oversized
                typography, generous white space and modular UI are paired
                with late-1990s communications technology and colors inspired
                by the era.
              </p>
            </div>
          </div>
        </section>


        {/* =====================================================
            UX / PRODUCT
        ====================================================== */}
        <section className="bg-[#fafafa]">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
            <div className="max-w-[750px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
                Design &amp; development
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Designed and built as one system.
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/60">
                The project combines UX, visual design and front-end
                implementation rather than treating them as separate phases.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <InfoCard
                number="01"
                title="Information architecture"
                body="Recordings are organized into a navigable year → date → recording → transcript structure."
              />

              <InfoCard
                number="02"
                title="Interaction design"
                body="Year navigation, date selection, playback controls and transcript navigation turn a static collection into a browsable archive."
              />

              <InfoCard
                number="03"
                title="Visual design"
                body="A contemporary monochromatic UI lets archival imagery and selective late-'90s color references carry the nostalgia."
              />

              <InfoCard
                number="04"
                title="Audio experience"
                body="Original recordings are presented as first-class content rather than attachments buried inside a page."
              />

              <InfoCard
                number="05"
                title="Responsive UI"
                body="Components are designed to remain understandable and usable as the interface moves between desktop and smaller screens."
              />

              <InfoCard
                number="06"
                title="Implementation"
                body="The archive is implemented as a React + TypeScript application with reusable data-driven components."
              />
            </div>
          </div>
        </section>


        {/* =====================================================
            ORIGINAL HANSON HOTLINE
        ====================================================== */}
        <section
          id="hotline"
          className="scroll-mt-28 border-t border-black/10"
        >
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1.15fr_0.85fr]">

              <div className="max-w-[700px]">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
                  The original hotline
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                  What was the Hanson Hotline?
                </h2>

                <div className="mt-8 space-y-6 text-lg leading-8 text-black/65">
                  <p>
                    Before Instagram, X, YouTube and always-on artist updates,
                    fans could literally call a telephone number to hear what
                    was happening.
                  </p>

                  <p>
                    Hanson used the Hotline to leave short recorded messages
                    about tours, recordings, albums and whatever they were
                    working on at the time.
                  </p>

                  <p>
                    What once functioned as an ephemeral telephone update now
                    also works as a small cultural record of how artists and
                    fans communicated before social media became ubiquitous.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 self-start">
                <StatCard
                  label="Archive era"
                  value="1997–2000s"
                  description="Recordings span the band's early career and beyond."
                />

                <StatCard
                  label="Original format"
                  value="Telephone audio"
                  description="Short voice updates heard by calling the Hotline."
                />

                <StatCard
                  label="Archive format"
                  value="Audio + text"
                  description="Recordings are paired with structured transcripts."
                />
              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            ABOUT MICHELE
        ====================================================== */}
        <section
          id="creator"
          className="scroll-mt-28 border-t border-black/10"
        >
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-24 md:grid-cols-[0.75fr_1.25fr] md:px-10 md:py-32">

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
                About the creator
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Hi, I&apos;m Michele.
              </h2>
            </div>

            <div className="max-w-[720px] space-y-6 text-lg leading-8 text-black/65">
              <p>
                I&apos;m an architect, software developer and Human-Computer
                Interaction graduate student interested in the space where
                design and implementation meet.
              </p>

              <p>
                I work across UX, visual design and development, which means
                projects like Hanson Hotline can move from information
                architecture and interface decisions directly into a working
                product without handing the design off at the point where
                implementation begins.
              </p>

              <p>
                This archive is also a personal project: a chance to take
                material I genuinely care about and explore how thoughtful
                interaction design can make an unusual collection easier —
                and more enjoyable — to discover.
              </p>

              <div className="flex flex-wrap gap-6 pt-3">
                <a
                  href="https://quietoode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-black underline decoration-1 underline-offset-4 transition-opacity hover:opacity-50"
                >
                  Quietoode.com
                </a>

                <a
                  href="https://instagram.com/mmmbopnet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-black underline decoration-1 underline-offset-4 transition-opacity hover:opacity-50"
                >
                  @mmmbopnet
                </a>
              </div>
            </div>

          </div>
        </section>


        {/* =====================================================
            DISCLAIMER / FOOTER
        ====================================================== */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

              <p className="text-sm font-semibold text-black">
                Hanson Hotline
              </p>

              <p className="max-w-[650px] text-sm leading-6 text-black/45 md:text-right">
                This is an independent archival and fan project. It is not
                affiliated with Hanson. Hanson&apos;s official website is{" "}
                <a
                  href="https://hanson.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-black underline underline-offset-2"
                >
                  Hanson.net
                </a>
                .
              </p>

            </div>
          </div>
        </section>

      </main>
    </div>
  )
}


/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  number,
  title,
  body,
}: {
  number: string
  title: string
  body: string
}) {
  return (
    <article className="rounded-[24px] border border-black/10 bg-white p-7">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/30">
        {number}
      </p>

      <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-black/55">
        {body}
      </p>
    </article>
  )
}


/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  label,
  value,
  description,
}: {
  label: string
  value: string
  description: string
}) {
  return (
    <article className="rounded-[24px] border border-black/10 bg-white p-7">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">
        {label}
      </p>

      <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-black">
        {value}
      </p>

      <p className="mt-3 text-sm leading-6 text-black/50">
        {description}
      </p>
    </article>
  )
}