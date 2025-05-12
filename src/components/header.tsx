import {useState} from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-indigo-600">DevElite</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-10 md:flex">
          <a
            href="#home"
            className="font-medium text-gray-800 hover:text-indigo-600">
            Home
          </a>
          <a
            href="#services"
            className="font-medium text-gray-800 hover:text-indigo-600">
            Services
          </a>
          <a
            href="#tech"
            className="font-medium text-gray-800 hover:text-indigo-600">
            Technologies
          </a>
          <a
            href="#portfolio"
            className="font-medium text-gray-800 hover:text-indigo-600">
            Portfolio
          </a>
          <a
            href="#team"
            className="font-medium text-gray-800 hover:text-indigo-600">
            Team
          </a>
          <a
            href="#contact"
            className="font-medium text-gray-800 hover:text-indigo-600">
            Contact
          </a>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="bg-white px-4 pb-4 md:hidden">
          <a
            href="#home"
            className="block py-2 text-gray-800 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a
            href="#services"
            className="block py-2 text-gray-800 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a
            href="#tech"
            className="block py-2 text-gray-800 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}>
            Technologies
          </a>
          <a
            href="#portfolio"
            className="block py-2 text-gray-800 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}>
            Portfolio
          </a>
          <a
            href="#team"
            className="block py-2 text-gray-800 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}>
            Team
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-800 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
};
