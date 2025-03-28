'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
                            <button className="inline-block rounded-full bg-brand-cream px-16 py-4 font-Archivo text-lg uppercase text-brand-green transition-all hover:bg-brand-green-dark hover:text-brand-cream hover:shadow-lg">
                                TRY FOR FREE
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section10;
