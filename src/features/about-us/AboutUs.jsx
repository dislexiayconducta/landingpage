"use client";
import { TextReveal } from "@/components/magicui/text-reveal";
import React from "react";
import { Element } from "react-scroll";

function AboutUs() {
  return (
    <div className="relative bg-background flex justify-center px-4 sm:px-6 lg:px-8 xl:px-20 py-40 z-20">
      <Element name="nosotros" className="max-w-[1440px] mx-auto">
        <TextReveal
          title="Nosotros"
          className="text-6xl text-foreground "
          endContent={
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              {/* Primera caja: +30 años */}
              <div className="border border-foreground/40 p-2.5 min-w-[200px] w-full text-center">
                <div className="text-foreground text-3xl font-medium">
                  +30 años
                </div>
              </div>

              {/* Segunda caja: +7K pacientes */}
              <div className="border border-foreground/40 p-2.5 min-w-[200px] w-full text-center">
                <div className="text-foreground text-3xl font-medium">
                  +7K pacientes
                </div>
              </div>

              {/* Tercera caja: +10K evaluaciones */}
              <div className="border border-foreground/40 p-2.5 min-w-[200px] w-full  text-center">
                <div className="text-foreground text-3xl font-medium">
                  +10K evaluaciones
                </div>
              </div>
            </div>
          }
        >
          En D&C somos un equipo interdisciplinario que combina innovación
          tecnológica, programas digitales, realidad virtual y Play Attention®
          para abordar de forma integral problemas de aprendizaje, memoria,
          atención y control emocional en todas las edades.
        </TextReveal>
      </Element>
    </div>
  );
}

export default AboutUs;
