"use client";
import { TextReveal } from "@/components/magicui/text-reveal";
import React from "react";
import { Element } from "react-scroll";

function ForWhom() {
  return (
    <div className="relative bg-background-secondary flex justify-center px-4 sm:px-6 lg:px-8 xl:px-20 pt-40 z-20">
      <Element name="para-ti" className="max-w-[1440px] mx-auto">
        <TextReveal title="Para quien" className="text-6xl text-background" dark>
          Es para todos los que quieran rendir mejor y alcanzar sus metas. Para
          familias, estudiantes, deportistas, profesionales y equipos de
          trabajo.
        </TextReveal>
      </Element>
    </div>
  );
}

export default ForWhom;


