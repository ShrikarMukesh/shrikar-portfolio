import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  isLast: boolean;
}

const TimelineItem = ({
  title,
  company,
  location,
  period,
  description,
  isLast,
}: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-12">
      {!isLast && (
        <div className="absolute left-3 top-5 -bottom-6 w-0.5 bg-blue-600"></div>
      )}
      <div className="absolute left-0 top-5 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
      <div className="bg-gray-50 rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <h4 className="text-lg font-semibold text-blue-600 mt-1">{company}</h4>
        <div className="flex gap-4 mt-2 text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{period}</span>
          </div>
        </div>
        <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;