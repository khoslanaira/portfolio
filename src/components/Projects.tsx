import React from 'react';
import { AnimateIn, HoverEffect } from './AnimationWrapper';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI-Powered Form Filler",
      description: "Automates browser tasks using Python + Playwright + LLMs",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Python", "Playwright", "AI"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Health Clustering Analysis",
      description: "Explores women's health personalization using clustering",
      image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Python", "Data Science", "ML"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Pixel-art Portfolio Game",
      description: "A playful, interactive website built with love and lots of late nights",
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["JavaScript", "HTML5", "CSS3"],
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  return (
    <AnimateIn className="section-wrapper section-projects">
      <h2 className="section-heading text-3xl md:text-4xl font-bold handwritten text-ink-dark mb-6">
        🛠️ Projects
      </h2>
      <p className="handwritten text-xl text-ink-dark mb-2">
        "Led multiple mini-projects, learned a lot each time. Curious what I've built?"
      </p>
      <p className="mb-8 text-ink-light">
        Each project helped me practice real-world thinking, from designing UIs to handling logic and 
        debugging under deadlines.
      </p>
      
      <div className="mb-8">
        <h3 className="handwritten text-2xl font-bold mb-4">Some Highlights:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <HoverEffect key={index} className="h-full">
              <div className="polaroid h-full flex flex-col transform rotate-0">
                <div className="relative w-full h-44 mb-3 overflow-hidden rounded">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold handwritten text-ink-dark mb-2">{project.title}</h3>
                <p className="text-ink-light mb-3 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium px-2 py-1 rounded bg-highlight-yellow/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <a 
                    href={project.links.github} 
                    className="flex items-center justify-center bg-ink-dark text-white px-3 py-1 rounded text-sm"
                  >
                    <Github size={14} className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.links.live} 
                    className="flex items-center justify-center bg-ink px-3 py-1 text-white rounded text-sm"
                  >
                    <ExternalLink size={14} className="mr-1" /> View
                  </a>
                </div>
              </div>
            </HoverEffect>
          ))}
        </div>
      </div>
      
      <div className="bg-white/70 p-5 rounded-lg shadow-sm">
        <h3 className="handwritten text-xl font-bold mb-3">More Projects Coming Soon!</h3>
        <p>
          I'm always working on new projects and experimenting with different technologies. 
          Check back soon to see what else I've been building.
        </p>
      </div>
    </AnimateIn>
  );
};

export default Projects;