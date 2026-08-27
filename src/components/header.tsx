export default function Header() {
  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 md:px-10 lg:px-12">
        
        <a
          href="/"
          className="flex items-center text-[24px] tracking-[-0.04em] text-black md:text-[28px]"
        >
          <span className="font-bold text-black">hanson</span>
          <span className="font-light">hotline</span>
        </a>

        <nav className="flex items-center gap-6 text-sm font-medium text-black md:gap-10 md:text-base">
          <a
            href="/#archive"
            className="transition-opacity hover:opacity-50"
          >
            Archive
          </a>

<a
  href="/about"
  className="transition-opacity hover:opacity-50"
>
  About
</a>

   <a
  href="/contact"
  className="transition-opacity hover:opacity-50"
>
  Contact
</a>
        </nav>

      </div>
    </header>
  )
}