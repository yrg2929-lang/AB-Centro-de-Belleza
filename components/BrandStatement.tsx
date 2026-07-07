export default function BrandStatement() {
  return (
    <section
      className="w-full py-20 px-6 text-center fade-up"
      style={{ background: '#f0e8df' }}
      aria-label="Brand statement"
    >
      <p
        className="text-[#1c1008] text-balance leading-snug mx-auto max-w-3xl"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontSize: 'clamp(28px, 4vw, 42px)',
        }}
      >
        Belleza profesional, trato personal.
      </p>
      <p
        className="mt-6 tracking-widest uppercase text-xs font-medium"
        style={{ color: '#9e6b72', fontFamily: "'DM Sans', sans-serif" }}
      >
        Todo en un Lugar · León Centro · Adriana Morales
      </p>
    </section>
  )
}
