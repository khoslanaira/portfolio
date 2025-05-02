import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import React, { useState } from 'react';
import Modal from 'react-modal';

interface ToolsRoomProps {
  onNavigate: (room: string) => void;
}

const projects = [
  {
    id: 1,
    title: "Prompt Polish",
    description: "PromptPolish is an intuitive web tool that refines rough ideas into clear, structured prompts for AI applications like ChatGPT and DALL·E.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/khoslanaira/PromptPolish",
  },
  {
    id: 2,
    title: "AirCanvas",
    description: "AirCanvas is an interactive Python app that uses real-time hand tracking to create a virtual painting experience.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    github: "https://github.com/khoslanaira/AirCanvas",
  },
  {
    id: 3,
    title: "Game-Style Portfolio Website ",
    description: "This pixel-art portfolio website. An interactive way to showcase projects and skills.",
    tech: ["React", "TypeScript", "Framer Motion"],
    github: "https://github.com/nairakhosla/portfolio-game",
  }
];

const ToolsRoom: React.FC<ToolsRoomProps> = ({ onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="room bg-[#1f2937]">
      <button 
        className="pixel-button mb-8"
        onClick={() => onNavigate('reception')}
      >
        ← Back to Base
      </button>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl mb-4 text-center">Tools Room</h2>
        <p className="text-center text-gray-400 mb-8">Click on a project to learn more</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="screen bg-gradient-to-br from-gray-900 to-gray-800"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="border-b border-gray-700 mb-4 pb-2 flex justify-between items-center">
                <h3 className="text-lg text-blue-400">{project.title}</h3>
                <div className="flex gap-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-blue-400 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  
                </div>
              </div>
              <p className="text-sm mb-4 text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-blue-900/50 px-2 py-1 text-xs rounded text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400">© 2025 Naira Khosla. All rights reserved.</p>
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onRequestClose={() => setSelectedProject(null)}
        className="bg-gray-900 p-8 pixel-border max-w-2xl mx-auto mt-20 relative"
        overlayClassName="fixed inset-0 bg-black/80 flex items-start justify-center"
      >
        {selectedProject && (
          <div>
            <div className="absolute top-4 right-4 flex gap-4">
              <a 
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              
            </div>
            
            <h2 className="text-xl mb-2 text-blue-400">{selectedProject.title}</h2>
            <p className="text-gray-400 mb-6">{selectedProject.description}</p>
            
            <div className="mb-6">
              <h3 className="text-sm text-gray-500 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-blue-900/50 px-3 py-1 text-sm rounded text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <button 
              className="pixel-button"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ToolsRoom;