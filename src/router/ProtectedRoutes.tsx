import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '@/hooks/auth/useAuth';
import { Loader } from '@/components/ui';
interface Props {
    allowedRoles: string[];
    children?: React.ReactNode;
}

const ProtectedRoutes = ({ allowedRoles, children }: Props) => {
    const { user, isLoading, session } = useAuth();
    const userRole = user?.user_metadata?.role;

    const isAuthenticated =
        allowedRoles.includes(userRole) || allowedRoles.length === 0;

    if (isLoading) return <Loader />;

    if (!isLoading && !session) return <Navigate to="/login" />;

    if (!isAuthenticated) return <Navigate to="/" />;

    return children ? children : <Outlet />;
};

export default ProtectedRoutes;
