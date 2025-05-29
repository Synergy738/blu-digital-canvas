
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span>Made with</span>
          <Heart className="text-red-500 fill-current" size={16} />
          <span>by Blũ Dennis</span>
        </div>
        <p className="text-gray-400">
          © 2024 Blũ Dennis. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
