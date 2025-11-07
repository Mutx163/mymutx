import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-apple-gray-900 dark:text-apple-gray-100">
          我的作品集
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-lg text-apple-gray-600 dark:text-apple-gray-400">
          我在学习期间参与的部分项目精选。
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;