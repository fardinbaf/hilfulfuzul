import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed w-full z-10 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white shadow-md py-2' 
      : 'bg-transparent py-4'
  }`;

  const desktopLinkClasses = ({ isActive }: { isActive: boolean }) => {
    const baseClasses = 'font-medium transition-colors duration-200';
    if (isActive) {
      return `${baseClasses} ${isScrolled ? 'text-emerald-600' : 'text-emerald-300'}`;
    }
    return `${baseClasses} ${isScrolled ? 'text-gray-800 hover:text-emerald-600' : 'text-white hover:text-gray-200'}`;
  };

  const mobileLinkClasses = ({ isActive }: { isActive: boolean }) => {
    return `font-medium transition-colors duration-200 ${
      isActive
        ? 'text-emerald-700'
        : 'text-gray-800 hover:text-emerald-600'
    }`;
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <Logo />
          <span className={`font-semibold text-xl transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>হিলফুল ফুজুল সংঘ</span>
        </NavLink>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink to="/" className={desktopLinkClasses}>Home</NavLink>
          <NavLink to="/donation" className={desktopLinkClasses}>Donation</NavLink>
          <NavLink to="/about" className={desktopLinkClasses}>About</NavLink>
          <NavLink to="/members" className={desktopLinkClasses}>Members</NavLink>
          <NavLink to="/contact" className={desktopLinkClasses}>Contact</NavLink>
          <NavLink 
            to="/donation" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            Donate Now
          </NavLink>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={mobileLinkClasses}
            >
              Home
            </NavLink>
            <NavLink 
              to="/donation" 
              onClick={() => setIsOpen(false)}
              className={mobileLinkClasses}
            >
              Donation
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className={mobileLinkClasses}
            >
              About
            </NavLink>
            <NavLink 
              to="/members" 
              onClick={() => setIsOpen(false)}
              className={mobileLinkClasses}
            >
              Members
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className={mobileLinkClasses}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/donation" 
              onClick={() => setIsOpen(false)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md text-center transition-colors duration-300"
            >
              Donate Now
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
