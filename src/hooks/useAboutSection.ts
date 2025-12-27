"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

export const useAboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      icon: "💻",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      icon: "⚙️",
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "Android SDK"],
      icon: "📱",
    },
    {
      category: "DevOps",
      items: ["Docker", "AWS", "CI/CD", "Kubernetes"],
      icon: "🚀",
    },
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications serving 100K+ users",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Studios",
      period: "2020 - 2022",
      description:
        "Designed intuitive interfaces for 50+ client projects across industries",
    },
    {
      title: "Mobile Developer",
      company: "App Innovators",
      period: "2019 - 2020",
      description:
        "Built cross-platform mobile apps with 4.5+ star ratings",
    },
  ];

  return {
    ref,
    isInView,
    skills,
    experiences,
  };
};
