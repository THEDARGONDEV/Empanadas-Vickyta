
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-600 tracking-tight">
          {BUSINESS_INFO.name}
        </h1>
        <div className="text-right">
          <p className="text-sm text-gray-500">{BUSINESS_INFO.address}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
