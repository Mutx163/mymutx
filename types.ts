// Fix: Replaced `JSX.Element` with `ReactElement` and imported it from 'react' to resolve "Cannot find namespace 'JSX'" error.
import type { ReactElement } from 'react';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactElement;
}
