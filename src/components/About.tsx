
import React from 'react';
import { User, Target, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          About <span className="text-accent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-15 shadow-lg cert-card">
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 rounded-15">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Who I Am</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I seek the challenge of creating desktop and web applications that are not just functional but also visually appealing—the kind of apps that make you say, "Wow, this is actually pretty good".
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-15 shadow-lg cert-card">
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 rounded-15">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">My Goal</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I'd like to bring all of who I am to the table, finding a role that allows me to bounce ideas off a team, really get to know the people I'm working with and lets me be myself: a confident, open-minded, and intelligent young coder.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-15 shadow-lg cert-card">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-accent p-3 rounded-15">
                <Code className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">My Journey</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                While I am still early in my career, I possess a solid foundation in several programming languages and technologies through various online certifications from globally-reputable institutions, some of which include Harvard, MIT and NYU.
              </p>
              <p>
                My recent internship at Superb Digital provided valuable practical experience in web development, allowing me to gain hands-on experience with frontend programming languages including HTML, CSS, TypeScript, JavaScript and PHP, alongside utilizing WordPress and its plugins (namely Elementor and Solid Security) to create secure websites tailored to the clients' needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
