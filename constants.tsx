import React from 'react';
import type { Project, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    title: '三维建模与仿真分析',
    description: '使用 SolidWorks 对复杂机械零件进行三维建模，并利用 ANSYS 进行有限元分析，以优化其结构强度与性能。',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['SolidWorks', 'ANSYS', 'CAD', '有限元分析'],
    link: '#',
  },
  {
    title: '自动化分拣系统设计',
    description: '设计并搭建了一个基于 PLC 控制的微型自动化分拣系统，能够根据物体的颜色或尺寸进行分类。',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['PLC', '自动化', '传感器技术', '机械设计'],
    link: '#',
  },
  {
    title: '3D打印创新设计',
    description: '利用 3D 打印技术，设计并制作了一款定制化的机械臂夹爪，提升了特定工况下的抓取效率。',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['3D打印', '快速成型', '产品设计'],
    link: '#',
  },
   {
    title: '智能家居控制模块',
    description: '一个基于 Arduino 和传感器的个人项目，实现了对室内温度和光照的自动调节，探索了物联网在机械自动化领域的应用。',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['Arduino', '物联网(IoT)', '传感器', '嵌入式系统'],
    link: '#',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: '邮箱',
    url: 'mailto:your.email@example.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
      </svg>
    ),
  },
  {
    name: '领英',
    url: 'https://linkedin.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
];