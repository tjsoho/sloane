"use client";

import { motion } from "framer-motion";
import { cn } from "../utils/cn";

type TextGenerateEffectProps = {
    text: string;
    duration?: number;
    viewport?: { once: boolean };
    initialDelay?: number;
} & React.ComponentProps<"span">;

export function TextGenerateEffect({
    text,
    duration = 0.3,
    viewport = { once: true },
    initialDelay = 0,
    className,
}: TextGenerateEffectProps) {
    const words = text.split(" ");
    const firstLine = words.slice(0, 2).join(" "); // "TRY SLOANE"
    const secondLine = words.slice(2).join(" "); // "FOR FREE"

    return (
        <motion.div
            className="inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.1, delay: initialDelay }}
        >
            <div className="lg:inline">
                <motion.span
                    className={cn("inline-block", className)}
                    initial={{ opacity: 0, filter: "blur(4px)", rotateX: 90, y: 5 }}
                    whileInView={{
                        opacity: 1,
                        filter: "blur(0px)",
                        rotateX: 0,
                        y: 0,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: duration,
                        delay: initialDelay,
                    }}
                    viewport={viewport}
                >
                    {firstLine}
                </motion.span>
                <span className="lg:hidden block -h-[34px] leading-none" />
                <span className="lg:inline-block lg:ml-4">&nbsp;</span>
                <motion.span
                    className={cn("inline-block", className)}
                    initial={{ opacity: 0, filter: "blur(4px)", rotateX: 90, y: 5 }}
                    whileInView={{
                        opacity: 1,
                        filter: "blur(0px)",
                        rotateX: 0,
                        y: 0,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: duration,
                        delay: initialDelay + 0.1,
                    }}
                    viewport={viewport}
                >
                    {secondLine}
                </motion.span>
            </div>
        </motion.div>
    );
} 