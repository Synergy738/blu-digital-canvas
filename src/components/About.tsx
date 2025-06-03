
import React from 'react';
import { Download } from 'lucide-react';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

const About = () => {
  const { elementRef, isVisible } = useFadeInOnScroll(0.1, 400);

  const handleDownloadCV = () => {
    window.open('https://www.pnet.co.za/5/candidatecv/v1/candidates/10708141/profile/attachments/15519271', '_blank');
  };

  return (
    <section 
      ref={elementRef}
      id="about" 
      className={`py-20 bg-[#262626] transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#588aef] to-[#7ba3f3] bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-gray-400">
            Frontend/Backend Development & Cybersecurity Specialist
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className={`mb-12 flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#588aef]/20 to-[#7ba3f3]/20 rounded-2xl blur-xl"></div>
              <div className="relative w-80 h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/fada83be-694a-47a0-9125-2a1a9cab8a76.png" 
                  alt="Blũ Dennis"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#588aef] rounded-full shadow-lg shadow-[#588aef]/30"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-[#588aef] rounded-full shadow-lg shadow-[#588aef]/30"></div>
                <div className="absolute top-4 -left-4 w-6 h-6 bg-[#588aef] rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Content Below Image */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">A full stack software developer with skills in cybersecurity, machine learning and database management systems who has a passion for turning complex problems into elegant solutions. I seek the challenge of creating desktop and web applications that are not just functional but also visually appealing—the kind of apps that make you say, "Wow, this is actually pretty good". In-person collaboration is what I strive for, where I can bounce ideas off a team and really get to know the people I'm working with. I'd like to bring all of who I am to the table, and that means finding a role that lets me be myself: a confident, open-minded, and intelligent young coder who's ready to make a real impact in the IT industry.</p>
            </div>

            <button 
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-[#588aef] to-[#7ba3f3] hover:from-[#4577e8] hover:to-[#6b9af2] text-white px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg shadow-[#588aef]/30 mx-auto"
            >
              <Download size={18} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
