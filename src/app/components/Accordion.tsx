"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  title: string;
  content: string;
}

export const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors duration-200 hover:bg-brand-cream/5"
      >
        <span className="font-Raleway text-sm font-medium text-brand-cream/90 md:text-base">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-4 w-4"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[1px] w-4 bg-brand-cream/60" />
            <div className="absolute h-4 w-[1px] bg-brand-cream/60" />
          </div>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pt-4 pb-6">
              <p className="font-Raleway text-sm leading-relaxed text-brand-cream/70 md:text-base space-y-3">
                {content.split('\n').map((paragraph, index) => (
                  <span key={index} className="block">
                    {paragraph}
                  </span>
                ))}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
