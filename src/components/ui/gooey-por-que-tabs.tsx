"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { GooeyFilter } from "./gooey-filter";
import { useScreenSize } from "../../hooks/use-screen-size";

const DOCTORALIA =
  "https://www.doctoralia.com.mx/flor-gisela-moreno-flores/cirujano-general-proctologo/benito-juarez?utm_id=59944&utm_source=widget-doctor-59944&utm_medium=big_with_calendar&utm_campaign=&utm_content=#highlight-calendar";

// ── Datos de los 6 diferenciadores ────────────────────────────────────────
const TAB_CONTENT = [
  {
    title: "Experiencia",
    numero: "01",
    heading: "Experiencia comprobada",
    color: "#67c5d4",
    points: [
      "Más de 12 años de trayectoria comprobada",
      "Referente en coloproctología en CDMX",
      "Casos complejos resueltos con éxito",
      "Pacientes que regresan por recomendación",
    ],
  },
  {
    title: "Confidencial",
    numero: "02",
    heading: "Trato confidencial y personalizado",
    color: "#EF999E",
    points: [
      "Privacidad total garantizada en cada consulta",
      "Tiempo suficiente y dedicado a cada paciente",
      "Explicación clara, sin tecnicismos médicos",
      "Plan de tratamiento diseñado para tu caso",
    ],
  },
  {
    title: "Sin cirugía",
    numero: "03",
    heading: "Alternativas a la cirugía",
    color: "#67c5d4",
    points: [
      "Siempre se exploran opciones menos invasivas",
      "Medicación y cambios de hábitos como primera línea",
      "Procedimientos de consultorio cuando aplica",
      "Cirugía solo cuando es estrictamente necesario",
    ],
  },
  {
    title: "Hospitales",
    numero: "04",
    heading: "Hospitales certificados",
    color: "#EF999E",
    points: [
      "Hospital San Ángel Inn Patriotismo",
      "Hospital Star Médica Luna Parc",
      "Instalaciones de primer nivel en CDMX",
      "Tecnología médica de vanguardia",
    ],
  },
  {
    title: "Seguimiento",
    numero: "05",
    heading: "Seguimiento post-tratamiento",
    color: "#67c5d4",
    points: [
      "Monitoreo continuo de tu recuperación",
      "Citas de seguimiento incluidas en el plan",
      "Ajuste del tratamiento según tu evolución",
      "Prevención efectiva de recidivas",
    ],
  },
  {
    title: "Agenda 24/7",
    numero: "06",
    heading: "Sin esperas innecesarias",
    color: "#EF999E",
    points: [
      "Agenda en línea disponible las 24 horas",
      "Confirmación inmediata vía Doctoralia",
      "Recordatorios automáticos de tu cita",
      "Atención oportuna, sin filas ni esperas",
    ],
  },
];

// ── Theme token helpers ────────────────────────────────────────────────────
function useIsLight() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    setIsLight(html.classList.contains("light"));

    const observer = new MutationObserver(() =>
      setIsLight(html.classList.contains("light"))
    );
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isLight;
}

// ── Component ──────────────────────────────────────────────────────────────
function GooeyPorQueTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const screenSize = useScreenSize();
  const isLight = useIsLight();
  const current = TAB_CONTENT[activeTab];

  // ── Theme tokens ──────────────────────────────────────────────────────
  // tabActiveBg y panelBg DEBEN ser colores sólidos (alpha = 1).
  // El filtro gooey aplica alpha × 19 − 9, por lo que cualquier
  // valor con alpha < 0.47 queda completamente invisible.
  const outerBg      = isLight ? "#f2f0fc" : "#272538";
  const tabActiveBg  = isLight ? "#c8c5e5" : "#4b528a";
  const panelBg      = isLight ? "#d8d5f0" : "#4b528a";
  const headingColor = isLight ? "#1a1830" : "#ffffff";
  const pointColor   = isLight ? "#3d4278" : "#c8d0e0";
  const dividerColor = isLight ? "rgba(75,82,138,0.25)" : "rgba(125,132,178,0.2)";
  const tabActive    = isLight ? "#1a1830" : "#ffffff";
  const tabInactive  = isLight ? "#6b75b0" : "#7d84b2";
  const footerText   = isLight ? "#4b528a" : "#7d84b2";

  return (
    <div className="w-full py-4 px-4 md:px-8" style={{ backgroundColor: outerBg }}>
      <GooeyFilter
        id="gooey-por-que"
        strength={screenSize.lessThan("md") ? 8 : 15}
      />

      <div className="w-full max-w-6xl mx-auto">
        <div className="relative">
          <div style={{ filter: "url(#gooey-por-que)" }}>

            <div className="flex w-full">
              {TAB_CONTENT.map((_, i) => (
                <div key={i} className="relative flex-1 h-10 md:h-12">
                  {activeTab === i && (
                    <motion.div
                      layoutId="gooey-active-tab"
                      className="absolute inset-0"
                      style={{ backgroundColor: tabActiveBg }}
                      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div
              className="w-full h-[270px] sm:h-[300px] md:h-[330px] overflow-hidden"
              style={{ backgroundColor: panelBg }}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0,  filter: "blur(0px)"  }}
                  exit={{    opacity: 0, y: -40, filter: "blur(10px)" }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="p-6 md:p-10"
                >
                  <span
                    className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full border inline-block mb-5"
                    style={{ color: current.color, borderColor: `${current.color}44` }}
                  >
                    /{current.numero}
                  </span>

                  <h3
                    className="text-xl md:text-2xl font-bold font-heading mb-5"
                    style={{ color: headingColor }}
                  >
                    {current.heading}
                  </h3>

                  <ul className="space-y-0">
                    {current.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm py-2 border-b last:border-0"
                        style={{ borderColor: dividerColor }}
                      >
                        <span
                          className="shrink-0 text-xs font-bold"
                          style={{ color: current.color }}
                        >
                          ✓
                        </span>
                        <span style={{ color: pointColor }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute top-0 left-0 right-0 h-10 md:h-12 flex z-10">
            {TAB_CONTENT.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className="flex-1 h-full flex items-center justify-center transition-colors duration-300"
                aria-label={tab.heading}
              >
                <span
                  className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide transition-colors duration-300"
                  style={{ color: activeTab === i ? tabActive : tabInactive }}
                >
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm" style={{ color: footerText }}>
            ¿Lista para dar el primer paso hacia tu recuperación?
          </p>
          <a
            href={DOCTORALIA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold rounded-full
                       transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            style={{ backgroundColor: "#67c5d4", color: "#272538" }}
          >
            Agenda tu primera consulta →
          </a>
        </div>
      </div>
    </div>
  );
}

export { GooeyPorQueTabs };
export default GooeyPorQueTabs;
