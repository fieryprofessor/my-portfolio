import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading a team of 5 developers in building scalable web applications. Architected and implemented microservices using Node.js and React, resulting in 40% improved performance.',
      achievements: [
        'Led migration to modern tech stack, reducing load times by 60%',
        'Mentored 3 junior developers and conducted technical interviews',
        'Implemented CI/CD pipeline, reducing deployment time by 80%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupHub Inc.',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React, Vue.js, and Python. Collaborated with design teams to create pixel-perfect user interfaces.',
      achievements: [
        'Built 15+ client projects from concept to deployment',
        'Reduced bug reports by 45% through comprehensive testing',
        'Improved user engagement by 35% through UX optimization'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'Seattle, WA',
      period: '2019 - 2020',
      description: 'Specialized in creating responsive web applications and interactive user interfaces. Worked closely with designers to bring creative visions to life.',
      achievements: [
        'Developed 20+ responsive websites with 100% mobile compatibility',
        'Implemented modern CSS animations and micro-interactions',
        'Achieved 95+ Google PageSpeed scores across all projects'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of growth, learning, and creating impactful solutions across various industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 mb-2">
                          {exp.company}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-900">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achieveIndex) => (
                          <li key={achieveIndex} className="text-gray-600 text-sm flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;