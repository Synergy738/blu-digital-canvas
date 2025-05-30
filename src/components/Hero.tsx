
import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gray-900 overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-700 rotate-45 opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-blue-500 rotate-12 opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500 opacity-10 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gray-400 text-lg">Hi I am</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Blũ Dennis
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-400">
                Frontend/Backend Developer
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                A curious and driven junior developer passionate about turning big ideas into accessible, user-friendly tech solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToServices}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105"
              >
                Discover My Journey
              </button>
              <button className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2">
                <Download size={18} />
                Download CV
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/fada83be-694a-47a0-9125-2a1a9cab8a76.png" 
                  alt="Blũ Dennis"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
