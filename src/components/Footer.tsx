
import React from 'react';
import { Phone, Linkedin, Github } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'About me', id: 'about' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Experience', id: 'experience' }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/blu-dennis-b40136278",
      label: "LinkedIn"
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/Synergy738",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-[#262626] border-t border-gray-700 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Logo />
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-400 hover:text-[#588aef] transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#588aef] transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex justify-center items-center text-gray-400">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+27 64 766 9310</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500 text-sm">
              Designed by @blũdennis UI/UX designer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
