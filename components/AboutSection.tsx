import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-apple-gray-900 to-apple-gray-600 dark:from-apple-gray-100 dark:to-apple-gray-400">
        Mutx163
      </h1>
      <p className="mt-4 text-2xl md:text-3xl font-medium text-apple-gray-600 dark:text-apple-gray-400">
        重庆城市科技学院 · 大三学生
      </p>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-apple-gray-700 dark:text-apple-gray-300 leading-relaxed">
        我主修机械设计制造及其自动化专业。我对将工程原理与创新技术相结合充满热情，致力于探索智能制造和自动化解决方案。
      </p>
    </section>
  );
};

export default AboutSection;