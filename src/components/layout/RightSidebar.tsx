import { Edit, Sun, Moon } from 'lucide-react';
import { Calendar, Profile } from '@/components/ui';
import { cn } from '@/lib/utils';
import useDarkMode from '@/hooks/useDarkMode';

type Props = {
    className?: string;
};

const RightSidebar = ({ className }: Props) => {
    const { theme, toggleTheme } = useDarkMode();
    return (
        <div className={cn('w-80 p-4 flex flex-col items-center', className)}>
            <div className="flex items-center justify-between w-full">
                <h2 className="text-lg font-bold">Profile</h2>
                <div className="flex gap-4">
                    {theme === 'dark' ? (
                        <Sun
                            className="cursor-pointer select-none"
                            size={20}
                            onClick={toggleTheme}
                            fill="white"
                        />
                    ) : (
                        <Moon
                            className="cursor-pointer select-none"
                            size={20}
                            onClick={toggleTheme}
                            fill="black"
                        />
                    )}
                    <Edit className="cursor-pointer select-none" size={20} />
                </div>
            </div>
            <div className="mt-6 flex flex-col items-center">
                <Profile level={3} />
                <Calendar className="mt-4" />
            </div>
        </div>
    );
};

export default RightSidebar;
