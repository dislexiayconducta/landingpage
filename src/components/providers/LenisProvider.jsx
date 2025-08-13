"use client";
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        // Configuraciones adicionales para mejor rendimiento
        lerp: 0.1,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
      });

      function raf(time) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Exponer Lenis globalmente para debugging (opcional)
      if (process.env.NODE_ENV === 'development') {
        window.lenis = lenisRef.current;
      }

      return () => {
        if (lenisRef.current) {
          lenisRef.current.destroy();
        }
        if (process.env.NODE_ENV === 'development' && window.lenis) {
          delete window.lenis;
        }
      };
    }
  }, []);

  return children;
}
