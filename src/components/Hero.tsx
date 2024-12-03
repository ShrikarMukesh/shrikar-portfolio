import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-16">
      <div className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Hi, I'm <span className="text-blue-600">Shrikar S</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A passionate Full Stack Developer specializing in building exceptional digital experiences. 
              With a strong foundation in both frontend and backend technologies, I create scalable 
              solutions that solve real-world problems.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/profile1.jpeg" 
              alt="Professional headshot"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;