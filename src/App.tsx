import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reception from './components/Reception';
import ToolsRoom from './components/ToolsRoom';
import Office from './components/Office';
import Library from './components/Library';
import Articles from './components/Articles';
import WaitingArea from './components/WaitingArea';

const App: React.FC = () => {
  const [currentRoom, setCurrentRoom] = useState('reception');

  const rooms: { [key: string]: JSX.Element } = {
    reception: <Reception onNavigate={setCurrentRoom} />,
    tools: <ToolsRoom onNavigate={setCurrentRoom} />,
    office: <Office onNavigate={setCurrentRoom} />,
    library: <Library onNavigate={setCurrentRoom} />,
    articles: <Articles onNavigate={setCurrentRoom} />,
    contact: <WaitingArea onNavigate={setCurrentRoom} />
  };

  return (
    <div className="game-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRoom}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
        >
          {rooms[currentRoom]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;