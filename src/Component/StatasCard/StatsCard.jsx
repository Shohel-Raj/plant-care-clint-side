import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
// import { ArrowUpRight } from 'lucide-react';

const StatsCard = ({ title, value, icon: Icon, growth, bg = 'bg-white', text = 'text-gray-800' }) => {
  return (
    <div className={`rounded-2xl shadow-md p-4 flex items-center gap-4 ${bg} ${text}`}>
      <div className="p-3 bg-gray-100 rounded-full">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-2xl font-bold">{value}</span>
        {growth && (
          <span className="text-sm text-green-500 flex items-center gap-1">
            <ArrowUpRightIcon className="w-4 h-4" /> {growth}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
