import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'Vanilla CSS', level: 90},
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Bootstrap CSS', level: 90 },
        { name: 'Javascript', level: 90 },
        { name: 'React', level: 80 },
        { name: 'Redux', level: 60 },
        { name: 'JQuery', level: 95 },
        { name: 'Responsive Web Design', level: 85 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Flask', level: 70 },
        { name: 'Express.js', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL', level: 40 },
        { name: 'RestFul APIS', level: 70 },
        { name: 'Thunder Client', level: 90 },
      ]
    },
    {
      title: 'Design & Tools',
      skills: [
        { name: 'UI/UX Design', level: 50 },
        { name: 'Git/GitHub', level: 100 },
        { name: 'Gmail', level: 100 },
      ]
    },
    {
      title: 'Artifical Intelligence and Machine Learning',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Numpy', level: 80 },
        { name: 'Pandas', level: 80 },
        { name: 'Matplotlib', level: 70 },
        { name: 'Scikit-learn', level: 70 },
        { name: 'Jupyter Notebook', level: 90 },
        { name: 'AI/ML Concepts', level: 60 },
        { name: 'Machine Learning Techniques', level: 60 },
      ]
    },
    {
      title: 'Other',
      skills: [
        { name: 'C++', level: 95 },
        { name: 'Java', level: 95 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Vercel', level: 80 },
        { name: 'Wordpress', level: 80 },
        { name: 'Elementor Plugin', level: 90 },
        { name: 'XAMPP(Apache Server)', level: 60 },
      ]
    },

  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;