"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex-1 bg-background-secondary flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-center h-screen min-h-[600px] my-auto">
        <div className="text-center mb-6 lg:mb-8 pt-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-white font-light leading-tight">
            <span
              className="block text-start"              
              style={{
                fontSize: "clamp(2rem, min(8vw, 12vh), 6rem)",
                lineHeight: "1.1"
              }}
            >
              Dislexia & Conducta
            </span>
            <motion.span
              className="block text-center mt-2 lg:mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                ease: "easeOut",
                delay: 0.3
              }}
              style={{
                fontSize: "clamp(1.5rem, min(6vw, 8vh), 4.5rem)",
                lineHeight: "1.2"
              }}
            >
              Innovación tecnológica
            </motion.span>
            <motion.span
              className="block text-start mt-2 lg:mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                ease: "easeOut",
                delay: 0.6
              }}
              style={{
                fontSize: "clamp(1.5rem, min(6vw, 8vh), 4.5rem)",
                lineHeight: "1.2"
              }}
            >
              aplicada al aprendizaje
            </motion.span>
            <motion.span
              className="block text-end mt-2 lg:mt-4 font-normal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                ease: "easeOut",
                delay: 0.9
              }}
              style={{
                fontSize: "clamp(1.5rem, min(6vw, 8vh), 4.5rem)",
                lineHeight: "1.2"
              }}
            >
              + conducta.
            </motion.span>
          </h1>
        </div>

        <div className="flex justify-end px-0 pl-4 sm:pl-6 lg:pl-8 xl:px-8">
          <div className="relative max-w-5xl rounded-l-3xl overflow-hidden w-full">
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
