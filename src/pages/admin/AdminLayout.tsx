import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Calendar, TextQuote, Users, Image, LogOut, Home } from 'lucide-react';
import Logo from '../../components/Logo';
import { useData } from '../../context/DataContext';

const AdminLayout = () => {
  const { logout } = useData();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center px-4 border-b border-gray-700">
          <NavLink to="/admin" className="flex items-center space-x-2">
            <Logo />
            <span className="font-semibold text-lg">Admin Panel</span>
          </NavLink>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          <NavLink to="/admin" end className={({ isActive }) => `flex items-center px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </NavLink>
          <NavLink to="/admin/events" className={({ isActive }) => `flex items-center px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
            <Calendar className="mr-3 h-5 w-5" />
            Manage Events
          </NavLink>
          <NavLink to="/admin/marquee" className={({ isActive }) => `flex items-center px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
            <TextQuote className="mr-3 h-5 w-5" />
            Manage Marquee
          </NavLink>
          <NavLink to="/admin/members" className={({ isActive }) => `flex items-center px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
            <Users className="mr-3 h-5 w-5" />
            Manage Members
          </NavLink>
          <NavLink to="/admin/slides" className={({ isActive }) => `flex items-center px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
            <Image className="mr-3 h-5 w-5" />
            Manage Slides
          </NavLink>
        </nav>
        <div className="px-2 py-4 border-t border-gray-700 space-y-2">
            <NavLink to="/" className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                <Home className="mr-3 h-5 w-5" />
                Back to Site
            </NavLink>
            <button onClick={handleLogout} className="w-full flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                <LogOut className="mr-3 h-5 w-5" />
                Logout
            </button>
        </div>
      </aside>
      <main className="flex-1 p-6 lg:p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
