import React from 'react';
import { Project } from '@/lib/types';
import Button from './Button';

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  return (
    <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-200 hover:border-blue-300">
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 group-hover:bg-gradient-to-br group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>

        {/* Technology Badges */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full border border-blue-200 hover:border-blue-400 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 flex-wrap">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full text-sm">
                GitHub
              </Button>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="primary" className="w-full text-sm">
                Live Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
