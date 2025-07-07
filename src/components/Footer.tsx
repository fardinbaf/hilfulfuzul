import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, MessageCircleHeart, UserCog } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo />
              <span className="font-bold text-lg">হিলফুল ফুজুল সংঘ</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              একসাথে এগিয়ে, সাহায্যের হাত বাড়িয়ে, আলহামদুলিল্লাহ!
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/donation" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-emerald-500 mt-0.5" />
                <span className="text-gray-400">+880 9696-290209</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-emerald-500 mt-0.5" />
                <span className="text-gray-400">ahadahmed5363@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MessageCircleHeart  size={18} className="text-emerald-500 mt-0.5" />
                <a href="https://chat.whatsapp.com/DQ1YW290uXqDGKb05x8SoP" target="_blank"><span className="text-gray-400"> Join WhatsApp Group </span></a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-emerald-500 mt-0.5" />
                <span className="text-gray-400">
                  123 Main Street, Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Donate</h3>
            <p className="text-gray-400 mb-4">
              Your donation makes a difference in someone's life.
            </p>
            <NavLink 
              to="/donation" 
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
            >
              <Heart size={16} className="mr-2" /> Donate Now
            </NavLink>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} হিলফুল ফুজুল সংঘ. All rights reserved.</p>
          <div className="mt-2">
            <NavLink
              to="/admin"
              className="text-sm text-gray-500 hover:text-white transition-colors duration-200 inline-flex items-center"
            >
              <UserCog size={14} className="mr-1" />
              Admin Panel
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
