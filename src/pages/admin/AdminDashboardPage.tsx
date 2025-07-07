import { NavLink } from 'react-router-dom';
import { BarChart3, Image, Newspaper, Users, Megaphone } from 'lucide-react';

const AdminDashboardPage = () => {
  const quickLinks = [
    { name: 'Manage Stats', to: '/admin/stats', icon: BarChart3 },
    { name: 'Manage Slides', to: '/admin/slides', icon: Image },
    { name: 'Manage Events', to: '/admin/events', icon: Newspaper },
    { name: 'Manage Notice', to: '/admin/notice', icon: Megaphone },
    { name: 'Manage Members', to: '/admin/members', icon: Users },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">Welcome to the admin panel. From here you can manage the content of the website.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickLinks.map(link => (
          <NavLink 
            key={link.name}
            to={link.to}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center">
              <div className="p-3 bg-emerald-100 rounded-full">
                <link.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-700 ml-4">{link.name}</h2>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
