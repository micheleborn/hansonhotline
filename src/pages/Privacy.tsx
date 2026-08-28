import Header from "../components/header"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black">
      <Header />

      <main>
        <section className="mx-auto max-w-[1200px] px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
            Privacy
          </p>

          <h1 className="mt-5 max-w-[1000px] text-[clamp(52px,7vw,94px)] font-semibold leading-[0.94] tracking-[-0.035em] text-black">
            Your visit.
            <br />
            Your choice.
          </h1>

          <p className="mt-10 max-w-[720px] text-xl leading-relaxed text-black/55 md:text-2xl">
            Hanson Hotline is an independent archival project. We keep data
            collection intentionally minimal.
          </p>
        </section>

        <section className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-[900px] px-6 py-24 md:px-10 md:py-28">
            <div className="space-y-16">
              <PrivacySection title="Analytics">
                <p>
                  Hanson Hotline uses Cloudflare Web Analytics to understand
                  general traffic and how visitors use the archive.
                </p>

                <p>
                  Cloudflare Web Analytics is designed as a privacy-first
                  analytics service. It does not use cookies or localStorage
                  to collect analytics data and does not fingerprint individual
                  visitors.
                </p>

                <p>
                  Analytics is optional on this website. You can enable or
                  disable it at any time using the cookie-shaped privacy
                  control in the bottom-right corner of the screen.
                </p>
              </PrivacySection>

              <PrivacySection title="Your preference">
                <p>
                  When you change the analytics setting, Hanson Hotline stores
                  that preference in your browser&apos;s localStorage so the site
                  can remember your choice on future visits.
                </p>

                <p>
                  This preference is used only to remember whether you chose to
                  enable or disable analytics.
                </p>
              </PrivacySection>

              <PrivacySection title="Cloudflare">
                <p>
                  Hanson Hotline is hosted and delivered through Cloudflare.
                  Cloudflare may process technical information necessary to
                  provide security, performance and delivery services for the
                  website.
                </p>
              </PrivacySection>

              <PrivacySection title="Advertising and profiling">
                <p>
                  Hanson Hotline does not currently use advertising pixels,
                  behavioral advertising systems or cross-site tracking tools.
                </p>
              </PrivacySection>

              <PrivacySection title="External links">
                <p>
                  This site links to third-party websites including Hanson.net,
                  Instagram and other external services. Their privacy
                  practices are governed by their own policies once you leave
                  Hanson Hotline.
                </p>
              </PrivacySection>

              <PrivacySection title="Changes">
                <p>
                  If the site begins using additional analytics, embedded
                  services or other technologies that change how visitor data
                  is handled, this page will be updated accordingly.
                </p>
              </PrivacySection>
            </div>
          </div>
        </section>

        <footer className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <p className="text-sm font-semibold text-black">
                Hanson Hotline
              </p>

              <p className="max-w-[650px] text-sm leading-6 text-black/45 md:text-right">
                Independent archival and fan project. Not affiliated with
                Hanson.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

function PrivacySection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="grid gap-5 md:grid-cols-[220px_1fr] md:gap-12">
      <h2 className="text-2xl font-semibold tracking-[-0.03em] text-black">
        {title}
      </h2>

      <div className="space-y-5 text-base leading-7 text-black/60">
        {children}
      </div>
    </section>
  )
}