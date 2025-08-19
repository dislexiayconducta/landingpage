"use client";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { useEffect, useState } from "react";

export default function Team() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Seleccionar el array de tarjetas según el tamaño de pantalla
  const currentTeamCards = isLargeScreen ? teamCardsLarge : teamCardsSmall;

  return (
    <section className="relative bg-background py-20 lg:py-40 z-20 px-4 sm:px-6 lg:px-8 xl:px-20">
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
  return (
    <div>
      <p className="font-bold md:text-2xl text-lg text-white mb-2">
        Lic. Marcela Alegre
      </p>
      <p className="font-normal text-sm text-white/80 mb-3">Directiva Responsable de DC</p>    
    </div>
  );
};

const TeamMemberTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-lg text-white mb-2">
        Lic. María Lourdes Mazzola Vernengo
      </p>
      <p className="font-normal text-lg text-white/80 mb-3">Directiva Responsable de DC</p>      
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

const WaterReflection = () => {
  return <></>;
};

const ElderlyPortrait = () => {
  return <></>;
};

const GraduationPortrait = () => {
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
    thumbnail: "/imgs/team/team.png",
  },
  {
    id: 3,
    content: <BeachScene />,
    className: "col-span-1 h-[175px] lg:h-[380px]", // Primera fila, tercera columna - altura media
    thumbnail: "/imgs/team/team.png",
  },
  {
    id: 4,
    content: <TeamMemberTwo />,
    className: "col-span-1 h-[175px] lg:h-[460px]", // Primera fila, cuarta columna - más alta
    thumbnail: "/imgs/team/Lic.Maria-Lourdes-Mazzola-Vernengo.webp",
  },
  {
    id: 5,
    content: <TeamMemberThree />,
    className: "col-span-1 h-[175px] lg:h-[420px]", // Segunda fila, primera columna - más baja
    thumbnail: "/imgs/team/team-1.webp",
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
    content: <TeamMemberSix />,
    className: "col-span-1 h-[175px] lg:h-[420px]", // Segunda fila, cuarta columna - más alta
    thumbnail: "/imgs/team/team-4.webp",
  },
  {
    id: 9,
    content: <AbstractPattern />,
    className: "col-span-1 h-[175px] lg:h-[240px]", // Tercera fila, primera columna - más baja
    thumbnail: "/imgs/team/team.png",
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
    thumbnail: "/imgs/team/team-5.webp",
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
    thumbnail: "/imgs/team/team.png",
  },
  {
    id: 3,
    content: <TeamMemberTwo />, // Cambiado: ahora es TeamMemberTwo
    className: "col-span-1 h-[175px] lg:h-[380px]", // Primera fila, tercera columna - altura media
    thumbnail: "/imgs/team/Lic.Maria-Lourdes-Mazzola-Vernengo.webp", // Cambiado: thumbnail de TeamMemberTwo
  },
  {
    id: 4,
    content: <BeachScene />, // Cambiado: ahora es BeachScene
    className: "col-span-1 h-[175px] lg:h-[460px]", // Primera fila, cuarta columna - más alta
    thumbnail: "/imgs/team/team.png", // Cambiado: thumbnail de BeachScene
  },
  {
    id: 5,
    content: <TeamMemberThree />,
    className: "col-span-1 h-[175px] lg:h-[420px]", // Segunda fila, primera columna - más baja
    thumbnail: "/imgs/team/team-1.webp",
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
    content: <TeamMemberSix />,
    className: "col-span-1 h-[175px] lg:h-[420px]", // Segunda fila, cuarta columna - más alta
    thumbnail: "/imgs/team/team-4.webp",
  },
  {
    id: 9,
    content: <AbstractPattern />,
    className: "col-span-1 h-[175px] lg:h-[240px]", // Tercera fila, primera columna - más baja
    thumbnail: "/imgs/team/team.png",
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
    thumbnail: "/imgs/team/team-5.webp",
  },
];

// Mantener el array original para compatibilidad (se puede eliminar si no se usa en otros lugares)
const teamCards = teamCardsLarge;
