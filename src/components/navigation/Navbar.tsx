import { useState, useEffect, useRef, type KeyboardEvent, type FocusEvent } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { padecimientos } from '../../data/padecimientos';

const AGENDA = '/agenda-tu-cita';

interface NavLink {
  href: string;
  label: string;
}

/* Ítem que despliega el mega menú (solo desktop ≥ lg) */
const MEGA_HREF = '/padecimientos';
const MEGA_ID = 'mega-padecimientos';
const DESKTOP_MQ = '(min-width: 1024px)';

const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Inicio'},
  { href: '/padecimientos', label: 'Padecimientos' },
  { href: '/quien-soy', label: '¿Quién soy?' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [pathname, setPathname] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);
  const megaButtonRef = useRef<HTMLButtonElement>(null);

  /* El mega menú solo existe en ≥ lg: en móvil/tablet no se renderiza */
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const update = () => {
      setIsDesktop(mq.matches);
      if (!mq.matches) setMegaOpen(false);
    };
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const openMega = () => {
    if (!isDesktop) return;
    window.clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  /* Pequeño retraso para que el cursor pueda cruzar del enlace al panel */
  const scheduleCloseMega = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 150);
  };

  const onMegaKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && megaOpen) {
      e.stopPropagation();
      setMegaOpen(false);
      megaButtonRef.current?.focus();
    }
  };

  const onMegaBlur = (e: FocusEvent<HTMLLIElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setMegaOpen(false);
  };

  useEffect(() => {
    setPathname(window.location.pathname.replace(/\/$/, '') || '/');
  }, []);

  const isActive = (href: string) =>
    !href.includes('#') && (pathname === href || pathname.startsWith(`${href}/`));

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

  /* Derived classes — fondo semitransparente + blur desde la carga; al hacer
     scroll se vuelve casi opaco y se compacta */
  const headerBg = isLight
    ? scrolled
      ? 'bg-white/95 border-b border-[#4b528a]/20 py-3'
      : 'bg-white/70 border-b border-[#4b528a]/10'
    : scrolled
      ? 'bg-[#272538]/95 border-b border-[#4b528a]/40 py-3'
      : 'bg-[#272538]/60 border-b border-[#4b528a]/20';

  /* Con fondo siempre presente, el contraste depende solo del tema */
  const linkClass = isLight
    ? 'text-[#4b528a] hover:text-[#272538]'
    : 'text-[#fff] hover:text-white';

  const iconColor = isLight ? 'text-[#272538]' : 'text-white';

  const toggleClass = isLight
    ? 'border-[#4b528a]/30 text-[#4b528a] hover:border-[#67c5d4] hover:text-[#67c5d4]'
    : 'border-[#4b528a]/50 text-[#7d84b2] hover:border-[#67c5d4] hover:text-[#67c5d4]';

  const megaPanelClass = isLight
    ? 'bg-white/95 border-[#4b528a]/15 shadow-[0_24px_60px_rgba(39,37,56,0.12)]'
    : 'bg-[#1e1c2e]/95 border-[#4b528a]/40 shadow-[0_24px_60px_rgba(0,0,0,0.35)]';

  const megaItemClass = isLight
    ? 'text-[#272538] hover:bg-[#4b528a]/[0.06]'
    : 'text-white hover:bg-[#4b528a]/25';

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-all duration-500 ${headerBg}`}>
        <nav className="relative max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <a href="/" className="shrink-0 flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Clínica Flor — Dra. Flor Moreno"
              className="h-24 w-auto"
              width="120"
              height="32"
            />
          </a>

          <ul className="hidden md:flex self-stretch items-center gap-7 list-none m-0 p-0">
            {NAV_LINKS.map(({ href, label }) => {
              const linkEl = (
                <a
                  href={href}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={`text-md font-medium tracking-wide transition-colors duration-200 ${
                    isActive(href) ? 'text-[#67c5d4]' : linkClass
                  }`}
                >
                  {label}
                </a>
              );

              if (href !== MEGA_HREF || !isDesktop) return <li key={href}>{linkEl}</li>;

              return (
                <li
                  key={href}
                  className="self-stretch flex items-center gap-1"
                  onMouseEnter={openMega}
                  onMouseLeave={scheduleCloseMega}
                  onKeyDown={onMegaKeyDown}
                  onBlur={onMegaBlur}
                >
                  {linkEl}
                  <button
                    ref={megaButtonRef}
                    type="button"
                    aria-expanded={megaOpen}
                    aria-controls={MEGA_ID}
                    aria-label={`${megaOpen ? 'Ocultar' : 'Mostrar'} lista de padecimientos`}
                    onClick={() => setMegaOpen((v) => !v)}
                    className={`p-1 -m-1 rounded-full transition-colors duration-200 cursor-pointer
                               focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#67c5d4] ${linkClass}`}
                  >
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Mega menú: posicionado respecto al <nav>, no desplaza el layout */}
                  <div
                    id={MEGA_ID}
                    className={`absolute left-6 right-6 lg:left-10 lg:right-10 top-full pt-3
                               transition-all duration-300 ease-out
                               ${megaOpen
                                 ? 'opacity-100 translate-y-0 visible'
                                 : 'opacity-0 -translate-y-2 invisible pointer-events-none'}`}
                  >
                    <ul
                      className={`grid grid-cols-3 xl:grid-cols-4 gap-1 p-4 rounded-3xl border backdrop-blur-md
                                 list-none m-0 ${megaPanelClass}`}
                    >
                      {padecimientos.map((p) => {
                        const itemHref = `/padecimientos/${p.slug}`;
                        const current = isActive(itemHref);
                        return (
                          <li key={p.slug}>
                            <a
                              href={itemHref}
                              aria-current={current ? 'page' : undefined}
                              onClick={() => setMegaOpen(false)}
                              className={`group flex items-center gap-3 rounded-2xl px-3 py-2.5
                                         transition-colors duration-200
                                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#67c5d4]
                                         ${megaItemClass}`}
                            >
                              <img
                                src={p.imagen}
                                alt=""
                                loading="lazy"
                                className="w-10 h-10 rounded-xl object-cover shrink-0 ring-1 ring-[#4b528a]/30"
                              />
                              <span
                                className={`text-sm font-medium leading-snug transition-colors duration-200
                                           group-hover:text-[#67c5d4] ${current ? 'text-[#67c5d4]' : ''}`}
                              >
                                {p.indice.titulo}
                              </span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
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
              href={AGENDA}
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
              aria-current={isActive(href) ? 'page' : undefined}
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
            href={AGENDA}
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
