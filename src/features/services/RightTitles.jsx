"use client";
import { motion, useTransform } from "framer-motion";
import { useServices } from "./services-context";
import { SERVICE_KEYS } from "./services-ids";
import React from "react";
import { Dot, DotIcon } from "lucide-react";

const TITLES = {
  diagnostics: "Diagnósticos",
  treatments: "Tratamientos",
  cognitiveRehab: "Rehabilitación Cognitiva",
  behavioralRegulation: "Regulación Conductual",
  cbt: "TCC",
  playAttention: "Play Attention",
  schoolTutoring: "Tutoría Escolar",
  mindfulness: "Mindfulness",
};

export default function RightTitles({ scrollProgress }) {
  const { activeKey, setActiveKey } = useServices();

  // Mapear el progreso del scroll a las secciones activas
  // Cada sección ocupa 1/8 del scroll total (0.125)
  const sectionProgress = useTransform(
    scrollProgress,
    [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
    [0, 1, 2, 3, 4, 5, 6, 7, 7]
  );

  // Actualizar la sección activa basada en el progreso del scroll
  React.useEffect(() => {
    const unsubscribe = sectionProgress.on("change", (latest) => {
      const sectionIndex = Math.floor(latest);
      const newKey = SERVICE_KEYS[sectionIndex];
      if (newKey && newKey !== activeKey) {
        setActiveKey(newKey);
      }
    });

    return unsubscribe;
  }, [sectionProgress, activeKey, setActiveKey]);

  return (
    <div className="space-y-4">
      {SERVICE_KEYS.map((key, idx) => (
        <motion.div
          key={key}
          data-key={key}
          className="flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.5 + idx * 0.1,
          }}
        >
          {key === activeKey && <DotIcon className="min-w-12 min-h-12 -ml-12 text-neutral-b0" />}
          <span
            className={
              key === activeKey
                ? "text-neutral-b0 text-3xl lg:text-4xl xl:text-5xl font-semibold"
                : "text-neutral-b70 text-3xl lg:text-4xl xl:text-5xl font-semibold"
            }
          >
            {TITLES[key]}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
