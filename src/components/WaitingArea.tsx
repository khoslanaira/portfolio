import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import React, { useState } from 'react';

interface WaitingAreaProps {
  onNavigate: (room: string) => void;
}

const WaitingArea: React.FC<WaitingAreaProps> = ({ onNavigate }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xblojypj', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setFormStatus('sent');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }

    setTimeout(() => setFormStatus('idle'), 4000);
  };

  return (
    <div className="room bg-[#2d1b2d]">
      <button 
        className="pixel-button mb-8"
        onClick={() => onNavigate('reception')}
      >
        ← Back to Base
      </button>

      <div className="max-w-2xl mx-auto">
        <motion.div 
          className="bg-black/80 p-6 pixel-border mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h2 className="text-2xl mb-4">Message Board</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              required 
              className="w-full px-3 py-2 bg-gray-800 rounded mb-4"
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              required 
              className="w-full px-3 py-2 bg-gray-800 rounded mb-4"
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows={4} 
              required 
              className="w-full px-3 py-2 bg-gray-800 rounded mb-4"
            />
            <button 
              type="submit" 
              className="pixel-button w-full"
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'idle' && 'Send Message'}
              {formStatus === 'sending' && 'Sending...'}
              {formStatus === 'sent' && 'Message Sent!'}
              {formStatus === 'error' && 'Failed. Try Again'}
            </button>
          </form>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="https://github.com/khoslanaira" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pixel-button text-center flex items-center justify-center gap-2"
          >
            <Github size={16} /> GitHub Profile
          </a>
          <a 
            href="https://linkedin.com/in/naira-khosla" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pixel-button text-center flex items-center justify-center gap-2"
          >
            <Linkedin size={16} /> LinkedIn Profile
          </a>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400">© 2025 Naira Khosla. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default WaitingArea;
