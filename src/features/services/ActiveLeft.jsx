"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useServices } from "./services-context";
import ActiveContent from "./ActiveContent";

export default function ActiveLeft() {
  const { activeKey } = useServices();

  return (
    <div className="bg-neutral-b700 rounded-2xl p-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeKey}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <ActiveContent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
