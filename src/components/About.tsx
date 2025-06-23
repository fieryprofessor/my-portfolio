import React from 'react';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Creative Design',
      description: 'Crafting beautiful interfaces with attention to detail'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Problem Solving',
      description: 'Finding innovative solutions to complex challenges'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Player',
      description: 'Collaborating effectively with diverse teams'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating digital experiences that bridge the gap between design and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate MERN Stack and Frontend Developer with a strong foundation in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I specialize in crafting responsive, user-friendly interfaces with modern frontend technologies like HTML, CSS, JavaScript, and React.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Though I have no formal industry experience, I’ve built multiple hands-on projects that reflect real-world use cases—focusing on clean UI/UX, performance optimization, and best coding practices. I'm constantly learning, exploring new tools, and contributing to the open-source community to sharpen my skills.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I believe that impactful digital experiences come from combining technical precision with thoughtful design and usability. I’m always excited to take on new challenges, collaborate with other developers, and stay updated with the evolving world of web development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-blue-600 mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;