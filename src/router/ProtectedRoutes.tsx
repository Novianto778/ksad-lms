import { Navigate, Outlet } from 'react-router-dom';
interface Props {
    allowedRoles: string[];
    children?: React.ReactNode;
}

const currentLoginUser = {
    role: 'student',
};

const ProtectedRoutes = ({ allowedRoles, children }: Props) => {
    const isAuthenticated =
        allowedRoles.includes(currentLoginUser.role) ||
        allowedRoles.length === 0;

    if (!isAuthenticated) return <Navigate to="/login" />;

    return <>{children ? children : <Outlet />}</>;
};

export default ProtectedRoutes;
