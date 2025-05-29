
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Python', logo: '🐍' },
    { name: 'Java', logo: '☕' },
    { name: 'C#', logo: '#️⃣' },
    { name: 'MySQL', logo: '🗄️' },
    { name: 'Delphi', logo: '🔷' },
    { name: 'WordPress', logo: '📝' },
    { name: 'PHP', logo: '🐘' },
    { name: 'GitHub', logo: '🐙' },
    { name: 'VSCode', logo: '💻' },
    { name: 'HTML', logo: '🌐' },
    { name: 'CSS', logo: '🎨' },
    { name: 'JavaScript', logo: '⚡' }
  ];

  return (
    <section id="skills" className="py-20 section-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          My <span className="text-accent">Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card p-6 rounded-15 text-center cursor-pointer"
            >
              <div className="text-4xl mb-4">
                {skill.logo}
              </div>
              <h3 className="font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
