import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paintbrush } from "lucide-react";

const LoadingScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gradient-hero"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mb-6"
          >
            <Paintbrush className="h-12 w-12 text-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-display font-bold text-foreground mb-2"
          >
            ColorCraft
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-1 rounded-full gradient-sky"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
