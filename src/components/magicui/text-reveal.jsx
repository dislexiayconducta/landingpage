"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";

export const TextReveal = ({
  children,
  className,
  endContent,
  dark = false,
  title,
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  // Animación para el contenedor final (sincronizada con todo el texto)
  const endOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const endY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      {/* Sticky que contiene texto y contenedor juntos */}
      <div className="sticky top-0 flex flex-col justify-center h-svh max-w-full mx-auto py-8">
        {/* Título arriba del texto */}
        {title && (
          <h2
            className={cn(
              "flex items-center gap-2 text-2xl font-semibold mb-4",
              dark ? "text-white" : "text-black dark:text-white"
            )}
          >
            <Dot size={24} />
            {title}
          </h2>
        )}

        {/* Texto arriba */}
        <span
          className={cn(
            "flex flex-wrap text-3xl font-medium md:text-4xl lg:text-5xl xl:text-6xl",
            dark
              ? "text-background/40 dark:text-white/40"
              : "text-foreground/40 dark:text-white/20"
          )}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                dark={dark}
              >
                {word}
              </Word>
            );
          })}
        </span>

        {/* Contenedor abajo */}
        {endContent && (
          <motion.div style={{ opacity: endOpacity, y: endY }} className="mt-8">
            {endContent}
          </motion.div>
        )}
      </div>
    </div>
  );
};

const Word = ({ children, progress, range, dark }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity }}
        className={dark ? "text-white" : "text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};
