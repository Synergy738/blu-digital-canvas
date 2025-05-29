
import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "CS50 SQL",
      institution: "Harvard University",
      date: "November 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png"
    },
    {
      title: "CS50 CyberSecurity",
      institution: "Harvard University",
      date: "November 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png"
    },
    {
      title: "Oracle Certified Foundations Associate",
      institution: "Oracle Academy",
      date: "June 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9QfrMpx8Zv9FKYFuDhWZhXe79qeTu_juBA&s"
    },
    {
      title: "Data Science: R Basics",
      institution: "Harvard University",
      date: "March 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png"
    },
    {
      title: "CS50AI",
      institution: "Harvard University",
      date: "February 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png"
    },
    {
      title: "Cyber Security Specialization",
      institution: "NYU Tandon School of Engineering",
      date: "February 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-Cib2AYVttx1xNFkyJgjKTt6t9f2uyjlHw&s"
    },
    {
      title: "Microservices and Deployment by using ASP.NET",
      institution: "Board Infinity",
      date: "December 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-8KX-neSCKBnS7ozgN0xOVSZLZjjV5aNEA&s"
    },
    {
      title: "Introduction to Object Oriented Programming with Java I",
      institution: "Georgia Tech",
      date: "June 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21LJM0bdQ-ZnD8iQTJgpQvtU5P5rm1vmRJQ&s"
    },
    {
      title: "Introduction to Object Oriented Programming with Java II",
      institution: "Georgia Tech",
      date: "August 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21LJM0bdQ-ZnD8iQTJgpQvtU5P5rm1vmRJQ&s"
    },
    {
      title: "Introduction to Computational Thinking and Data Science",
      institution: "MIT",
      date: "May 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgwnjvsTyoRhtimgqhAREgWBsJXLP-d83gQ&s"
    },
    {
      title: "Introduction to Computer Science and Programming using Python",
      institution: "MIT",
      date: "March 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgwnjvsTyoRhtimgqhAREgWBsJXLP-d83gQ&s"
    },
    {
      title: "Web Development",
      institution: "Stellenberg High School",
      date: "March 2022",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvgtfX0uy-etp2UvMuD91cECrF7w-ULejmw&s"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Training & <span className="text-accent">Certifications</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="apple-card p-6 rounded-15"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-15 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.institution} logo`}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      const fallbacks: { [key: string]: string } = {
                        'Harvard University': '🎓',
                        'Oracle Academy': '🔴',
                        'NYU Tandon School of Engineering': '🏛️',
                        'Board Infinity': '🚀',
                        'Georgia Tech': '🐝',
                        'MIT': '⚛️',
                        'Stellenberg High School': '🏫'
                      };
                      (e.target as HTMLImageElement).style.display = 'none';
                      const fallbackDiv = document.createElement('div');
                      fallbackDiv.className = 'text-2xl';
                      fallbackDiv.textContent = fallbacks[cert.institution] || '🎓';
                      (e.target as HTMLImageElement).parentNode?.appendChild(fallbackDiv);
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{cert.institution}</p>
                  <div className="flex items-center text-accent text-sm">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                </div>
              </div>
              <div className="flex items-center text-gray-500">
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
