
import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "CS50 SQL",
      institution: "Harvard University",
      date: "November 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png",
      link: "https://courses.edx.org/certificates/60c14bfcfe354d519d0575bf51224381"
    },
    {
      title: "CS50 CyberSecurity",
      institution: "Harvard University",
      date: "November 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png",
      link: "https://courses.edx.org/certificates/8c98691ddf4f413e886e57486cef5085"
    },
    {
      title: "Oracle Certified Foundations Associate",
      institution: "Oracle Academy",
      date: "June 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9QfrMpx8Zv9FKYFuDhWZhXe79qeTu_juBA&s",
      link: "https://www.linkedin.com/in/blu-dennis-b40136278/details/certifications/1730727005936/single-media-viewer/?profileId=ACoAAEOmreAB2_gnttlRHAEgbMxKIcSD7vZ-rWU"
    },
    {
      title: "Data Science: R Basics",
      institution: "Harvard University",
      date: "March 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png",
      link: "https://courses.edx.org/certificates/981e9e75b38145d8b53b4badeef0c052"
    },
    {
      title: "CS50AI",
      institution: "Harvard University",
      date: "February 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png",
      link: "https://cs50.harvard.edu/certificates/f27a5d40-d20e-4709-9d6a-ae644e07d978"
    },
    {
      title: "Cyber Security Specialization",
      institution: "NYU Tandon School of Engineering",
      date: "February 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-Cib2AYVttx1xNFkyJgjKTt6t9f2uyjlHw&s",
      link: "https://coursera.org/share/70a144b9856231e090442005500994e2"
    },
    {
      title: "Microservices and Deployment by using ASP.NET",
      institution: "Board Infinity",
      date: "December 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-8KX-neSCKBnS7ozgN0xOVSZLZjjV5aNEA&s",
      link: "https://coursera.org/share/03c04b91b2a79d9a5048e961ee23b39b"
    },
    {
      title: "Introduction to Object Oriented Programming with Java I",
      institution: "Georgia Tech",
      date: "June 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21LJM0bdQ-ZnD8iQTJgpQvtU5P5rm1vmRJQ&s",
      link: "https://courses.edx.org/certificates/89a9c6149ace45daad234af1a9560fb2"
    },
    {
      title: "Introduction to Object Oriented Programming with Java II",
      institution: "Georgia Tech",
      date: "August 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21LJM0bdQ-ZnD8iQTJgpQvtU5P5rm1vmRJQ&s",
      link: "https://courses.edx.org/certificates/d53b98b364b348e093f435b804995d18"
    },
    {
      title: "Introduction to Computational Thinking and Data Science",
      institution: "MIT",
      date: "May 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgwnjvsTyoRhtimgqhAREgWBsJXLP-d83gQ&s",
      link: "https://courses.edx.org/certificates/99799a611aa140cea73e1494fafa0c02"
    },
    {
      title: "Introduction to Computer Science and Programming using Python",
      institution: "MIT",
      date: "March 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgwnjvsTyoRhtimgqhAREgWBsJXLP-d83gQ&s",
      link: "https://courses.edx.org/certificates/3fe39b587565472e98db7199e96c40e8"
    },
    {
      title: "Web Development",
      institution: "Stellenberg High School",
      date: "March 2022",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvgtfX0uy-etp2UvMuD91cECrF7w-ULejmw&s",
      link: "https://www.linkedin.com/in/blu-dennis-b40136278/details/certifications/1748355840394/single-media-viewer/?profileId=ACoAAEOmreAB2_gnttlRHAEgbMxKIcSD7vZ-rWU"
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
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="simple-card p-6 rounded-15 group cursor-pointer"
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
                  <h3 className="font-semibold text-gray-800 mb-2 leading-tight group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{cert.institution}</p>
                  <div className="flex items-center text-accent text-sm">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                </div>
                <ExternalLink size={16} className="text-gray-400 group-hover:text-accent transition-colors" />
              </div>
              <div className="flex items-center text-gray-500">
                <Award size={16} className="mr-2" />
                <span className="text-sm font-medium">Certified</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
