import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-500 dark:text-gray-600 text-sm">
          © {new Date().getFullYear()} Ethenox Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
};