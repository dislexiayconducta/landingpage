"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ServicesProvider } from "./services-context";
import ActiveLeft from "./ActiveLeft";
import RightTitles from "./RightTitles";

export default function DesktopServices() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <div ref={targetRef} className="relative z-0 h-[200vh] hidden lg:block">
      {/* Sticky que contiene el contenido de servicios */}
      <div className="sticky top-0 flex flex-col justify-start pt-12 h-svh max-w-full mx-auto">
        <ServicesProvider className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            {/* Columna izquierda */}
            <motion.div
              className="rounded-2xl lg:self-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <ActiveLeft />
            </motion.div>

            {/* Columna derecha - Títulos con scroll spy */}
            <motion.div
              className="space-y-6 pt-2 w-full max-w-max"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <RightTitles scrollProgress={scrollYProgress} />
            </motion.div>
          </div>
        </ServicesProvider>
      </div>
    </div>
  );
}
