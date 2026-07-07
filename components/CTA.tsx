export default function CTA() {
  return (
    <section
      className="relative flex items-center justify-center py-32 px-6"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-label="Agenda tu cita"
    >
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(28,16,8,0.65)' }}
        aria-hidden="true"
      />
      <div className="relative z-10 text-center max-w-2xl fade-up">
        <h2
          className="text-white mb-5 text-balance"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(38px, 6vw, 64px)',
            lineHeight: 1.1,
          }}
        >
          ¿Lista para brillar?
        </h2>
        <p
          className="text-white/85 mb-10 text-lg leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Agenda tu cita hoy mismo en AB Centro de Belleza
        </p>
        <a
          href="https://wa.me/524771574824?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 font-semibold rounded-md transition-opacity hover:opacity-90 text-base"
          style={{
            background: '#ffffff',
            color: '#1c1008',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Agendar por WhatsApp
        </a>
      </div>
    </section>
  )
}
