
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
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
    { label: 'Portfolio', id: 'certifications' },
    { label: 'Hire me', id: 'contact' }
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
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:bludennis17@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gray-750 border-t border-secondary py-12">
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
                className="text-secondary hover:text-accent transition-colors duration-300"
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
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-light hover:text-primary hover:bg-accent transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-secondary">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>bludennis17@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+27 64 766 9310</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-secondary pt-8">
            <p className="text-secondary text-sm">
              Designed by @blũdennis UI/UX designer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
