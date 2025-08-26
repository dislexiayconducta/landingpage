"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { modalitiesData } from "./data/modalities";
import NextLink from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Element, Link } from "react-scroll";

export default function Modalities() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const Wrapper = ({ modality, children }) => {
    if (modality?.href) {
      return (
        <NextLink href={modality.href} target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
          {children}
        </NextLink>
      );
    }
    return <>{children}</>;
  };

  return (
    <section className="relative bg-background-secondary flex flex-col justify-center z-20 px-4 sm:px-6 lg:px-8 xl:px-20">
      <Element
        name="modalidades"
        className="max-w-[1440px] mx-auto w-full mb-20"
      >
        {/* Header con título y botón */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 xl:mb-10">
          <h2 className="text-background-secondary-foreground text-5xl md:text-6xl lg:text-7xl font-medium leading-none">
            Modalidades
          </h2>

          <Link to="contacto" smooth>
            <Button variant="secondary">
              Reservar <ArrowRight size={20} />
            </Button>
          </Link>
        </div>

        {/* Fila de imágenes */}
        <div className="lg:flex gap-0 w-full h-[500px] hidden ">
          {modalitiesData.map((modality) => (
            <Wrapper key={modality.id} modality={modality}>
              <motion.div
                className={`relative overflow-hidden group ${modality?.href ? "cursor-pointer" : ""}`}
                style={{ width: "20%" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ width: "40%" }}
                transition={{
                  duration: 0.6,
                  delay: modality.delay,
                  hover: { duration: 0.2, delay: 0 },
                }}
                role={modality?.href ? "link" : undefined}
                aria-label={modality?.href ? `Abrir ${modality.title}` : undefined}
              >
                <img
                  src={modality.image}
                  alt={modality.alt}
                  title={modality.alt}
                  className="w-full h-full object-cover"
                />
                {/* Overlay con texto en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-800 flex flex-col justify-end p-6">
                  <h3 className="self-stretch text-background-secondary-foreground text-4xl font-semibold mb-1 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-350">
                    {modality.title}
                  </h3>
                  <p className="self-stretch text-neutral-b30 text-base font-medium opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-400">
                    {modality.subtitle}
                  </p>
                </div>
              </motion.div>
            </Wrapper>
          ))}
        </div>
        {/* Mobile */}
        <div className="lg:hidden">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {modalitiesData.map((modality, index) => (
                <CarouselItem
                  key={modality.id}
                  className={`basis-[90%]`}
                >
                  <Wrapper modality={modality}>
                    <div
                      className="relative h-[500px] w-full overflow-hidden"
                      role={modality?.href ? "link" : undefined}
                      aria-label={modality?.href ? `Abrir ${modality.title}` : undefined}
                      style={{ cursor: modality?.href ? "pointer" : undefined }}
                    >
                      <img
                        src={modality.image}
                        alt={modality.alt}
                        title={modality.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                        <span className="text-white text-3xl font-bold mb-2">
                          {modality.title}
                        </span>
                        <p className="text-white/90 text-base font-medium">
                          {modality.subtitle}
                        </p>
                      </div>
                    </div>
                  </Wrapper>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-6 px-4 sm:px-6">
              {modalitiesData.map((_, index) => (
                <div
                  key={index}
                  className="w-1/5 h-2 rounded-2xl transition-colors duration-300"
                  style={{
                    backgroundColor:
                      index === current ? "white" : "rgba(255, 255, 255, 0.3)",
                  }}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </Element>
    </section>
  );
}
