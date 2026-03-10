import HotlineIcon from "./icons/HotlineIcon"
import HansonIcon from "./icons/HansonIcon"
import QuietoodeIcon from "./icons/QuietoodeIcon"

export default function InfoSection() {
  return (
    <section className="mt-32 space-y-10 border-t border-white/10 pt-20">
    {/* What Was Hanson Hotline */}
<div
  id="what-is-hotline"
  className="rounded-3xl border border-white/10 bg-white/10 px-6 py-10 backdrop-blur-md md:px-10 scroll-mt-32"
>    <div className="flex items-start gap-4">
          <HotlineIcon />
          <div className="space-y-3">
            <h3 className="text-xl font-regular text-[#ec7d33]">
              What was the Hanson Hotline?
            </h3>

            <p className="leading-relaxed text-white/70">
              Hanson Hotline was a fan call-in line active in the late 1990s and early
              2000s, where the band recorded short voice updates about tours, albums,
              and current projects. Before social media, this was how fans stayed
              connected.
            </p>

            <p className="leading-relaxed text-white/70">
              The original phone number varied by region and changed over time. This
              archive preserves the recorded messages, not the live service.
            </p>
          </div>
        </div>
      </div>

 {/* Who Is Hanson */}
<div
  id="who-is-hanson"
  className="rounded-3xl border border-white/10 bg-white/10 px-6 py-10 backdrop-blur-md md:px-10 scroll-mt-32"
>
       <div className="flex items-start gap-4">
          <HansonIcon />
          <div className="space-y-3">
            <h3 className="text-xl font-regular text-[#ec7d33]">Who is Hanson?</h3>

            <p className="leading-relaxed text-white/70">
              Hanson is an American band formed by brothers Isaac, Taylor, and Zac
              Hanson. They rose to international fame in 1997 with “MMMBop” and have
              continued releasing independent music for decades.
            </p>

            <p className="leading-relaxed text-white/70">
              Their official website is{" "}
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
        </div>
      </div>

   {/* Who Is Quietoode */}
<div
  id="who-is-quietoode"
  className="rounded-3xl border border-white/10 bg-white/10 px-6 py-10 backdrop-blur-md md:px-10 scroll-mt-32"
>   <div className="flex items-start gap-4">
          <QuietoodeIcon />
          <div className="space-y-3">
            <h3 className="text-xl font-regular text-[#ec7d33]">Who is Quietoode?</h3>

         
<p className="leading-relaxed text-white/70">
Quietoode is a registered web development and design company in Canada, fully owned and operated by me, Michele Born.
</p>

<p className="leading-relaxed text-white/70">
I handle the complete lifecycle of every build — product strategy, interface design, frontend architecture, backend systems, security, performance, and deployment. Quietoode reflects decades of hands-on engineering experience and long-term thinking applied to modern web platforms.
</p>

          <p className="leading-relaxed text-white/70"> HansonHotline is a React and TypeScript application built with custom component architecture and structured data modeling, designed to preserve digital history through clean, modern UI systems.
  Please contact me via{" "}
  <a
    href="https://instagram.com/quietoode"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#ec7d33] transition hover:opacity-80"
  >
    @quietoode
  </a>.
</p>
          </div>
        </div>
      </div>
    </section>
  )
}