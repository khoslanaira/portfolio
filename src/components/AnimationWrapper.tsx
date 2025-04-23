import React, { ReactNode } from 'react';

interface AnimationProps {
  children: ReactNode;
  className?: string;
}

export const AnimateIn: React.FC<AnimationProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`animate-fadeIn ${className}`}
    >
      {children}
    </div>
  );
};

export const AnimatePresence: React.FC<AnimationProps> = ({ children, className = '' }) => {
  return (
    <div className={`transition-all duration-500 ${className}`}>
      {children}
    </div>
  );
};

interface HoverEffectProps {
  children: ReactNode;
  className?: string;
}

export const HoverEffect: React.FC<HoverEffectProps> = ({ children, className = '' }) => {
  return (
    <div className={`transition-transform duration-300 hover:-translate-y-1 hover:rotate-1 ${className}`}>
      {children}
    </div>
  );
};