'use client';
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "100%"; // Removed duplicate value
}

export const Reveal = ({ children, width = "100%" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      if (isInView) {
        await mainControls.start("visible");
      } else {
        await mainControls.start("hidden");
      }
    };
    
    void animate(); // Call the async function and handle the promise
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.25, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
