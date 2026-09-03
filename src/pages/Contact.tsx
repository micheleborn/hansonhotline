import Header from "../components/header"

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black">
      <Header />

      <main>
        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
            Contact &amp; community
          </p>

          <h1 className="mt-5 max-w-[1000px] text-[clamp(52px,7vw,94px)] font-semibold leading-[0.94] tracking-[-0.035em] text-black">
            Say hello.
          </h1>

          <p className="mt-10 max-w-[680px] text-xl leading-relaxed text-black/55 md:text-2xl">
            Follow the archive, find Hanson, or wander a little further into
            the Hanson universe.
          </p>
        </section>

        {/* =====================================================
            PRIMARY LINKS
        ====================================================== */}
        <section className="mx-auto max-w-[1200px] px-6 pb-24 md:px-10">
          <div className="mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
              Start here
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Hanson */}
            <SocialCard
              eyebrow="Official"
              title="Hanson"
              handle="@hanson"
              description="The band's official Instagram — music, tours, releases and everything happening now."
              href="https://www.instagram.com/hanson/"
            />

            {/* Hanson Hotline */}
            <SocialCard
              eyebrow="The archive"
              title="Hanson Hotline"
              handle="@thehansonhotline"
              description="Follow the archive for Hanson Hotline recordings, memories and pieces of Hanson history."
              href="https://www.instagram.com/thehansonhotline/"
            />

            {/* Michele */}
            <SocialCard
              eyebrow="The person behind it"
              title="Michele"
              handle="@thequietodes"
              description="Design, development, drawings and the other things I'm making."
              href="https://www.instagram.com/thequietodes/"
              yellow
            />
          </div>
        </section>

        {/* =====================================================
            HANSON UNIVERSE
        ====================================================== */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-28">
            <div className="max-w-[680px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
                Around the Hanson universe
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                A few more people worth following.
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                Music, family stories, homeschooling and glimpses of life
                around the family.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {/* Mac Hanson */}
              <SocialCard
                eyebrow="Music"
                title="Mac Hanson"
                handle="@mrjmachanson"
                description="Hanson's younger brother and a musician in his own right. Follow along for his music, releases and whatever he's creating next."
                href="https://www.instagram.com/mrjmachanson/"
              />

              {/* Mama Hanson */}
              <SocialCard
                eyebrow="Family"
                title="Mama Hanson"
                handle="@itzjamz7"
                description="The beloved matriarch of the Hanson family, sharing warm glimpses of family life, treasured memories and an ever-growing generation of grandchildren."
                href="https://www.instagram.com/itzjamz7/"
              />

              {/* Natalie Hanson */}
              <SocialCard
                eyebrow="Family & home"
                title="Natalie Hanson"
                handle="@nataliehanson"
                description="Taylor's wife and a homeschooling extraordinaire — thoughtful glimpses of family, learning and home, shared with eloquence, elegance and seemingly endless patience."
                href="https://www.instagram.com/nataliehanson/"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            ARCHIVE CONTRIBUTIONS
        ====================================================== */}
        <section className="border-t border-black/10 bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-28">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
                The archive
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Have something we&apos;re missing?
              </h2>
            </div>

            <div className="max-w-[680px]">
              <p className="text-lg leading-8 text-black/60">
                If you&apos;ve kept an old Hanson Hotline recording, have a
                correction to a transcript, or remember something about the
                archive that we&apos;ve missed, I&apos;d love to hear from you.
              </p>

              <p className="mt-6 text-lg leading-8 text-black/60">
                Send a message to{" "}
                <a
                  href="https://www.instagram.com/thehansonhotline/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-black underline underline-offset-4 transition-opacity hover:opacity-50"
                >
                  @thehansonhotline
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOOTER / DISCLAIMER
        ====================================================== */}
        <footer className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <p className="text-sm font-semibold text-black">
                Hanson Hotline
              </p>

              <p className="max-w-[650px] text-sm leading-6 text-black/45 md:text-right">
                This is an independent archival and fan project and is not
                affiliated with Hanson. Hanson&apos;s official website is{" "}
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
      </main>
    </div>
  )
}

/* =========================================================
   SOCIAL CARD
========================================================= */

function SocialCard({
  eyebrow,
  title,
  handle,
  description,
  href,
  yellow = false,
}: {
  eyebrow: string
  title: string
  handle: string
  description: string
  href: string
  yellow?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "group flex min-h-[300px] flex-col justify-between rounded-[28px] border border-black/10 p-7",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)]",
        yellow ? "bg-[#fcf9be]" : "bg-white",
      ].join(" ")}
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-4">
        <span
          className={[
            "text-[11px] font-bold uppercase tracking-[0.18em]",
            yellow ? "text-black/45" : "text-black/35",
          ].join(" ")}
        >
          {eyebrow}
        </span>

        <span
          aria-hidden="true"
          className="text-xl text-black/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"
        >
          ↗
        </span>
      </div>

      {/* Content */}
      <div>
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-black">
          {title}
        </h2>

        <p
          className={[
            "mt-2 text-sm",
            yellow ? "text-black/60" : "text-black/50",
          ].join(" ")}
        >
          {handle}
        </p>

        <p
          className={[
            "mt-5 max-w-[290px] text-sm leading-6",
            yellow ? "text-black/60" : "text-black/50",
          ].join(" ")}
        >
          {description}
        </p>
      </div>
    </a>
  )
}

