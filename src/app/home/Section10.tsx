'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Section10: React.FC = () => {
    return (
        <section className="bg-brand-green">
            <div className="flex flex-col-reverse md:flex-row">
                {/* Left Content - Image */}
                <div className="p-16 md:w-1/2">
                    <div className="relative h-[400px] w-full ">
                        <Image
                            src="/images/AppleSet.png"
                            alt="Sloane Founders"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </div>

                {/* Right Content - Text */}
                <div className="flex items-center p-8 md:w-1/2 md:p-24">
                    <div>
                        <div className="flex flex-col items-start mb-8">
                            <h2 className="mb-1 font-Archivo text-3xl text-brand-cream md:text-5xl leading-none">
                                Go Green
                            </h2>
                            <p className="text-brand-cream">Why is SLoane green?</p>
                        </div>
                        <ul className="mb-8 space-y-2 text-lg text-brand-cream md:text-xl">
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faLeaf} className="text-brand-logo text-xl" />
                                Green is for growth.
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faLeaf} className="text-brand-logo text-xl" />
                                Green is for calm.
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faLeaf} className="text-brand-logo text-xl" />
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
                                <span className="relative z-10 font-medium text-lg">Try For Free</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section10;
