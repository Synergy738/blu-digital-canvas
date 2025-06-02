
import React from 'react';
import { Download, Code2, Database, Shield } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Java', logo: 'https://www.svgrepo.com/show/303388/java-4-logo.svg' },
    { name: 'C#', logo: 'https://www.svgrepo.com/show/373533/csharp2.svg' },
    { name: 'Python', logo: 'https://www.citypng.com/public/uploads/preview/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn.png' },
    { name: 'MySQL', logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'HTML', logo: 'https://banner2.cleanpng.com/20180802/tpl/8d69cc4026ef9ea2fbc9f5972dd52fe7.webp' },
    { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'WordPress', logo: 'https://s.w.org/style/images/about/WordPress-logotype-wmark.png' },
    { name: 'GitHub', logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    { name: 'VS Code', logo: 'https://code.visualstudio.com/assets/images/code-stable.png' },
    { name: 'PHP', logo: 'https://www.php.net/images/logos/new-php-logo.svg' },
    { name: 'Delphi', logo: 'https://www.logotypes101.com/logos/55/E0FD5CC6E93A59C0EF35D8A2A68B1D1A/delphi.png' }
  ];

  const handleDownloadCV = () => {
    window.open('https://www.pnet.co.za/5/candidatecv/v1/candidates/10708141/profile/attachments/15519271', '_blank');
  };

  return (
    <section id="about" className="py-20 bg-[#262626]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400">
            Frontend/Backend Development & Cybersecurity Specialist
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - New Design */}
          <div className="relative">
            <div className="w-full h-96 bg-[#1a1a1a] rounded-2xl flex items-center justify-center relative overflow-hidden">
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
                <div className="w-24 h-24 bg-[#588aef]/20 rounded-xl flex items-center justify-center">
                  <Code2 className="text-[#588aef]" size={40} />
                </div>
                <div className="w-24 h-24 bg-[#588aef]/20 rounded-xl flex items-center justify-center">
                  <Database className="text-[#588aef]" size={40} />
                </div>
                <div className="w-24 h-24 bg-[#588aef]/20 rounded-xl flex items-center justify-center">
                  <Shield className="text-[#588aef]" size={40} />
                </div>
                <div className="w-24 h-24 bg-[#588aef]/20 rounded-xl flex items-center justify-center">
                  <div className="text-[#588aef] font-bold text-2xl">AI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                A full stack software developer with skills in cybersecurity, machine learning and
                database management systems who has a passion for turning complex problems into
                elegant solutions. I seek the challenge of creating desktop and web applications that
                are not just functional but also visually appealing—the kind of apps that make you
                say, "Wow, this is actually pretty good". In-person collaboration is what I strive for,
                where I can bounce ideas off a team and really get to know the people I'm working
                with. I'd like to bring all of who I am to the table, and that means finding a role that
                lets me be myself: a confident, open-minded, and intelligent young coder who's ready
                to make a real impact in the IT industry.

              </p>
            </div>

            <button 
              onClick={handleDownloadCV}
              className="bg-[#588aef] hover:bg-[#4577e8] text-white px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <Download size={18} />
              Download CV
            </button>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-[#1a1a1a] p-4 rounded-lg hover:bg-gray-700 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" />
                    <span className="text-white font-medium text-sm">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
