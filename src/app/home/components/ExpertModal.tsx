'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faArrowLeft,
    faArrowRight,
    faBullhorn,
    faHashtag,
    faPen,
    faEnvelope,
    faWallet,
    faLightbulb,
    faComments,
    faChartLine,
    faFileAlt,
    faHandshake,
    faUsers,
    faSearch,
    faMicrophone,
    faCheckCircle,
    faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { features } from '../data/features';

export interface Feature {
    title: string;
    description: string;
}

const getIconForTitle = (title: string) => {
    const iconMap: { [key: string]: any } = {
        'MARKETING': faBullhorn,
        'SOCIAL MEDIA': faHashtag,
        'BLOGS': faPen,
        'EMAIL MARKETING': faEnvelope,
        'Financial Wellness': faWallet,
        'Ideation': faLightbulb,
        'Free Chat': faComments,
        'Biz Strategy': faChartLine,
        'LinkedIn': faLinkedin,
        'Website Copy': faFileAlt,
        'Client Comms': faHandshake,
        'Train & Onboard': faUsers,
        'SEO RESEARCH': faSearch,
        'Podcast Producer': faMicrophone,
        'Focus': faCheckCircle,
        '2025 New Year New You': faCalendarCheck
    };
    return iconMap[title] || faPlus;
};

export interface ExpertModalProps {
    feature: Feature;
    onClose: () => void;
    currentIndex: number;
    onNext: () => void;
    onPrevious: () => void;
    totalFeatures: number;
}

const ExpertModal: React.FC<ExpertModalProps> = ({
    feature,
    onClose,
    currentIndex,
    onNext,
    onPrevious,
    totalFeatures
}) => {
    const icon = getIconForTitle(feature.title);
    const nextFeature = features[(currentIndex + 1) % totalFeatures];
    const prevFeature = features[(currentIndex - 1 + totalFeatures) % totalFeatures];

    if (!nextFeature || !prevFeature) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 md:p-8"
            onClick={onClose}
        >
            <motion.div
                layout
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                    layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
                className="relative w-full max-w-4xl h-[80vh] md:h-auto rounded-3xl bg-brand-cream/95 shadow-2xl overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Background Icon */}
                <motion.div
                    key={`icon-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="absolute -right-32 -top-32"
                >
                    <FontAwesomeIcon
                        icon={icon}
                        className="h-[32rem] w-[32rem] text-brand-green/30"
                    />
                </motion.div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 text-brand-green/70 hover:text-brand-green transition-colors duration-300 z-20"
                >
                    <FontAwesomeIcon icon={faPlus} className="h-6 w-6 rotate-45" />
                </button>

                {/* Content */}
                <div className="flex flex-col h-full">
                    <motion.div
                        layout
                        className="relative z-10 p-8 md:p-16 overflow-y-auto flex-1"
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <motion.div
                            key={`counter-${currentIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6 md:mb-8"
                        >
                            <span className="text-sm font-medium text-brand-green/70 tracking-wider uppercase">
                                Expert {currentIndex + 1} of {totalFeatures}
                            </span>
                        </motion.div>
                        <motion.h3
                            key={`title-${currentIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="mb-4 md:mb-6 text-4xl md:text-6xl font-bold text-brand-green leading-tight relative z-10"
                        >
                            {feature.title}
                        </motion.h3>
                        <motion.p
                            key={`desc-${currentIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="text-base md:text-xl text-brand-green/80 leading-relaxed max-w-2xl relative z-10"
                        >
                            {feature.description}
                        </motion.p>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        layout
                        className="relative z-10 border-t border-brand-green/10 bg-brand-cream/95"
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="md:flex md:items-center md:justify-between p-4 md:p-8">
                            {/* Mobile Navigation */}
                            <div className="flex flex-col gap-4 md:hidden">
                                {/* Pagination - Mobile */}
                                <div className="flex justify-center">
                                    <div className="flex items-center gap-2">
                                        {[...Array(totalFeatures)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${i === currentIndex
                                                    ? 'bg-brand-green w-4'
                                                    : 'bg-brand-green/20 hover:bg-brand-green/40'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Navigation Buttons - Mobile */}
                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={onPrevious}
                                        className="group flex items-center gap-2 text-brand-green/70 hover:text-brand-green transition-colors duration-300"
                                    >
                                        <div className="relative h-6 w-6">
                                            <div className="absolute inset-0 rounded-full border border-current"></div>
                                            <FontAwesomeIcon
                                                icon={faArrowLeft}
                                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 transition-transform duration-500 group-hover:rotate-[-360deg]"
                                            />
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <span className="text-xs font-medium">{prevFeature.title}</span>
                                            <span className="text-[10px] font-medium tracking-wider uppercase text-brand-green/50">Previous Expert</span>
                                        </div>
                                    </button>

                                    <button
                                        onClick={onNext}
                                        className="group flex items-center gap-2 text-brand-green/70 hover:text-brand-green transition-colors duration-300"
                                    >
                                        <div className="flex flex-col items-end">
                                            <span className="text-xs font-medium">{nextFeature.title}</span>
                                            <span className="text-[10px] font-medium tracking-wider uppercase text-brand-green/50">Next Expert</span>
                                        </div>
                                        <div className="relative h-6 w-6">
                                            <div className="absolute inset-0 rounded-full border border-current"></div>
                                            <FontAwesomeIcon
                                                icon={faArrowRight}
                                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 transition-transform duration-500 group-hover:rotate-[360deg]"
                                            />
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Desktop Navigation (Unchanged) */}
                            <div className="hidden md:flex md:items-center md:justify-between w-full">
                                <button
                                    onClick={onPrevious}
                                    className="group flex items-center gap-6 text-brand-green/70 hover:text-brand-green transition-colors duration-300"
                                >
                                    <div className="relative h-8 w-8">
                                        <div className="absolute inset-0 rounded-full border border-current"></div>
                                        <FontAwesomeIcon
                                            icon={faArrowLeft}
                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 transition-transform duration-500 group-hover:rotate-[-360deg]"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-medium tracking-wider uppercase text-brand-green/50">Previous Expert</span>
                                        <span className="text-sm font-medium">{prevFeature.title}</span>
                                    </div>
                                </button>

                                <div className="flex items-center justify-center flex-1 px-8">
                                    <div className="flex items-center gap-2">
                                        {[...Array(totalFeatures)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${i === currentIndex
                                                    ? 'bg-brand-green w-4'
                                                    : 'bg-brand-green/20 hover:bg-brand-green/40'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={onNext}
                                    className="group flex items-center gap-6 text-brand-green/70 hover:text-brand-green transition-colors duration-300"
                                >
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs font-medium tracking-wider uppercase text-brand-green/50">Next Expert</span>
                                        <span className="text-sm font-medium">{nextFeature.title}</span>
                                    </div>
                                    <div className="relative h-8 w-8">
                                        <div className="absolute inset-0 rounded-full border border-current"></div>
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 transition-transform duration-500 group-hover:rotate-[360deg]"
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ExpertModal; 