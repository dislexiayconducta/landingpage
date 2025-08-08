"use client";
import { SpinningText } from "@/components/magicui/spinning-text";
import { ArrowDown } from "lucide-react";
import React from "react";
import { Link } from "react-scroll";

export function SpinningTextDivider() {
  return (
    <div className="flex justify-center relative">
      <div className="relative">
        <SpinningText radius={7} className="text-xl mix-blend-exclusion">
          Explora más • Explora más • Explora más •
        </SpinningText>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion"
          style={{ pointerEvents: "auto" }}
        >
          <Link to="nosotros" smooth={true} duration={500}>
            <ArrowDown size={64} />
          </Link>
        </div>
      </div>
    </div>
  );
}
