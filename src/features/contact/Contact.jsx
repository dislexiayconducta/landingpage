"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Dot } from "lucide-react";
import Link from "next/link";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <section className="relative py-20 overflow-hidden z-20 bg-background px-4 sm:px-6 lg:px-8 xl:px-20">
      <Element name="contacto" className="relative z-10 max-w-[1440px] mx-auto">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-start mb-4"
        >
          <Dot size={28} className="text-neutral-b800" />
          <span className="text-neutral-b800 text-xl font-semibold">
            Contáctanos
          </span>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lado izquierdo - Vació */}
          <div></div>

          {/* Lado derecho - Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Título principal */}
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-b900 leading-none mb-2"
              >
                Tu mejor versión te espera. <br />
                Podemos ayudarte.
              </motion.h2>
            </div>

            {/* Botón de contacto */}
            <motion.div
              className="mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="#" target="_blank">
                <Button
                  variant="primary"
                  size="cta"
                  className="w-full sm:max-w-max"
                >
                  Contactar
                  <ArrowUpRight
                    size={24}
                    className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Button>
              </Link>
            </motion.div>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <p className="text-neutral-b300 text-xl font-medium">
                Encontranos en redes
              </p>
              <Link href="https://www.instagram.com/dislexiayconducta/" target="_blank">
                <Button
                  variant="link"
                >
                  Instagram <ArrowUpRight size={24} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Element>
    </section>
  );
};

export default Contact;
