
import React from 'react';
import { Download, Code, Terminal, Cpu } from 'lucide-react';
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
          {/* Coding-themed Visual Element */}
          <div className={`mb-12 flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              {/* Main container with gradient border effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#588aef]/20 to-[#7ba3f3]/20 rounded-2xl blur-xl"></div>
              <div className="relative w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl overflow-hidden border border-gray-600">
                
                {/* Code editor mockup */}
                <div className="h-full flex flex-col">
                  {/* Title bar */}
                  <div className="bg-gray-800 border-b border-gray-600 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300 text-sm ml-2">Developer.tsx</span>
                  </div>
                  
                  {/* Code content */}
                  <div className="flex-1 p-4 font-mono text-sm">
                    <div className="space-y-2">
                      <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-blue-400">developer</span>{' '}
                        <span className="text-white">=</span>{' '}
                        <span className="text-green-400">{'{'}</span>
                      </div>
                      <div className={`ml-4 transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                        <span className="text-red-400">name</span>
                        <span className="text-white">:</span>{' '}
                        <span className="text-yellow-400">'Blũ Dennis'</span>
                        <span className="text-white">,</span>
                      </div>
                      <div className={`ml-4 transition-all duration-1000 delay-900 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                        <span className="text-red-400">role</span>
                        <span className="text-white">:</span>{' '}
                        <span className="text-yellow-400">'Full Stack Dev'</span>
                        <span className="text-white">,</span>
                      </div>
                      <div className={`ml-4 transition-all duration-1000 delay-1100 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                        <span className="text-red-400">passion</span>
                        <span className="text-white">:</span>{' '}
                        <span className="text-yellow-400">'Problem Solving'</span>
                      </div>
                      <div className={`transition-all duration-1000 delay-1300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                        <span className="text-green-400">{'}'}</span>
                      </div>
                    </div>
                    
                    {/* Floating icons */}
                    <div className="absolute top-20 right-6">
                      <Code className={`w-8 h-8 text-[#588aef] transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{animation: isVisible ? 'float 6s ease-in-out infinite' : 'none'}} />
                    </div>
                    <div className="absolute bottom-20 left-6">
                      <Terminal className={`w-6 h-6 text-[#7ba3f3] transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{animation: isVisible ? 'float 6s ease-in-out infinite 2s' : 'none'}} />
                    </div>
                    <div className="absolute top-32 left-8">
                      <Cpu className={`w-5 h-5 text-[#588aef] transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{animation: isVisible ? 'float 6s ease-in-out infinite 4s' : 'none'}} />
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#588aef] rounded-full shadow-lg shadow-[#588aef]/30"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-[#588aef] rounded-full shadow-lg shadow-[#588aef]/30"></div>
                <div className="absolute top-4 -left-4 w-6 h-6 bg-[#588aef] rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Content Below Coding Element */}
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
