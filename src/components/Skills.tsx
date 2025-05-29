
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Python', logo: 'https://www.python.org/static/community_logos/python-logo.svg' },
    { name: 'Java', logo: 'https://www.oracle.com/a/ocom/img/cb71-java-logo.png' },
    { name: 'C#', logo: 'https://dotnet.microsoft.com/static/images/redesign/social-share.png' },
    { name: 'MySQL', logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
    { name: 'Delphi', logo: 'https://static.wikia.nocookie.net/delphi/images/f/f0/Delphi_Logo.png' },
    { name: 'WordPress', logo: 'https://s.w.org/style/images/about/WordPress-logotype-wmark.png' },
    { name: 'PHP', logo: 'https://www.php.net/images/logos/php-logo.svg' },
    { name: 'GitHub', logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.svg' },
    { name: 'VSCode', logo: 'https://code.visualstudio.com/assets/images/code-stable.png' },
    { name: 'HTML', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png' },
    { name: 'CSS', logo: 'https://www.w3.org/Style/CSS/logo.png' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' }
  ];

  return (
    <section id="skills" className="py-20 section-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          My <span className="text-accent breathing-accent">Skills</span>
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
