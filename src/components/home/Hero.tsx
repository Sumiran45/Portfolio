"use client";

import React from "react";
import { motion } from "motion/react";
import Navbar from "@/components/navbar/Navbar";
import { ArrowRight } from "lucide-react";
import { useEnhancedPortfolioHero } from "@/hooks/useEnhancedPortfolioHero";

const EnhancedPortfolioHero: React.FC = () => {
  const {
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
  } = useEnhancedPortfolioHero();

  return (
    <>
      <Navbar />
      <div
        className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-20"
        suppressHydrationWarning
      >
        {/* Canvas background */}
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 opacity-40"
          suppressHydrationWarning
        />

        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            {/* Left column */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
              <motion.div
                style={{
                  x: headingX,
                  y: headingY,
                }}
                transition={{ type: "spring", stiffness: 80, damping: 16 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight bg-linear-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                  <span className="bg-linear-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                    Sumiran{" "}Biswas
                  </span>
                </h1>

                {/* rotating roles */}
                <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 md:gap-3 min-h-12">
                  <span className="text-base md:text-lg text-gray-300">
                    I&apos;m a
                  </span>
                  <div className="relative h-10 overflow-hidden w-52 md:w-64">
                    <motion.div
                      key={currentWord}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute inset-0 flex items-center"
                    >
                      <span className="text-lg md:text-xl font-semibold bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent whitespace-nowrap">
                        {words[currentWord]}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <p className="max-w-xl text-sm sm:text-base md:text-lg text-gray-300/90 leading-relaxed">
                Crafting high‑quality digital products with modern web and
                mobile technologies, focused on performance, accessibility, and
                memorable user experience.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-2">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isMounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                  >
                    <div className="text-2xl md:text-3xl font-semibold bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs md:text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 px-7 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-purple-500/40"
                >
                  <span className="relative z-10">Explore Work</span>
                  <ArrowRight className="relative z-10 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 rounded-full bg-linear-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-900/10 px-7 py-3 text-sm md:text-base font-semibold text-purple-200 hover:bg-purple-500/10 hover:border-purple-300/70 transition-colors"
                >
                  <svg
                    className="h-4 w-4 md:h-5 md:w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span>Let&apos;s Talk</span>
                </motion.button>
              </div>
            </div>

            {/* Right 3D card */}
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              <motion.div
                className="relative h-80 w-64 sm:h-96 sm:w-72 md:h-104 md:w-80 lg:h-120 lg:w-96"
                style={{
                  rotateX: tiltX,
                  rotateY: tiltY,
                  transformStyle: "preserve-3d",
                }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
              >
                {/* glow layer */}
                <div className="pointer-events-none absolute inset-0 rounded-4xl bg-linear-to-br from-purple-500/40 via-pink-500/30 to-indigo-500/40 blur-3xl" />

                {/* orbit rings */}
                <div className="pointer-events-none absolute inset-5 rounded-[2.5rem] border border-purple-500/20" />
                <div className="pointer-events-none absolute inset-10 rounded-[2.5rem] border border-pink-500/20" />

                {/* main card */}
                <motion.div
                  className="relative h-full w-full rounded-4xl overflow-hidden border border-purple-400/40 bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 shadow-2xl shadow-purple-900/70"
                  style={{ transform: "translateZ(35px)" }}
                >
                  <img
                    src="/Hero_image.jfif"
                    alt="Sumiran Biswas"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default EnhancedPortfolioHero;