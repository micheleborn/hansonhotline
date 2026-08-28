import smudge from "../assets/smudge.png"
import ring1 from "../assets/ring1.png"
import ring2 from "../assets/ring2.png"
import ring3 from "../assets/ring3.png"
import ring4 from "../assets/ring4.png"

type HeroProps = {
  onRandomMessage: () => void
}

export default function Hero({ onRandomMessage }: HeroProps) {
  return (
    <>
      <section
        id="top"
        className="relative overflow-hidden bg-white px-6 pb-16 pt-20 md:px-10 md:pb-20 md:pt-24"
      >
        <div className="mx-auto max-w-[1200px] text-center">
       

          {/* TITLE */}
       <h1 className="mx-auto mt-5 text-[clamp(52px,7vw,88px)] font-semibold leading-[0.94] tracking-[-0.035em] text-black">
  Call{" "}
  <span className="relative inline-block">
    <img
      src={smudge}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute z-0 max-w-none"
      style={{
        left: "-7%",
        top: "12%",
        width: "118%",
        height: "92%",
        objectFit: "fill",
      }}
    />

    <span className="relative z-10">Hanson</span>
  </span>
  . <br />Once Again.
</h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-7 max-w-[650px] text-[17px] leading-relaxed text-black/55 md:text-[19px]">
            Original Hanson Hotline recordings and transcripts, <br /> preserved from
            1997–2005.
          </p>

          {/* PHONE STAGE */}
          <div className="relative mx-auto mt-8 max-w-[820px]">
          {/* DESKTOP RINGS */}

<img
  src={ring1}
  alt=""
  aria-hidden="true"
  className="ring-img ring-img-one absolute left-[-2%] top-[7%] z-20 hidden w-[135px] select-none md:block lg:left-[-4%] lg:w-[150px]"
  draggable="false"
/>

<img
  src={ring2}
  alt=""
  aria-hidden="true"
  className="ring-img ring-img-two absolute right-[-2%] top-[11%] z-20 hidden w-[140px] select-none md:block lg:right-[-5%] lg:w-[155px]"
  draggable="false"
/>

<img
  src={ring3}
  alt=""
  aria-hidden="true"
  className="ring-img ring-img-three absolute bottom-[20%] left-[-1%] z-20 hidden w-[145px] select-none md:block lg:left-[-5%] lg:w-[165px]"
  draggable="false"
/>

<img
  src={ring4}
  alt=""
  aria-hidden="true"
  className="ring-img ring-img-four absolute bottom-[21%] right-[-2%] z-20 hidden w-[130px] select-none md:block lg:right-[-4%] lg:w-[150px]"
  draggable="false"
/>

{/* MOBILE RINGS */}

<img
  src={ring1}
  alt=""
  aria-hidden="true"
  className="ring-img ring-mobile-one absolute left-[-8px] top-[13%] z-20 w-[76px] select-none md:hidden"
  draggable="false"
/>

<img
  src={ring2}
  alt=""
  aria-hidden="true"
  className="ring-img ring-mobile-two absolute right-[-7px] top-[23%] z-20 w-[82px] select-none md:hidden"
  draggable="false"
/>
            {/* PHONE */}

            <button
              type="button"
              onClick={onRandomMessage}
              aria-label="Hear a random Hanson Hotline message"
              className="phone-button group relative z-10 mx-auto block w-full max-w-[580px] cursor-pointer border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <img
                src="/hero-img.png"
                alt="Vintage black rotary telephone"
                className="mx-auto block w-full select-none transition-transform duration-300 group-hover:scale-[1.015]"
                draggable="false"
              />
            </button>

            {/* SURPRISE ME */}

  <a
  href="#featured-audio"
  className="group relative z-30 mx-auto mt-5 inline-flex items-center justify-center gap-3 rounded-full bg-black px-8 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#ffc400] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
>
  Are you listening?

  <span
    aria-hidden="true"
    className="text-[15px] text-[#ffc400] transition-colors group-hover:text-black"
  >
    ☎
  </span>
</a>

            {/* YEARS */}

            <p className="mt-5 text-[10px] font-bold tracking-[0.27em] text-black/30">
              1997 — 2005
            </p>

            {/* ARCHIVE LINK */}

            <a
              href="#archive"
              className="mt-5 inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-black/45 underline decoration-black/20 underline-offset-4 transition hover:text-black"
            >
              Or browse the full archive ↓
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .ring-img {
          pointer-events: none;
          user-select: none;
          transform-origin: center center;
          will-change: transform;
        }

        .ring-img-one {
          animation: ringOne 1.65s ease-in-out infinite;
        }

        .ring-img-two {
          animation: ringTwo 2.05s ease-in-out infinite;
          animation-delay: -0.65s;
        }

        .ring-img-three {
          animation: ringThree 1.9s ease-in-out infinite;
          animation-delay: -1.1s;
        }

        .ring-img-four {
          animation: ringFour 2.25s ease-in-out infinite;
          animation-delay: -0.4s;
        }

        .phone-button {
          transform-origin: 50% 38%;
        }

        .phone-button:hover {
          animation: phoneRing 0.18s ease-in-out 4;
        }

        @keyframes ringOne {
          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              rotate(-8deg)
              scale(1);
          }

          18% {
            transform:
              translate3d(-5px, 2px, 0)
              rotate(-12deg)
              scale(1.04);
          }

          32% {
            transform:
              translate3d(4px, -3px, 0)
              rotate(-4deg)
              scale(1.08);
          }

          46% {
            transform:
              translate3d(-2px, 1px, 0)
              rotate(-10deg)
              scale(1.02);
          }
        }

        @keyframes ringTwo {
          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              rotate(7deg)
              scale(1);
          }

          22% {
            transform:
              translate3d(5px, -6px, 0)
              rotate(11deg)
              scale(1.05);
          }

          37% {
            transform:
              translate3d(-3px, 2px, 0)
              rotate(4deg)
              scale(0.98);
          }

          53% {
            transform:
              translate3d(3px, -2px, 0)
              rotate(9deg)
              scale(1.04);
          }
        }

        @keyframes ringThree {
          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              rotate(5deg)
              scale(1);
          }

          20% {
            transform:
              translate3d(-4px, -4px, 0)
              rotate(1deg)
              scale(0.97);
          }

          34% {
            transform:
              translate3d(5px, 2px, 0)
              rotate(9deg)
              scale(1.08);
          }

          48% {
            transform:
              translate3d(-2px, -2px, 0)
              rotate(4deg)
              scale(1.02);
          }
        }

        @keyframes ringFour {
          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              rotate(-6deg)
              scale(1);
          }

          24% {
            transform:
              translate3d(6px, 2px, 0)
              rotate(-2deg)
              scale(1.06);
          }

          40% {
            transform:
              translate3d(-4px, -4px, 0)
              rotate(-10deg)
              scale(0.99);
          }

          56% {
            transform:
              translate3d(3px, 1px, 0)
              rotate(-4deg)
              scale(1.04);
          }
        }

        @keyframes phoneRing {
          0%,
          100% {
            transform: rotate(0deg);
          }

          25% {
            transform: rotate(-1.2deg);
          }

          50% {
            transform: rotate(1.2deg);
          }

          75% {
            transform: rotate(-0.7deg);
          }
        }

        .ring-mobile-one {
          animation: mobileRingOne 1.8s ease-in-out infinite;
        }

        .ring-mobile-two {
          animation: mobileRingTwo 2.1s ease-in-out infinite;
          animation-delay: -0.8s;
        }

        @keyframes mobileRingOne {
          0%,
          100% {
            transform: rotate(-8deg) scale(1);
          }

          35% {
            transform:
              translate(-3px, -2px)
              rotate(-12deg)
              scale(1.05);
          }

          50% {
            transform:
              translate(3px, 1px)
              rotate(-5deg)
              scale(1.02);
          }
        }

        @keyframes mobileRingTwo {
          0%,
          100% {
            transform: rotate(7deg) scale(1);
          }

          35% {
            transform:
              translate(3px, -3px)
              rotate(11deg)
              scale(1.06);
          }

          50% {
            transform:
              translate(-2px, 1px)
              rotate(4deg)
              scale(1.01);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ring-img,
          .phone-button:hover {
            animation: none !important;
          }
        }
      `}</style>
    </>
  )
}