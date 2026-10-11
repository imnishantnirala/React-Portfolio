import React, { useState } from 'react';
import { aboutData } from '../data/constants';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { email, phone, location, linkedin, github } = aboutData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="Contact">
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-block px-3.5 py-1 mb-3 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-semibold tracking-wide uppercase">
          Get in Touch
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Contact Me
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          Feel free to reach out for software engineering roles, client projects, API consulting, or collaborations!
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Contact Information Cards (2 Cols on desktop) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>📬</span> Direct Channels
            </h3>

            <div className="space-y-4 text-sm">
              <a
                href={`mailto:${email}`}
                className="flex items-start gap-3 p-3 rounded-xl bg-gray-800/60 hover:bg-gray-800 border border-gray-700/60 hover:border-purple-500/50 transition-all text-gray-300 hover:text-white group"
              >
                <span className="text-lg text-purple-400 group-hover:scale-110 transition-transform">✉️</span>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 font-medium">Email</p>
                  <p className="text-white font-medium truncate">{email}</p>
                </div>
              </a>

              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="flex items-start gap-3 p-3 rounded-xl bg-gray-800/60 hover:bg-gray-800 border border-gray-700/60 hover:border-purple-500/50 transition-all text-gray-300 hover:text-white group"
              >
                <span className="text-lg text-emerald-400 group-hover:scale-110 transition-transform">📞</span>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Phone</p>
                  <p className="text-white font-medium">{phone}</p>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-800/60 border border-gray-700/60 text-gray-300">
                <span className="text-lg text-rose-400">📍</span>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Location</p>
                  <p className="text-white font-medium">{location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-5 border-t border-gray-800 flex items-center gap-3">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-blue-950/40 hover:bg-blue-900/60 border border-blue-800/50 text-blue-300 hover:text-white text-xs font-semibold text-center transition-all"
              >
                LinkedIn Profile
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-gray-800/80 hover:bg-gray-750 border border-gray-700 text-gray-200 hover:text-white text-xs font-semibold text-center transition-all"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form (3 Cols on desktop) */}
        <div className="lg:col-span-3">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Send a Message <span className="inline-block animate-bounce">🚀</span>
              </h3>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-green-900/40 border border-green-600/50 text-green-300 text-sm text-center">
                  ✨ Thank you for reaching out! Your message has been received.
                </div>
              )}

              <div>
                <label htmlFor="name" className="block mb-1.5 text-xs sm:text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2.5 sm:py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1.5 text-xs sm:text-sm font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2.5 sm:py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1.5 text-xs sm:text-sm font-medium text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2.5 sm:py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-y"
                  placeholder="Write your project details, hiring inquiry, or question..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-600/25 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] text-sm sm:text-base cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
