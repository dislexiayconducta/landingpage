import { useEffect, useRef } from 'react';

export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Buscar la instancia global de Lenis
    const findLenis = () => {
      if (typeof window !== 'undefined' && window.lenis) {
        lenisRef.current = window.lenis;
        return true;
      }
      return false;
    };

    // Intentar encontrar Lenis inmediatamente
    if (!findLenis()) {
      // Si no está disponible, esperar un poco y reintentar
      const interval = setInterval(() => {
        if (findLenis()) {
          clearInterval(interval);
        }
      }, 100);

      // Limpiar el intervalo después de 5 segundos
      setTimeout(() => clearInterval(interval), 5000);

      return () => clearInterval(interval);
    }
  }, []);

  return lenisRef.current;
}
