"use client";

import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Plus, Minus, X } from "lucide-react";
import { Link, Element, scroller, Events } from "react-scroll";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SERVICE_KEYS } from "./services-ids";
import * as Sections from "./sections";
import {
  MobileServicesProvider,
  useMobileServices,
} from "./mobile-services-context";

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

function MobileServicesContent() {
  const { activeKey, setActiveKey } = useMobileServices();
  const [openSection, setOpenSection] = useState(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [sectionPositions, setSectionPositions] = useState({});
  
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Recalcular la altura del contenedor y las posiciones de las secciones
  const recalculateLayout = useCallback(() => {
    if (targetRef.current) {
      const container = targetRef.current;
      const height = container.scrollHeight;
      
      // Solo actualizar si la altura realmente cambió
      if (height !== containerHeight) {
        setContainerHeight(height);
        
        // Calcular las posiciones reales de cada sección
        const positions = {};
        SERVICE_KEYS.forEach((key, index) => {
          const element = container.querySelector(`[data-key="${key}"]`);
          if (element) {
            const rect = element.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const relativeTop = rect.top - containerRect.top;
            const progress = relativeTop / height;
            positions[key] = {
              top: relativeTop,
              progress: Math.max(0, Math.min(1, progress)),
              index
            };
          }
        });
        setSectionPositions(positions);
      }
    }
  }, [containerHeight]);

  // Calcular layout inicial al montar el componente
  useEffect(() => {
    recalculateLayout();
  }, []); // Solo se ejecuta una vez al montar

  // Recalcular layout cuando se abra/cierre un collapsible
  useLayoutEffect(() => {
    recalculateLayout();
  }, [openSection, recalculateLayout]);

  // Mapear el progreso del scroll a las secciones activas usando posiciones reales
  const sectionProgress = useTransform(
    scrollYProgress,
    (latest) => {
      // Solo calcular si tenemos las posiciones de las secciones
      if (Object.keys(sectionPositions).length === 0) return 0;
      
      // Encontrar la sección activa basada en las posiciones reales
      let activeSectionIndex = 0;
      let minDistance = Infinity;
      
      Object.entries(sectionPositions).forEach(([key, data]) => {
        const distance = Math.abs(data.progress - latest);
        if (distance < minDistance) {
          minDistance = distance;
          activeSectionIndex = data.index;
        }
      });
      
      return activeSectionIndex;
    }
  );

  // Actualizar la sección activa basada en el progreso del scroll
  useEffect(() => {
    const unsubscribe = sectionProgress.on("change", (latest) => {
      const newKey = SERVICE_KEYS[latest];
      if (newKey && newKey !== activeKey) {
        setActiveKey(newKey);
        setOpenSection(newKey);
      }
    });

    return unsubscribe;
  }, [sectionProgress, activeKey, setActiveKey]);

  const handleToggle = (sectionKey) => {
    // Función vacía - no se puede hacer click manual
  };

  const getSectionComponent = (key) => {
    const ComponentMap = {
      diagnostics: Sections.Diagnostics,
      treatments: Sections.Treatments,
      cognitiveRehab: Sections.CognitiveRehab,
      behavioralRegulation: Sections.BehavioralRegulation,
      cbt: Sections.CBT,
      playAttention: Sections.PlayAttention,
      schoolTutoring: Sections.SchoolTutoring,
      mindfulness: Sections.Mindfulness,
    };
    const Component = ComponentMap[key];
    return Component ? <Component /> : null;
  };

  return (
    <div ref={targetRef} className="relative z-0 h-[200vh]">
      {/* Sticky que contiene el contenido de servicios */}
      <div className="sticky top-0 flex items-start h-[140vh] sm:h-svh max-w-full mx-auto">
        <div className="w-full space-y-6 my-6">
        {SERVICE_KEYS.map((key, index) => {
          const isOpen = openSection === key;
          const isActive = activeKey === key;
          const SectionComponent = getSectionComponent(key);

          return (
            <div key={key} data-key={key}>
              <Collapsible
                open={isOpen}
                className={`transition-all duration-300 ${
                  isActive ? '' : ''
                }`}
              >
                <CollapsibleTrigger
                  className="w-full flex items-center justify-between transition-colors duration-300 cursor-default"
                >
                  <span
                    className={`text-3xl md:text-4xl font-semibold text-left transition-colors duration-300 ${
                      isActive ? "text-neutral-b0" : "text-neutral-b70"
                    }`}
                  >
                    {TITLES[key]}
                  </span>
                  <motion.div
                    className={`transition-colors duration-300 ${
                      isActive ? "text-neutral-b0" : "text-neutral-b70"
                    }`}
                  >
                    {isOpen ? <X size={20} /> : <Plus size={20} />}
                  </motion.div>
                </CollapsibleTrigger>

                <CollapsibleContent className="overflow-hidden">
                  <div className="mt-4">{SectionComponent}</div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default function MobileServices() {
  return (
    <div className="lg:hidden">
      <MobileServicesProvider>
        <MobileServicesContent />
      </MobileServicesProvider>
    </div>
  );
}
