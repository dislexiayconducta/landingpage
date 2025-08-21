"use client";
import React from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { images } from "./data/images";
import { useFloatingEffect } from "@/lib/useFloatingEffect";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";
import Image from "next/image";

function Highlights() {
  const containerRef = React.useRef(null);  
  const isInView = useInView(containerRef, {
    margin: "-100px 0px -100px 0px",
    once: false
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="bg-background-secondary-foreground relative min-h-[150vh] w-full overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto overflow-hidden h-full flex items-center">
        {/* Texto - Solo se renderiza cuando está en view */}
        {isInView && (
          <>
            <ScrollVelocityContainer className="fixed top-0 left-0 right-0 z-10">
              <motion.span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-neutral-b200 leading-none mt-8 lg:mt-16">
                <ScrollVelocityRow velocity={20} direction={1}>
                  Para todas las edades{"  "}
                </ScrollVelocityRow>
              </motion.span>
            </ScrollVelocityContainer>
            
            <ScrollVelocityContainer className="fixed top-1/2 -translate-y-1/2 left-0 right-0 z-10">
              <motion.span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-neutral-b200 leading-none">
                <ScrollVelocityRow velocity={20} direction={-1}>
                  Multiformatos{"  "}
                </ScrollVelocityRow>
              </motion.span>
            </ScrollVelocityContainer>
            
            <ScrollVelocityContainer className="fixed bottom-0 left-0 right-0 z-10">
              <motion.span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-neutral-b200 leading-none mb-8 lg:mb-16 text-right">
                <ScrollVelocityRow velocity={20} direction={1}>
                  Planes híbridos{"  "}
                </ScrollVelocityRow>
              </motion.span>
            </ScrollVelocityContainer>
          </>
        )}

        {/* Imágenes */}
        <div className="relative flex items-center h-full min-h-[150vh] w-full my-12">
          {images.map((image, index) => {
            const { yCombined, floatConfig } = useFloatingEffect({
              scrollYProgress,
              index,
              baseAmplitude: 20,
              baseSpeed: 1000,
            });

            // Clases CSS según orientación
            const sizeClasses = image.orientation === "horizontal" 
              ? "w-60 h-48 sm:w-72 sm:h-56 lg:w-80 lg:h-64 xl:h-80 xl:w-96" // Horizontal: más ancho que alto
              : "w-48 h-60 sm:w-56 sm:h-72 lg:w-64 lg:h-80 xl:w-80 xl:h-96"; // Vertical: más alto que ancho

            return (
              <motion.div
                key={index}
                className={`absolute ${sizeClasses} 
                ${image.positions.mobile} sm:${image.positions.tablet} lg:${image.positions.desktop}`}
                style={{ y: yCombined }}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative rounded-xl overflow-hidden bg-foreground/10 shadow-xl backdrop-blur-sm"
                  style={{
                    rotateX: useTransform(
                      yCombined,
                      [0, 1],
                      [0, floatConfig.direction * 1]
                    ),
                    rotateY: useTransform(
                      yCombined,
                      [0, 1],
                      [0, floatConfig.direction * 0.8]
                    ),
                  }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}                    
                    title={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    draggable={false}
                    width={400}
                    height={400}
                  />
                  {/* Efecto de brillo sutil */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30" />

                  {/* Efecto de profundidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
