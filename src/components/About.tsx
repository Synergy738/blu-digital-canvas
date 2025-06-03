
import React from 'react';
import { Download, Code2, Database, Shield } from 'lucide-react';

const About = () => {
  const handleDownloadCV = () => {
    window.open('https://www.pnet.co.za/5/candidatecv/v1/candidates/10708141/profile/attachments/15519271', '_blank');
  };

  return (
    <section id="about" className="py-20 bg-[#262626]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#588aef] to-[#7ba3f3] bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-gray-400">
            Frontend/Backend Development & Cybersecurity Specialist
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tech Icons Visual - Centered */}
          <div className="mb-16 flex justify-center">
            <div className="w-full max-w-md h-80 bg-[#1a1a1a] rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Background patterns */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#588aef]/30 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#588aef]/20 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border-4 border-[#588aef]/40 rounded-2xl rotate-12"></div>
                </div>
              </div>
              
              {/* Tech Icons */}
              <div className="relative z-10 grid grid-cols-2 gap-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#588aef]/30 to-[#7ba3f3]/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Code2 className="text-[#588aef]" size={40} />
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-[#588aef]/30 to-[#7ba3f3]/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Database className="text-[#588aef]" size={40} />
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-[#588aef]/30 to-[#7ba3f3]/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Shield className="text-[#588aef]" size={40} />
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-[#588aef]/30 to-[#7ba3f3]/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-[#588aef] to-[#7ba3f3] bg-clip-text text-transparent font-bold text-2xl">AI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Below Image */}
          <div className="text-center space-y-8">
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
