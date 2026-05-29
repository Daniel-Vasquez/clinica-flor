import React, { useState, useEffect, useRef } from "react";

const DOCTORALIA =
  "https://www.doctoralia.com.mx/flor-gisela-moreno-flores/cirujano-general-proctologo/benito-juarez?utm_id=59944&utm_source=widget-doctor-59944&utm_medium=big_with_calendar&utm_campaign=&utm_content=#highlight-calendar";

// ── Datos de los padecimientos ─────────────────────────────────────────────
const slidesData = [
  {
    number:      "01",
    title:       "Hemorroides",
    subtitle:    "También conocidas como almorranas",
    description:
      "Las hemorroides son venas inflamadas en el recto o el ano. Pueden causar dolor, sangrado y molestia, pero con el tratamiento adecuado se resuelven de forma efectiva sin necesidad de cirugía en la mayoría de los casos.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=80&auto=format&fit=crop",
    bgColor:     "#272538",
    accentColor: "#67c5d4",
  },
  {
    number:      "02",
    title:       "Fisuras Anales",
    subtitle:    "Herida en la piel perianal",
    description:
      "Es una herida en la piel perianal producida por trauma anal que genera dolor intenso durante y después de evacuar. Con manejo médico adecuado se puede cicatrizar sin necesidad de cirugía en la mayoría de los casos.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&auto=format&fit=crop",
    bgColor:     "#1e1c2e",
    accentColor: "#EF999E",
  },
  {
    number:      "03",
    title:       "Fístula Anal",
    subtitle:    "Comunicación anormal",
    description:
      "Comunicación anormal entre la piel perianal y el ano que genera secreción constante y molestia. Requiere diagnóstico preciso y tratamiento especializado para su resolución definitiva y definitiva prevención de recidivas.",
    image:
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=900&q=80&auto=format&fit=crop",
    bgColor:     "#272538",
    accentColor: "#67c5d4",
  },
];

// ── Grid pattern para la columna derecha ───────────────────────────────────
const gridStyle: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(to right,  rgba(103,197,212,0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(103,197,212,0.06) 1px, transparent 1px)
  `,
  backgroundSize: "3.5rem 3.5rem",
};

// ── Main component ─────────────────────────────────────────────────────────
export function ScrollingFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detecta el slide activo según el scroll de la PÁGINA (no scroll interno)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect        = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      const scrolled    = Math.max(0, -rect.top);

      if (scrolled >= totalScroll) return;

      const progress  = scrolled / totalScroll;
      const nextIndex = Math.min(
        slidesData.length - 1,
        Math.floor(progress * slidesData.length)
      );
      setActiveIndex(nextIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // cálculo inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll programático al hacer clic en un dot/bar de paginación
  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return;
    const top    = containerRef.current.offsetTop;
    const total  = containerRef.current.offsetHeight - window.innerHeight;
    const target = top + (total * index) / slidesData.length + 1;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const current = slidesData[activeIndex];

  return (
    // El contenedor ocupa n × 100vh en el flujo normal de la página
    <div ref={containerRef} style={{ height: `${slidesData.length * 100}vh` }}>

      {/* Panel sticky: permanece en vista mientras el usuario hace scroll */}
      <div
        className="sticky top-0 h-screen w-full"
        style={{
          backgroundColor: current.bgColor,
          transition:       "background-color 0.7s ease",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">

          {/* ── Columna izquierda: texto + paginación ── */}
          <div className="relative flex flex-col justify-center px-8 md:px-16 border-r border-white/10">

            {/* Etiqueta de sección + barras de paginación */}
            <div className="absolute top-12 left-8 md:left-16">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7d84b2] mb-4">
                Padecimientos que atiendo
              </p>
              <div className="flex gap-2">
                {slidesData.map((slide, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSlide(i)}
                    aria-label={`Ir a ${slide.title}`}
                    className="h-1 rounded-full transition-all duration-500"
                    style={{
                      width:           i === activeIndex ? "48px" : "24px",
                      backgroundColor:
                        i === activeIndex
                          ? slide.accentColor
                          : "rgba(125,132,178,0.3)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Área de contenido animada por slide */}
            <div className="relative h-80 w-full mt-4">
              {slidesData.map((slide, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-all duration-700 ease-in-out"
                  style={{
                    opacity:   i === activeIndex ? 1 : 0,
                    transform: i === activeIndex ? "translateY(0)" : "translateY(40px)",
                  }}
                >
                  {/* Número + badge */}
                  <span
                    className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full border inline-block mb-6"
                    style={{
                      color:        slide.accentColor,
                      borderColor:  `${slide.accentColor}33`,
                    }}
                  >
                    /{slide.number}
                  </span>

                  {/* Título */}
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white font-heading">
                    {slide.title}
                  </h2>

                  {/* Subtítulo */}
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mt-2"
                    style={{ color: slide.accentColor }}
                  >
                    {slide.subtitle}
                  </p>

                  {/* Descripción */}
                  <p className="mt-6 text-base md:text-lg max-w-md leading-relaxed text-[#7d84b2]">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="absolute bottom-14 left-8 md:left-16 flex flex-col sm:flex-row gap-3">
              <a
                href={DOCTORALIA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-bold rounded-full
                           text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: "#67c5d4", color: "#272538" }}
              >
                Agenda tu consulta →
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold rounded-full
                           text-sm text-white transition-colors hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Ver todos los padecimientos
              </a>
            </div>
          </div>

          {/* ── Columna derecha: imagen con slider vertical ── */}
          <div
            className="hidden md:flex items-center justify-center p-8"
            style={gridStyle}
          >
            <div className="relative w-[55%] h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/*
                Truco del slider vertical:
                - Inner div tiene h-full (= 80vh del contenedor)
                - Cada img también h-full (80vh), apiladas verticalmente (overflow)
                - translateY(-i * 100%) mueve en unidades de 80vh
              */}
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  transform:  `translateY(-${activeIndex * 100}%)`,
                  transition: "transform 0.7s ease-in-out",
                }}
              >
                {slidesData.map((slide, i) => (
                  <div key={i} className="w-full h-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                    {/* Overlay degradado bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                ))}
              </div>

              {/* Dot indicators superpuestos */}
              <div className="absolute bottom-5 right-5 flex flex-col gap-2 z-10">
                {slidesData.map((slide, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSlide(i)}
                    aria-label={`Ir a ${slide.title}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width:           "6px",
                      height:          i === activeIndex ? "20px" : "6px",
                      backgroundColor:
                        i === activeIndex
                          ? slide.accentColor
                          : "rgba(255,255,255,0.3)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingFeatureShowcase;
