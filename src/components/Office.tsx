import { motion } from 'framer-motion';
import React from 'react';

interface OfficeProps {
  onNavigate: (room: string) => void;
}

const Office: React.FC<OfficeProps> = ({ onNavigate }) => {
  return (
    <div className="room bg-[#2d3748]">
      <button 
        className="pixel-button mb-8"
        onClick={() => onNavigate('reception')}
      >
        ← Back to Base
      </button>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-black/80 p-8 pixel-border mb-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl mb-2 text-purple-300">Naira Khosla</h2>
              <p className="text-blue-400 mb-1">AI/ML Enthusiast & MCA Student</p>
              
              <p className="text-gray-300 leading-relaxed">
                From sketching ideas to building intelligent systems, I'm an aspiring 
                AI/ML professional who blends creativity with smart technology to craft
                meaningful solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div 
            className="bg-black/80 p-6 pixel-border"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl mb-6 text-purple-300">Character Stats</h3>
            <div className="space-y-6">
              {[
                { name: "Coding", value: 90, color: "blue" },
                { name: "Creativity", value: 85, color: "blue" },
                { name: "Problem Solving", value: 80, color: "blue" },
                { name: "Analytical Thinking", value: 75, color: "blue" },
                { name: "Adaptability", value: 95, color: "blue" },
              ].map((stat, index) => (
                <div key={stat.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">{stat.name}</span>
                    <span className={`text-sm text-${stat.color}-400`}>{stat.value}/100</span>
                  </div>
                  <div className="w-full h-4 bg-gray-800 pixel-border relative overflow-hidden">
                    <motion.div 
                      className={`absolute top-0 left-0 h-full bg-${stat.color}-500`}
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.value}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-black/80 p-6 pixel-border"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl mb-6 text-purple-300">Special Abilities</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Quick Learner", icon: "📚", desc: "+20% Learning Speed" },
                { name: "Creative Mind", icon: "🎨", desc: "+15% Innovation" },
                { name: "Team Player", icon: "🤝", desc: "+25% Teamwork" },
                { name: "Problem Solver", icon: "🔍", desc: "+20% Debug Speed" }
              ].map((ability, index) => (
                <motion.div
                  key={ability.name}
                  className="bg-gray-800/50 p-4 pixel-border"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl mb-2">{ability.icon}</div>
                  <h4 className="text-sm font-bold mb-1">{ability.name}</h4>
                  <p className="text-xs text-green-400">{ability.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="bg-black/80 p-6 pixel-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl mb-6 text-purple-300">Inventory</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🖊️", name: "Sketch Book", desc: "For creative ideation", rarity: "Rare" },
              { icon: "🎮", name: "Game Gear", desc: "Strategic Reflexes", rarity: "Epic" },
              { icon: "📚", name: "Tech Blogs", desc: "Knowledge source", rarity: "Uncommon" },
              { icon: "☕", name: "Coffee", desc: "Energy boost", rarity: "Legendary" }
            ].map((item, index) => (
              <motion.div 
                key={item.name}
                className="bg-gray-800/50 p-4 pixel-border relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute top-0 right-0 px-2 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                  {item.rarity}
                </div>
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="text-sm font-bold mb-1">{item.name}</h4>
                <p className="text-xs text-gray-400">{item.desc}</p>
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

export default Office;