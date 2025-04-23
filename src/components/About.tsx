import React from 'react';
import { AnimateIn } from './AnimationWrapper';

const About: React.FC = () => {
  return (
    <AnimateIn className="section-wrapper section-about">
      <h2 className="section-heading text-3xl md:text-4xl font-bold handwritten text-ink-dark mb-6">
        👩‍💻 About Me
      </h2>
      <p className="handwritten text-xl text-ink-dark mb-6">
        "From sketchbooks to scripts — a short story about me."
      </p>
      
      <div className="mb-8">
        <p className="mb-4">
          I started out with a love for creativity — sketching characters, doodling scenes, 
          and storytelling through art. Over time, that curiosity found a new outlet: coding.
        </p>
        <p className="mb-4">
          Now I'm blending both worlds. I'm currently completing my MCA and interning to get 
          my hands dirty with real-world tech. I've worked on a few projects using Python, Java, 
          and JavaScript — always trying to write code that feels like a well-composed sketch: 
          clean, simple, and expressive.
        </p>
      </div>
      
      <div className="mb-10 p-5 bg-white/70 rounded-lg shadow-sm">
        <h3 className="handwritten text-xl font-medium text-ink-dark mb-3">
          ✨ What I enjoy (besides code):
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex items-center bg-highlight-purple/30 p-3 rounded-lg">
            <span className="mr-2">🖊️</span>
            <span>Sketching</span>
          </div>
          <div className="flex items-center bg-highlight-blue/30 p-3 rounded-lg">
            <span className="mr-2">🎮</span>
            <span>Casual gaming</span>
          </div>
          <div className="flex items-center bg-highlight-yellow/30 p-3 rounded-lg">
            <span className="mr-2">📚</span>
            <span>Exploring tech blogs</span>
          </div>
          <div className="flex items-center bg-highlight-pink/30 p-3 rounded-lg">
            <span className="mr-2">☕</span>
            <span>Quiet cafés + notebooks</span>
          </div>
        </div>
      </div>
      
      <div className="p-5 bg-white/70 rounded-lg shadow-sm">
        <h3 className="handwritten text-xl font-medium text-ink-dark mb-4">
          🛠️ Soft Skills:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-highlight-purple mt-2 mr-2"></div>
            <p><span className="font-medium">Always ready to learn</span> — Tech is always changing, and so am I</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-highlight-blue mt-2 mr-2"></div>
            <p><span className="font-medium">Organized and self-driven</span> — I manage my time well</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-highlight-yellow mt-2 mr-2"></div>
            <p><span className="font-medium">Communicates clearly</span> — Whether in code or conversation</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-highlight-pink mt-2 mr-2"></div>
            <p><span className="font-medium">Loves working in small, focused teams</span> — Collaboration is key</p>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
};

export default About;