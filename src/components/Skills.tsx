
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Python', logo: 'https://www.citypng.com/public/uploads/preview/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn.png' },
    { name: 'Java', logo: 'https://www.oracle.com/a/ocom/img/cb71-java-logo.png' },
    { name: 'C#', logo: 'https://miro.medium.com/v2/resize:fit:920/1*eAO0V-jmx9_DaZdtVbs1Gw.png' },
    { name: 'MySQL', logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
    { name: 'Delphi', logo: 'https://w7.pngwing.com/pngs/368/141/png-transparent-delphi-embarcadero-rad-studio-object-pascal-c-builder-embarcadero-technologies-android-trademark-logo-programming-language.png' },
    { name: 'WordPress', logo: 'https://s.w.org/style/images/about/WordPress-logotype-wmark.png' },
    { name: 'PHP', logo: 'https://www.php.net/images/logos/php-logo.svg' },
    { name: 'GitHub', logo: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' },
    { name: 'VSCode', logo: 'https://code.visualstudio.com/assets/images/code-stable.png' },
    { name: 'HTML', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png' },
    { name: 'CSS', logo: 'https://icon2.cleanpng.com/20180429/ukw/kisspng-cascading-style-sheets-html-web-page-5ae55eb45423e6.4422717315249814283446.jpg' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' }
  ];

  return (
    <section id="skills" className="py-20 skills-enhanced-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          My <span className="text-accent">Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card p-6 rounded-15 text-center cursor-pointer"
            >
              <div className="mb-4 flex justify-center items-center h-16">
                <img 
                  src={skill.logo} 
                  alt={`${skill.name} logo`}
                  className="tech-logo"
                  onError={(e) => {
                    // Fallback to emoji if image fails to load
                    const fallbacks: { [key: string]: string } = {
                      'Python': '🐍',
                      'Java': '☕',
                      'C#': '#️⃣',
                      'MySQL': '🗄️',
                      'Delphi': '🔷',
                      'WordPress': '📝',
                      'PHP': '🐘',
                      'GitHub': '🐙',
                      'VSCode': '💻',
                      'HTML': '🌐',
                      'CSS': '🎨',
                      'JavaScript': '⚡'
                    };
                    (e.target as HTMLImageElement).style.display = 'none';
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'text-4xl';
                    fallbackDiv.textContent = fallbacks[skill.name] || '💻';
                    (e.target as HTMLImageElement).parentNode?.appendChild(fallbackDiv);
                  }}
                />
              </div>
              <h3 className="font-semibold text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
