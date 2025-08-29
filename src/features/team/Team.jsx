"use client";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { useIsLargeScreen } from "./hooks/useIsLargeScreen";

export default function Team() {
  const isLargeScreen = useIsLargeScreen();

  // Seleccionar el array de tarjetas según el tamaño de pantalla
  const currentTeamCards = isLargeScreen ? teamCardsLarge : teamCardsSmall;

  return (
    <section className="relative bg-neutral-b0 py-20 lg:py-40 z-20 px-4 sm:px-6 lg:px-8 xl:px-20">
      <Element name="equipo" className="max-w-[1440px] mx-auto">
        <motion.h2
          className="flex items-center text-foreground text-5xl md:text-6xl lg:text-7xl font-medium mb-8 lg:mb-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Conoce al equipo
        </motion.h2>

        <div className="h-full w-full">
          <LayoutGrid cards={currentTeamCards} />
        </div>
      </Element>
    </section>
  );
}

// Componentes de contenido para cada miembro del equipo
const TeamMemberOne = () => {
  const isLargeScreen = useIsLargeScreen();
  return (
    <div>
      <h3 className="font-bold lg:text-2xl sm:text-base text-sm leading-none sm:leading-normal text-white lg:mb-2 mb-0">
        Lic. Marcela Alegre
      </h3>
      <p className="font-normal lg:text-base sm:text-sm text-xs leading-none sm:leading-normal text-white/90">
        Psicopedagogía - Cofundadora de DyC...
      </p>
    </div>
  );
};

const TeamMemberTwo = () => {
  const isLargeScreen = useIsLargeScreen();
  return (
    <div>
      <h3 className="font-bold lg:text-2xl sm:text-base text-sm leading-none sm:leading-normal text-white lg:mb-2 mb-0">
        Lic. Lourdes Mazzola
      </h3>
      <p className="font-normal lg:text-base sm:text-sm text-xs leading-none sm:leading-normal text-white/90">
        Psicología - Cofundadora de DyC...
      </p>
    </div>
  );
};

const TeamMemberThree = () => {
  return (
    <>
      <h3 className="font-bold lg:text-2xl sm:text-base text-sm leading-none sm:leading-normal text-white lg:mb-2 mb-0">
        Lic. Sol Barrionuevo
      </h3>
      <p className="font-normal lg:text-base sm:text-sm text-xs leading-none sm:leading-normal text-white/90">
        Psicopedagogía - Coordinación General
      </p>
    </>
  );
};

const TeamMemberFour = () => {
  return (
    <>
      <h3 className="font-bold lg:text-2xl sm:text-base text-sm leading-none sm:leading-normal text-white lg:mb-2 mb-0">
        Lic. Candela Rodríguez
      </h3>
      <p className="font-normal lg:text-base sm:text-sm text-xs leading-none sm:leading-normal text-white/90">
        Psicopedagogía
      </p>
    </>
  );
};

const TeamMemberFive = () => {
  return (
    <>
      <h3 className="font-bold lg:text-2xl sm:text-base text-sm leading-none sm:leading-normal text-white lg:mb-2 mb-0">
        María Luz Fernández
      </h3>
      <p className="font-normal lg:text-base sm:text-sm text-xs leading-none sm:leading-normal text-white/90">
        Tutorías Inglés/Matemáticas
      </p>
    </>
  );
};

const TeamMemberSix = () => {
  return (
    <>
      <h3 className="font-bold lg:text-2xl sm:text-base text-sm leading-none sm:leading-normal text-white lg:mb-2 mb-0">
        Lic. María Sol Bayugar
      </h3>
      <p className="font-normal lg:text-base sm:text-sm text-xs leading-none sm:leading-normal text-white/90">
        Psicología
      </p>
    </>
  );
};

const TeamMemberSeven = () => {
  return (
    <>
      <h3 className="font-bold lg:text-2xl sm:text-base text-sm leading-none sm:leading-normal text-white lg:mb-2 mb-0">
        Lola Martene Devoto
      </h3>
      <p className="font-normal lg:text-base sm:text-sm text-xs leading-none sm:leading-normal text-white/90">
        Tutorías Inglés/ Castellano
      </p>
    </>
  );
};

const TeamGroup = () => {
  return <></>;
};

// Componentes adicionales para completar las 11 tarjetas
const AbstractPattern = () => {
  return <></>;
};

const BeachScene = () => {
  return <></>;
};

// Configuración de las 11 tarjetas del equipo para pantallas grandes (lg+)
const teamCardsLarge = [
  {
    id: 1,
    content: <TeamMemberOne />,
    className: "col-span-1 h-[175px] lg:h-[460px]", // Primera fila, primera columna - más alta
    thumbnail: "/imgs/team/Lic.Marcela-Alegre.webp",
    title: "Lic. Marcela Alegre",
    description:
      "Psicopedagogía - Cofundadora de DyC - Psicólogía deportiva - Directora área Neurotecnología y Aprendizaje - Neuropsicología - Neurorehabilitación",
    orientation: "vertical",
  },
  {
    id: 2,
    content: <AbstractPattern />,
    className: "col-span-2 h-[175px] lg:h-[460px]", // Primera fila, segunda columna - más baja
    thumbnail: "/videos/team/deco-1.mp4",
    orientation: "vertical",
  },
  {
    id: 3,
    content: <TeamMemberTwo />,
    className: "col-span-1 h-[175px] lg:h-[460px]", // Primera fila, cuarta columna - más alta
    thumbnail: "/imgs/team/Lic.Maria-Lourdes-Mazzola-Vernengo.webp",
    title: "Lic. Lourdes Mazzola",
    description:
      "Psicología - Cofundadora de DyC - Terapia cognitiva conductual -Orientación familiar y escolar - Directora área Psicología y Mindfulness.",
    orientation: "vertical",
  },
  {
    id: 4,
    content: <AbstractPattern />,
    className: "col-span-1 h-[175px] lg:h-[370px]", // Tercera fila, primera columna - más baja
    thumbnail: "/videos/team/deco-3.mp4",
    orientation: "vertical",
  },
  {
    id: 5,
    content: <TeamGroup />,
    className: "col-span-2 h-[175px] lg:h-[370px]", // Tercera fila, segunda y tercera columna - más alta y ancha
    thumbnail: "/imgs/team/team-full.webp",
    orientation: "horizontal",
    title: "Team Dislexia y Conducta",
    description:
      "Lic. Sol Barrionuevo, Lic. Candela Rodríguez, Lic. Lourdes Mazzola, Lic. Marcela Alegre, Lola Martene Devoto, María Luz Fernández y  Lic. María Sol Bayugar.",
  },
  {
    id: 6,
    content: <BeachScene />,
    className: "col-span-1 h-[175px] lg:h-[370px]", // Primera fila, tercera columna - altura media
    thumbnail: "/videos/team/deco-2.mp4",
    orientation: "vertical",
  },
];

// Configuración de las 11 tarjetas del equipo para pantallas pequeñas (< lg)
// TeamMemberTwo (id: 4) cambia de posición con BeachScene (id: 3)
const teamCardsSmall = [
  {
    id: 1,
    content: <TeamMemberOne />,
    className: "col-span-1 h-[175px] lg:h-[460px]", // Primera fila, primera columna - más alta
    thumbnail: "/imgs/team/Lic.Marcela-Alegre.webp",
    title: "Lic. Marcela Alegre",
    description:
      "Psicopedagogía - Cofundadora de DyC - Psicólogía deportiva - Directora área Neurotecnología y Aprendizaje - Neuropsicología - Neurorehabilitación",
    orientation: "vertical",
  },
  {
    id: 2,
    content: <AbstractPattern />,
    className: "col-span-1 h-[175px] lg:h-[420px]", // Primera fila, segunda columna - más baja
    thumbnail: "/videos/team/deco-1.mp4",
    orientation: "vertical",
  },
  {
    id: 3,
    content: <TeamMemberTwo />, // Cambiado: ahora es TeamMemberTwo
    className: "col-span-1 h-[175px] lg:h-[380px]", // Primera fila, tercera columna - altura media
    thumbnail: "/imgs/team/Lic.Maria-Lourdes-Mazzola-Vernengo.webp",
    title: "Lic. Lourdes Mazzola",
    description:
      "Psicología - Cofundadora de DyC - Terapia cognitiva conductual -Orientación familiar y escolar - Directora área Psicología y Mindfulness.",
    orientation: "vertical", // Cambiado: thumbnail de TeamMemberTwo
  },
  {
    id: 4,
    content: <TeamGroup />,
    className: "col-span-3 h-[175px] sm:h-[320px] lg:h-[320px]", // 1 fila en small, 2 filas en md+
    thumbnail: "/imgs/team/team-full.webp",
    orientation: "horizontal",
    title: "Team Dislexia y Conducta",
    description:
      "Lic. Sol Barrionuevo, Lic. Candela Rodríguez, Lic. Lourdes Mazzola, Lic. Marcela Alegre, Lola Martene Devoto, María Luz Fernández y  Lic. María Sol Bayugar.",
  },
  {
    id: 5,
    content: <BeachScene />, // Cambiado: ahora es BeachScene
    className: "col-span-2 h-[175px] lg:h-[460px]", // Primera fila, cuarta columna - más alta
    thumbnail: "/videos/team/deco-3.mp4", // Cambiado: thumbnail de BeachScene
    orientation: "vertical",
  },
  {
    id: 6,
    content: <AbstractPattern />,
    className: "col-span-1 h-[175px] lg:h-[240px]", // Tercera fila, cuarta columna - altura media
    thumbnail: "/videos/team/deco-2.mp4",
    orientation: "vertical",
  },
];

// Mantener el array original para compatibilidad (se puede eliminar si no se usa en otros lugares)
const teamCards = teamCardsLarge;
