'use client';
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const SlideReveal = ({ children, width = "100%" }: Props) => {
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

    void animate(); // Mark the promise as intentionally ignored
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
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
