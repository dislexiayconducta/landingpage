"use client";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import DesktopServices from "./DesktopServices";
import MobileServices from "./MobileServices";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section className="relative bg-background-secondary py-20 lg:py-40 z-20 px-4 sm:px-6 lg:px-8 xl:px-20">
      <Element name="servicios" className="max-w-[1440px] mx-auto w-full">
        {/* Contenedor scroll Desktop */}
        <DesktopServices />

        {/* Contenedor scroll Mobile */}
        <MobileServices />

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-background-secondary-foreground text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
            ¿Querés empezar tu proceso hoy?
          </h3>

          <Link href="#" target="_blank">
            <Button
              variant="ternary"
              size="cta"
              className="w-full sm:max-w-max"
            >
              Hablar con un especialista
              <ArrowUpRight size={24} />
            </Button>
          </Link>
        </motion.div>
      </Element>
    </section>
  );
}
