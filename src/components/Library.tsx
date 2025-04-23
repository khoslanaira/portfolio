import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LibraryProps {
  onNavigate: (room: string) => void;
}

const Library: React.FC<LibraryProps> = ({ onNavigate }) => {
  const [currentBook, setCurrentBook] = useState(0);

  const education = [
    {
      id: "mca",
      title: "Master of Computer Applications",
      period: "2023-2025 | MET ICS, Mumbai",
      details: "Focusing on advanced computing concepts and software development",
      skills: ["Data Structures", "Software Engineering", "AI & Machine Learning"],
      icon: "🎓"
    },
    {
      id: "bca",
      title: "Bachelor of Philosophy",
      period: "2020-2023 | IPCW, University of Delhi",
      details: "Explored logic, critical thinking, and the foundations of computer science through an interdisciplinary lens.",
      skills: ["Analytical Thinking", "Ethics in Tech", "Logic & Reasoning"],
      icon: "📚"
    },
    {
      id: "certs",
      title: "Minor in Artificial Intelligence",
      period: "2024-2025 | IIT ROPAR",
      details: "Diving deep into the world of AI with hands-on experience in neural networks, CNNs, NLP pipelines, and Large Language Models. Exploring how machines learn, see, and speak—one project at a time.",
      skills: ["Machine Learning", "Artificial Intelligence", "Python"],
      icon: "🧠"
    }
  ];

  const nextBook = () => {
    setCurrentBook((prev) => (prev + 1) % education.length);
  };

  const prevBook = () => {
    setCurrentBook((prev) => (prev - 1 + education.length) % education.length);
  };

  return (
    <div className="room bg-[#3c2f2f]">
      <button 
        className="pixel-button mb-8"
        onClick={() => onNavigate('reception')}
      >
        ← Back to Base
      </button>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl mb-6 text-center">Library of Knowledge</h2>
        <p className="text-center mb-8 text-gray-400">Browse through my academic journey</p>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button 
              className="pixel-button p-4"
              onClick={prevBook}
              aria-label="Previous education"
            >
              ←
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button 
              className="pixel-button p-4"
              onClick={nextBook}
              aria-label="Next education"
            >
              →
            </button>
          </div>

          <motion.div
            key={currentBook}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-black/80 p-8 pixel-border mx-16"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <span className="text-4xl mr-4">{education[currentBook].icon}</span>
                <div>
                  <h3 className="text-xl mb-2">{education[currentBook].title}</h3>
                  <p className="text-gray-400">{education[currentBook].period}</p>
                </div>
              </div>
            </div>

            <p className="mb-6 text-gray-300">{education[currentBook].details}</p>

            <div className="space-y-3">
              <h4 className="text-sm text-gray-400 mb-2">Key Skills:</h4>
              {education[currentBook].skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 px-4 py-2 rounded-lg"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {education.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentBook ? 'bg-blue-500 scale-125' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentBook(index)}
              aria-label={`Go to education item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;