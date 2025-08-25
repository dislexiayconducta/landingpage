"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex-1 bg-background-secondary flex flex-col items-center justify-center min-h-[600px] h-svh z-20">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col items-center justify-center ">
        <div className="text-background-secondary-foreground leading-none grid gap-y-0 w-full">
          <h1
            className="justify-self-start font-medium leading-tight sm:leading-[0.85] lg:leading-none px-4 sm:px-6 lg:px-8 xl:px-20"
            style={{
              fontSize: "clamp(2rem, min(8vw, 10vh), 10rem)",
            }}
          >
            Dislexia & Conducta
          </h1>

          <motion.span
            className="sm:justify-self-end flex flex-col sm:flex-row sm:gap-2 font-medium leading-tight sm:leading-[0.85] lg:leading-none px-4 sm:px-6 lg:px-8 xl:px-20 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            style={{
              fontSize: "clamp(2rem, min(8vw, 10vh), 10rem)",
            }}
          >
            <span className="flex-1 sm:inline relative left-1/6 sm:relative sm:left-0">
              Innovación
            </span>
            <span className="flex-1 sm:inline relative left-1/3 sm:relative sm:left-0">
              tecnológica
            </span>
          </motion.span>

          <motion.span
            className="justify-self-start block font-medium leading-tight sm:leading-[0.85] lg:leading-none px-4 sm:px-6 lg:px-8 xl:px-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            style={{
              fontSize: "clamp(2rem, min(8vw, 10vh), 10rem)",
            }}
          >
            aplicada al aprendizaje
          </motion.span>

          <motion.span
            className="justify-self-end block font-medium leading-tight sm:leading-[0.85] lg:leading-none px-4 sm:px-6 lg:px-8 xl:px-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            style={{
              fontSize: "clamp(2rem, min(8vw, 10vh), 10rem)",
            }}
          >
            + conducta.
          </motion.span>

          {/* Video */}
          <div className="relative justify-self-end max-w-full w-full aspect-[16/6] sm:aspect-[16/4] lg:aspect-[16/3] overflow-hidden pl-4 sm:pl-6 lg:pl-8 xl:pl-20">
            <video
              className="w-full h-full object-cover rounded-tl-[80px] rounded-bl-[80px]"
              src="/videos/banner.mp4"
              title="video banner"
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
