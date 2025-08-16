"use client";
import { createContext, useContext, useMemo, useState } from "react";

const ServicesContext = createContext(null);

export function ServicesProvider({ children }) {
  const [activeKey, setActiveKey] = useState("diagnostics");

  const value = useMemo(() => ({ activeKey, setActiveKey }), [activeKey]);

  return (
    <ServicesContext.Provider value={value}>{children}</ServicesContext.Provider>
  );
}

export function useServices() {
  const ctx = useContext(ServicesContext);
  if (!ctx) throw new Error("useServices must be used within ServicesProvider");
  return ctx;
}
