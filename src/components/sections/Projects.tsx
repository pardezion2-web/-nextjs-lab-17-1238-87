import React from 'react';
import Card from '../ui/Card';
import { Project } from '@/lib/types';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform built with Next.js and TypeScript. Features include product catalog, shopping cart, and secure checkout process.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://example-ecommerce.vercel.app',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates. Users can create projects, assign tasks, and track progress with a clean interface.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    githubUrl: 'https://github.com/example/taskapp',
    liveUrl: 'https://example-taskapp.vercel.app',
  },
  {
    id: 3,
    title: 'Social Media Analytics',
    description:
      'An analytics dashboard that aggregates social media metrics across multiple platforms. Provides insights through interactive charts and detailed reports.',
    technologies: ['Next.js', 'Chart.js', 'Node.js', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f70504c8a?w=500&h=300&fit=crop',
    githubUrl: 'https://github.com/example/analytics',
    liveUrl: 'https://example-analytics.vercel.app',
  },
  {
    id: 4,
    title: 'Weather App',
    description:
      'A beautiful weather application that provides real-time weather information and forecasts. Features location search and geolocation support.',
    technologies: ['React', 'Weather API', 'Tailwind CSS', 'Axios'],
    imageUrl: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=300&fit=crop',
    githubUrl: 'https://github.com/example/weather',
    liveUrl: 'https://example-weather.vercel.app',
  },
  {
    id: 5,
    title: 'Blog Platform',
    description:
      'A modern blogging platform with markdown support, user authentication, and SEO optimization. Built with Next.js for optimal performance.',
    technologies: ['Next.js', 'Markdown', 'NextAuth.js', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop',
    githubUrl: 'https://github.com/example/blog',
    liveUrl: 'https://example-blog.vercel.app',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description:
      'A sleek portfolio website showcasing projects and skills. Features smooth animations, dark mode support, and responsive design.',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop',
    githubUrl: 'https://github.com/example/portfolio',
    liveUrl: 'https://example-portfolio.vercel.app',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600">Here are some of my recent works and side projects</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
