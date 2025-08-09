"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex-1 bg-background-secondary flex flex-col items-center justify-center">
      <div className="max-w-full mx-auto w-full flex flex-col justify-center h-screen min-h-[600px] my-auto">
        <div className="text-center mb-6 lg:mb-8 pt-6 px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="max-w-5xl mx-auto text-background-secondary-foreground font-light leading-tight grid gap-y-0 w-full">
            {/* Fila 1 - Izquierda */}
            <h1
              className="justify-self-start font-medium leading-tight"
              style={{
                fontSize: "clamp(2rem, min(6vw, 9vh), 6rem)",
                lineHeight: "1.2",
              }}
            >
              Dislexia & Conducta
            </h1>

            {/* Fila 2 - Centro */}
            <motion.span
              className="justify-self-end block text-background-secondary-foreground font-medium leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              style={{
                fontSize: "clamp(2rem, min(6vw, 9vh), 6rem)",
                lineHeight: "1.2",
              }}
            >
              Innovación tecnológica
            </motion.span>

            {/* Fila 3 - Izquierda */}
            <motion.span
              className="justify-self-start block text-background-secondary-foreground font-medium leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              style={{
                fontSize: "clamp(2rem, min(6vw, 9vh), 6rem)",
                lineHeight: "1.2",
              }}
            >
              aplicada al aprendizaje
            </motion.span>

            {/* Fila 4 - Derecha */}
            <motion.span
              className="justify-self-end block text-background-secondary-foreground font-medium leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              style={{
                fontSize: "clamp(2rem, min(6vw, 9vh), 6rem)",
                lineHeight: "1.2",
              }}
            >
              + conducta.
            </motion.span>
          </div>
        </div>

        <div className="flex justify-end px-0 pl-4 sm:pl-6 lg:pl-8 xl:pl-20">
          <div className="relative max-w-full rounded-tl-[80px] rounded-bl-[80px] overflow-hidden w-full">
            <video
              className="w-full h-[220px] object-cover"
              src="/videos/banner.mp4"
              playsInline
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
    </section>
  );
}
