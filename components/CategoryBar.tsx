
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CATEGORIES, PRIMARY_RED } from '../constants';

const CategoryBar: React.FC = () => {
  return (
    <div className="bg-[#E30613] w-full relative overflow-hidden">
      <div className="container mx-auto flex items-center gap-1 overflow-x-auto hide-scrollbar whitespace-nowrap py-2 px-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              cat.active 
                ? 'bg-white text-red-600 shadow-md' 
                : 'text-white hover:bg-red-500'
            }`}
          >
            {cat.label}
          </button>
        ))}
        <div className="flex-1"></div>
        <button className="bg-red-700/50 p-1.5 rounded-full text-white ml-4">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CategoryBar;
