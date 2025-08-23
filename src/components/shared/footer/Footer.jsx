"use client";
import React from "react";
import { navigationLinks, socialLinks } from "./data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-background-secondary text-background-secondary-foreground pt-16 pb-4 z-20 outline-[8px] outline-offset-[-8px] lg:outline-[12px] outline-background">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="w-full text-center mb-16">
          <h2
            className="font-medium leading-tight lg:flex hidden"
            style={{
              fontSize: "clamp(2rem, 12vw, 25rem)",
              minHeight: "clamp(3rem, 15vw, 30rem)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Dislexia & Conducta
          </h2>
        </div>

        {/* cta */}
        <div className="flex flex-col justify-center items-center my-6 px-4">
          <p className="text-xl font-medium text-neutral-b40 text-center mb-2">
            Estás a un clic de empezar a mejorar.
          </p>

          <Link
            href="https://wa.me/5491130472408?text=Hola! Me gustaría obtener más información sobre los servicios de Dislexia y Conducta."
            title="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ternary"
              size="cta"
              className="w-full sm:max-w-max"
            >
              Hablemos
              <ArrowUpRight size={24} />
            </Button>
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row  gap-8 mt-16 px-4 sm:px-6 lg:px-8 xl:px-20">
          {/* Left Column - DislexiaConducta Info */}
          <div className="space-y-4 max-w-md">
            <h3 className="text-xl font-bold mb-4">DislexiaConducta</h3>
            <p className="text-lg font-medium text-neutral-b40 leading-none mb-2">
              Espacio tecnológico e invocador para el diagnóstico,
              acompañamiento, asistencia y abordaje de los diferentes trastornos
              de aprendizaje y dificultades de conducta y ansiedad.
            </p>

            <div className="space-y-2 text-neutral-b40">
              <div>
                <p className="font-semibold text-base">Pilar - Buenos Aires.</p>
                <p className="font-medium text-base">
                  Las Camelias 3324, Oficina 308, Edificio Office Park Norte.
                </p>
              </div>
              <div>
                <p className="font-semibold text-base">
                  Puertos Escobar - Buenos Aires.
                </p>

              </div>
              {/* mail to */}
              <a href="mailto:consultas@dislexiayconducta.com" title="email" >              
                  <p className="font-medium text-base" >
                    consultas@dislexiayconducta.com
                  </p>
              </a>
            </div>
          </div>

          {/* Rigth Column */}
          <div className="grid grid-cols-2 gap-8 max-w-md w-full">
            {/* Middle Column - Navigation */}
            <div className="space-y-4">
              <h3 className="text-base font-medium text-neutral-b40 mb-6">
                Navegación
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.id}>
                    <LinkScroll to={link.to} smooth>
                      <Button variant="optionFooter" size="optionSm">
                        {link.label}
                      </Button>
                    </LinkScroll>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right Column - Social Networks */}
            <div className="space-y-4 lg:text-left text-right">
              <h3 className="text-base font-medium text-neutral-b40 mb-6">
                Redes Sociales
              </h3>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      title={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="optionFooter" size="optionSm">
                        {link.label}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Graphic and Copyright */}
        <div className="text-center px-4 sm:px-6 lg:px-8 xl:px-20">
          {/* Abstract Graphic */}
          <div className="mb-4 flex justify-center">
            <Image
              src="/logo.svg"
              alt="logo DislexiaConducta"
              title="logo DislexiaConducta"
              width={60}
              height={60}
              loading="eager"
              priority
            />
          </div>

          {/* Copyright */}
          <p className="text-sm">2025 Dislexia y conducta.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
