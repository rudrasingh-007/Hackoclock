import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Sun, Moon } from 'lucide-react';
import { Link } from '../ui/Link';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode ? 'bg-gray-900 shadow-lg' : 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Leaf className={`h-8 w-8 ${isDarkMode ? 'text-green-400' : 'text-green-600'} mr-2`} />
          <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>EcoTrail</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
            )}
          </button>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="#home" 
              className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-green-600'} transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="#tracker" 
              className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-green-600'} transition-colors`}
            >
              Tracker
            </Link>
            <Link 
              href="#about" 
              className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-green-600'} transition-colors`}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-green-600'} transition-colors`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link 
              href="#home" 
              className={`py-2 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-green-600'
              } transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#tracker" 
              className={`py-2 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-green-600'
              } transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Tracker
            </Link>
            <Link 
              href="#about" 
              className={`py-2 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-green-600'
              } transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className={`py-2 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-green-600'
              } transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;