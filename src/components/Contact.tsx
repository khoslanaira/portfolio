import React from 'react';
import { AnimateIn, HoverEffect } from './AnimationWrapper';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <AnimateIn className="section-wrapper section-contact">
      <h2 className="section-heading text-3xl md:text-4xl font-bold handwritten text-ink-dark mb-6">
        📩 Contact
      </h2>
      <p className="handwritten text-xl text-ink-dark mb-2">
        "Need a quick project done or just want to connect?"
      </p>
      <p className="mb-8">
        I'm just a message away!<br />
        Feel free to reach out for internships, collaborations, or even just a chat about tech, design, or doodles.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="sticky-note sticky-pink p-6 rounded-lg">
          <h3 className="handwritten text-2xl font-bold mb-4">Get in Touch</h3>
          
          <div className="space-y-4">
            <HoverEffect>
              <a 
                href="mailto:contact@example.com" 
                className="flex items-center p-3 bg-white rounded-lg shadow-sm"
              >
                <Mail className="mr-3 text-ink-dark" size={24} />
                <span>contact@example.com</span>
              </a>
            </HoverEffect>
            
            <HoverEffect>
              <a 
                href="https://github.com/khoslanaira" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-white rounded-lg shadow-sm"
              >
                <Github className="mr-3 text-ink-dark" size={24} />
                <span>github.com/khoslanaira</span>
                <ExternalLink size={14} className="ml-2 text-ink-light" />
              </a>
            </HoverEffect>
            
            <HoverEffect>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-white rounded-lg shadow-sm"
              >
                <Linkedin className="mr-3 text-ink-dark" size={24} />
                <span>linkedin.com/in/naira-khosla</span>
                <ExternalLink size={14} className="ml-2 text-ink-light" />
              </a>
            </HoverEffect>
          </div>
        </div>
        
        <div className="bg-white/80 p-6 rounded-lg shadow-md">
          <h3 className="handwritten text-2xl font-bold mb-4">Leave a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-ink-dark mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-ink-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight-purple/50"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-ink-dark mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-ink-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight-purple/50"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-ink-dark mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-ink-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight-purple/50"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <HoverEffect>
              <button
                type="submit"
                className="w-full bg-highlight-purple hover:bg-highlight-purple/90 text-ink-dark font-medium py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </HoverEffect>
          </form>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="handwritten text-xl">Thanks for stopping by!</p>
        <p className="text-ink-light">Designed & developed by Naira Khosla © 2025</p>
      </div>
    </AnimateIn>
  );
};

export default Contact;