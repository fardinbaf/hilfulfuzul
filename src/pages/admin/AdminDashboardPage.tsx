import { NavLink } from "react-router-dom";
import { Calendar, TextQuote, Users, Image } from "lucide-react";

const AdminDashboardPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
            <p className="text-gray-600 mb-8">Welcome to the admin panel. Here you can manage the content of the website.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <NavLink to="/admin/events" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Calendar className="h-10 w-10 text-emerald-600 mb-4" />
                    <h2 className="text-xl font-semibold text-gray-800">Manage Events</h2>
                    <p className="text-gray-500 mt-2">Update recent and upcoming events.</p>
                </NavLink>
                <NavLink to="/admin/marquee" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <TextQuote className="h-10 w-10 text-emerald-600 mb-4" />
                    <h2 className="text-xl font-semibold text-gray-800">Manage Marquee</h2>
                    <p className="text-gray-500 mt-2">Edit the sponsor marquee text.</p>
                </NavLink>
                <NavLink to="/admin/members" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Users className="h-10 w-10 text-emerald-600 mb-4" />
                    <h2 className="text-xl font-semibold text-gray-800">Manage Members</h2>
                    <p className="text-gray-500 mt-2">View and manage members list.</p>
                </NavLink>
                <NavLink to="/admin/slides" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Image className="h-10 w-10 text-emerald-600 mb-4" />
                    <h2 className="text-xl font-semibold text-gray-800">Manage Slides</h2>
                    <p className="text-gray-500 mt-2">Update homepage slideshow images.</p>
                </NavLink>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
