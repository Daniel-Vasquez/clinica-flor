import React from "react";
import {
  ArrowRight,
  Play,
  Star,
  Shield,
  Award,
  Activity,
  Stethoscope,
  Building2,
  BadgeCheck,
} from "lucide-react";

const DOCTORALIA =
  "https://www.doctoralia.com.mx/flor-gisela-moreno-flores/cirujano-general-proctologo/benito-juarez?utm_id=59944&utm_source=widget-doctor-59944&utm_medium=big_with_calendar&utm_campaign=&utm_content=#highlight-calendar";

const TRUSTED = [
  { name: "San Ángel Inn Patriotismo", icon: Building2  },
  { name: "Star Médica Luna Parc",     icon: Building2  },
  { name: "Doctoralia ★★★★★",         icon: Star       },
  { name: "12+ Años de experiencia",   icon: Award      },
  { name: "Coloproctología CDMX",      icon: Activity   },
  { name: "Médico certificado",        icon: BadgeCheck },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-[#7d84b2] font-medium sm:text-xs">
      {label}
    </span>
  </div>
);

export default function GlassmorphismTrustHero() {
  return (
    <div
      id="inicio"
      className="relative w-full text-white overflow-hidden"
      style={{ backgroundColor: "#272538" }}
    >
      <style>{`
        @keyframes gthFadeSlideIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gthMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .gth-fade { animation: gthFadeSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; opacity: 0; }
        .gth-marquee { animation: gthMarquee 55s linear infinite; }
        .gth-d1 { animation-delay: 0.12s; }
        .gth-d2 { animation-delay: 0.28s; }
        .gth-d3 { animation-delay: 0.45s; }
        .gth-d4 { animation-delay: 0.62s; }
        .gth-d5 { animation-delay: 0.78s; }
      `}</style>

      {/* Decorative organic blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] -translate-y-1/3 translate-x-1/4 rounded-full bg-[#EF999E]/[0.05] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] translate-y-1/4 -translate-x-1/4 rounded-full bg-[#67c5d4]/[0.05] blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          opacity: 0.42,
          maskImage:
            "linear-gradient(180deg, transparent 0%, black 12%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, black 12%, black 70%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-36 pb-16 sm:px-6 md:pt-48 md:pb-28 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10 items-start">

          <div className="lg:col-span-7 flex flex-col justify-center space-y-10 pt-4">

            <div className="gth-fade gth-d1">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#67c5d4]/30 bg-[#67c5d4]/10 px-4 py-1.5 backdrop-blur-md hover:bg-[#67c5d4]/15 transition-colors duration-500 ease-in-out">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#67c5d4] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#67c5d4]" />
                </span>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#67c5d4]">
                  Especialista en Coloproctología
                </span>
              </div>
            </div>

            <h1
              className="gth-fade gth-d2 font-heading tracking-tight leading-[1.08]"
              style={{
                fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
                maskImage:
                  "linear-gradient(180deg, black 0%, black 82%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, black 0%, black 82%, transparent 100%)",
              }}
            >
              Tu salud es<br />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #67c5d4 0%, #7d84b2 50%, #EF999E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                lo más
              </span>
              <br />
              ¡importante!
            </h1>

            <p className="gth-fade gth-d3 max-w-xl text-lg text-[#7d84b2] leading-loose">
              A través de buenos hábitos alimenticios y un tratamiento adecuado
              podemos evitar complicaciones o cirugías, que te permitan recuperar tu{" "}
              <strong className="text-white/85 font-medium">salud colorrectal.</strong>
            </p>

            <div className="gth-fade gth-d4 flex flex-col sm:flex-row gap-5">
              <a
                href={DOCTORALIA}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full
                           bg-[#67c5d4] px-9 py-4 text-sm font-bold text-[#272538]
                           transition-all duration-500 ease-in-out hover:scale-[1.02] hover:bg-[#67c5d4]/90
                           hover:shadow-[0_8px_32px_rgba(103,197,212,0.35)] active:scale-[0.98]"
              >
                ¡Agenda tu cita ahora!
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#padecimientos"
                className="group inline-flex items-center justify-center gap-2 rounded-full
                           border border-white/15 bg-white/5 px-9 py-4 text-sm font-semibold
                           text-white backdrop-blur-sm transition-all duration-500 ease-in-out
                           hover:bg-white/10 hover:border-white/25"
              >
                <Play className="w-4 h-4 fill-current" />
                Ver padecimientos
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 lg:mt-10">

            <div className="gth-fade gth-d5 relative overflow-hidden rounded-3xl border border-[#4b528a]/50 bg-[#4b528a]/20 p-10 backdrop-blur-xl shadow-2xl">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-[#67c5d4]/[0.06] blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-12 -mb-12 h-48 w-48 rounded-full bg-[#EF999E]/[0.05] blur-3xl pointer-events-none" />

              <div className="relative z-10">

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#67c5d4]/15 ring-1 ring-[#67c5d4]/30">
                    <Stethoscope className="h-6 w-6 text-[#67c5d4]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">12+</div>
                    <div className="text-sm text-[#7d84b2]">Años de experiencia</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#7d84b2]">Satisfacción del paciente</span>
                    <span className="text-white font-medium">98%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[#4b528a]/60">
                    <div
                      className="h-full w-[98%] rounded-full"
                      style={{
                        backgroundImage: "linear-gradient(to right, #67c5d4, #EF999E)",
                      }}
                    />
                  </div>
                </div>

                <div className="h-px w-full bg-[#4b528a]/60 mb-6" />

                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="30+"  label="Pacientes"     />
                  <div className="w-px h-full bg-[#4b528a]/60 mx-auto" />
                  <StatItem value="2"    label="Hospitales"    />
                  <div className="w-px h-full bg-[#4b528a]/60 mx-auto" />
                  <StatItem value="100%" label="Personalizada" />
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#4b528a]/50 bg-[#4b528a]/20 px-3 py-1 text-[10px] font-medium tracking-wide text-[#7d84b2]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    DISPONIBLE
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#4b528a]/50 bg-[#4b528a]/20 px-3 py-1 text-[10px] font-medium tracking-wide text-[#7d84b2]">
                    <Shield className="w-3 h-3 text-[#67c5d4]" />
                    CERTIFICADA
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#4b528a]/50 bg-[#4b528a]/20 px-3 py-1 text-[10px] font-medium tracking-wide text-[#7d84b2]">
                    <Star className="w-3 h-3 text-[#EF999E]" />
                    DOCTORALIA ★★★★★
                  </div>
                </div>
              </div>
            </div>

            <div className="gth-fade gth-d5 relative overflow-hidden rounded-3xl border border-[#4b528a]/50 bg-[#4b528a]/20 py-8 backdrop-blur-xl">
              <h3 className="mb-6 px-8 text-sm font-medium text-[#7d84b2]">
                Atención hospitalaria certificada
              </h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
                }}
              >
                <div className="gth-marquee flex gap-12 whitespace-nowrap px-4">
                  {[...TRUSTED, ...TRUSTED, ...TRUSTED].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 opacity-50 hover:opacity-100
                                 hover:scale-105 cursor-default transition-all duration-500 ease-in-out"
                    >
                      <item.icon className="h-5 w-5 text-[#67c5d4]" />
                      <span className="text-base font-bold text-white tracking-tight">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-[#67c5d4] to-transparent" />
      </div>
    </div>
  );
}
