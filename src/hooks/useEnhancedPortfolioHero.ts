"use client";

import { useEffect, useRef, useState } from "react";
import { useSpring } from "motion/react";
import { initParticleCanvas } from "@/services/particleService";

const words = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Android Developer",
    "DevOps Engineer",
];

export const useEnhancedPortfolioHero = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [currentWord, setCurrentWord] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // 3D tilt springs for the right card
    const tiltX = useSpring(0, { stiffness: 120, damping: 12 });
    const tiltY = useSpring(0, { stiffness: 120, damping: 12 });

    // light parallax for the left heading
    const headingX = useSpring(0, { stiffness: 80, damping: 15 });
    const headingY = useSpring(0, { stiffness: 80, damping: 15 });

    useEffect(() => {
        setIsMounted(true);

        // Typing animation
        const wordInterval = setInterval(
            () => setCurrentWord((prev) => (prev + 1) % words.length),
            2600
        );

        // Canvas particles (delegated to service)
        const cleanupParticles = initParticleCanvas(canvasRef.current);

        return () => {
            clearInterval(wordInterval);
            cleanupParticles?.();
        };
    }, []);

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const midX = rect.width / 2;
        const midY = rect.height / 2;

        const rotateY = ((x - midX) / midX) * 12; // left/right
        const rotateX = -((y - midY) / midY) * 12; // up/down

        tiltX.set(rotateX);
        tiltY.set(rotateY);

        // softer movement for heading
        headingX.set(((x - midX) / midX) * 8);
        headingY.set(((y - midY) / midY) * 6);
    };

    const handlePointerLeave = () => {
        tiltX.set(0);
        tiltY.set(0);
        headingX.set(0);
        headingY.set(0);
    };

    const stats = [
        { value: "5+", label: "Years Experience" },
        { value: "100+", label: "Projects Delivered" },
        { value: "50+", label: "Happy Clients" },
    ];

    const socials = ["GitHub", "LinkedIn", "Twitter"];

    return {
        isMounted,
        currentWord,
        words,
        canvasRef,
        tiltX,
        tiltY,
        headingX,
        headingY,
        handlePointerMove,
        handlePointerLeave,
        stats,
        socials,
    };
};
