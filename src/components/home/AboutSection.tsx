"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  // Scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring physics for animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Parallax effects for background blobs
  const blob1Y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    springConfig
  );
  const blob2Y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 200]),
    springConfig
  );

  const skills = [
    {
      category: "Frontend",
      icon: "⚛️",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: "🔧",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Mobile",
      icon: "📱",
      items: ["React Native", "Expo", "iOS", "Android"],
    },
    {
      category: "Tools",
      icon: "🛠️",
      items: ["Git", "Docker", "AWS", "Figma"],
    },
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Leading development of cloud-native applications, mentoring junior developers, and architecting scalable solutions for enterprise clients.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description:
        "Built responsive web applications using React and Node.js, improved performance by 40%, and implemented CI/CD pipelines.",
    },
    {
      title: "Frontend Developer",
      company: "Creative Studio",
      period: "2018 - 2020",
      description:
        "Crafted pixel-perfect user interfaces, collaborated with designers, and developed reusable component libraries.",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "5+", icon: "📅" },
    { label: "Projects Completed", value: "50+", icon: "🚀" },
    { label: "Happy Clients", value: "30+", icon: "😊" },
    { label: "Code Commits", value: "10K+", icon: "💻" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-4 md:px-8 md:mt-24"
      id="about"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: blob1Y }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: blob2Y }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Passionate full-stack developer crafting exceptional digital experiences
              through clean code and innovative solutions
            </p>
          </div>
        </ScrollReveal>

        {/* Professional Introduction Card - Redesigned */}
        <ScrollReveal delay={0.2} direction="up">
          <div ref={introRef} className="mb-20 relative group">
            {/* Enhanced glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-all duration-700" />

            <div className="relative p-8 md:p-12 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
              {/* Animated corner highlights */}
              <motion.div
                className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-purple-500/40 rounded-tl-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-pink-500/40 rounded-br-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />

              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />

              <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">
                {/* Profile Image Section - Enhanced */}
                <motion.div
                  className="flex-shrink-0 relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative">
                    {/* Rotating gradient ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-30 blur-2xl"
                    />

                    {/* Main avatar container with enhanced styling */}
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 p-1.5 shadow-2xl shadow-purple-500/40">
                      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-7xl md:text-8xl overflow-hidden relative">
                        <span className="filter drop-shadow-2xl">👨‍💻</span>
                        {/* Inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
                      </div>
                    </div>

                    {/* Enhanced status badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                      className="absolute -bottom-3 -right-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 border-4 border-slate-900 shadow-lg shadow-green-500/50"
                    >
                      <span className="flex items-center gap-2 text-white text-sm font-semibold">
                        <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                        Available
                      </span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section - Enhanced animations */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                      Transforming Ideas into
                      <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Digital Reality
                      </span>
                    </h3>
                    <motion.div
                      className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"].map((tag, idx) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full hover:bg-purple-500/20 transition-all cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="space-y-4 text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <p className="text-base md:text-lg">
                      With over <span className="text-purple-400 font-semibold">5 years of expertise</span> in
                      full-stack development, I specialize in building{" "}
                      <span className="text-pink-400 font-semibold">scalable, high-performance applications</span>{" "}
                      that combine elegant design with robust functionality.
                    </p>
                    <p className="text-base">
                      My approach centers on writing clean, maintainable code while leveraging modern technologies
                      to deliver solutions that exceed expectations. From concept to deployment, I bring technical
                      excellence and creative problem-solving to every project.
                    </p>
                  </motion.div>

                  {/* Key highlights with staggered animation */}
                  <motion.div
                    className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    {[
                      { icon: "🎯", text: "User-Centric Design" },
                      { icon: "⚡", text: "Performance Optimized" },
                      { icon: "🔒", text: "Security First" },
                      { icon: "📈", text: "Scalable Architecture" },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-sm text-gray-400 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30 transition-all"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid - Completely Redesigned */}
        <div ref={skillsRef} className="mb-20">
          <ScrollReveal delay={0.1} direction="up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Technical{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill.category} delay={0.2 + index * 0.15} direction="up">
                <motion.div
                  className="group relative h-full perspective-1000"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ perspective: "1000px" }}
                >
                  {/* Animated gradient border glow */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl opacity-0 blur-lg group-hover:opacity-50 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Main Card with 3D transform */}
                  <motion.div
                    className="relative h-full p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-500 overflow-visible"
                    whileHover={{ rotateY: 5, rotateX: 5 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Rotating Circular Ring Background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-3xl">
                      <motion.div
                        className="relative w-40 h-40"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {/* Outer rotating circle with gradient */}
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <defs>
                            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
                            </linearGradient>
                          </defs>

                          {/* Background circle */}
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="rgba(148, 163, 184, 0.1)"
                            strokeWidth="1"
                          />

                          {/* Animated progress circle */}
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke={`url(#gradient-${index})`}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="283"
                            initial={{ strokeDashoffset: 283 }}
                            whileInView={{ strokeDashoffset: 70 }}
                            transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                            style={{
                              transform: "rotate(-90deg)",
                              transformOrigin: "50% 50%",
                            }}
                          />

                          {/* Rotating dots on circle */}
                          <motion.circle
                            cx="50"
                            cy="5"
                            r="3"
                            fill="#ec4899"
                            opacity="0.8"
                          >
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 50 50"
                              to="360 50 50"
                              dur="8s"
                              repeatCount="indefinite"
                            />
                          </motion.circle>

                          <motion.circle
                            cx="95"
                            cy="50"
                            r="2.5"
                            fill="#a855f7"
                            opacity="0.6"
                          >
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 50 50"
                              to="360 50 50"
                              dur="12s"
                              repeatCount="indefinite"
                            />
                          </motion.circle>
                        </svg>

                        {/* Secondary rotating ring */}
                        <motion.div
                          className="absolute inset-4 rounded-full border border-purple-500/20"
                          animate={{ rotate: -360 }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Content Layer with 3D depth */}
                    <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                      {/* Icon with enhanced 3D animation */}
                      <motion.div
                        className="text-6xl mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 shadow-lg"
                        whileHover={{
                          scale: 1.2,
                          rotateY: 180,
                          rotateZ: 10
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <span className="filter drop-shadow-lg">{skill.icon}</span>
                      </motion.div>

                      {/* Category title with glow */}
                      <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {skill.category}
                      </h4>

                      {/* Skills list with improved spacing */}
                      <ul className="space-y-3.5">
                        {skill.items.map((item, idx) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.4 + idx * 0.1,
                              ease: "easeOut"
                            }}
                            whileHover={{ x: 5 }}
                            className="text-sm text-gray-400 flex items-center gap-3 group-hover:text-gray-300 transition-all"
                          >
                            {/* Animated bullet point */}
                            <motion.span
                              className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                              whileHover={{ scale: 1.5 }}
                              animate={{
                                boxShadow: [
                                  "0 0 0 0 rgba(168, 85, 247, 0.4)",
                                  "0 0 0 8px rgba(168, 85, 247, 0)",
                                ],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: idx * 0.2,
                              }}
                            />
                            <span className="font-medium">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Animated corner accents */}
                    <motion.div
                      className="absolute top-2 right-2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />

                    {/* Bottom glow line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                    />

                    {/* Particle effect on hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-purple-400 rounded-full"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${30 + i * 20}%`,
                          }}
                          animate={{
                            y: [-20, -40, -20],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>


        {/* Experience Timeline - Completely Redesigned */}
        <div ref={experienceRef}>
          <ScrollReveal delay={0.1} direction="up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Professional{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h3>
          </ScrollReveal>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.title} delay={0.2 + index * 0.2} direction="up">
                <motion.div
                  className="group relative"
                  whileHover={{ x: 10, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {/* Enhanced gradient glow */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 blur-md group-hover:opacity-30 transition-opacity duration-500"
                    whileHover={{ scale: 1.02 }}
                  />

                  {/* Card with improved design */}
                  <div className="relative p-6 md:p-8 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                    {/* Animated left accent bar */}
                    <motion.div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-r group-hover:h-3/4 transition-all duration-700"
                      initial={false}
                    />

                    {/* Subtle grid overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{
                      backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
                      backgroundSize: '30px 30px'
                    }} />

                    {/* Content */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 relative z-10">
                      <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                      >
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                          {exp.title}
                        </h4>
                        <p className="text-purple-400 font-semibold text-lg mb-1">{exp.company}</p>
                      </motion.div>

                      {/* Enhanced period badge */}
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 group-hover:border-purple-500/50 text-gray-300 text-sm font-medium self-start transition-all duration-300"
                      >
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </motion.span>
                    </div>

                    {/* Description with fade-in */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                      className="text-gray-400 leading-relaxed relative z-10"
                    >
                      {exp.description}
                    </motion.p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 text-center">
            <p className="text-gray-400 text-lg mb-8">Ready to bring your vision to life?</p>
            <MagneticButton />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// Enhanced scroll reveal with better timing
const ScrollReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: "left" | "right" | "up";
}> = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.6"],
  });

  const getInitialX = () => {
    switch (direction) {
      case "left":
        return -60;
      case "right":
        return 60;
      default:
        return 0;
    }
  };

  const getInitialY = () => {
    return direction === "up" ? 50 : 0;
  };

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]),
    { stiffness: 120, damping: 30 }
  );

  const x = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [getInitialX(), 0]),
    { stiffness: 120, damping: 30 }
  );

  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [getInitialY(), 0]),
    { stiffness: 120, damping: 30 }
  );

  return (
    <motion.div ref={ref} style={{ opacity, x, y }} transition={{ delay }}>
      {children}
    </motion.div>
  );
};

// Enhanced magnetic button
const MagneticButton: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const springConfig = { stiffness: 150, damping: 15 };
  const x = useSpring(position.x, springConfig);
  const y = useSpring(position.y, springConfig);

  return (
    <motion.button
      ref={buttonRef}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base md:text-lg font-semibold text-white shadow-2xl shadow-purple-500/50 overflow-hidden"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <span className="relative z-10 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Let's Collaborate
      </span>
      <motion.svg
        className="relative z-10 w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        animate={{ x: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </motion.svg>
    </motion.button>
  );
};

export default AboutSection;