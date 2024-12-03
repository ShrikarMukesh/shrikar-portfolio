import React from 'react';
import { Code, Server, Globe } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    icon: <Code className="w-6 h-6" />,
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
    icon: <Server className="w-6 h-6" />,
  },
  {
    category: 'Other Skills',
    items: ['AWS', 'Docker', 'Git', 'CI/CD'],
    icon: <Globe className="w-6 h-6" />,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            With over 5 years of experience in software development, I specialize in building 
            scalable web applications using modern technologies. My passion lies in creating 
            efficient, maintainable code and solving complex technical challenges.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.category} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600">{skill.icon}</div>
                  <h3 className="font-semibold text-lg">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;