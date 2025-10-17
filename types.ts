import type { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  // Fix: Replaced JSX.Element with ReactNode and imported it from 'react' to resolve the "Cannot find namespace 'JSX'" error.
  icon: ReactNode;
  painPoints: string[];
  clientQuestions: string[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

export interface Event {
  id: number;
  date: string;
  title: string;
  description: string;
}
