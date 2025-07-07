import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useData } from '../context/DataContext';

const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useData();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-emerald-600"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
