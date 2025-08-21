"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutGrid = ({ cards }) => {
  return (
    <div className="w-full h-full grid grid-cols-3 lg:grid-cols-4 max-w-[1440px] mx-auto gap-2 lg:gap-4 relative lg:pt-20">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            className={cn(
              card.className,
              "relative overflow-hidden bg-white rounded-none h-full w-full"
            )}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <ImageComponent card={card} />
            <CardContent card={card} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }) => {
  const isVideo = card.thumbnail?.endsWith('.mp4');
  
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
        <source src={card.thumbnail} type="video/mp4" title="video decorativo" />
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
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-none shadow-2xl relative z-60">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40" />
      <div className="relative lg:px-6 lg:pb-6 px-1 pb-1 z-70 text-white">
        {card.content}
      </div>
    </div>
  );
};
