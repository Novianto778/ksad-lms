import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/auth/useAuth';
interface Props {
    allowedRoles: string[];
    children?: React.ReactNode;
}

const ProtectedRoutes = ({ allowedRoles, children }: Props) => {
    const { user, isLoading } = useAuth();
    const userRole = user?.user_metadata?.role;

    const isAuthenticated =
        allowedRoles.includes(userRole) || allowedRoles.length === 0;

    if (isLoading) return <div>Loading...</div>;

    if (!isAuthenticated) return <Navigate to="/login" />;

    return <>{children ? children : <Outlet />}</>;
};

export default ProtectedRoutes;
