
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
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent animate-shimmer"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-accent">Blũ</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A curious and driven junior developer passionate about turning big ideas into accessible, user-friendly tech.
          </p>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-4 bg-gray-300/40 backdrop-blur-md text-gray-800 font-medium rounded-15 hover:bg-gray-300/60 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-gray-300/30"
          >
            Discover My Journey
            <ChevronDown className="ml-2" size={20} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-500" size={32} />
      </div>
    </section>
  );
};

export default Hero;
