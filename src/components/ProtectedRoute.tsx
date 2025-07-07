import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useData } from '../context/DataContext';

const ProtectedRoute = () => {
    const { isAuthenticated } = useData();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
