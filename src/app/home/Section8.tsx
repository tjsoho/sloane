'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ExpertModal from './components/ExpertModal';
import { features } from './data/features';

const Section8: React.FC = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedFeatureIndex !== null) {
      setSelectedFeatureIndex((selectedFeatureIndex + 1) % features.length);
    }
  };

  const handlePrevious = () => {
    if (selectedFeatureIndex !== null) {
      setSelectedFeatureIndex((selectedFeatureIndex - 1 + features.length) % features.length);
    }
  };

  return (
    <section className="relative bg-brand-green py-16 md:py-24">
      {/* Title Overlay */}
      <div className="container mx-auto mb-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-cream md:text-4xl lg:text-5xl">
          Meet Your Team of Experts
        </h2>
        <p className="mt-4 text-lg text-brand-cream md:text-xl">
          This is the work they do for you: So you can focus on what matters most.
        </p>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedFeatureIndex(index)}
              className="group flex h-24 md:h-32 cursor-pointer items-center justify-center rounded-2xl bg-brand-cream transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-center text-sm font-bold text-brand-green md:text-xl">
                  {feature.title}
                </h3>
                <div className="mt-2 relative">
                  <div className="absolute inset-0 rounded-full border border-brand-green"></div>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="h-4 w-6 text-brand-green relative z-10 transition-transform duration-300 group-hover:rotate-180"
                    style={{ strokeWidth: 1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFeatureIndex !== null && features[selectedFeatureIndex] && (
          <ExpertModal
            feature={features[selectedFeatureIndex]}
            onClose={() => setSelectedFeatureIndex(null)}
            currentIndex={selectedFeatureIndex}
            onNext={handleNext}
            onPrevious={handlePrevious}
            totalFeatures={features.length}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Section8;
