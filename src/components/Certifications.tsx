
import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "CS50 SQL",
      institution: "Harvard University",
      date: "November 2024",
      logo: "🎓"
    },
    {
      title: "CS50 CyberSecurity",
      institution: "Harvard University",
      date: "November 2024",
      logo: "🎓"
    },
    {
      title: "Oracle Certified Foundations Associate",
      institution: "Oracle Academy",
      date: "June 2024",
      logo: "🔴"
    },
    {
      title: "Data Science: R Basics",
      institution: "Harvard University",
      date: "March 2024",
      logo: "🎓"
    },
    {
      title: "CS50AI",
      institution: "Harvard University",
      date: "February 2024",
      logo: "🎓"
    },
    {
      title: "Cyber Security Specialization",
      institution: "NYU Tandon School of Engineering",
      date: "February 2024",
      logo: "🏛️"
    },
    {
      title: "Microservices and Deployment by using ASP.NET",
      institution: "Board Infinity",
      date: "December 2023",
      logo: "🚀"
    },
    {
      title: "Introduction to Object Oriented Programming with Java I",
      institution: "Georgia Tech",
      date: "June 2023",
      logo: "🐝"
    },
    {
      title: "Introduction to Object Oriented Programming with Java II",
      institution: "Georgia Tech",
      date: "August 2023",
      logo: "🐝"
    },
    {
      title: "Introduction to Computational Thinking and Data Science",
      institution: "MIT",
      date: "May 2023",
      logo: "⚛️"
    },
    {
      title: "Introduction to Computer Science and Programming using Python",
      institution: "MIT",
      date: "March 2023",
      logo: "⚛️"
    },
    {
      title: "Web Development",
      institution: "Stellenberg High School",
      date: "March 2022",
      logo: "🏫"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          Training & <span className="text-accent">Certifications</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="apple-card p-6 rounded-15"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-black/5 rounded-15 flex items-center justify-center flex-shrink-0 text-2xl">
                  {cert.logo}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{cert.institution}</p>
                  <div className="flex items-center text-accent text-sm">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                </div>
              </div>
              <div className="flex items-center text-black/60">
                <Award size={16} className="mr-2" />
                <span className="text-sm font-medium">Certified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
