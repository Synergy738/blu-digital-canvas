
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-accent">Blũ</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A curious and driven junior developer passionate about turning big ideas into accessible, user-friendly tech.
          </p>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-15 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-white/20"
          >
            Discover My Journey
            <ChevronDown className="ml-2" size={20} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60" size={32} />
      </div>
    </section>
  );
};

export default Hero;
