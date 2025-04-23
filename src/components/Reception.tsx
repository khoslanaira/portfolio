import React from 'react';
import { motion } from 'framer-motion';

interface ReceptionProps {
  onNavigate: (room: string) => void;
}

const Reception: React.FC<ReceptionProps> = ({ onNavigate }) => {
  return (
    <div className="room bg-[#2a1b3d]">
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl mb-4">Explore My Digital Universe!</h1>
          <p className="text-gray-400">Choose a room to explore</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button 
            className="pixel-button h-32 flex flex-col items-center justify-center space-y-2"
            onClick={() => onNavigate('tools')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl">🔧</span>
            <span>Innovation Room</span>
          </motion.button>
          
          <motion.button 
            className="pixel-button h-32 flex flex-col items-center justify-center space-y-2"
            onClick={() => onNavigate('office')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl">👩‍💻</span>
            <span>About Me</span>
          </motion.button>
          
          <motion.button 
            className="pixel-button h-32 flex flex-col items-center justify-center space-y-2"
            onClick={() => onNavigate('library')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl">📚</span>
            <span>Knowledge Vault</span>
          </motion.button>

          <motion.button 
            className="pixel-button h-32 flex flex-col items-center justify-center space-y-2"
            onClick={() => onNavigate('articles')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl">📝</span>
            <span>Mind to Medium</span>
          </motion.button>
          
          <motion.button 
            className="pixel-button h-32 flex flex-col items-center justify-center space-y-2"
            onClick={() => onNavigate('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl">📫</span>
            <span>Connect Room</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Reception;