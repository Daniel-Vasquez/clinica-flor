import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

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
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains('light'));
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.add('theme-transitioning');
    setTimeout(() => html.classList.remove('theme-transitioning'), 350);

    if (isLight) {
      html.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setIsLight(false);
    } else {
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsLight(true);
    }
  };

  /* Derived classes */
  const headerBg = scrolled
    ? isLight
      ? 'bg-white/95 backdrop-blur-md border-b border-[#4b528a]/20 py-3'
      : 'bg-[#272538]/95 backdrop-blur-md border-b border-[#4b528a]/40 py-3'
    : 'bg-transparent';

  /* When not scrolled the header is over the always-dark hero → keep light text */
  const linkClass = scrolled && isLight
    ? 'text-[#4b528a] hover:text-[#272538]'
    : 'text-[#7d84b2] hover:text-white';

  const iconColor = scrolled && isLight ? 'text-[#272538]' : 'text-white';

  const toggleClass = scrolled && isLight
    ? 'border-[#4b528a]/30 text-[#4b528a] hover:border-[#67c5d4] hover:text-[#67c5d4]'
    : 'border-[#4b528a]/50 text-[#7d84b2] hover:border-[#67c5d4] hover:text-[#67c5d4]';

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${headerBg}`}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <a href="/" className="shrink-0 flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Clínica Flor — Dra. Flor Moreno"
              className="h-24 w-auto"
              width="120"
              height="32"
            />
          </a>

          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${linkClass}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={isLight ? 'Activar modo oscuro' : 'Activar modo claro'}
              className={`w-9 h-9 rounded-full border flex items-center justify-center
                         transition-all duration-200 ${toggleClass}`}
            >
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <a
              href={DOCTORALIA}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#67c5d4] text-[#272538] font-bold
                         px-6 py-2.5 rounded-full text-sm
                         hover:bg-[#67c5d4]/90 transition-all duration-200 whitespace-nowrap"
            >
              Agenda tu cita →
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            className={`md:hidden p-2 -mr-2 ${iconColor} transition-colors duration-300`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center
                    transition-opacity duration-400 md:hidden
                    ${isLight ? 'bg-[#f2f0fc]' : 'bg-[#272538]'}
                    ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <button
          onClick={close}
          aria-label="Cerrar menú"
          className={`absolute top-5 right-6 p-2 ${isLight ? 'text-[#272538]' : 'text-white'}`}
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
              className={`font-heading text-3xl font-bold hover:text-[#67c5d4] transition-colors duration-200
                         ${isLight ? 'text-[#1a1830]' : 'text-white'}`}
            >
              {label}
            </a>
          ))}

          {/* Theme toggle in mobile menu */}
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-2.5 text-sm font-medium px-5 py-2.5 rounded-full border
                       transition-all duration-200
                       ${isLight
                         ? 'border-[#4b528a]/30 text-[#4b528a] hover:border-[#67c5d4] hover:text-[#67c5d4]'
                         : 'border-[#4b528a]/50 text-[#7d84b2] hover:border-[#67c5d4] hover:text-[#67c5d4]'
                       }`}
          >
            {isLight ? <Moon size={15} /> : <Sun size={15} />}
            {isLight ? 'Modo oscuro' : 'Modo claro'}
          </button>

          <a
            href={DOCTORALIA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-2 bg-[#67c5d4] text-[#272538] font-bold
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
