import { useEffect } from 'react';
import { User, Phone, MessageCircleHeart } from 'lucide-react';
import { useData } from '../context/DataContext';
import { NavLink } from 'react-router-dom';

const MembersPage = () => {
  const { members } = useData();

  useEffect(() => {
    document.title = "হিলফুল ফুজুল সংঘ - Our Members";
  }, []);

  return (
    <div className="min-h-screen pt-16 pb-12">
      {/* Hero Section */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Dedicated Members</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Meet the passionate individuals who are the backbone of our organization.
          </p>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map((member) => (
              <div key={member.id} className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105 hover:shadow-xl">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-12 w-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <div className="flex items-center justify-center text-gray-500">
                  <Phone size={16} className="mr-2" />
                  <span>{member.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Want to Join Us?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Become a part of our community and help us make a difference. Join our WhatsApp group to get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://chat.whatsapp.com/DQ1YW290uXqDGKb05x8SoP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              <MessageCircleHeart size={20} className="mr-2" /> Join WhatsApp Group
            </a>
            <NavLink
              to="/contact"
              className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembersPage;
