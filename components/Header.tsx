import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const navLinks = [
    { name: '关于', href: '#about' },
    { name: '作品集', href: '#projects' },
    { name: '联系', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-apple-gray-900/80 backdrop-blur-sm border-b border-apple-gray-200 dark:border-apple-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-apple-gray-900 dark:text-apple-gray-100">
            Mutx163
          </a>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-apple-gray-600 dark:text-apple-gray-400 hover:text-apple-gray-900 dark:hover:text-apple-gray-100 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
