import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Secuencia de fotogramas: public/hero-video/fotograma_0001.webp ... fotograma_0192.webp
const FRAME_COUNT = 192;
// Distancia de scroll (en múltiplos de 100vh) que el usuario debe recorrer
// para ver la secuencia completa. Más alto = scrub más lento/largo.
const SCRUB_VIEWPORTS = 4;

const getFramePath = (frameNumber: number) =>
  `/hero-video/fotograma_${String(frameNumber).padStart(4, "0")}.webp`;

interface CanvasScrollHeroProps {
  id?: string;
  children?: ReactNode;
}

export default function CanvasScrollHero({ id, children }: CanvasScrollHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const sequenceRef = useRef({ frame: 0 });
  const drawFrameRef = useRef<(frameIndex: number) => void>(() => {});

  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // 1) Tamaño de canvas + precarga de imágenes. Se ejecuta una sola vez.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Dibuja un fotograma con comportamiento equivalente a `object-fit: cover`.
    const drawFrame = (frameIndex: number) => {
      const img = imagesRef.current[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasW = canvas.width;
      const canvasH = canvas.height;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = canvasW / canvasH;

      let drawW: number;
      let drawH: number;
      if (imgRatio > canvasRatio) {
        drawH = canvasH;
        drawW = drawH * imgRatio;
      } else {
        drawW = canvasW;
        drawH = drawW / imgRatio;
      }
      const offsetX = (canvasW - drawW) / 2;
      const offsetY = (canvasH - drawH) / 2;

      ctx.clearRect(0, 0, canvasW, canvasH);
      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    };
    drawFrameRef.current = drawFrame;

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      drawFrame(Math.round(sequenceRef.current.frame));
    };
    setCanvasSize();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      // Debounce: recalcular tamaño de canvas y el recorrido del ScrollTrigger.
      resizeTimer = setTimeout(() => {
        setCanvasSize();
        ScrollTrigger.refresh();
      }, 150);
    };
    window.addEventListener("resize", handleResize);

    // Precarga de las 192 imágenes. Bloqueamos el scroll de la página
    // hasta que TODAS estén listas, para evitar parpadeos al hacer scroll rápido.
    let cancelled = false;
    let loaded = 0;
    const images: HTMLImageElement[] = [];
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = getFramePath(i);

      const handleSettled = () => {
        if (cancelled) return;
        loaded += 1;
        setLoadedCount(loaded);

        if (i === 1) drawFrame(0);

        if (loaded === FRAME_COUNT) {
          setIsReady(true);
          document.body.style.overflow = previousOverflow;
        }
      };

      img.onload = handleSettled;
      img.onerror = handleSettled; // no bloquear el preload por un frame roto
      images.push(img);
    }
    imagesRef.current = images;

    return () => {
      cancelled = true;
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // 2) Pin + ScrollTrigger, solo una vez que todas las imágenes están cargadas.
  useEffect(() => {
    if (!isReady) return;

    const section = sectionRef.current;
    if (!section) return;

    const tween = gsap.to(sequenceRef.current, {
      frame: FRAME_COUNT - 1,
      ease: "none",
      snap: "frame",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * SCRUB_VIEWPORTS}`,
        scrub: true, // vinculación exacta (sin retraso) al progreso del scroll
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
      onUpdate: () => {
        drawFrameRef.current(Math.round(sequenceRef.current.frame));
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [isReady]);

  const loadPercent = Math.round((loadedCount / FRAME_COUNT) * 100);

  return (
    <div
      id={id}
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#272538" }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 block h-full w-full"
      />

      {children && <div className="absolute inset-0 z-10">{children}</div>}

      {/* Loader: bloquea la vista hasta que las 192 imágenes están precargadas */}
      <div
        className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-4 transition-opacity duration-700 ease-out"
        style={{
          backgroundColor: "#272538",
          opacity: isReady ? 0 : 1,
          pointerEvents: isReady ? "none" : "auto",
        }}
        aria-hidden={isReady}
      >
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#67c5d4]/25 border-t-[#67c5d4]" />
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#7d84b2]">
          Cargando {loadPercent}%
        </span>
      </div>
    </div>
  );
}
