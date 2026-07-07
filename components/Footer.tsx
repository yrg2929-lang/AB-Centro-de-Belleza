export default function Footer() {
  return (
    <footer style={{ background: '#f0e8df' }} aria-label="Pie de página">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: logo + name */}
        <div className="flex items-center gap-3">
          {/* hosted logo goes here */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/571126678_828973516740848_8447722791193695558_n-QpWIyMvjIVz5hTRUE8YZHLQ5GU1GAx.jpg"
            alt="AB Centro de Belleza logo"
            className="rounded-full object-cover"
            style={{ height: 40, width: 40 }}
          />
          <span
            className="text-[#1c1008]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600 }}
          >
            AB Centro de Belleza
          </span>
        </div>

        {/* Center: Facebook */}
        <a
          href="https://www.facebook.com/beautylashstudiogto/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook AB Centro de Belleza"
          className="text-[#9e6b72] hover:opacity-70 transition-opacity"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>

        {/* Right: phone */}
        <a
          href="tel:4771574824"
          className="text-[#4a3828] hover:text-[#9e6b72] transition-colors text-sm"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          477 157 4824
        </a>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-[#1c1008]/10 py-5 px-6 text-center text-xs text-[#6b5a50]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        © 2026 AB Centro de Belleza · León, Guanajuato
      </div>
    </footer>
  )
}
