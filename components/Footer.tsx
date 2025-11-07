import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-apple-gray-200 dark:border-apple-gray-800">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-sm text-apple-gray-600 dark:text-apple-gray-500">
          © {new Date().getFullYear()} Mutx163. 版权所有。
        </p>
      </div>
    </footer>
  );
};

export default Footer;