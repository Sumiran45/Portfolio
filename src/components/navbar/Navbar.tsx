"use client";
import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll(); 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[80%] max-w-6xl rounded-xl z-50 transition-all duration-500 ease-out ${scrolled
          ? 'bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/30 shadow-2xl shadow-slate-900/30 before:content-[""] before:absolute before:inset-0 before:rounded-xl before:bg-[linear-gradient(45deg,transparent_0%,rgba(99,102,241,0.1)_50%,transparent_100%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10'
          : 'bg-transparent border border-transparent before:opacity-0'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-1">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="shrink-0 group cursor-pointer">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.3)]"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full transform translate-z-0 group-hover:translate-z-2 transition-all duration-500 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]">
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(124,58,237,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 relative">
                    <span className="relative z-10">S</span>
                    <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-white/50 to-slate-300/50 transform translate-y-[1px] -z-10">S</span>
                  </span>
                </div>

                {/* Reflection */}
                <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-gradient-to-br from-white/20 to-transparent rounded-tl-full rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Outer Glow */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={item.id} className="relative group/navItem">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`relative px-5 py-2.5 block transition-all duration-300 ${activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white/90'
                      }`}
                    style={{
                      animation: `fadeInDown 0.5s ease-out ${index * 0.1}s backwards`
                    }}
                  >
                    {item.label}
                  </a>
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent transition-all duration-300 ${activeSection === item.id
                    ? 'w-full opacity-100'
                    : 'w-0 opacity-0 group-hover/navItem:w-3/4 group-hover/navItem:opacity-100'
                    }`}></div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="relative px-6 py-2.5 text-white font-semibold rounded-full overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center space-x-2 cursor-pointer">
                  <span>Hire Me</span>
                  <ArrowRight className="w-4 h-4 transform -rotate-45" />
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'
            }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/20">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-300 ${activeSection === item.id ? 'bg-purple-500/20 text-white' : ''
                  }`}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col space-y-2 mt-4">
              <button className="w-full px-4 py-2 text-gray-300 hover:text-white font-medium rounded-lg transition-colors duration-300 border border-gray-700">
                Request a demo
              </button>
              <button className="w-full px-4 py-2 bg-white text-gray-900 font-medium rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;