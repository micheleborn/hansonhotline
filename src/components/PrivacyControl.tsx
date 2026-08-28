import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const CONSENT_KEY = "hansonhotline-analytics-consent"
const CLOUDFLARE_TOKEN = "YOUR_CLOUDFLARE_WEB_ANALYTICS_TOKEN"
const SCRIPT_ID = "cloudflare-web-analytics"

type AnalyticsPreference = "enabled" | "disabled"

function loadCloudflareAnalytics() {
  if (document.getElementById(SCRIPT_ID)) return

  const script = document.createElement("script")

  script.id = SCRIPT_ID
  script.type = "module"
  script.src = "https://static.cloudflareinsights.com/beacon.min.js"
  script.defer = true

  script.setAttribute(
    "data-cf-beacon",
    JSON.stringify({
      token: CLOUDFLARE_TOKEN,
    })
  )

  document.body.appendChild(script)
}

function removeCloudflareAnalytics() {
  const script = document.getElementById(SCRIPT_ID)

  if (script) {
    script.remove()
  }
}

export default function PrivacyControl() {
  const [open, setOpen] = useState(false)
  const [analytics, setAnalytics] =
    useState<AnalyticsPreference>("disabled")

  useEffect(() => {
    const savedPreference = window.localStorage.getItem(CONSENT_KEY)

    if (savedPreference === "enabled") {
      setAnalytics("enabled")
      loadCloudflareAnalytics()
      return
    }

    setAnalytics("disabled")
  }, [])

  const enableAnalytics = () => {
    window.localStorage.setItem(CONSENT_KEY, "enabled")
    setAnalytics("enabled")
    loadCloudflareAnalytics()
  }

  const disableAnalytics = () => {
    window.localStorage.setItem(CONSENT_KEY, "disabled")
    setAnalytics("disabled")
    removeCloudflareAnalytics()
  }

  const enabled = analytics === "enabled"

  return (
    <div className="fixed bottom-5 right-5 z-[100]">
      {open && (
        <div
          id="privacy-settings"
          className="mb-3 w-[calc(100vw-40px)] max-w-[340px] rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.14)]"
        >
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">
                Privacy
              </p>

              <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-black">
                Analytics preferences
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close privacy settings"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg text-black/40 transition hover:bg-black/5 hover:text-black"
            >
              ×
            </button>
          </div>

          <p className="mt-4 text-sm leading-6 text-black/55">
            Hanson Hotline uses privacy-first Cloudflare Web Analytics to
            understand how the archive is being used. You can turn analytics
            on or off at any time.
          </p>

          <div className="mt-6 flex items-center justify-between gap-5 rounded-[18px] bg-[#f5f5f5] px-4 py-4">
            <div>
              <p className="text-sm font-semibold text-black">
                Analytics
              </p>

              <p className="mt-1 text-xs text-black/45">
                {enabled ? "Currently enabled" : "Currently disabled"}
              </p>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={enabled}
              onClick={enabled ? disableAnalytics : enableAnalytics}
              className={[
                "relative h-7 w-12 shrink-0 rounded-full transition-colors duration-200",
                enabled ? "bg-black" : "bg-black/15",
              ].join(" ")}
            >
              <span
                className={[
                  "absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200",
                  enabled ? "translate-x-6" : "translate-x-1",
                ].join(" ")}
              />
            </button>
          </div>

          <div className="mt-5 flex items-center gap-4 text-xs">
            <Link
              to="/privacy"
              onClick={() => setOpen(false)}
              className="font-semibold text-black underline decoration-black/25 underline-offset-4 transition hover:decoration-black"
            >
              Privacy policy
            </Link>

            <span className="text-black/20">·</span>

            <span className="text-black/40">
              No advertising trackers
            </span>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label="Open privacy settings"
        aria-expanded={open}
        aria-controls="privacy-settings"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-[21px] shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(0,0,0,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black"
      >
        🍪
      </button>
    </div>
  )
}