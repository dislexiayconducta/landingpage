"use client";
import { createContext, useContext, useMemo, useState, useCallback } from "react";

const MobileServicesContext = createContext(null);

export function MobileServicesProvider({ children }) {
  const [activeKey, setActiveKey] = useState("diagnostics");

  const updateActiveKey = useCallback((newKey) => {
    if (newKey && newKey !== activeKey) {
      setActiveKey(newKey);
    }
  }, [activeKey]);

  const value = useMemo(() => ({ 
    activeKey, 
    setActiveKey: updateActiveKey
  }), [activeKey, updateActiveKey]);

  return (
    <MobileServicesContext.Provider value={value}>{children}</MobileServicesContext.Provider>
  );
}

export function useMobileServices() {
  const ctx = useContext(MobileServicesContext);
  if (!ctx) throw new Error("useMobileServices must be used within MobileServicesProvider");
  return ctx;
}
