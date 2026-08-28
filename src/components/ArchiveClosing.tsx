export default function ArchiveClosing() {
  return (
    <section className="bg-[#f4f4f2] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1000px]">

        {/* HEADER */}
        <div className="mb-16 md:mb-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-black/40">
            A little context
          </p>

          <h2 className="mt-4 text-[clamp(42px,6vw,68px)] font-semibold leading-[0.98] tracking-[-0.035em] text-black">
            Wait. What was all this?
          </h2>
        </div>


        {/* FAQ */}
        <div className="border-t border-black/15">

          {/* WHO IS HANSON */}
          <article className="grid gap-6 border-b border-black/15 py-10 md:grid-cols-[280px_1fr] md:gap-16 md:py-14">
            <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.025em] text-black md:text-[28px]">
              Who is Hanson?
            </h3>

            <div className="max-w-[620px] space-y-5 text-[16px] leading-[1.8] text-black/60 md:text-[17px]">
              <p>
                Hanson is an American pop-rock band formed by brothers
                Isaac, Taylor and Zac Hanson. They became internationally
                known in 1997 with their breakout single{" "}
                <em>MMMBop</em>.
              </p>

              <p>
                More than a moment of 1990s pop culture, Hanson continued
                writing, recording and touring for decades, building a
                remarkably enduring relationship with their audience.
              </p>

              <a
                href="https://hanson.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-black underline decoration-black/30 underline-offset-4 transition hover:decoration-black"
              >
                Visit Hanson.net ↗
              </a>
            </div>
          </article>


          {/* WHAT WAS THE HOTLINE */}
          <article className="grid gap-6 border-b border-black/15 py-10 md:grid-cols-[280px_1fr] md:gap-16 md:py-14">
            <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.025em] text-black md:text-[28px]">
              What was the Hanson Hotline?
            </h3>

            <div className="max-w-[620px] space-y-5 text-[16px] leading-[1.8] text-black/60 md:text-[17px]">
              <p>
                Before social media, there was a phone number.
              </p>

              <p>
                Fans could call the Hanson Hotline and hear recorded
                messages from Isaac, Taylor and Zac with news, updates,
                stories and glimpses of what the band was doing.
              </p>

              <p>
                It was wonderfully of its time: no feed to refresh, no
                notification waiting on your phone. You actually called
                a number and listened.
              </p>

              <a
                href="#archive"
                className="inline-block font-semibold text-black underline decoration-black/30 underline-offset-4 transition hover:decoration-black"
              >
                Browse the preserved messages ↑
              </a>
            </div>
          </article>

        </div>


        {/* CLOSING LINE */}
        <div className="pt-12 text-center md:pt-16">
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-black/30">
            1997 — 2003 · Preserved on HansonHotline.com
          </p>
        </div>

      </div>
    </section>
  )
}