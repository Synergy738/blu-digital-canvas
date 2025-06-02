
import React from 'react';
import { Download, Code2, Database, Shield } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Java', logo: 'https://www.oracle.com/a/ocom/img/cb71-java-logo.png' },
    { name: 'C#', logo: 'https://miro.medium.com/v2/resize:fit:920/1*eAO0V-jmx9_DaZdtVbs1Gw.png' },
    { name: 'Python', logo: 'https://www.citypng.com/public/uploads/preview/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn.png' },
    { name: 'MySQL', logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'HTML', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945001.png' },
    { name: 'CSS', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-css3-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945020.png' },
    { name: 'WordPress', logo: 'https://s.w.org/style/images/about/WordPress-logotype-wmark.png' },
    { name: 'GitHub', logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    { name: 'VS Code', logo: 'https://code.visualstudio.com/assets/images/code-stable.png' },
    { name: 'PHP', logo: 'https://www.php.net/images/logos/new-php-logo.svg' },
    { name: 'Delphi', logo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.logotypes101.com%2Flogo%2Fdelphi-1&psig=AOvVaw1GfFhuDTCcmyhaHA-0akIz&ust=1748930798975000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCB4Y2J0o0DFQAAAAAdAAAAABAE' }
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
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#0055ff]/30 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#0055ff]/20 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border-4 border-[#0055ff]/40 rounded-2xl rotate-12"></div>
                </div>
              </div>
              
              {/* Tech Icons */}
              <div className="relative z-10 grid grid-cols-2 gap-8">
                <div className="w-24 h-24 bg-[#0055ff]/20 rounded-xl flex items-center justify-center">
                  <Code2 className="text-[#0055ff]" size={40} />
                </div>
                <div className="w-24 h-24 bg-[#0055ff]/20 rounded-xl flex items-center justify-center">
                  <Database className="text-[#0055ff]" size={40} />
                </div>
                <div className="w-24 h-24 bg-[#0055ff]/20 rounded-xl flex items-center justify-center">
                  <Shield className="text-[#0055ff]" size={40} />
                </div>
                <div className="w-24 h-24 bg-[#0055ff]/20 rounded-xl flex items-center justify-center">
                  <div className="text-[#0055ff] font-bold text-2xl">AI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                A software engineer and the modern-day architect of digital realms, I navigate the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, I compose symphonies of logic, my mind a labyrinth of algorithms and solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs.
              </p>
            </div>

            <button 
              onClick={handleDownloadCV}
              className="bg-[#0055ff] hover:bg-[#0044cc] text-white px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105"
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
