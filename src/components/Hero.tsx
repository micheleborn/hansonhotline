import smudge from "../assets/smudge.png"
import heroBg from "../assets/bg-hh.png"

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#d7d0c4] px-4 py-14 md:px-8 md:py-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[880px] rounded-[34px] bg-white px-8 py-12 shadow-[0_20px_70px_rgba(0,0,0,0.12)] md:px-14 md:py-16 lg:px-20">

   

        {/* Main headline */}
      <h1 className="text-[clamp(52px,7vw,94px)] font-semibold leading-[0.94] tracking-[-0.035em] text-black">
           The Hanson
          <br />
          Hotline,
          <br />

          {/* Preserved + custom smudge */}
          <span className="relative inline-block">
            <img
              src={smudge}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute z-0 object-fill"
              style={{
                left: "0%",
                top: "15%",
                width: "130%",
                height: "100%",
                maxWidth: "none",
              }}
            />

            <span className="relative z-10">
              preserved.
            </span>
          </span>
        </h1>

    {/* Description */}
<p className="mt-8 max-w-[610px] text-lg leading-relaxed text-black/60 md:text-xl">
  An archive of messages left by the band{" "}
  <a
    href="https://www.hanson.net"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-black"
  >
    Hanson
  </a>{" "}
  for their fans between 1997 and 2003.
</p>

        {/* Actions */}
        <div className="mt-9 flex flex-wrap items-center gap-8">
          <a
            href="#archive"
            className="flex items-center gap-8 rounded-full bg-black px-7 py-4 font-medium text-white transition-transform hover:scale-[1.02]"
          >
            Browse messages
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="/about"
            className="border-b-2 border-[#ffc000] pb-1 font-medium text-black"
          >
            Learn more
          </a>
        </div>

      </div>
    </section>
  )
}