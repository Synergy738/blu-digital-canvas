
import React from 'react';
import { Download, Code, Zap, Globe } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    window.open('https://www.pnet.co.za/5/candidatecv/v1/candidates/10708141/profile/attachments/15519271', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gray-800 overflow-hidden">
      {/* Enhanced Background Design Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-500/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-blue-400/30 rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-500/10 rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border border-blue-300/20 rounded-full"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-blue-400/5 rounded-full blur-3xl"></div>
        
        {/* Code symbols floating */}
        <div className="absolute top-1/4 right-20 text-blue-500/20 text-6xl font-mono">{"{ }"}</div>
        <div className="absolute bottom-1/4 left-20 text-blue-400/20 text-4xl font-mono">{"< />"}</div>
        
        {/* Tech icons */}
        <div className="absolute top-1/2 left-10 text-blue-500/15">
          <Code size={32} />
        </div>
        <div className="absolute top-1/3 right-16 text-blue-400/15">
          <Zap size={28} />
        </div>
        <div className="absolute bottom-1/2 right-1/4 text-blue-300/15">
          <Globe size={24} />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-400 text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Blũ Dennis
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-blue-400">
                Frontend/Backend Developer
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                A curious and driven junior developer passionate about turning big ideas into accessible, user-friendly tech solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToServices}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Discover My Journey
              </button>
              <button 
                onClick={handleDownloadCV}
                className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:bg-blue-500/10"
              >
                <Download size={18} />
                Download CV
              </button>
            </div>
          </div>

          {/* Right Content - Image with enhanced design */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Enhanced decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-2xl blur-xl"></div>
              <div className="relative w-80 h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl overflow-hidden border border-gray-600">
                <img 
                  src="/lovable-uploads/fada83be-694a-47a0-9125-2a1a9cab8a76.png" 
                  alt="Blũ Dennis"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Enhanced decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full shadow-lg shadow-blue-500/30"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-blue-400 rounded-full shadow-lg shadow-blue-400/30"></div>
                <div className="absolute top-4 -left-4 w-6 h-6 bg-blue-300 rounded-full opacity-60"></div>
                
                {/* Tech stack indicators */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                  <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
