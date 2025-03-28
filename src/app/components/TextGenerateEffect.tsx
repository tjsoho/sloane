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
    return (
        <motion.div
            className="inline-block whitespace-pre"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.1, delay: initialDelay }}
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={char + index}
                    className={cn(
                        "inline-block whitespace-pre",
                        className,
                    )}
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
                        delay: initialDelay + (index * 0.015),
                    }}
                    viewport={viewport}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
} 