import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full">
      {/* Brand Bar */}
      <div className="bg-gradient-to-r from-rm-navy-900 to-rm-navy-700 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-4xl font-bold italic tracking-tighter flex items-center">
              <span className="text-rm-orange-500">RM</span>
            </div>
            <div className="hidden md:block border-l border-white/20 pl-6">
              <h1 className="text-xl font-bold tracking-widest uppercase">
                LUGGAGE | STUDENT BACKPACKS | CASUAL BAGS
              </h1>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-tighter">
                Professional Bag Manufacturer Since 2013
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 hidden lg:block">
            {/* Placeholder for header images if needed */}
            <div className="flex space-x-2">
              <div className="w-20 h-20 bg-white/5 rounded"></div>
              <div className="w-20 h-20 bg-white/5 rounded"></div>
              <div className="w-20 h-20 bg-white/5 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-rm-orange-500 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <ul className="flex space-x-8 py-3 text-sm font-semibold">
            <li className="hover:text-white/80 cursor-pointer border-b-2 border-white pb-0.5">Home</li>
            <li className="hover:text-white/80 cursor-pointer pb-0.5">Products</li>
            <li className="hover:text-white/80 cursor-pointer pb-0.5">Company profile</li>
          </ul>
          
          <div className="py-2 w-full md:w-auto">
            <div className="relative flex items-center bg-white rounded-sm px-2 py-1 w-full md:w-64">
              <input 
                type="text" 
                placeholder="Search in this store" 
                className="bg-transparent border-none outline-none text-rm-text-333 text-xs w-full px-2"
              />
              <Search size={14} className="text-rm-text-666 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
