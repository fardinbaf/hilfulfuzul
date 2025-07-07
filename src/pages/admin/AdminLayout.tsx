import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Newspaper, Image, BarChart3, Users, Megaphone, LogOut, ExternalLink } from 'lucide-react';
import Logo from '../../components/Logo';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
      isActive
        ? 'bg-emerald-700 text-white'
        : 'text-gray-300 hover:bg-emerald-900 hover:text-white'
    }`;

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <aside className="w-64 flex-shrink-0 bg-gray-900 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center px-4 border-b border-gray-700">
          <NavLink to="/admin" className="flex items-center space-x-2">
            <Logo />
            <span className="font-semibold text-lg">Admin Panel</span>
          </NavLink>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavLink to="/admin" end className={navLinkClasses}>
            <LayoutDashboard className="w-5 h-5 mr-3" /> Dashboard
          </NavLink>
          <NavLink to="/admin/stats" className={navLinkClasses}>
            <BarChart3 className="w-5 h-5 mr-3" /> Manage Stats
          </NavLink>
           <NavLink to="/admin/slides" className={navLinkClasses}>
            <Image className="w-5 h-5 mr-3" /> Manage Slides
          </NavLink>
          <NavLink to="/admin/events" className={navLinkClasses}>
            <Newspaper className="w-5 h-5 mr-3" /> Manage Events
          </NavLink>
          <NavLink to="/admin/notice" className={navLinkClasses}>
            <Megaphone className="w-5 h-5 mr-3" /> Manage Notice
          </NavLink>
          <NavLink to="/admin/members" className={navLinkClasses}>
            <Users className="w-5 h-5 mr-3" /> Manage Members
          </NavLink>
        </nav>
        <div className="px-4 py-4 border-t border-gray-700 space-y-2">
            <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-emerald-900 hover:text-white">
                 <ExternalLink className="w-5 h-5 mr-3" /> View Site
            </a>
          <button onClick={handleLogout} className="w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-emerald-900 hover:text-white">
            <LogOut className="w-5 h-5 mr-3" /> Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
