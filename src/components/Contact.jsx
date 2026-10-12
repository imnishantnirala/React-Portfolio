import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { aboutData } from '../data/constants';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { email, phone, location, linkedin, github } = aboutData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4500);
  };

  return (
    <section
      id="Contact"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      aria-label="Contact Information and Inquiry Form"
    >
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-3.5 rounded-full bg-primary-600/10 dark:bg-primary-500/15 border border-primary-600/20 dark:border-primary-400/25 text-primary-700 dark:text-primary-300 text-xs font-semibold tracking-wider uppercase font-mono">
          <span>Get in Touch</span>
        </div>
        <h2 className="text-fluid-h2 font-extrabold text-surface-950 dark:text-white tracking-tight">
          Contact Me
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto leading-relaxed readable-measure">
          Feel free to reach out for software engineering roles, client projects, API consulting, or collaborations!
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Direct Channels (2 cols on lg) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-surface-100/80 dark:bg-surface-900/60 backdrop-blur-md border border-surface-200/80 dark:border-white/[0.08] rounded-2xl p-6 sm:p-7 shadow-sm dark:shadow-glass-dark">
            <h3 className="text-lg sm:text-xl font-bold text-surface-950 dark:text-white mb-5 flex items-center gap-2">
              <span>Direct Channels</span>
            </h3>

            <div className="space-y-3.5 text-sm">
              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-surface-50 dark:bg-surface-800/70 hover:bg-surface-200/60 dark:hover:bg-surface-800 border border-surface-300/70 dark:border-white/[0.06] hover:border-primary-500/40 transition-all text-surface-700 dark:text-surface-300 group focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-600/10 dark:bg-primary-500/20 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-surface-500 dark:text-surface-400">Email</p>
                  <p className="text-surface-950 dark:text-white font-medium truncate text-xs sm:text-sm">{email}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-surface-50 dark:bg-surface-800/70 hover:bg-surface-200/60 dark:hover:bg-surface-800 border border-surface-300/70 dark:border-white/[0.06] hover:border-primary-500/40 transition-all text-surface-700 dark:text-surface-300 group focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-600/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-surface-500 dark:text-surface-400">Phone</p>
                  <p className="text-surface-950 dark:text-white font-medium text-xs sm:text-sm">{phone}</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-surface-50 dark:bg-surface-800/70 border border-surface-300/70 dark:border-white/[0.06] text-surface-700 dark:text-surface-300">
                <div className="w-9 h-9 rounded-lg bg-rose-600/10 dark:bg-rose-500/20 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-surface-500 dark:text-surface-400">Location</p>
                  <p className="text-surface-950 dark:text-white font-medium text-xs sm:text-sm">{location}</p>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="mt-6 pt-5 border-t border-surface-200 dark:border-white/[0.08] flex items-center gap-3">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-primary-600/10 hover:bg-primary-600/20 dark:bg-primary-500/15 dark:hover:bg-primary-500/25 border border-primary-600/20 dark:border-primary-400/25 text-primary-700 dark:text-primary-300 hover:text-primary-800 dark:hover:text-white text-xs font-semibold text-center transition-all inline-flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-primary-500 min-h-[44px]"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-surface-200/80 hover:bg-surface-300/80 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] border border-surface-300/80 dark:border-white/[0.08] text-surface-800 dark:text-surface-200 hover:text-surface-950 dark:hover:text-white text-xs font-semibold text-center transition-all inline-flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-primary-500 min-h-[44px]"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form (3 cols on lg) */}
        <div className="lg:col-span-3">
          <div className="bg-surface-100/80 dark:bg-surface-900/60 backdrop-blur-md border border-surface-200/80 dark:border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-glass-dark">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-surface-950 dark:text-white mb-4">
                Send a Message <span className="inline-block animate-bounce select-none">🚀</span>
              </h3>

              {submitted && (
                <div
                  role="status"
                  className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium flex items-center justify-center gap-2 animate-fade-in"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>✨ Thank you for reaching out! Your message has been received.</span>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block mb-1.5 text-xs sm:text-sm font-semibold text-surface-700 dark:text-surface-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-surface-50 dark:bg-surface-800/80 border border-surface-300 dark:border-white/[0.1] rounded-xl text-surface-950 dark:text-white placeholder-surface-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all min-h-[44px]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1.5 text-xs sm:text-sm font-semibold text-surface-700 dark:text-surface-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-surface-50 dark:bg-surface-800/80 border border-surface-300 dark:border-white/[0.1] rounded-xl text-surface-950 dark:text-white placeholder-surface-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all min-h-[44px]"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1.5 text-xs sm:text-sm font-semibold text-surface-700 dark:text-surface-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-surface-50 dark:bg-surface-800/80 border border-surface-300 dark:border-white/[0.1] rounded-xl text-surface-950 dark:text-white placeholder-surface-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-y"
                  placeholder="Write your project details, hiring inquiry, or question..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 shadow-md shadow-primary-600/25 hover:shadow-primary-600/35 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer min-h-[48px] focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
