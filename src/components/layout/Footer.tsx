import React from 'react';
import { SocialLink } from '@/lib/types';

const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com',
    icon: '🐙',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: '💼',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com',
    icon: '🐦',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 py-16 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Zion P.</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Full-stack developer crafting beautiful digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110 border border-slate-600 hover:border-blue-400"
                  aria-label={link.platform}
                  title={link.platform}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Contact Info */}
          <div className="mb-4">
            <p className="text-sm text-gray-400">
              📧 Email:{' '}
              <a
                href="mailto:zion.pardeno-17@cpu.edu.ph"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                zion.pardeno-17@cpu.edu.ph
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>© {currentYear} My Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
