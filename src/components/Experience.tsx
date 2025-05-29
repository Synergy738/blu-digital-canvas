
import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          Professional <span className="text-accent">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="cert-card bg-white p-8 rounded-15 shadow-lg">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-accent rounded-15 flex items-center justify-center flex-shrink-0">
                <Briefcase className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Web Design and Developer Intern
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin size={16} className="mr-2" />
                  <span className="font-medium">Superb Digital</span>
                </div>
                <div className="flex items-center text-accent mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>April 2025 - Present</span>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-6 rounded-15">
              <p className="text-gray-700 leading-relaxed">
                I am currently employed at Superb Digital as a Web Design and Developer Intern, in which I am working alongside my colleagues to create WordPress websites according to the clients' needs. In addition to WordPress, I use a combination of various programming languages (PHP, CSS, HTML and TypeScript) to generate certain elements and provide functionality to web pages, along with plugins such as Elementor for the overall theme of the website and Solid Security to prevent unauthorized users from accessing and tampering with the clients' website.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['WordPress', 'PHP', 'CSS', 'HTML', 'TypeScript', 'Elementor', 'Solid Security'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-accent text-white text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
