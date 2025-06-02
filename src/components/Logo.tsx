
import React from 'react';

const Logo = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-10 h-10 text-xl',
    lg: 'w-12 h-12 text-2xl'
  };

  return (
    <div className={`${sizeClasses[size]} bg-[#0055ff] rounded-lg flex items-center justify-center font-bold text-white logo-pulse`}>
      B
    </div>
  );
};

export default Logo;
