'use client';

import React from 'react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white/10"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-900 text-sm font-semibold">Welcome to my portfolio</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent animate-fade-in">
          Zion P. Pardeño
        </h1>

        <p className="text-2xl md:text-3xl font-bold text-blue-200 mb-6 leading-relaxed">
          Full-Stack Developer & Creative Designer
        </p>

        <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          I craft beautiful, functional web experiences using modern technologies. Let's build something extraordinary together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 hover:from-cyan-300 hover:to-blue-400 text-lg px-8 py-3 font-bold shadow-lg shadow-blue-500/50 transform hover:scale-105 transition-all"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3 font-bold backdrop-blur-md bg-white/10 transform hover:scale-105 transition-all"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm font-semibold">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-cyan-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
