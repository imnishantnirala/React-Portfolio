import {
  Film,
  Zap,
  Palette,
  Volume2,
  Sparkles,
  Play,
  ExternalLink,
  MessageCircle,
  Mail,
  Phone,
  CheckCircle2,
  Tv
} from 'lucide-react';
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

  const renderPillarIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 1:
        return <Palette className="w-5 h-5 text-primary-500" />;
      case 2:
        return <Volume2 className="w-5 h-5 text-accent-500" />;
      case 3:
      default:
        return <Sparkles className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section
      id="VideoEditing"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      aria-label="Video Editing and Post-Production Showcase"
    >
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-3.5 rounded-full bg-accent-600/10 dark:bg-accent-500/15 border border-accent-600/20 dark:border-accent-400/25 text-accent-700 dark:text-accent-300 text-xs font-semibold tracking-wider uppercase font-mono">
          <Film className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>
        <h2 className="text-fluid-h2 font-extrabold text-surface-950 dark:text-white tracking-tight">
          {title}
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto leading-relaxed readable-measure">
          {subtitle}
        </p>
      </div>

      {/* Summary & Core Stats Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface-100 via-surface-100 to-primary-50/50 dark:from-surface-900/90 dark:via-surface-900/60 dark:to-primary-950/30 border border-surface-200/80 dark:border-white/[0.08] p-6 sm:p-8 md:p-10 shadow-sm dark:shadow-glass-dark mb-12 sm:mb-16">
        <div
          className="absolute top-0 right-0 -mt-12 -mr-12 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 -mb-12 -ml-12 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-wider font-mono font-bold text-primary-600 dark:text-primary-400">
              Overview &amp; Experience
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-surface-950 dark:text-white mt-1 mb-4 leading-snug">
              Storytelling that Captivates &amp; Converts
            </h3>
            <p className="text-surface-700 dark:text-surface-300 text-sm sm:text-base leading-relaxed readable-measure">
              {summary}
            </p>

            {/* Content Services Chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {services.map((service, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-surface-200/80 dark:bg-white/[0.05] text-surface-800 dark:text-surface-200 border border-surface-300/60 dark:border-white/[0.08]"
                >
                  <CheckCircle2 className="w-3 h-3 text-accent-500 shrink-0" />
                  <span>{service}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-surface-50 dark:bg-surface-950/70 border border-surface-200/80 dark:border-white/[0.06] rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:border-primary-500/30 transition-colors"
              >
                <span className="text-[11px] font-mono text-surface-500 dark:text-surface-400 uppercase tracking-wider font-semibold">
                  {item.label}
                </span>
                <span className="mt-2 text-sm sm:text-base font-bold text-surface-950 dark:text-white leading-tight">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Editing Pillars */}
      <div className="mb-14 sm:mb-20">
        <div className="text-center mb-8 sm:mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-surface-950 dark:text-white">
            Key Editing Pillars
          </h3>
          <p className="text-xs sm:text-sm text-surface-500 dark:text-surface-400 mt-2">
            Techniques applied to boost average view duration and visual impact
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-surface-100/80 dark:bg-surface-900/60 backdrop-blur-md border border-surface-200/80 dark:border-white/[0.08] rounded-2xl p-5 sm:p-6 hover:border-primary-500/40 dark:hover:border-primary-400/35 shadow-sm dark:shadow-glass-dark transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-surface-200 dark:bg-white/[0.06] border border-surface-300/80 dark:border-white/[0.1] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {renderPillarIcon(idx)}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-surface-950 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
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
          <div className="inline-block px-3 py-1 rounded-full bg-accent-600/10 dark:bg-accent-500/15 border border-accent-600/20 dark:border-accent-400/25 text-accent-700 dark:text-accent-300 text-xs font-mono font-semibold mb-2">
            PROVEN TRACK RECORD
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-surface-950 dark:text-white">
            Creators &amp; Channels Collaborated With
          </h3>
          <p className="text-xs sm:text-sm text-surface-500 dark:text-surface-400 mt-2 max-w-xl mx-auto">
            Edited high-retention content for popular YouTube and Instagram creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creators.map((creator, cIdx) => (
            <div
              key={cIdx}
              className="bg-surface-100/80 dark:bg-surface-900/60 border border-surface-200/80 dark:border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between hover:border-primary-500/40 dark:hover:border-primary-400/35 shadow-sm dark:shadow-glass-dark transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-primary-600/10 dark:bg-primary-500/15 text-primary-700 dark:text-primary-300 border border-primary-600/20 dark:border-primary-400/25">
                    {creator.platform}
                  </span>
                  <span className="text-xs font-medium text-surface-500 dark:text-surface-400">
                    {creator.tag}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-surface-950 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors flex items-center gap-2">
                  <Tv className="w-4 h-4 text-accent-500 shrink-0" />
                  <span>{creator.name}</span>
                </h4>

                <p className="mt-3 text-xs sm:text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                  {creator.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-200 dark:border-white/[0.08]">
                <a
                  href={creator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-500 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md"
                >
                  <span>Visit Channel / Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Video Projects Showcase */}
      <div className="mb-14 sm:mb-20">
        <div className="text-center mb-8 sm:mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-surface-950 dark:text-white">
            Featured Video Projects
          </h3>
          <p className="text-xs sm:text-sm text-surface-500 dark:text-surface-400 mt-2 max-w-xl mx-auto">
            Explore sample work across documentaries, travel vlogs, and tech explainers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-surface-100/80 dark:bg-surface-900/60 backdrop-blur-md border border-surface-200/80 dark:border-white/[0.08] rounded-2xl overflow-hidden shadow-sm dark:shadow-glass-dark hover:border-primary-500/40 dark:hover:border-primary-400/35 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Video Mockup Header */}
              <div className={`relative h-44 sm:h-48 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden border-b border-surface-200 dark:border-white/[0.08]`}>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                {/* Play Button Icon */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg shadow-primary-600/40 group-hover:scale-110 transition-all duration-300">
                  <Play className="w-6 h-6 translate-x-0.5 fill-current" />
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-black/70 text-white border border-white/20">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-surface-950 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h4>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-surface-200/80 dark:bg-white/[0.05] text-surface-700 dark:text-surface-300 border border-surface-300/70 dark:border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                {/* Project Links */}
                <div className="pt-4 border-t border-surface-200 dark:border-white/[0.08] flex items-center gap-3">
                  <span className="text-xs font-semibold text-surface-500 dark:text-surface-400">
                    Watch:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((linkItem, lIdx) => (
                      <a
                        key={lIdx}
                        href={linkItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-950/40 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 border border-primary-200 dark:border-primary-800/40 transition-all duration-200"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>{linkItem.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Editing Toolkit & Software Stack */}
      <div className="mb-14 sm:mb-20 bg-surface-100/80 dark:bg-surface-900/50 border border-surface-200/80 dark:border-white/[0.08] rounded-3xl p-6 sm:p-8">
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-surface-950 dark:text-white">
            Post-Production &amp; Editing Suite
          </h3>
          <p className="text-xs sm:text-sm text-surface-500 dark:text-surface-400 mt-1">
            Industry-standard applications utilized for grading, effects, audio, and assembly
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-surface-50 dark:bg-surface-800/60 border border-surface-200/70 dark:border-white/[0.06] rounded-2xl p-4 flex flex-col items-center text-center hover:border-primary-500/40 transition-all duration-200 group"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center p-2 rounded-xl bg-surface-200/60 dark:bg-surface-900/80 group-hover:scale-110 transition-transform">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                  width="32"
                  height="32"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-surface-950 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                {tool.name}
              </span>
              <span className="text-[10px] text-surface-500 dark:text-surface-400 mt-0.5 leading-tight">
                {tool.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Collaboration CTA Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-900/30 via-surface-100 to-accent-900/20 dark:from-primary-950/70 dark:via-surface-900 dark:to-accent-950/70 border border-primary-500/30 p-8 sm:p-10 md:p-12 text-center shadow-xl">
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary-600/10 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 border border-primary-600/30 dark:border-primary-400/30 mb-3">
            {contact.status}
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-surface-950 dark:text-white tracking-tight">
            Need High-Impact Video Editing?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-surface-700 dark:text-surface-300 leading-relaxed readable-measure mx-auto">
            Whether you run a YouTube channel, need scroll-stopping Instagram reels, or are producing a full documentary, let&apos;s bring your vision to life.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/25 transition-all duration-200 hover:scale-[1.02] text-sm sm:text-base min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`mailto:${contact.email}?subject=Video%20Editing%20Project%20Inquiry`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-primary-600 hover:bg-primary-500 shadow-md shadow-primary-600/25 transition-all duration-200 hover:scale-[1.02] text-sm sm:text-base min-h-[48px]"
            >
              <Mail className="w-4 h-4" />
              <span>Email Nishant</span>
            </a>

            <a
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-surface-800 dark:text-surface-200 bg-surface-200 dark:bg-surface-800/90 hover:bg-surface-300 dark:hover:bg-surface-700 border border-surface-300 dark:border-white/[0.1] transition-all duration-200 text-sm sm:text-base min-h-[48px]"
            >
              <Phone className="w-4 h-4" />
              <span>{contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoEditing;
