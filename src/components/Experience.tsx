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
      <div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    Professional Experience
  </h2>
  <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
    I am currently focused on learning, building projects, and improving my skills. I have no professional experience yet.
  </p>
  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    A journey of growth, learning, and creating impactful solutions through hands-on development.
  </p>
</div>
    </section>
  );
};

export default Experience;