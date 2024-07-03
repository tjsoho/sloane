"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";

interface AccordionProps {
  title: string;
  content: string;
}

export function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [content]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const getAccordionClasses = () => `
    Accordion Class
    text-[20px] md:text-[26px] font-medium font-Archivo leading-none text-brand-cream 
    ${isOpen ? "text-brand-green-dark underline" : ""}
    hover:text-brand-green-dark active:text-brand-green-dark flex justify-between items-center text-left uppercase 
  `;

  return (
    <div className="my-6 flex w-full flex-col px-8 md:px-16">
      <motion.button
        onClick={toggleAccordion}
        initial={false}
        animate={{ backgroundColor: isOpen ? "" : "" }}
        className={getAccordionClasses()} // Apply Tailwind CSS classes for title styling
      >
        <div className="flex">{title}</div>
        <div className="flex flex-col items-end">
          <ArrowDropDownIcon
            className="ml-8 h-8 w-8 transition-transform duration-300 lg:h-16 lg:w-16"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
      </motion.button>
      <Divider orientation="horizontal" className="mt-2 w-full lg:mt-2" />
      <motion.div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: isOpen ? contentHeight : "0px" }}
      >
        <div
          ref={contentRef}
          className="font-Raleway w-contain mb-4 flex-wrap p-4 text-left text-[18px] text-base text-brand-cream lg:text-[21px]" // Apply Tailwind CSS classes for content styling
          dangerouslySetInnerHTML={{ __html: content }} // Render HTML content
        />
      </motion.div>
    </div>
  );
}

export default Accordion;
