import { Outlet } from 'react-router-dom';
import { Sidebar } from '.';

interface Props {
    children?: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <div>
            <Sidebar />
            {children ? children : <Outlet />}
            right
        </div>
    );
};

export default DashboardLayout;
