import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import React from 'react';

interface ArticlesProps {
  onNavigate: (room: string) => void;
}

const articles = [
  {
    id: 1,
    title: "The Art and Science of AI Prompt Engineering",
    excerpt: "Prompt engineering is no longer a strictly technical affair. It now incorporates elements of psychology, communication, and problem solving.",
    date: "March 2025",
    readTime: "4 min read",
    link: "https://medium.com/@nairakhosla26/the-art-and-science-of-ai-prompt-engineering-a-deep-dive-a9335e445888"
  },
  {
    id: 2,
    title: "How Transformers Turn Words into Magic",
    excerpt: "Transformers aren’t merely code — they’re a glimpse of how machines reason like us.",
    date: "April 2025",
    readTime: "5 min read",
    link: "https://medium.com/@nairakhosla26/how-transformers-turn-words-into-magic-3e8231f2be12"
  },
  
];

const Articles: React.FC<ArticlesProps> = ({ onNavigate }) => {
  return (
    <div className="room bg-[#2d1f2d]">
      <button 
        className="pixel-button mb-8"
        onClick={() => onNavigate('reception')}
      >
        ← Back to Base
      </button>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-black/80 p-6 pixel-border mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h2 className="text-2xl mb-4">📝 Mind to Medium</h2>
          <p className="text-gray-400 mb-6">Documenting thoughts, experiments, and lessons from a developer-in-progress. </p>

          <div className="space-y-6">
            {articles.map((article) => (
              <motion.div
                key={article.id}
                className="bg-gray-900/50 p-6 pixel-border"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: article.id * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg text-blue-400">{article.title}</h3>
                  <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p className="text-gray-300 mb-4">{article.excerpt}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-xs text-gray-400">© 2025 Naira Khosla. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Articles;