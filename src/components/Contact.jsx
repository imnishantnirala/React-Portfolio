import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Contact
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          Feel free to reach out to me for any opportunities, collaborations, or questions!
        </p>
      </div>

      <div className="w-full max-w-xl mx-auto">
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
              Email Me <span className="inline-block animate-bounce">🚀</span>
            </h3>

            {submitted && (
              <div className="p-3.5 rounded-xl bg-green-900/40 border border-green-600/50 text-green-300 text-sm text-center">
                ✨ Thank you for reaching out! Your message has been received.
              </div>
            )}

            <div>
              <label htmlFor="name" className="block mb-2 text-xs sm:text-sm font-medium text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-xs sm:text-sm font-medium text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-xs sm:text-sm font-medium text-gray-300">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                required
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-y"
                placeholder="Write your thoughts or opportunity details..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-600/25 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] text-sm sm:text-base cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
