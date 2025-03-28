"use client";
import { Accordion } from "../components/Accordion";
import accordionData from "../components/accordionData";
import { motion } from "framer-motion";

const FAQ = () => {
  // Split the FAQ items into two columns
  const halfLength = Math.ceil(accordionData.length / 2);
  const leftColumn = accordionData.slice(0, halfLength);
  const rightColumn = accordionData.slice(halfLength);

  return (
    <div className="relative h-full w-full bg-brand-green overflow-hidden" id="FAQ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-cream/20 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[900px] px-4 py-16 lg:py-24">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, margin: "-100px" }}
          className="relative mb-12 text-center"
        >
          <div className="absolute -left-4 top-0 h-6 w-[1px] bg-brand-logo" />
          <h1 className="font-Archivo text-2xl font-bold text-brand-cream md:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 font-Raleway text-sm text-brand-cream/80 md:text-base">
            Everything you need to know about Sloane
          </p>
        </motion.div>

        {/* FAQ Items - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
          {/* Left Column */}
          <div className="space-y-1">
            {leftColumn.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: false, margin: "-100px" }}
                className="w-full"
              >
                <div className="relative overflow-hidden bg-brand-green/10 backdrop-blur-sm border border-brand-cream/5 rounded-sm">
                  <Accordion
                    title={item.title}
                    content={item.content}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-1">
            {rightColumn.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: (index + halfLength) * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: false, margin: "-100px" }}
                className="w-full"
              >
                <div className="relative overflow-hidden bg-brand-green/10 backdrop-blur-sm border border-brand-cream/5 rounded-sm">
                  <Accordion
                    title={item.title}
                    content={item.content}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
