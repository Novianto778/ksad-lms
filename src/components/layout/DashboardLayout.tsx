import { ProfileImage } from '@/components/ui';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '.';
import RightSidebar from './RightSidebar';

interface Props {
    children?: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    const { pathname } = useLocation();
    const isShowRightSidebar = pathname === '/';
    return (
        <div className="flex">
            <Sidebar />
            <ProfileImage
                className="lg:hidden absolute top-0 right-0 scale-50 cursor-pointer"
                level={3}
            />
            <div className="flex-1 px-8 py-8">
                {children ? children : <Outlet />}
            </div>
            {isShowRightSidebar && <RightSidebar className="hidden lg:block" />}
        </div>
    );
};

export default DashboardLayout;
