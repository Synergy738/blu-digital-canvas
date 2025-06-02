
import React from 'react';
import { Code, Globe, Shield, Brain, Server, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="text-[#497adb]" size={40} />,
      title: "Website Development",
      description: "Creating responsive, modern websites using cutting-edge technologies like React, HTML5, CSS3, and JavaScript to deliver exceptional user experiences."
    },
    {
      icon: <Smartphone className="text-[#497adb]" size={40} />,
      title: "App Development", 
      description: "Building cross-platform mobile and desktop applications with intuitive interfaces and robust functionality using modern frameworks and best practices."
    },
    {
      icon: <Shield className="text-[#497adb]" size={40} />,
      title: "Cybersecurity",
      description: "Implementing comprehensive security solutions, conducting vulnerability assessments, and ensuring data protection with industry-standard security protocols."
    },
    {
      icon: <Brain className="text-[#497adb]" size={40} />,
      title: "Machine Learning",
      description: "Developing intelligent systems and AI solutions using Python, data analysis, and machine learning algorithms to solve complex business problems."
    },
    {
      icon: <Server className="text-[#497adb]" size={40} />,
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs using technologies like PHP, MySQL, and modern backend frameworks for scalable solutions."
    },
    {
      icon: <Code className="text-[#497adb]" size={40} />,
      title: "Full-Stack Solutions",
      description: "End-to-end development services combining frontend and backend expertise to deliver complete, production-ready applications."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I offer comprehensive development services tailored to your needs, from concept to deployment, ensuring quality and innovation in every project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
