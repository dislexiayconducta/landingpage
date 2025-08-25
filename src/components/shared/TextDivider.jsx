"use client";
import React from "react";
import { Marquee } from "../magicui/marquee";

export function TextDivider() {
  return (
    <div className="flex justify-center relative z-30 mix-blend-difference h-full">
      <div className="absolute top-1/2 -translate-y-1/2 inline-flex w-full">
        <Marquee
          className="[--duration:30s] [--gap:2rem]"
          pauseOnHover={false}
          repeat={4}>
          <span className="px-6 text-background-secondary-foreground mix-blend-exclusion whitespace-nowrap leading-none font-medium tracking-tight uppercase text-[clamp(2.5rem,10vw,10rem)]">
            Programas&nbsp;&nbsp;&nbsp;Personalizados
          </span>
        </Marquee>
      </div>
    </div>
  );
}
