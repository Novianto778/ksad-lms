import { cn } from '@/lib/utils';
import {
    BookOpen,
    ChevronsRight,
    ClipboardList,
    GraduationCap,
    LayoutDashboard,
    LogOut,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useSidebarStore } from '@/store/sidebarStore';
import SidebarListItem from './SidebarListItem';
import useSignOut from '@/hooks/auth/useSignOut';
const Sidebar = () => {
    const { isOpen, toggleSidebar } = useSidebarStore();
    const { signOut } = useSignOut();
    const { pathname } = useLocation();
    const Menus = [
        { title: 'Dashboard', icon: LayoutDashboard, path: '/' },
        { title: 'Course', icon: BookOpen, path: '/course' },
        { title: 'Assignment', icon: ClipboardList, path: '/assignment' },
        { title: 'Student', icon: GraduationCap, path: '/student' },
    ];

    return (
        <>
            <div
                className={` ${
                    isOpen ? 'w-72' : 'w-20 '
                } bg-sidebar h-screen p-5  pt-8 relative duration-300`}
            >
                <ChevronsRight
                    className={`absolute cursor-pointer -right-3 top-9 w-7
                            border-2 rounded-full  ${!isOpen && 'rotate-180'}`}
                    onClick={toggleSidebar}
                />
                <div className="flex gap-x-4 items-center">
                    <img src="/logo.png" className="w-10" />
                    <h1
                        className={`text-foreground font-bold origin-left text-xl duration-200 tracking-widest ${
                            !isOpen && 'scale-0'
                        }`}
                    >
                        Learninja
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => {
                        const isActive = pathname === Menu.path;
                        return (
                            <SidebarListItem
                                key={index}
                                path={Menu.path}
                                title={Menu.title}
                                icon={Menu.icon}
                                isOpen={isOpen}
                                isActive={isActive}
                            />
                        );
                    })}
                    <SidebarListItem
                        icon={LogOut}
                        path="/"
                        title="Logout"
                        isOpen={isOpen}
                        asChild
                        className={cn(
                            'absolute bottom-0 left-8 p-2',
                            !isOpen && 'left-1/2 -translate-x-1/2'
                        )}
                        onClick={signOut}
                    />
                </ul>
            </div>
        </>
    );
};
export default Sidebar;
