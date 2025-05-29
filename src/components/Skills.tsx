
import React from 'react';

const Skills = () => {
  const skills = [
    'Python', 'Java', 'C#', 'MySQL', 'Delphi', 'WordPress',
    'PHP', 'GitHub', 'VSCode', 'HTML', 'CSS', 'JavaScript'
  ];

  const skillColors = [
    'bg-blue-500', 'bg-orange-500', 'bg-purple-500', 'bg-blue-600',
    'bg-red-500', 'bg-blue-700', 'bg-indigo-500', 'bg-gray-800',
    'bg-blue-400', 'bg-orange-600', 'bg-blue-500', 'bg-yellow-500'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          My <span className="text-accent">Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={`skill-card bg-white p-6 rounded-15 shadow-lg text-center cursor-pointer`}
            >
              <div className={`w-16 h-16 ${skillColors[index]} rounded-15 mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">
                  {skill.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold text-primary">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
