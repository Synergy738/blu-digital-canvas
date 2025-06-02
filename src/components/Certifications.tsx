
import React, { useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const certifications = [
    {
      title: "CS1331xI: Introduction to Object-Oriented Programming with Java I: Foundations and Syntax Basics",
      institution: "Georgia Tech",
      date: "June 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21LJM0bdQ-ZnD8iQTJgpQvtU5P5rm1vmRJQ&s",
      link: "https://courses.edx.org/certificates/89a9c6149ace45daad234af1a9560fb2",
      category: "Georgia Tech",
      percentage: 98
    },
    {
      title: "CS1332xII: Introduction to Object-Oriented Programming with Java II: Object-Oriented Programming and Algorithms",
      institution: "Georgia Tech",
      date: "August 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21LJM0bdQ-ZnD8iQTJgpQvtU5P5rm1vmRJQ&s",
      link: "https://courses.edx.org/certificates/d53b98b364b348e093f435b804995d18",
      category: "Georgia Tech",
      percentage: 83
    },
    {
      title: "CS50AI: CS50's Introduction to Artificial Intelligence with Python",
      institution: "Harvard University",
      date: "February 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png",
      link: "https://cs50.harvard.edu/certificates/f27a5d40-d20e-4709-9d6a-ae644e07d978",
      category: "Harvard",
      percentage: 86
    },
    {
      title: "CS50 Cybersecurity: CS50's Introduction to Cybersecurity",
      institution: "Harvard University", 
      date: "November 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png",
      link: "https://courses.edx.org/certificates/8c98691ddf4f413e886e57486cef5085",
      category: "Harvard",
      percentage: 81
    },
    {
      title: "CS50 SQL: CS50's Introduction to Databases with SQL",
      institution: "Harvard University",
      date: "November 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png",
      link: "https://courses.edx.org/certificates/60c14bfcfe354d519d0575bf51224381",
      category: "Harvard",
      percentage: 95
    },
    {
      title: "Data Science: R Basics",
      institution: "Harvard University",
      date: "March 2024", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png",
      link: "https://courses.edx.org/certificates/981e9e75b38145d8b53b4badeef0c052",
      category: "Harvard",
      percentage: 94
    },
    {
      title: "Introduction to Computational Thinking and Data Science",
      institution: "Massachusetts Institute of Technology",
      date: "May 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgwnjvsTyoRhtimgqhAREgWBsJXLP-d83gQ&s",
      link: "https://courses.edx.org/certificates/99799a611aa140cea73e1494fafa0c02",
      category: "MIT",
      percentage: 94
    },
    {
      title: "Introduction to Computer Science and Programming Using Python",
      institution: "Massachusetts Institute of Technology", 
      date: "March 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgwnjvsTyoRhtimgqhAREgWBsJXLP-d83gQ&s",
      link: "https://courses.edx.org/certificates/3fe39b587565472e98db7199e96c40e8",
      category: "MIT",
      percentage: 88
    },
    {
      title: "Introduction to Cyber Security Specialization",
      institution: "NYU | Tandon School of Engineering",
      date: "February 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-Cib2AYVttx1xNFkyJgjKTt6t9f2uyjlHw&s",
      link: "https://coursera.org/share/70a144b9856231e090442005500994e2",
      category: "NYU",
      percentage: 87
    },
    {
      title: "Microservices and Deployment by using ASP.NET",
      institution: "Board Infinity",
      date: "December 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-8KX-neSCKBnS7ozgN0xOVSZLZjjV5aNEA&s",
      link: "https://coursera.org/share/03c04b91b2a79d9a5048e961ee23b39b",
      category: "Board Infinity",
      percentage: 95
    },
    {
      title: "Oracle Certified Foundations Associate",
      institution: "Oracle x On The Ball College",
      date: "June 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9QfrMpx8Zv9FKYFuDhWZhXe79qeTu_juBA&s",
      link: "https://www.linkedin.com/in/blu-dennis-b40136278/details/certifications/1730727005936/single-media-viewer/?profileId=ACoAAEOmreAB2_gnttlRHAEgbMxKIcSD7vZ-rWU",
      category: "Oracle",
      percentage: 95
    },
    {
      title: "Web Development",
      institution: "Stellenberg High School",
      date: "March 2022",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvgtfX0uy-etp2UvMuD91cECrF7w-ULejmw&s",
      link: "https://www.linkedin.com/in/blu-dennis-b40136278/details/certifications/1748355840394/single-media-viewer/?profileId=ACoAAEOmreAB2_gnttlRHAEgbMxKIcSD7vZ-rWU",
      category: "Stellenberg",
      percentage: 90
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
            <span className="text-[#497adb]">Certifications</span>
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
                  ? 'bg-[#497adb] text-white'
                  : 'bg-[#1a1a1a] text-gray-300 hover:bg-gray-700'
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
              className="bg-[#1a1a1a] p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-[#262626] rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.institution} logo`}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      const fallbacks: { [key: string]: string } = {
                        'Harvard University': '🎓',
                        'Oracle x On The Ball College': '🔴', 
                        'NYU | Tandon School of Engineering': '🏛️',
                        'Board Infinity': '🚀',
                        'Georgia Tech': '🐝',
                        'Massachusetts Institute of Technology': '⚛️',
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
                  <h3 className="font-semibold text-white mb-2 leading-tight group-hover:text-[#497adb] transition-colors text-sm">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{cert.institution}</p>
                  <div className="flex items-center text-[#497adb] text-sm mb-2">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                  {/* Percentage with animation */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[#497adb] text-sm font-medium">Score</span>
                      <span className="text-[#497adb] font-bold">{cert.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-[#497adb] h-2 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${cert.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <ExternalLink size={16} className="text-gray-500 group-hover:text-[#497adb] transition-colors" />
              </div>
              <div className="border-t border-gray-700 pt-4">
                <span className="text-[#497adb] text-sm font-medium">Certified</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
