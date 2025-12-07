import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Om Singh
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            A passionate <span className="font-semibold text-gray-800">MERN Stack Developer</span>{' '}
             who creates beautiful, functional digital experiences that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-8 text-gray-500 mb-16">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">7+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">0</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-300"
        >
          <ArrowDown size={64} />
        </button>
      </div>
    </section>
  );
};

export default Hero;