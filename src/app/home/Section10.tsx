'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Section10: React.FC = () => {
    return (
        <section className="bg-brand-green py-8 lg:py-0">
            <div className="flex flex-col-reverse md:flex-row">
                {/* Left Content - Image */}
                <div className="flex items-center justify-center md:w-1/2">
                    <motion.div
                        className="relative h-[300px] md:h-[400px] w-full"
                        initial={{ opacity: 0, scale: 0.70, rotate: -1 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            transition: {
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1], // Custom easing for luxury feel
                                scale: {
                                    duration: 1.5,
                                    ease: [0.22, 1, 0.36, 1]
                                },
                                rotate: {
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1]
                                }
                            }
                        }}
                        viewport={{ once: false, margin: "-100px" }}
                    >
                        <Image
                            src="/images/AppleSet.png"
                            alt="Sloane Founders"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </motion.div>
                </div>

                {/* Right Content - Text */}
                <div className="flex items-center p-6 md:w-1/2 md:p-24 order-first md:order-last">
                    <div>
                        <div className="flex flex-col items-start mb-6 md:mb-8">
                            <h2 className="mb-1 font-Archivo text-5xl leading-none text-brand-cream">
                                Go Green
                            </h2>
                            <p className="text-brand-cream text-base">Why is SLoane green?</p>
                        </div>
                        <ul className="mb-6 md:mb-8 space-y-2 text-base md:text-xl text-brand-cream">
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faLeaf} className="text-brand-logo text-lg md:text-xl" />
                                Green is for growth.
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faLeaf} className="text-brand-logo text-lg md:text-xl" />
                                Green is for calm.
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faLeaf} className="text-brand-logo text-lg md:text-xl" />
                                Green is easiest on the eye.
                            </li>
                        </ul>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link
                                href="https://app.sloane.biz/userform"
                                className="group relative inline-flex items-center justify-center rounded-full border border-brand-cream bg-brand-green px-5 py-2 font-Archivo text-xs uppercase text-brand-cream transition-all duration-300 hover:border-brand-logo hover:text-brand-logo overflow-hidden"
                            >
                                <div className="absolute inset-0 w-full h-full">
                                    <div className="absolute inset-0 -skew-x-12 animate-[shine_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-brand-logo/40 to-transparent"></div>
                                </div>
                                <span className="relative z-10 font-medium text-base md:text-lg">Try For Free</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section10;
