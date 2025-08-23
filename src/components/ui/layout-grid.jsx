"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    if (card.title && card.description) {
      setLastSelected(selected);
      setSelected(card);
    }
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full grid grid-cols-3 lg:grid-cols-4 max-w-[1440px] mx-auto gap-2 lg:gap-4 relative lg:pt-20">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              card.title && card.description
                ? "cursor-pointer"
                : "cursor-default",
              selected?.id === card.id
                ? `rounded-none absolute inset-0 m-auto z-50 flex justify-center items-center flex-wrap flex-col ${
                    card.orientation === "horizontal"
                      ? "lg:w-full h-1/3 lg:h-1/2"
                      : "lg:w-1/3 h-1/2 lg:h-1/2"
                  }`
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-none h-full w-full"
                : "bg-white rounded-none h-full w-full"
            )}
            layoutId={`card-${card.id}`}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {selected?.id === card.id && <ExpandedCard selected={selected} />}
            <ImageComponent card={card} />
            <CardContent card={card} />
            {card.title && card.description && selected?.id !== card.id && (
              <div className="absolute top-1 lg:top-3 right-1 lg:right-3 z-40">              
                <div className="relative border border-neutral-b300 rounded-full p-0 bg-white/10 backdrop-blur-sm">
                  <ArrowUpRight className="lg:w-6.5 lg:h-6.5 w-5 h-5 text-neutral-b300" />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-gradient-to-t from-background-secondary/20 via-background-secondary/40 to-background-secondary/5 opacity-0 z-60",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.4 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }) => {
  const isVideo = card.thumbnail?.endsWith(".mp4");

  if (isVideo) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        className={cn(
          "object-cover object-center absolute inset-0 h-full w-full transition-all duration-300"
        )}
      >
        <source
          src={card.thumbnail}
          type="video/mp4"
          title="video decorativo"
        />
        Tu navegador no soporta el elemento de video.
      </video>
    );
  }

  return (
    <motion.img
      src={card.thumbnail}
      alt="miembro del equipo"
      title="miembro del equipo"
      height="500"
      width="500"
      className={cn(
        "object-cover object-center absolute inset-0 h-full w-full transition-all duration-300"
      )}
      loading="lazy"
    />
  );
};

const CardContent = ({ card }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-none shadow-2xl relative z-10">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20" />
      <div className="relative lg:px-6 lg:pb-6 px-1 pb-1 z-70 text-white">
        {card.content}
      </div>
    </div>
  );
};

const ExpandedCard = ({ selected }) => {
  const hasContent = selected?.title || selected?.description;

  return (
    <div className="h-full w-full flex flex-col justify-end rounded-none shadow-2xl relative z-80">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.8,
        }}
        className="absolute inset-0 h-full w-full z-50 "
      />
      <motion.div
        layoutId={`expanded-content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={`relative px-4 pb-4 pt-8 text-background-secondary-foreground text-start z-60 ${
          selected?.orientation === "horizontal"
            ? "h-1/2 lg:h-1/3"
            : "h-1/3 lg:h-1/4"
        } ${hasContent ? "bg-gradient-to-b from-black/50 to-black/25" : ""}`}
      >
        {selected?.title && (
          <h2 className="text-xl font-semibold mb-1">{selected?.title}</h2>
        )}
        {selected?.description && (
          <p className="text-base font-medium leading-none">
            {selected?.description}
          </p>
        )}
      </motion.div>
    </div>
  );
};
