export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <div className="text-lg flex tracking-wide text-white">
          <div className="font-bold">hanson</div>
           <div className="font-light">hotline</div>
        </div>

        <nav className="flex items-center gap-8 text-sm text-white/60">
          <a
            href="#what-is-hotline"
            className="transition hover:text-[#ec7d33]"
          >
         About
          </a>


          <a
            href="#who-is-quietoode"
            className="transition hover:text-[#ec7d33]"
          >
           Contact
          </a>
        </nav>
      </div>
    </header>
  )
}