"use client";
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/navbar/Navbar';
import { ArrowRight } from 'lucide-react';

const EnhancedPortfolioHero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const words = ['Full Stack Developer', 'UI/UX Designer', 'Android Developer', 'Devops Engineer'];

  useEffect(() => {
    setIsMounted(true);
    
    // Typing animation
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    // Mouse parallax
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    // Animated background
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
      }> = [];

      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }

      const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(168, 85, 247, ${0.3 + Math.random() * 0.3})`;
          ctx.fill();

          // Connect nearby particles
          particles.slice(i + 1).forEach((p2) => {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - dist / 100)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          });
        });

        requestAnimationFrame(animate);
      };

      animate();
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(wordInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div 
        className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-4 overflow-hidden relative pt-20"
        suppressHydrationWarning
      >
        {/* Animated canvas background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 opacity-40"
          suppressHydrationWarning
        />

        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        {/* Main content */}
        <div
          className={`relative z-10 max-w-7xl w-full transition-all duration-1000 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              {/* Main heading */}
              <div
                style={{
                  transform: isMounted ? `translateX(${mousePosition.x * 0.3}px) translateY(${mousePosition.y * 0.3}px)` : 'translateX(0px) translateY(0px)',
                  transition: 'transform 0.2s ease-out',
                }}
              >
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none">
                  Sumiran
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient md:ml-20">
                    Biswas
                  </span>
                </h1>
                
                {/* Typing effect */}
                <div className="flex items-center justify-center lg:justify-start space-x-3 min-h-[3rem]">
                  <span className="text-2xl md:text-3xl text-gray-300">I'm a</span>
                  <div className="relative overflow-hidden w-60 md:w-84 h-12">
                    <div
                      className="transition-all duration-700 ease-in-out"
                      style={{ transform: `translateY(-${currentWord * 3}rem)` }}
                    >
                      {words.map((word, i) => (
                        <div
                          key={i}
                          className="h-12 flex items-center text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap"
                        >
                          {word}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Crafting exceptional digital experiences with cutting-edge technologies.
                Specialized in full-stack development and creating pixel-perfect,
                performant applications that users love.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
                {[
                  { value: '5+', label: 'Years Exp' },
                  { value: '100+', label: 'Projects' },
                  { value: '50+', label: 'Happy Clients' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${0.2 + i * 0.1}s backwards`
                    }}
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center space-x-2">
                    <span>Explore Work</span>
                    <ArrowRight className="w-4 h-4 transform" />
                  </span>
                </button>
                
                <button className="group px-8 py-4 border-2 border-purple-400/50 text-purple-300 rounded-full font-semibold hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Let's Talk</span>
                  </span>
                </button>
              </div>

              {/* Social links */}
              <div className="flex gap-4 justify-center lg:justify-start pt-6">
                {[
                  { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                  { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white hover:border-purple-500 hover:scale-110 transform transition-all duration-300 backdrop-blur-sm"
                    title={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Right side - 3D Card */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div
                className="relative"
                style={{
                  transform: isMounted ? `perspective(1000px) rotateY(${mousePosition.x * 0.8}deg) rotateX(${-mousePosition.y * 0.8}deg)` : 'perspective(1000px)',
                  transition: 'transform 0.1s ease-out',
                }}
              >
                {/* Floating rings */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full" />
                </div>
                <div className="absolute inset-0 animate-spin-reverse">
                  <div className="absolute inset-4 border-2 border-pink-500/20 rounded-full" />
                </div>

                {/* Main card */}
                <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]">
                  {/* Glowing layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-40 animate-pulse-slow" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-purple-600 to-pink-600 rounded-3xl rotate-6 opacity-30 animate-float" />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-3xl -rotate-3 opacity-30 animate-float-delayed" />
                  
                  {/* Card content */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/50 bg-gradient-to-br from-slate-900 to-slate-800">
                    {/* Image */}
                    <img 
                      src="/Hero_image.jfif" 
                      alt="Sumiran Biswas" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent" />
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-xl animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }

          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(3deg);
            }
          }

          @keyframes float-delayed {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(-3deg);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes blink {
            0%, 49% {
              opacity: 1;
            }
            50%, 100% {
              opacity: 0;
            }
          }

          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes spin-reverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

          .animate-blob {
            animation: blob 7s infinite;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }

          .animation-delay-4000 {
            animation-delay: 4s;
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float-delayed 6s ease-in-out infinite;
          }

          .animate-blink {
            animation: blink 1s step-end infinite;
          }

          .animate-pulse-slow {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }

          .animate-spin-reverse {
            animation: spin-reverse 15s linear infinite;
          }
        `}</style>
      </div>
    </>
  );
};

export default EnhancedPortfolioHero;