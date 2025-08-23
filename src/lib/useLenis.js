import { useEffect, useRef, useState } from 'react';

export function useLenis() {
  const lenisRef = useRef(null);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const findLenis = () => {
      if (typeof window !== 'undefined' && window.lenis) {
        lenisRef.current = window.lenis;
        setLenis(window.lenis);
        return true;
      }
      return false;
    };

    if (!findLenis()) {
      const interval = setInterval(() => {
        if (findLenis()) {
          clearInterval(interval);
        }
      }, 100);

      // safety cleanup after 5s
      const timeout = setTimeout(() => clearInterval(interval), 5000);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, []);

  return lenis;
}
