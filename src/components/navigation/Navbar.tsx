import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const DOCTORALIA =
  'https://www.doctoralia.com.mx/flor-gisela-moreno-flores/cirujano-general-proctologo/benito-juarez?utm_id=59944&utm_source=widget-doctor-59944&utm_medium=big_with_calendar&utm_campaign=&utm_content=#highlight-calendar';

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: '#padecimientos', label: 'Padecimientos' },
  { href: '#clinica',       label: 'La Clínica'    },
  { href: '#doctora',       label: 'La Doctora'    },
  { href: '#proceso',       label: 'Proceso'        },
  { href: '#faq',           label: 'FAQ'            },
  { href: '#contacto',      label: 'Contacto'       },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#272538]/95 backdrop-blur-md border-b border-[#4b528a]/40 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <a href="/" className="shrink-0 flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Clínica Flor — Dra. Flor Moreno"
              className="h-8 w-auto"
              width={120}
              height={32}
            />
          </a>

          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[#7d84b2] hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={DOCTORALIA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-[#67c5d4] text-[#272538] font-bold
                       px-6 py-2.5 rounded-full text-sm
                       hover:bg-[#67c5d4]/90 transition-all duration-200 whitespace-nowrap"
          >
            Agenda tu cita →
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            className="md:hidden text-white p-2 -mr-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 bg-[#272538] flex flex-col justify-center items-center
                    transition-opacity duration-400 md:hidden
                    ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <button
          onClick={close}
          aria-label="Cerrar menú"
          className="absolute top-5 right-6 text-white p-2"
        >
          <X size={28} />
        </button>

        <nav className="flex flex-col items-center gap-8 px-8">
          {NAV_LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              onClick={close}
              style={{ transitionDelay: menuOpen ? `${i * 55}ms` : '0ms' }}
              className="font-heading text-3xl font-bold text-white hover:text-[#67c5d4] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href={DOCTORALIA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-4 bg-[#67c5d4] text-[#272538] font-bold
                       px-10 py-4 rounded-full text-lg
                       hover:bg-[#67c5d4]/90 transition-all duration-200"
          >
            Agenda tu cita →
          </a>
        </nav>
      </div>
    </>
  );
}
