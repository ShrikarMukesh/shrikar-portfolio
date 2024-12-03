import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import TimelineItem from './TimelineItem';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    period: '2021 - Present',
    description: 'Led development of cloud-native applications using React, Node.js, and AWS.',
  },
  {
    title: 'Software Engineer',
    company: 'Innovation Labs',
    location: 'New York, NY',
    period: '2019 - 2021',
    description: 'Developed and maintained full-stack applications serving millions of users.',
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Inc',
    location: 'Boston, MA',
    period: '2017 - 2019',
    description: 'Built responsive web applications and contributed to core product features.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Professional Journey</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              {...experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;