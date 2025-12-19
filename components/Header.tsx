
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { PRIMARY_RED, NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Centered Brand Name */}
      <div className="container mx-auto px-4 py-6 flex justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-black italic tracking-tighter" style={{ color: PRIMARY_RED }}>
            ALMUDENA
          </h1>
          <div className="h-1.5 w-full bg-red-600 rounded-full mt-[-4px]"></div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="border-t border-gray-100 hidden lg:block">
        <div className="container mx-auto px-4 flex items-center justify-center gap-12 py-4">
          {NAV_ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1 cursor-pointer group">
              <span className="text-sm font-semibold text-gray-600 group-hover:text-red-600 transition-colors uppercase tracking-widest">
                {item.label}
              </span>
              {item.hasSubmenu && <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
