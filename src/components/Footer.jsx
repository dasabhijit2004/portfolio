import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 md:px-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Contact Info */}
        <div className="text-center md:text-left max-w-md mx-auto md:mx-0">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">MyPortfolio</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Passionate developer crafting elegant solutions with clean code and modern design.
          </p>
          <address className="not-italic space-y-1 text-gray-400">
            <p>
              Email:{' '}
              <a href="mailto:youremail@example.com" className="text-blue-400 hover:underline">
                youremail@example.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+1234567890" className="text-blue-400 hover:underline">
                +1 (234) 567-890
              </a>
            </p>
            <p>Location: Your City, Country</p>
          </address>
        </div>

        {/* Navigation Links */}
        <nav className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-6 text-white text-center">Explore</h3>
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-400">
            <li>
              <a
                href="#about"
                className="hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold mb-6 text-white">Connect with me</h3>
          <div className="flex justify-center md:justify-end space-x-8 text-gray-400 text-2xl">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition-colors"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-100 transition-colors"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm select-none">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
