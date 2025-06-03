import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

const Experience = () => {
  const { elementRef, isVisible } = useFadeInOnScroll(0.1, 700);

  return (
    <section 
      ref={elementRef}
      id="experience" 
      className={`py-20 bg-gray-900 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional <span className="text-[#588aef]">Experience</span>
          </h2>
          <p className="text-gray-400">
            My professional journey and work experience
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`bg-[#1a1a1a] p-8 rounded-xl hover:bg-gray-800 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="flex items-start space-x-6 mb-6">
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="text-[#588aef]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Web Design and Developer Intern
                </h3>
                <div className="flex items-center text-gray-400 mb-2">
                  <MapPin size={16} className="mr-2" />
                  <span className="font-medium">Superb Digital</span>
                </div>
                <div className="flex items-center text-[#588aef] mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>April 2025 - Present</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#262626] p-6 rounded-xl">
              <p className="text-gray-300 leading-relaxed mb-6">
                I am currently employed at Superb Digital as a Web Design and Developer Intern, in which I am working alongside my colleagues to create WordPress websites according to the clients' needs. In addition to WordPress, I use a combination of various programming languages (PHP, CSS, HTML and TypeScript) to generate certain elements and provide functionality to web pages, along with plugins such as Elementor for the overall theme of the website and Solid Security to prevent unauthorized users from accessing and tampering with the clients' website.
              </p>

              <div className="flex flex-wrap gap-3">
                {['WordPress', 'PHP', 'CSS', 'HTML', 'TypeScript', 'Elementor', 'Solid Security'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-[#1a1a1a] text-[#588aef] text-sm rounded-full hover:bg-gray-700 transition-colors"
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
