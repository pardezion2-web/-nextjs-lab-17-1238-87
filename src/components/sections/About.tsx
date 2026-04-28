import React from 'react';

export default function About() {
  const name = "Zion P. Pardeño";
  const profileImage = "https://cpu.instructure.com/users/16125/files/3921215/preview?instfs=true";
  
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'REST APIs',
    'GraphQL',
    'Git',
    'Docker',
  ];

  const highlights = [
    { icon: '🚀', label: 'Projects', value: '50+' },
    { icon: '💼', label: 'Experience', value: '5+ Years' },
    { icon: '🎓', label: 'Expertise', value: 'Full-Stack' },
    { icon: '⭐', label: 'Satisfaction', value: '100%' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Profile Image with floating elements */}
          <div className="relative flex justify-center">
            {/* Decorative background circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl blur-2xl opacity-20 -z-10"></div>

            {/* Profile Image Container */}
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform hover:scale-105 transition-transform duration-300">
                <img
                  src={profileImage}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg font-bold">
                Full-Stack Developer
              </div>
            </div>
          </div>

          {/* Right Side - Introduction and Details */}
          <div>
            {/* Name and Title */}
            <div className="mb-8">
              <h3 className="text-5xl font-bold text-gray-900 mb-2">{name}</h3>
              <p className="text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                Creative Developer & Designer
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-5 text-gray-700 leading-relaxed mb-8">
              <p className="text-lg">
                I'm a passionate full-stack developer with a keen eye for creating seamless user experiences. With
                expertise in modern web technologies, I build applications that are not just functional, but also
                beautiful and intuitive.
              </p>

              <p className="text-lg">
                My journey in tech started with a curiosity about how things work, which evolved into a professional
                pursuit of excellence. I love collaborating with teams, solving complex problems, and continuously
                learning new technologies.
              </p>

              <p className="text-lg">
                When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600"
                >
                  <div className="text-3xl mb-2">{highlight.icon}</div>
                  <p className="text-sm text-gray-600 mb-1">{highlight.label}</p>
                  <p className="text-2xl font-bold text-blue-600">{highlight.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-2xl p-10 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Skills & Technologies</h3>
          <p className="text-gray-600 mb-8">Proficient in modern web development tools and frameworks</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-4 text-center hover:border-blue-600 hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <span className="text-gray-800 font-bold block">{skill}</span>
                </div>
                
                {/* Animated underline on hover */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
            <h4 className="text-xl font-bold mb-2">Ready to Work Together?</h4>
            <p className="mb-4">I'm always open to new opportunities and collaborations.</p>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
