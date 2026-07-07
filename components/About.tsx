export default function About() {
  return (
    <section
      id="nosotros"
      className="flex flex-col md:flex-row"
      style={{ minHeight: 560 }}
      aria-label="Quiénes somos"
    >
      {/* Image — 55% */}
      <div className="w-full md:w-[55%] h-80 md:h-auto overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/588763779_855963454041854_3922381813815593376_n-jgXsYL3yNHdOAacEmWvGmNd5V3sYVC.jpg"
          alt="Adriana Morales realizando un tratamiento facial profesional"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Text — 45% */}
      <div
        className="w-full md:w-[45%] flex flex-col justify-center px-10 md:px-16 py-16"
        style={{ background: '#faf7f4' }}
      >
        <p
          className="mb-5 tracking-widest uppercase text-xs font-medium fade-up"
          style={{ color: '#9e6b72', fontFamily: "'DM Sans', sans-serif" }}
        >
          Quiénes Somos
        </p>
        <h2
          className="text-[#1c1008] leading-tight mb-8 fade-up text-balance"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(34px, 4vw, 48px)',
          }}
        >
          Un espacio creado
          <br />
          para ti
        </h2>
        <p
          className="text-[#4a3828] leading-relaxed mb-5 fade-up"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16 }}
        >
          En AB Centro de Belleza encontrarás un ambiente cálido y profesional, diseñado para que
          te sientas en casa. Adriana Morales y su equipo se dedican a ofrecerte resultados reales
          con un trato completamente personalizado, escuchando cada detalle de lo que necesitas.
        </p>
        <p
          className="text-[#4a3828] leading-relaxed mb-10 fade-up"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16 }}
        >
          Ubicados en el corazón de León Centro, Guanajuato, reunimos todos nuestros servicios
          bajo un mismo techo para que tu experiencia sea cómoda, eficiente y, sobre todo,
          transformadora. Aquí tu bienestar y belleza son siempre la prioridad.
        </p>
        <a
          href="#servicios"
          className="self-start font-medium transition-colors hover:opacity-70 fade-up"
          style={{ color: '#9e6b72', fontFamily: "'DM Sans', sans-serif", fontSize: 15 }}
        >
          Ver nuestros servicios →
        </a>
      </div>
    </section>
  )
}
