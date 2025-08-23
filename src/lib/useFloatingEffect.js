import { useEffect, useRef, useMemo } from 'react';
import { useMotionValue, useTransform } from 'framer-motion';

export function useFloatingEffect({
  scrollYProgress,
  index,
  baseAmplitude = 15,
  baseSpeed = 800
}) {
  const yCombined = useMotionValue(0);
  const floatOffset = useMotionValue(0);
  
  // Valores de flotación únicos para cada imagen
  const floatConfig = useMemo(() => ({
    amplitude: baseAmplitude + (index % 3) * 8,
    speed: baseSpeed + (index % 4) * 150,
    phase: (index % 5) * Math.PI * 0.4, // Fase diferente para cada imagen
    direction: index % 2 === 0 ? 1 : -1, // Dirección alternada
  }), [index, baseAmplitude, baseSpeed]);

  // Efecto de parallax base
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -40 - index * 20]);

  // Efecto de flotación constante (siempre activo)
  useEffect(() => {
    let frame;
    let startTime = performance.now();

    const updateFloat = () => {
      const currentTime = performance.now();
      const elapsed = (currentTime - startTime) / floatConfig.speed;
      
      // Flotación base con función sinusoidal más compleja
      const baseFloat = Math.sin(elapsed + floatConfig.phase) * floatConfig.amplitude;
      const secondaryFloat = Math.sin(elapsed * 0.7 + floatConfig.phase * 1.3) * (floatConfig.amplitude * 0.3);
      
      // Combinar ambos efectos para flotación más natural
      const totalFloat = baseFloat + secondaryFloat;
      
      // Aplicar suavizado adicional
      const smoothedFloat = totalFloat * 0.8 + (floatOffset.get() * 0.2);
      
      floatOffset.set(smoothedFloat);
      frame = requestAnimationFrame(updateFloat);
    };

    updateFloat();
    return () => cancelAnimationFrame(frame);
  }, [floatConfig, floatOffset]);

  // Combinar parallax con flotación constante
  useEffect(() => {
    const updateCombined = () => {
      const parallax = parallaxY.get();
      const float = floatOffset.get();
      
      // La flotación siempre está activa, no depende del fade
      const finalY = parallax + float;
      yCombined.set(finalY);
    };

    const unsubscribe = parallaxY.on('change', updateCombined);
    const unsubscribeFloat = floatOffset.on('change', updateCombined);

    return () => {
      unsubscribe();
      unsubscribeFloat();
    };
  }, [parallaxY, floatOffset, yCombined]);

  return {
    yCombined,
    floatConfig
  };
}
