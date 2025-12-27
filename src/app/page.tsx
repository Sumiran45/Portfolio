"use client";

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [pathname, searchParams, isMounted]);

  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
      </section>
    </main>
  );
}
