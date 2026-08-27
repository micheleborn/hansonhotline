import type { ReactNode } from "react"

export type Tone = "isaac" | "taylor" | "zac"

type MessageProps = {
  initial: string
  name: string
  tone: Tone
  children: ReactNode
}

const toneStyles: Record<
  Tone,
  {
    name: string
    avatar: string
    bubble: string
  }
> = {
  isaac: {
    name: "text-black",
    avatar: "bg-[#e8e4dc] text-black/65",
    bubble: "border-black/10",
  },

  taylor: {
    name: "text-black",
    avatar: "bg-[#e8e4dc] text-black/65",
    bubble: "border-black/10",
  },

  zac: {
    name: "text-black",
    avatar: "bg-[#e8e4dc] text-black/65",
    bubble: "border-black/10",
  },
}

export default function Message({
  initial,
  name,
  tone,
  children,
}: MessageProps) {
  const t = toneStyles[tone] ?? toneStyles.isaac

  if (!toneStyles[tone]) {
    console.warn("Unknown tone:", tone, "for speaker:", name)
  }

  return (
    <article className="flex items-start gap-4">
      {/* Avatar */}
      <div
        className={[
          "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full",
          "text-sm font-semibold",
          t.avatar,
        ].join(" ")}
      >
        {initial}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        {/* Speaker */}
        <p
          className={[
            "text-sm font-semibold tracking-wide",
            t.name,
          ].join(" ")}
        >
          {name}
        </p>

        {/* Transcript text */}
        <div
          className={[
            "mt-2 rounded-[18px] border bg-[#fafafa] px-5 py-4",
            "text-[15px] leading-7 text-black/75",
            t.bubble,
          ].join(" ")}
        >
          {children}
        </div>
      </div>
    </article>
  )
}