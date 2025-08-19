"use client";
import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ArrowUpRight, Dot } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const base = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export function Diagnostics() {
  return (
    <motion.div {...base} className="space-y-6">
      <p className="self-stretch text-neutral-b0 text-base sm:text-lg md:text-xl font-medium">
        Evaluación a través de pruebas psicométricas, proyectivas, automatizadas
        y con anteojos de realidad virtual para entender cómo funciona el
        cerebro y cómo se relaciona con el comportamiento y la cognición
      </p>

      <div className="space-y-2">
        <ScrollArea className="h-full md:h-[200px] lg:h-[220px] xl:h-[320px] overflow-auto">
          <Table className="border-none w-full table-fixed">
            <TableBody>
              <TableRow className="border-none hover:bg-transparent">
                <TableCell className="text-background-secondary-foreground text-sm lg:text-lg font-medium bg-neutral-b600 border-none w-1/2 py-3 leading-tight">
                  <div className="flex items-center text-wrap">
                    <Dot className="min-w-8 min-h-8" />
                    <span> Evaluación psicopedagógica</span>
                  </div>
                </TableCell>
                <TableCell className="text-background-secondary-foreground text-sm lg:text-lg font-medium bg-neutral-b600 border-none w-1/2 py-3 leading-tight">
                  <div className="flex items-center text-wrap">
                    <Dot className="min-w-8 min-h-8" />
                    <span> Apto psicológico</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-none hover:bg-transparent">
                <TableCell className="text-background-secondary-foreground text-sm lg:text-lg font-medium border-none w-1/2 py-3 leading-tight">
                  <div className="flex items-center text-wrap">
                    <Dot className="min-w-8 min-h-8" />
                    <span> Evaluación neuropsicológica</span>
                  </div>
                </TableCell>
                <TableCell className="text-background-secondary-foreground text-sm lg:text-lg font-medium border-none w-1/2 py-3 leading-tight">
                  <div className="flex items-center text-wrap">
                    <Dot className="min-w-8 min-h-8" />
                    <span> Psicodiagnóstico</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-none hover:bg-transparent">
                <TableCell className="text-background-secondary-foreground text-sm lg:text-lg font-medium border-none bg-neutral-b600 w-1/2 py-3 leading-tight">
                  <div className="flex items-center text-wrap">
                    <Dot className="min-w-8 min-h-8" />
                    <span>
                      {" "}
                      Diagnóstico neurocognitivo adultos (memoria/atención)
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-background-secondary-foreground text-sm lg:text-lg font-medium border-none bg-neutral-b600 w-1/2 py-3 leading-tight">
                  <div className="flex items-center text-wrap">
                    <Dot className="min-w-8 min-h-8" />
                    <span> Test de discalculia</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-none hover:bg-transparent">
                <TableCell className="text-background-secondary-foreground text-sm lg:text-lg font-medium border-none w-1/2 py-3 leading-tight">
                  <div className="flex items-center text-wrap">
                    <Dot className="min-w-8 min-h-8" />
                    <span> Diagnósticos para exámenes internacionales</span>
                  </div>
                </TableCell>
                <TableCell className="text-background-secondary-foreground text-sm lg:text-lg font-medium border-none w-1/2 py-3 leading-tight">
                  <div className="flex items-center text-wrap">
                    <Dot className="min-w-8 min-h-8" />
                    <span> Test de TDAH</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-none hover:bg-transparent">
                <TableCell className="text-background-secondary-foreground text-sm lg:text-lg font-medium border-none bg-neutral-b600 w-1/2 py-3 leading-tight">
                  <div className="flex items-center text-wrap">
                    <Dot className="min-w-8 min-h-8" />
                    <span> Test de ansiedad</span>
                  </div>
                </TableCell>
                <TableCell className="text-background-secondary-foreground text-sm lg:text-lg font-medium border-none bg-neutral-b600 w-1/2 py-3 leading-tight">
                  <div className="flex items-center text-wrap">
                    <Dot className="min-w-8 min-h-8" />
                    <span> Test de dislexia</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </motion.div>
  );
}

export function Treatments() {
  return (
    <motion.div {...base} className="space-y-3">
      <p className="text-neutral-b0 text-base sm:text-lg md:text-xl font-medium">
        Planes de intervención personalizados para abordar desafíos cognitivos,
        emocionales y conductuales. Siempre adaptados a cada etapa y necesidad.
      </p>
    </motion.div>
  );
}

export function CognitiveRehab() {
  return (
    <motion.div {...base} className="space-y-3">
      <p className="text-neutral-b0 text-base sm:text-lg md:text-xl font-medium">
        Entrenamientos dirigidos a recuperar o fortalecer funciones cognitivas
        afectadas como la memoria, la atención o el razonamiento.
      </p>
    </motion.div>
  );
}

export function BehavioralRegulation() {
  return (
    <motion.div {...base} className="space-y-3">
      <p className="text-neutral-b0 text-base sm:text-lg md:text-xl font-medium">
        Estrategias orientadas a mejorar el manejo de impulsos, la conducta y la
        toma de decisiones, fortaleciendo el vínculo entre emoción y
        comportamiento.
      </p>
    </motion.div>
  );
}

export function CBT() {
  return (
    <motion.div {...base} className="space-y-3">
      <p className="text-neutral-b0 text-base sm:text-lg md:text-xl font-medium">
        Terapia que enfrenta o modifica tus pensamientos y genera bienestar
        y autorregulación.
      </p>
    </motion.div>
  );
}

export function PlayAttention() {
  return (
    <motion.div {...base} className="space-y-3">
      <p className="text-neutral-b0 text-base sm:text-lg md:text-xl font-medium">
        Sistema innovador de neurotecnología basado en neurofeedback que mejora
        la atención, el autocontrol y la función ejecutiva. Tecnología inspirada
        en la NASA.
      </p>

      <Link href="https://playattentionargentina.com/" target="_blank">
        <Button variant="ternary" size="cta">
          Visitar Play Attention® Argentina <ArrowUpRight size={24} />
        </Button>
      </Link>
    </motion.div>
  );
}

export function SchoolTutoring() {
  return (
    <motion.div {...base} className="space-y-3">
      <p className="text-neutral-b0 text-base sm:text-lg md:text-xl font-medium">
        Apoyo en planificación, técnicas de estudio y preparación para exámenes.
      </p>
    </motion.div>
  );
}

export function Mindfulness() {
  return (
    <motion.div {...base} className="space-y-3">
      <p className="text-neutral-b0 text-base sm:text-lg md:text-xl font-medium">
        Prácticas guiadas con realidad virtual y/o con tecnología de play
        attention para que sea concreta tu vivencia de atención plena.
      </p>
    </motion.div>
  );
}
