import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 text-center">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-apple-gray-900 dark:text-apple-gray-100">
        联系我
      </h2>
      <p className="mt-3 max-w-xl mx-auto text-lg text-apple-gray-600 dark:text-apple-gray-400">
        我始终对新的机会与合作持开放态度。欢迎随时与我联系。
      </p>
      <div className="mt-8 flex justify-center items-center space-x-6">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-apple-gray-500 dark:text-apple-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;