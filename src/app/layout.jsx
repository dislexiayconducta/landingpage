import "./globals.css";
import localFont from "next/font/local";
import { LenisProvider } from "@/components/providers/LenisProvider";

export const neueHaasDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/NeueHaasDisplayXXThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayXXThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayXThin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayXThinItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayThin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayThinItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayLight.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayLightItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayRoman.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayRomanItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayMediu.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayMediumItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayBlack.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayBlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-neue-haas",
});

export const metadata = {
  title: "Dislexia y Conducta | Evaluación y Tratamientos",
  description:
    "Dislexia y Conducta es una clínica especializada en evaluación, diagnóstico y tratamiento de dificultades del aprendizaje, conducta y ansiedad. A través de la neurociencia, tecnologías innovadoras como Play Attention y programas personalizados, ayudamos a niños, adolescentes y adultos a desarrollar su máximo potencial.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title:
      "Dislexia y Conducta | Innovación tecnológica aplicada al aprendizaje",
    description:
      "Dislexia y Conducta ofrece evaluaciones, diagnósticos y tratamientos basados en neurociencia para niños, adolescentes y adultos.",
    url: "https://dislexiayconducta.vercel.app/",
    siteName: "Dislexia y Conducta",
    locale: "es_AR",
    images: [
      {
        url: "https://dislexiayconducta.vercel.app/banner.png",
        width: 1200,
        height: 630,
        alt: "Dislexia y Conducta | Evaluación y Tratamientos",
      },
    ],
  },
  manifest: "/site.webmanifest",
  applicationName: "Dislexia y Conducta",
  category: "health",
  classification: "health",
  keywords: [
    "Dislexia y Conducta",
    "Dislexia en niños",
    "Test de dislexia",
    "Test de ansiedad infantil",
    "Test de discalculia",
    "Tratamientos de aprendizaje",
    "Terapia cognitivo conductual",
    "Mindfulness ansiedad",
    "Neurofeedback Argentina",
    "Evaluación psicopedagógica",
    "Clínica especializada en aprendizaje",
    "TCC",
    "Play Attention",
  ],
  authors: [
    {
      name: "Dislexia y Conducta",
      url: "https://www.dislexiayconducta.com/",
    },
  ],
  creator: "Dislexia y Conducta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${neueHaasDisplay.variable} antialiased`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
