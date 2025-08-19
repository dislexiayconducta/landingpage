import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Dot } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden z-20">
      {/* Gradiente de fondo azul */}
      <div className="absolute inset-0 gradient outline-[8px] outline-offset-[-8px] lg:outline-[12px] lg:outline-offset-[-12px] outline-background"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Label superior */}
        <div className="mb-4 flex justify-center items-center">
          <Dot size={24} className="text-background-secondary-foreground" />{" "}
          <span className="text-background-secondary-foreground text-xl font-semibold">
            Test
          </span>
        </div>

        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-background-secondary-foreground mb-2 leading-tight">
          Detectar a tiempo
          <br />
          hace la diferencia
        </h2>

        {/* Párrafo descriptivo */}
        <p className="text-lg md:text-xl text-neutral-b30 font-medium mb-6 max-w-3xl mx-auto leading-relaxed">
          Realiza una breve autoevaluación online para detectar posibles signos
          de <span className="font-semibold">dislexia</span>,{" "}
          <span className="font-semibold">discalculia</span> o{" "}
          <span className="font-semibold">ansiedad</span>. 
        </p>
        <p className="text-lg md:text-xl text-neutral-b30 font-semibold mb-6 max-w-3xl mx-auto leading-relaxed">
          Resultados inmediatos y orientativos para guiar el próximo paso.
        </p>

        {/* Enlaces de acción */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="https://tally.so/r/w57BJM"
            target="_blank"
            className="group"
          >
            <Button variant="secondary" className="w-full sm:max-w-max">
              Dislexia
              <ArrowUpRight size={24} />
            </Button>
          </Link>

          <Link
            href="https://tally.so/r/n098j6"
            target="_blank"
            className="group"
          >
            <Button variant="secondary" className="w-full sm:max-w-max">
              Ansiedad
              <ArrowUpRight size={24} />
            </Button>
          </Link>

          <Link
            href="https://tally.so/r/wLrK4p"
            target="_blank"
            className="group"
          >
            <Button variant="secondary" className="w-full sm:max-w-max">
              Discalculia
              <ArrowUpRight size={24} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
