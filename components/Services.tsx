const strips = [
  {
    imageLeft: true,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/475271724_610026965302172_470011648649633148_n-7iE77UZxsXDU8vijVJLk1F6kyDmkeW.jpg',
    imageAlt: 'Tratamiento facial profesional en AB Centro de Belleza',
    label: 'TRATAMIENTOS FACIALES',
    heading: 'Piel radiante,\nresultados reales',
    body: 'Limpieza profunda y eliminación de manchas con tecnología especializada. Cada tratamiento es diseñado para las necesidades únicas de tu piel.',
  },
  {
    imageLeft: false,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/485697284_651949637776571_6889009552828889428_n-V6Iukwj0jBcDRTjFBpqrRIBzyV4BJC.jpg',
    imageAlt: 'Extensiones de pestañas aplicadas con precisión',
    label: 'EXTENSIONES DE PESTAÑAS',
    heading: 'Mirada que\nenamora',
    body: 'Extensiones aplicadas con precisión y materiales premium para un resultado natural y duradero que realza tu belleza sin esfuerzo.',
  },
  {
    imageLeft: true,
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80',
    imageAlt: 'Tratamiento de depilación láser profesional',
    label: 'DEPILACIÓN LÁSER',
    heading: 'Olvídate del\nvello para siempre',
    body: 'Tratamientos seguros, eficaces e indoloros con tecnología de última generación. Resultados permanentes desde las primeras sesiones.',
  },
  {
    imageLeft: false,
    // Strip 4: Alaciados — updated URL as requested
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/662970531_962754976696034_2809327963432161124_n-L4ATFkLoUAMo9H9uoPsxtWaSjbmHkS.jpg',
    imageAlt: 'Cabello lacio, suave y brillante — resultado de alaciado profesional',
    label: 'ALACIADOS PROFESIONALES',
    heading: 'Cabello lacio,\nsuave y brillante',
    body: 'Tratamientos de alisado que cuidan, nutren y transforman tu cabello con productos de alta calidad y resultados que duran semanas.',
  },
]

export default function Services() {
  return (
    <section
      id="servicios"
      style={{ background: '#f0e8df' }}
      aria-label="Nuestros servicios"
    >
      {/* Section intro */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-20 pb-10 fade-up">
        <h2
          className="text-[#1c1008] text-balance"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(38px, 5vw, 62px)',
            lineHeight: 1.1,
          }}
        >
          Nuestros <em>Servicios</em>
        </h2>
      </div>

      {/* Strips */}
      {strips.map((strip, i) => (
        <article
          key={i}
          className={`flex flex-col ${strip.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} fade-up`}
          style={{ minHeight: 'clamp(400px, 50vw, 500px)' }}
        >
          {/* Image side */}
          <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden">
            <img
              src={strip.image}
              alt={strip.imageAlt}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Text side */}
          <div
            className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-16 py-12"
            style={{ background: '#faf7f4' }}
          >
            <p
              className="mb-4 tracking-widest uppercase text-xs font-medium"
              style={{ color: '#9e6b72', fontFamily: "'DM Sans', sans-serif" }}
            >
              {strip.label}
            </p>
            <h3
              className="text-[#1c1008] mb-5 text-balance"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 3vw, 38px)',
                lineHeight: 1.15,
                whiteSpace: 'pre-line',
              }}
            >
              {strip.heading}
            </h3>
            <p
              className="text-[#4a3828] leading-relaxed max-w-md"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15 }}
            >
              {strip.body}
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}
