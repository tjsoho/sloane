'use client';

import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-green-light">
            <div className="relative flex flex-col items-center">
                {/* Spinner */}
                <motion.div
                    className="h-32 w-32 rounded-full border border-brand-logo border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                {/* Sloane Text */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center font-Archivo text-2xl text-brand-logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    sloane.
                </motion.div>
            </div>
        </div>
    );
};

export default LoadingScreen; 