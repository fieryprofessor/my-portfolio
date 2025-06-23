import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Weather App',
      description: 'A real time Weather App that fetches live weather updates based on user location, displaying temperature, humidity,windspeed, and more with an optimized and seamless UI.',
      image: 'weatherapp.webp',
      tags: ['Html','CSS','Javascript','Node.js'],
      liveUrl: 'https://weather-app-self-gamma-68.vercel.app/',
      githubUrl: 'https://github.com/fieryprofessor/Weather-App'
    },
    {
      title: 'TextUtils',
      description: 'TextUtils App is a powerful text processing tool that helps you transform, analyze, and manage text effortlessly. Features include text conversion, wordcount, reading time estimation, and dark mode.',
      image: 'textformatter.png',
      tags: ['Html','CSS','Javascript','Node.js','React','Bootstrap CSS'],
      liveUrl: 'https://text-utils-khaki-eta.vercel.app/',
      githubUrl: 'https://github.com/fieryprofessor/Text-Utils'
    },
    {
      title: 'NewsNest',
      description: 'Real-time news website delivering latest headlines within finite scrolling and dynamically loaded articles.',
      image: 'news.png',
      tags: ['Html','CSS','Javascript','Node.js','React','Bootstrap CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/fieryprofessor/NewsNest'
    },
    {
      title: 'Velnote',
      description: 'A note-taking app featuring user authentication, state management, and CRUD operations using React, ContextAPI, and MongoDB.',
      image: 'notes.jpeg',
      tags: ['Html','CSS','Javascript','Node.js','React','Bootstrap CSS','Express.js','MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/fieryprofessor/VelNote'
    },
    {
      title: 'Tic Tac Toe',
      description: 'Play a classic Tic Tac Toe game for two players on a simple and clean interface. Perfect for a quick and fun match!',
      image: 'game.jpg',
      tags: ['Html','CSS','Javascript'],
      liveUrl: 'https://tic-tac-toe-flax-zeta.vercel.app/',
      githubUrl: 'https://github.com/fieryprofessor/Tic-Tac-Toe'
    },
    {
      title: 'Calculator',
      description: 'A simple and interactive calculator webpage built using HTML, CSS, and JavaScript. It performs basic arithmetic operations with a clean and responsive user interface.',
      image: 'calculator.webp',
      tags: ['Html','CSS','Javascript'],
      liveUrl: 'https://calculator-19aq.vercel.app/',
      githubUrl: 'https://github.com/fieryprofessor/calculator'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across various technologies and domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-medium hover:from-gray-900 hover:to-black transition-all duration-300"
          >
            View All Projects
            <ArrowRight size={20} />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;