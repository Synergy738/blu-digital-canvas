
import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Java', level: 95, logo: 'https://www.oracle.com/a/ocom/img/cb71-java-logo.png' },
    { name: 'C#', level: 90, logo: 'https://miro.medium.com/v2/resize:fit:920/1*eAO0V-jmx9_DaZdtVbs1Gw.png' },
    { name: 'Python', level: 95, logo: 'https://www.citypng.com/public/uploads/preview/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn.png' },
    { name: 'MySQL', level: 85, logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
    { name: 'JavaScript', level: 80, logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'HTML', level: 90, logo: 'https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945001.png' },
    { name: 'CSS', level: 85, logo: 'https://cdn.iconscout.com/icon/free/png-256/free-css3-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945020.png' },
    { name: 'WordPress', level: 75, logo: 'https://s.w.org/style/images/about/WordPress-logotype-wmark.png' },
    { name: 'GitHub', level: 75, logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    { name: 'VS Code', level: 80, logo: 'https://code.visualstudio.com/assets/images/code-stable.png' },
    { name: 'PHP', level: 70, logo: 'https://www.php.net/images/logos/new-php-logo.svg' },
    { name: 'Delphi', level: 65, logo: 'https://styles.redditmedia.com/t5_2qh1x/styles/communityIcon_ty6x3kblpmc01.png' }
  ];

  const handleDownloadCV = () => {
    window.open('https://www.pnet.co.za/5/candidatecv/v1/candidates/10708141/profile/attachments/15519271', '_blank');
  };

  return (
    <section id="about" className="py-20 bg-gray-750">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400">
            Frontend/Backend Development & Cybersecurity Specialist
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image with Design */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center relative overflow-hidden border border-gray-600">
              {/* Background patterns */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-400/30 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-500/20 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border-4 border-blue-400/40 rounded-2xl rotate-12"></div>
                </div>
              </div>
              
              {/* Profile Image */}
              <div className="relative z-10 w-48 h-64 rounded-xl overflow-hidden border-2 border-blue-400/50">
                <img 
                  src="/lovable-uploads/fada83be-694a-47a0-9125-2a1a9cab8a76.png" 
                  alt="Blũ Dennis"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              
              {/* Developer label */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-500 px-4 py-2 rounded-full">
                <span className="text-white font-semibold">Developer</span>
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
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <Download size={18} />
              Download CV
            </button>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" />
                    <span className="text-white font-medium text-sm">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-blue-400 font-semibold text-xs">{skill.level}%</span>
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
