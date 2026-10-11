import React from 'react';
import { videoEditingData } from '../data/constants';

function VideoEditing() {
  const {
    badge,
    title,
    subtitle,
    summary,
    stats,
    highlights,
    tools,
    services,
    creators,
    projects,
    contact
  } = videoEditingData;

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="VideoEditing">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-800/50 text-purple-300 text-xs sm:text-sm font-medium mb-4 shadow-sm">
          <span>🎬</span>
          <span>{badge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {title}
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Summary & Core Stats Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/90 via-gray-900/60 to-purple-950/30 border border-gray-800/90 p-6 sm:p-8 md:p-10 shadow-2xl mb-12 sm:mb-16">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-wider font-bold text-purple-400">
              Overview &amp; Experience
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1 mb-4 leading-snug">
              Storytelling that Captivates &amp; Converts
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {summary}
            </p>

            {/* Content Services Chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {services.map((service, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-800/90 text-purple-200 border border-purple-500/20"
                >
                  ✓ {service}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-gray-950/70 border border-gray-800/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-purple-500/30 transition-colors"
              >
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  {item.label}
                </span>
                <span className="mt-2 text-sm sm:text-base font-bold text-white leading-tight">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Editing Pillars / Highlights */}
      <div className="mb-14 sm:mb-20">
        <div className="text-center mb-8 sm:mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Key Editing Pillars
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Techniques applied to boost average view duration and visual impact
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 sm:p-6 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-950/70 border border-purple-800/50 flex items-center justify-center text-purple-300 font-bold mb-4 group-hover:scale-110 transition-transform">
                  {idx === 0 && '⚡'}
                  {idx === 1 && '🎨'}
                  {idx === 2 && '🔊'}
                  {idx === 3 && '✨'}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Creator Collaborations */}
      <div className="mb-14 sm:mb-20">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-semibold mb-2">
            PROVEN TRACK RECORD
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Creators &amp; Channels Collaborated With
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-xl mx-auto">
            Edited high-retention content for popular YouTube and Instagram creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creators.map((creator, cIdx) => (
            <div
              key={cIdx}
              className="bg-gray-900/70 border border-gray-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-purple-950/60 text-purple-300 border border-purple-800/40">
                    {creator.platform}
                  </span>
                  <span className="text-xs font-medium text-gray-400">
                    {creator.tag}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors flex items-center gap-2">
                  <span>{creator.name}</span>
                </h4>

                <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {creator.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800/80">
                <a
                  href={creator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>Visit Channel / Profile</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Video Projects Showcase */}
      <div className="mb-14 sm:mb-20">
        <div className="text-center mb-8 sm:mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Featured Video Projects
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-xl mx-auto">
            Explore sample work across documentaries, travel vlogs, and tech explainers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:border-purple-500/40 hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Video Mockup Header */}
              <div className={`relative h-44 sm:h-48 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden border-b border-gray-800`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                {/* Play Button Icon Mock */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-purple-600/80 group-hover:bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/40 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-black/70 text-gray-200 border border-gray-700/80">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h4>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] sm:text-xs font-medium px-2.5 py-0.5 rounded-md bg-purple-950/60 text-purple-300 border border-purple-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                {/* Project Links from Resume */}
                <div className="pt-4 border-t border-gray-800/80 flex items-center gap-3">
                  <span className="text-xs font-semibold text-gray-400">
                    Watch:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((linkItem, lIdx) => (
                      <a
                        key={lIdx}
                        href={linkItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800 hover:bg-purple-600 text-gray-200 hover:text-white border border-gray-700 hover:border-purple-500 transition-all duration-200"
                      >
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>{linkItem.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editing Toolkit & Software Stack */}
      <div className="mb-14 sm:mb-20 bg-gray-900/50 border border-gray-800/80 rounded-3xl p-6 sm:p-8">
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Post-Production &amp; Editing Suite
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Industry-standard applications utilized for grading, effects, audio, and assembly
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-gray-800/60 border border-gray-700/60 rounded-2xl p-4 flex flex-col items-center text-center hover:border-purple-400/50 hover:bg-gray-800 transition-all duration-200 group"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center p-2 rounded-xl bg-gray-900/80 group-hover:scale-110 transition-transform">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                {tool.name}
              </span>
              <span className="text-[10px] text-gray-400 mt-0.5 leading-tight">
                {tool.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Collaboration CTA Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/50 via-gray-900 to-blue-900/50 border border-purple-500/30 p-8 sm:p-10 md:p-12 text-center shadow-2xl">
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-950 text-purple-300 border border-purple-800 mb-3">
            {contact.status}
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Need High-Impact Video Editing?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
            Whether you run a YouTube channel, need scroll-stopping Instagram reels, or are producing a full documentary, let&apos;s bring your vision to life.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-green-600 hover:bg-green-500 shadow-lg shadow-green-600/30 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
            >
              <span>💬 Chat on WhatsApp</span>
            </a>

            <a
              href={`mailto:${contact.email}?subject=Video%20Editing%20Project%20Inquiry`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
            >
              <span>✉️ Email Nishant</span>
            </a>

            <a
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-gray-200 bg-gray-800/90 hover:bg-gray-700 border border-gray-600 hover:text-white transition-all duration-200 text-sm sm:text-base"
            >
              <span>📞 {contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoEditing;
