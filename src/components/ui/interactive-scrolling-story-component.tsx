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
    image: "public/images/padecimientos/padecimiento-hemorroides.jpeg",
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
      "public/images/padecimientos/predecimiento-fistula-anal.jpeg",
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
      "public/images/padecimientos/predecimiento-fisuras-anales.jpeg",
    bgColor:     "#272538",
    accentColor: "#67c5d4",
  },
];

// ── Main component ─────────────────────────────────────────────────────────
export function ScrollingFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detecta el slide activo según el scroll de la PÁGINA
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
        Math.floor(progress * slidesData.length),
      );
      setActiveIndex(nextIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll programático al hacer clic en paginación
  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return;
    const top    = containerRef.current.offsetTop;
    const total  = containerRef.current.offsetHeight - window.innerHeight;
    const target = top + (total * index) / slidesData.length + 1;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const current = slidesData[activeIndex];

  return (
    <div ref={containerRef} style={{ height: `${slidesData.length * 100}vh` }}>

      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{
          backgroundColor: current.bgColor,
          transition:       "background-color 0.7s ease",
        }}
      >
        {/* ── Capas de fondo con fade-in/out (mobile y desktop) ───────── */}
        {slidesData.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backgroundImage:    `url(${slide.image})`,
              backgroundSize:     "cover",
              backgroundPosition: "center",
              opacity:            i === activeIndex ? 0.28 : 0,
              transition:         "opacity 0.7s ease",
            }}
          />
        ))}
        {/* Overlay para garantizar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {/* ── Grid principal ─────────────────────────────────────────────── */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">

          {/* Columna izquierda — texto */}
          <div className="relative flex flex-col justify-center px-8 md:px-16">

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
                  <span
                    className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full border inline-block mb-6"
                    style={{
                      color:       slide.accentColor,
                      borderColor: `${slide.accentColor}33`,
                    }}
                  >
                    /{slide.number}
                  </span>

                  <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white font-heading">
                    {slide.title}
                  </h2>

                  <p
                    className="text-xs font-semibold uppercase tracking-wider mt-2"
                    style={{ color: slide.accentColor }}
                  >
                    {slide.subtitle}
                  </p>

                  <p className="mt-6 text-base md:text-lg max-w-md leading-relaxed text-[#7d84b2]">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

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

        </div>
      </div>
    </div>
  );
}

export default ScrollingFeatureShowcase;
