"use client";

import Link from "next/link";
import { WhatsAppIcon } from "./navbar/icons";

const WHATSAPP_URL =
  "https://wa.me/5491130472408?text=Hola! Me gustaría obtener más información sobre los servicios de Dislexia y Conducta.";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      <Link
        href={WHATSAPP_URL}
        aria-label="WhatsApp"
        title="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-transparent shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="size-10 md:size-12"/>
        <span className="sr-only">Abrir WhatsApp</span>
      </Link>
    </div>
  );
}


