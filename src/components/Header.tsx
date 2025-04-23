import React from 'react';
import { HoverEffect } from './AnimationWrapper';
import { User, GraduationCap, Briefcase, Mail, Home } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="mb-10">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold handwritten text-ink-dark">Naira Khosla</h1>
          <p className="text-sm text-ink-light">Developer • Student • Creator</p>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <HoverEffect key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive 
                    ? 'bg-ink-dark text-white shadow-md' 
                    : 'bg-white/70 hover:bg-white text-ink'
                  }`}
                >
                  <Icon size={16} className="mr-1" />
                  <span>{item.label}</span>
                </button>
              </HoverEffect>
            );
          })}
        </nav>
      </div>
      
      <div className="h-1 w-full bg-gradient-to-r from-highlight-purple via-highlight-blue to-highlight-yellow rounded-full shadow-sm"></div>
    </header>
  );
};

export default Header;