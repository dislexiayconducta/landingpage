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
      <h3 className="font-bold  lg:text-2xl text-base text-white lg:mb-2 mb-0">
        {isLargeScreen ? "Marcela" : "Lic. Marcela"}
      </h3>
      <p className="font-normal lg:text-base text-sm text-white/90">
        {isLargeScreen ? "Fundadora - Licenciada" : "Fundadora"}
      </p>
    </div>
  );
};

const TeamMemberTwo = () => {
  const isLargeScreen = useIsLargeScreen();
  return (
    <div>
      <h3 className="font-bold lg:text-2xl text-base text-white lg:mb-2 mb-0">
        {isLargeScreen ? "Lourdes" : "Lic. Lourdes"}
      </h3>
      <p className="font-normal lg:text-base text-sm text-white/90">
        {isLargeScreen ? "Fundadora - Licenciada" : "Fundadora"}
      </p>
    </div>
  );
};

const TeamMemberThree = () => {
  return <></>;
};

const TeamMemberFour = () => {
  return <></>;
};

const TeamMemberFive = () => {
  return <></>;
};

const TeamMemberSix = () => {
  return <></>;
};

const TeamMemberSeven = () => {
  return <></>;
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
  },
  {
    id: 2,
    content: <AbstractPattern />,
    className: "col-span-1 h-[175px] lg:h-[420px]", // Primera fila, segunda columna - más baja
    thumbnail: "/videos/team/deco-1.mp4",
  },
  {
    id: 3,
    content: <BeachScene />,
    className: "col-span-1 h-[175px] lg:h-[380px]", // Primera fila, tercera columna - altura media
    thumbnail: "/videos/team/deco-2.mp4",
  },
  {
    id: 4,
    content: <TeamMemberSix />,
    className: "col-span-1 h-[175px] lg:h-[460px]", // Primera fila, cuarta columna - más alta
    thumbnail: "/imgs/team/team-4.webp",
  },
  {
    id: 5,
    content: <TeamMemberThree />,
    className: "col-span-1 h-[175px] lg:h-[420px]", // Segunda fila, primera columna - más baja
    thumbnail: "/imgs/team/team-5.webp",
  },
  {
    id: 6,
    content: <TeamMemberFour />,
    className: "col-span-1 h-[175px] lg:h-[380px] lg:-top-[40px]", // Segunda fila, segunda columna - altura media
    thumbnail: "/imgs/team/team-2.webp",
  },
  {
    id: 7,
    content: <TeamMemberFive />,
    className: "col-span-1 h-[175px] lg:h-[420px] lg:-top-[80px]", // Segunda fila, tercera columna - más baja
    thumbnail: "/imgs/team/team-3.webp",
  },
  {
    id: 8,
    content: <TeamMemberTwo />,
    className: "col-span-1 h-[175px] lg:h-[420px]", // Segunda fila, cuarta columna - más alta
    thumbnail: "/imgs/team/Lic.Maria-Lourdes-Mazzola-Vernengo.webp",
  },
  {
    id: 9,
    content: <AbstractPattern />,
    className: "col-span-1 h-[175px] lg:h-[240px]", // Tercera fila, primera columna - más baja
    thumbnail: "/videos/team/deco-3.mp4",
  },
  {
    id: 10,
    content: <TeamGroup />,
    className: "col-span-2 h-[175px] lg:h-[320px] lg:-top-[80px]", // Tercera fila, segunda y tercera columna - más alta y ancha
    thumbnail: "/imgs/team/team-full.webp",
  },
  {
    id: 11,
    content: <TeamMemberSeven />,
    className: "col-span-1 h-[175px] lg:h-[240px]", // Tercera fila, cuarta columna - altura media
    thumbnail: "/imgs/team/team-1.webp",
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
  },
  {
    id: 2,
    content: <AbstractPattern />,
    className: "col-span-1 h-[175px] lg:h-[420px]", // Primera fila, segunda columna - más baja
    thumbnail: "/videos/team/deco-1.mp4",
  },
  {
    id: 3,
    content: <TeamMemberSix />, // Cambiado: ahora es TeamMemberTwo
    className: "col-span-1 h-[175px] lg:h-[380px]", // Primera fila, tercera columna - altura media
    thumbnail: "/imgs/team/team-4.webp", // Cambiado: thumbnail de TeamMemberTwo
  },
  {
    id: 4,
    content: <BeachScene />, // Cambiado: ahora es BeachScene
    className: "col-span-1 h-[175px] lg:h-[460px]", // Primera fila, cuarta columna - más alta
    thumbnail: "/videos/team/deco-2.mp4", // Cambiado: thumbnail de BeachScene
  },
  {
    id: 5,
    content: <TeamMemberThree />,
    className: "col-span-1 h-[175px] lg:h-[420px]", // Segunda fila, primera columna - más baja
    thumbnail: "/imgs/team/team-3.webp",
  },
  {
    id: 6,
    content: <TeamMemberTwo />,
    className: "col-span-1 h-[175px] lg:h-[380px] lg:-top-[40px]", // Segunda fila, segunda columna - altura media
    thumbnail: "/imgs/team/Lic.Maria-Lourdes-Mazzola-Vernengo.webp",
  },
  {
    id: 7,
    content: <TeamMemberFive />,
    className: "col-span-1 h-[175px] lg:h-[420px] lg:-top-[80px]", // Segunda fila, tercera columna - más baja
    thumbnail: "/imgs/team/team-5.webp",
  },
  {
    id: 8,
    content: <TeamMemberSix />,
    className: "col-span-1 h-[175px] lg:h-[420px]", // Segunda fila, cuarta columna - más alta
    thumbnail: "/imgs/team/team-4.webp",
  },
  {
    id: 9,
    content: <TeamMemberSeven />,
    className: "col-span-1 h-[175px] lg:h-[240px]", // Tercera fila, primera columna - más baja
    thumbnail: "/imgs/team/team-1.webp",
  },
  {
    id: 10,
    content: <AbstractPattern />,
    className: "col-span-3 h-[175px] lg:h-[320px] lg:-top-[80px]", // Tercera fila, segunda y tercera columna - más alta y ancha
    thumbnail: "/videos/team/deco-3.mp4",
  },
  {
    id: 11,
    content: <TeamGroup />,
    className: "col-span-3 h-[175px] lg:h-[240px]", // Tercera fila, cuarta columna - altura media
    thumbnail: "/imgs/team/team-full.webp",
  },
];

// Mantener el array original para compatibilidad (se puede eliminar si no se usa en otros lugares)
const teamCards = teamCardsLarge;
