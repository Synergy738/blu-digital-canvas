
import React from 'react';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

const Skills = () => {
  const { elementRef, isVisible } = useFadeInOnScroll(0.1, 500);

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

  return (
    <section 
      ref={elementRef}
      id="skills" 
      className={`py-20 bg-[#1a1a1a] transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#588aef] to-[#7ba3f3] bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`bg-[#262626] p-6 rounded-lg hover:bg-gray-700 transition-all duration-500 hover:scale-105 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 75}ms` : '0ms'
              }}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img src={skill.logo} alt={skill.name} className="w-14 h-14 object-contain transition-transform duration-300" />
                </div>
                <span className="text-white font-medium text-sm text-center">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
