
import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Java', level: 95, logo: 'https://www.oracle.com/a/ocom/img/cb71-java-logo.png' },
    { name: 'C#', level: 90, logo: 'https://miro.medium.com/v2/resize:fit:920/1*eAO0V-jmx9_DaZdtVbs1Gw.png' },
    { name: 'Python', level: 95, logo: 'https://www.citypng.com/public/uploads/preview/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn.png' },
    { name: 'MySQL', level: 85, logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
    { name: 'JavaScript', level: 80, logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400">
            Frontend/Backend Development & Cybersecurity Specialist
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Decorative Design */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Geometric patterns */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-400 rounded-full opacity-30"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-500 opacity-20 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border-4 border-blue-400 rounded-2xl rotate-12 opacity-40"></div>
                </div>
              </div>
              <div className="text-center z-10">
                <div className="text-6xl font-bold text-blue-400 mb-2">Blũ</div>
                <div className="text-2xl text-gray-300">Developer</div>
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

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105">
              <Download size={18} />
              Download CV
            </button>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain" />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
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
