
import React, { useState } from 'react';
import { Calendar, ExternalLink, Filter } from 'lucide-react';

const Certifications = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const certifications = [
    {
      title: "CS50 SQL",
      institution: "Harvard University",
      date: "November 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png",
      link: "https://courses.edx.org/certificates/60c14bfcfe354d519d0575bf51224381",
      category: "Harvard"
    },
    {
      title: "CS50 CyberSecurity",
      institution: "Harvard University", 
      date: "November 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png",
      link: "https://courses.edx.org/certificates/8c98691ddf4f413e886e57486cef5085",
      category: "Harvard"
    },
    {
      title: "Oracle Certified Foundations Associate",
      institution: "Oracle Academy",
      date: "June 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9QfrMpx8Zv9FKYFuDhWZhXe79qeTu_juBA&s",
      link: "https://www.linkedin.com/in/blu-dennis-b40136278/details/certifications/1730727005936/single-media-viewer/?profileId=ACoAAEOmreAB2_gnttlRHAEgbMxKIcSD7vZ-rWU",
      category: "Oracle"
    },
    {
      title: "Data Science: R Basics",
      institution: "Harvard University",
      date: "March 2024", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png",
      link: "https://courses.edx.org/certificates/981e9e75b38145d8b53b4badeef0c052",
      category: "Harvard"
    },
    {
      title: "CS50AI",
      institution: "Harvard University",
      date: "February 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png", 
      link: "https://cs50.harvard.edu/certificates/f27a5d40-d20e-4709-9d6a-ae644e07d978",
      category: "Harvard"
    },
    {
      title: "Cyber Security Specialization",
      institution: "NYU Tandon School of Engineering",
      date: "February 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-Cib2AYVttx1xNFkyJgjKTt6t9f2uyjlHw&s",
      link: "https://coursera.org/share/70a144b9856231e090442005500994e2",
      category: "NYU"
    },
    {
      title: "Microservices and Deployment by using ASP.NET",
      institution: "Board Infinity",
      date: "December 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-8KX-neSCKBnS7ozgN0xOVSZLZjjV5aNEA&s",
      link: "https://coursera.org/share/03c04b91b2a79d9a5048e961ee23b39b",
      category: "Board Infinity"
    },
    {
      title: "CS1331xI: Intro to Object Oriented Programming with Java I",
      institution: "Georgia Tech",
      date: "June 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21LJM0bdQ-ZnD8iQTJgpQvtU5P5rm1vmRJQ&s",
      link: "https://courses.edx.org/certificates/89a9c6149ace45daad234af1a9560fb2",
      category: "Georgia Tech"
    },
    {
      title: "CS1331xII: Intro to Object Oriented Programming with Java II", 
      institution: "Georgia Tech",
      date: "August 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21LJM0bdQ-ZnD8iQTJgpQvtU5P5rm1vmRJQ&s",
      link: "https://courses.edx.org/certificates/d53b98b364b348e093f435b804995d18",
      category: "Georgia Tech"
    },
    {
      title: "Intro to Computational Thinking and Data Science",
      institution: "MIT",
      date: "May 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgwnjvsTyoRhtimgqhAREgWBsJXLP-d83gQ&s",
      link: "https://courses.edx.org/certificates/99799a611aa140cea73e1494fafa0c02",
      category: "MIT"
    },
    {
      title: "Intro to Computer Science and Programming using Python",
      institution: "MIT", 
      date: "March 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgwnjvsTyoRhtimgqhAREgWBsJXLP-d83gQ&s",
      link: "https://courses.edx.org/certificates/3fe39b587565472e98db7199e96c40e8",
      category: "MIT"
    },
    {
      title: "Web Development",
      institution: "Stellenberg High School",
      date: "March 2022",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvgtfX0uy-etp2UvMuD91cECrF7w-ULejmw&s",
      link: "https://www.linkedin.com/in/blu-dennis-b40136278/details/certifications/1748355840394/single-media-viewer/?profileId=ACoAAEOmreAB2_gnttlRHAEgbMxKIcSD7vZ-rWU",
      category: "Stellenberg"
    }
  ];

  const institutions = ['All', 'Harvard', 'MIT', 'Georgia Tech', 'NYU', 'Oracle', 'Board Infinity', 'Stellenberg'];

  const filteredCertifications = selectedFilter === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedFilter);

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Training & <span className="text-blue-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional certifications and achievements from globally recognized institutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {institutions.map((institution) => (
            <button
              key={institution}
              onClick={() => setSelectedFilter(institution)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === institution
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {institution}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 p-6 rounded-xl hover:bg-gray-750 transition-all duration-300 hover:scale-105 group border border-gray-700 hover:border-blue-500 cursor-pointer"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.institution} logo`}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
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
                      fallbackDiv.className = 'text-3xl';
                      fallbackDiv.textContent = fallbacks[cert.institution] || '🎓';
                      (e.target as HTMLImageElement).parentNode?.appendChild(fallbackDiv);
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{cert.institution}</p>
                  <div className="flex items-center text-blue-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                </div>
                <ExternalLink size={16} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <div className="border-t border-gray-700 pt-4">
                <span className="text-blue-400 text-sm font-medium">Certified</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
