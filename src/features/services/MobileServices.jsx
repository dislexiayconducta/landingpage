"use client";

import {
  useState,
  useCallback,
} from "react";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SERVICE_KEYS } from "./services-ids";
import * as Sections from "./sections";
import {
  MobileServicesProvider,
  useMobileServices,
} from "./mobile-services-context";

const TITLES = {
  diagnostics: "Diagnósticos",
  treatments: "Tratamientos",
  cognitiveRehab: "Rehabilitación Cognitiva",
  behavioralRegulation: "Regulación Conductual",
  cbt: "TCC",
  playAttention: "Play Attention®",
  schoolTutoring: "Tutoría Escolar",
  mindfulness: "Mindfulness",
};

function MobileServicesContent() {
  const { activeKey, setActiveKey } = useMobileServices();
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (sectionKey) => {
    if (openSection === sectionKey) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionKey);
      setActiveKey(sectionKey);
    }
  };

  const getSectionComponent = (key) => {
    const ComponentMap = {
      diagnostics: Sections.Diagnostics,
      treatments: Sections.Treatments,
      cognitiveRehab: Sections.CognitiveRehab,
      behavioralRegulation: Sections.BehavioralRegulation,
      cbt: Sections.CBT,
      playAttention: Sections.PlayAttention,
      schoolTutoring: Sections.SchoolTutoring,
      mindfulness: Sections.Mindfulness,
    };
    const Component = ComponentMap[key];
    return Component ? <Component /> : null;
  };

  return (
    <>
      <motion.span
        className="text-background-secondary-foreground text-5xl md:text-6xl lg:text-7xl font-medium mb-8 xl:mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Servicios
      </motion.span>
      <div className="relative z-0">
        <div className="w-full space-y-6 my-6">
          {SERVICE_KEYS.map((key, index) => {
            const isOpen = openSection === key;
            const isActive = activeKey === key;
            const SectionComponent = getSectionComponent(key);

            return (
              <div key={key} data-key={key}>
                <Collapsible
                  open={isOpen}
                  onOpenChange={() => handleToggle(key)}
                  className={`transition-all duration-300 ${
                    isActive ? "" : ""
                  }`}
                >
                  <CollapsibleTrigger className="w-full flex items-center justify-between transition-colors duration-300 cursor-pointer hover:opacity-80">
                    <span
                      className={`text-3xl md:text-4xl font-semibold text-left transition-colors duration-300 ${
                        isActive ? "text-neutral-b0" : "text-neutral-b70"
                      }`}
                    >
                      {TITLES[key]}
                    </span>
                    <motion.div
                      className={`transition-colors duration-300 ${
                        isActive ? "text-neutral-b0" : "text-neutral-b70"
                      }`}
                    >
                      {isOpen ? <X size={20} /> : <Plus size={20} />}
                    </motion.div>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="overflow-hidden">
                    <div className="mt-4">{SectionComponent}</div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default function MobileServices() {
  return (
    <div className="lg:hidden block">
      <MobileServicesProvider>
        <MobileServicesContent />
      </MobileServicesProvider>
    </div>
  );
}
