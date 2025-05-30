
import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-light mb-4">
            Professional <span className="text-accent">Experience</span>
          </h2>
          <p className="text-secondary">
            My professional journey and work experience
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-xl border border-secondary hover:border-accent transition-all duration-300">
            <div className="flex items-start space-x-6 mb-6">
              <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="text-accent" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-light mb-2">
                  Web Design and Developer Intern
                </h3>
                <div className="flex items-center text-secondary mb-2">
                  <MapPin size={16} className="mr-2" />
                  <span className="font-medium">Superb Digital</span>
                </div>
                <div className="flex items-center text-accent mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>April 2025 - Present</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-xl border border-secondary">
              <p className="text-light leading-relaxed mb-6">
                I am currently employed at Superb Digital as a Web Design and Developer Intern, in which I am working alongside my colleagues to create WordPress websites according to the clients' needs. In addition to WordPress, I use a combination of various programming languages (PHP, CSS, HTML and TypeScript) to generate certain elements and provide functionality to web pages, along with plugins such as Elementor for the overall theme of the website and Solid Security to prevent unauthorized users from accessing and tampering with the clients' website.
              </p>

              <div className="flex flex-wrap gap-3">
                {['WordPress', 'PHP', 'CSS', 'HTML', 'TypeScript', 'Elementor', 'Solid Security'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-800 text-accent text-sm rounded-full border border-secondary hover:border-accent transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
