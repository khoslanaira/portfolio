import React from 'react';
import { AnimateIn, HoverEffect } from './AnimationWrapper';

const Education: React.FC = () => {
  return (
    <AnimateIn className="section-wrapper section-education">
      <h2 className="section-heading text-3xl md:text-4xl font-bold handwritten text-ink-dark mb-6">
        🧑‍🎓 Education
      </h2>
      <p className="handwritten text-xl text-ink-dark mb-8">
        "Every coder starts as a student — here's my academic journey."
      </p>
      
      <div className="space-y-8">
        <HoverEffect className="block">
          <div className="bg-white/80 p-6 rounded-lg shadow-sm border-l-4 border-highlight-blue">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-ink-dark">Master of Computer Applications (MCA)</h3>
                <p className="text-ink-light">Chandigarh University – Ongoing</p>
              </div>
              <div className="bg-highlight-blue px-3 py-1 rounded text-sm font-medium">Current</div>
            </div>
            <div className="mt-4">
              <p className="mb-2 font-medium">Focused on:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-highlight-blue/30 px-3 py-1 rounded-full text-sm">Data Structures</span>
                <span className="bg-highlight-blue/30 px-3 py-1 rounded-full text-sm">Software Engineering</span>
                <span className="bg-highlight-blue/30 px-3 py-1 rounded-full text-sm">AI & Machine Learning</span>
              </div>
            </div>
          </div>
        </HoverEffect>
        
        <HoverEffect className="block">
          <div className="bg-white/80 p-6 rounded-lg shadow-sm border-l-4 border-highlight-blue/70">
            <h3 className="text-xl font-bold text-ink-dark">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-ink-light">(Completed prior to MCA)</p>
            <div className="mt-3">
              <div className="flex flex-wrap gap-2">
                <span className="bg-highlight-blue/20 px-3 py-1 rounded-full text-sm">Programming Fundamentals</span>
                <span className="bg-highlight-blue/20 px-3 py-1 rounded-full text-sm">Database Management</span>
                <span className="bg-highlight-blue/20 px-3 py-1 rounded-full text-sm">Web Development</span>
              </div>
            </div>
          </div>
        </HoverEffect>
      </div>
      
      <div className="mt-10 bg-white/70 p-5 rounded-lg sticky-note sticky-blue rotate-0">
        <p className="handwritten text-lg mb-3">📝 Additional Learning</p>
        <p className="mb-4">
          Alongside coursework, I've taken online modules, mini-projects, and internships to 
          bridge classroom learning with practical skills.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="bg-white/80 p-3 rounded-lg text-center shadow-sm">
            <p className="handwritten font-medium">Online Courses</p>
          </div>
          <div className="bg-white/80 p-3 rounded-lg text-center shadow-sm">
            <p className="handwritten font-medium">Coding Bootcamps</p>
          </div>
          <div className="bg-white/80 p-3 rounded-lg text-center shadow-sm">
            <p className="handwritten font-medium">Tech Workshops</p>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
};

export default Education;