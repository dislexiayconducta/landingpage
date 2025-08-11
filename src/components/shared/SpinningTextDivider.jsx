"use client";
import { SpinningText } from "@/components/magicui/spinning-text";
import { ArrowDown } from "lucide-react";
import React from "react";
import { Link } from "react-scroll";

export function SpinningTextDivider() {
  return (
    <div className="flex justify-center relative z-30 mix-blend-difference">
      <SpinningText
        radius={7}
        className="text-xl font-semibold text-background-secondary-foreground tracking-widest mix-blend-exclusion"
      >
        Explora más • Explora más • Explora más •
      </SpinningText>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion"
        style={{ pointerEvents: "auto" }}
      >
        <Link to="nosotros" smooth={true} duration={500}>
          <ArrowDown
            size={64}
            className="text-background-secondary-foreground"
          />
        </Link>
      </div>
    </div>
  );
}
