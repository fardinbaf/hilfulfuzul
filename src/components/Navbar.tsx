import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial scroll state on mount and route change

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isTransparent = isHomePage && !isScrolled;

  const navbarClasses = `fixed w-full z-10 transition-all duration-300 ${
    isTransparent
      ? 'bg-transparent py-4'
      : 'bg-white shadow-md py-2'
  }`;

  const desktopLinkClasses = ({ isActive }: { isActive: boolean }) => {
    const baseClasses = 'font-medium transition-colors duration-200';
    // Use dark text colors for links regardless of navbar background for better visibility.
    return isActive
      ? `${baseClasses} text-emerald-600`
      : `${baseClasses} text-gray-800 hover:text-emerald-600`;
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
          <span className={`font-semibold text-xl transition-colors duration-300 text-gray-900`}>হিলফুল ফুজুল সংঘ</span>
        </NavLink>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden focus:outline-none transition-colors duration-300 text-gray-800`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink to="/" end className={desktopLinkClasses}>Home</NavLink>
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
              end
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
