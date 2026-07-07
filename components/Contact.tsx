export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 px-6"
      style={{ background: '#faf7f4' }}
      aria-label="Contacto y ubicación"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Left: contact info */}
        <div className="fade-up">
          <h2
            className="text-[#1c1008] mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 4vw, 46px)',
            }}
          >
            Encuéntranos
          </h2>

          <div
            className="space-y-5 text-[#4a3828]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15 }}
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-[#9e6b72]" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              </span>
              <p>Emiliano Zapata, León Centro<br />Guanajuato 37000</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#9e6b72]" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.87 11.5 19.79 19.79 0 0 1 1.81 2.87 2 2 0 0 1 3.8 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.51 5.51l.91-1.16a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.5v1.42z"/></svg>
              </span>
              <a
                href="tel:4771574824"
                className="hover:text-[#9e6b72] transition-colors"
              >
                477 157 4824
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#9e6b72]" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </span>
              <p>Lunes a Sábado · 9am – 7pm</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#9e6b72]" aria-hidden="true">
                {/* Facebook icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </span>
              <a
                href="https://www.facebook.com/beautylashstudiogto/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#9e6b72] transition-colors"
              >
                facebook.com/beautylashstudiogto
              </a>
            </div>
          </div>
        </div>

        {/* Right: map */}
        <div className="fade-up">
          <iframe
            title="Ubicación AB Centro de Belleza en León, Guanajuato"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.1!2d-101.6839!3d21.1180!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzA0LjgiTiAxMDHCsDQxJzAxLjkiVw!5e0!3m2!1ses!2smx!4v1234567890"
            width="100%"
            height="380"
            style={{ border: 0, borderRadius: 16, boxShadow: '0 4px 24px rgba(28,16,8,0.10)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
