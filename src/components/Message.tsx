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
    avatarText: string
    accent: string
  }
> = {
  isaac: {
    name: "text-[#c86c2e]",
    avatarText: "text-[#c86c2e]",
    accent: "before:bg-[#c86c2e]",
  },

  taylor: {
    name: "text-[#b24c7f]",
    avatarText: "text-[#b24c7f]",
    accent: "before:bg-[#b24c7f]",
  },

  zac: {
    name: "text-[#932a2f]",
    avatarText: "text-[#932a2f]",
    accent: "before:bg-[#932a2f]",
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
    <div className="flex items-start gap-4">
      {/* Avatar */}
      <div
        className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-regular ${t.avatarText}`}
      >
        {initial}
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Speaker name */}
        <p className={`text-sm font-medium tracking-wide ${t.name}`}>
          {name}
        </p>

        {/* Bubble */}
        <div
          className={`relative mt-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-relaxed text-white/90`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}