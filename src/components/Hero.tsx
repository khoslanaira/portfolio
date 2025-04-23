import React from 'react';
import { AnimateIn, HoverEffect } from './AnimationWrapper';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <AnimateIn className="mt-8 md:mt-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-bold handwritten text-ink-dark leading-tight writing-effect">
            Hey there! I'm Naira —
          </h2>
          <p className="text-xl md:text-2xl mb-6 handwritten text-ink">
            a curious mind exploring the world of tech, one project at a time.
          </p>
          <p className="mb-8 text-ink-light">
            Currently pursuing my MCA and stepping into the world of software development 
            through hands-on internships. I love learning new things, solving problems, 
            and turning ideas into working code. This site is a little corner of the 
            internet where I share my work, interests, and the journey so far.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <HoverEffect>
              <button 
                onClick={() => setActiveSection('about')}
                className="bg-highlight-purple px-5 py-3 rounded-lg font-medium text-ink-dark flex items-center sticky-note"
              >
                About Me <ChevronRight size={18} className="ml-1" />
              </button>
            </HoverEffect>
            
            <HoverEffect>
              <button 
                onClick={() => setActiveSection('projects')}
                className="bg-highlight-yellow px-5 py-3 rounded-lg font-medium text-ink-dark flex items-center sticky-note"
              >
                See Projects <ChevronRight size={18} className="ml-1" />
              </button>
            </HoverEffect>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img 
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Naira Khosla" 
              className="w-full h-full object-cover rounded-lg shadow-lg transform rotate-2 border-4 border-white"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-md transform -rotate-2 animate-tilt">
              <span className="handwritten text-lg text-ink-dark">Coder • Sketcher • Dreamer</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="sticky-note sticky-yellow p-4 rounded-lg transform rotate-1 animate-tilt">
          <h3 className="handwritten text-lg font-medium mb-2">Sketching</h3>
          <p className="text-sm">Turning ideas into visual stories</p>
        </div>
        
        <div className="sticky-note sticky-blue p-4 rounded-lg transform -rotate-1 animate-tilt">
          <h3 className="handwritten text-lg font-medium mb-2">Gaming</h3>
          <p className="text-sm">Casual adventures & puzzles</p>
        </div>
        
        <div className="sticky-note sticky-purple p-4 rounded-lg transform rotate-1 animate-tilt">
          <h3 className="handwritten text-lg font-medium mb-2">Tech blogs</h3>
          <p className="text-sm">Always learning something new</p>
        </div>
        
        <div className="sticky-note sticky-pink p-4 rounded-lg transform -rotate-1 animate-tilt">
          <h3 className="handwritten text-lg font-medium mb-2">Coffee</h3>
          <p className="text-sm">Quiet cafés + coding sessions</p>
        </div>
      </div>
    </AnimateIn>
  );
};

export default Hero;