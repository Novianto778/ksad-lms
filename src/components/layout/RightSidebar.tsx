import { Edit } from 'lucide-react';
import { Calendar, Profile } from '@/components/ui';
import { cn } from '@/lib/utils';

type Props = {
    className?: string;
};

const RightSidebar = ({ className }: Props) => {
    return (
        <div className={cn('w-80 p-4 flex flex-col items-center', className)}>
            <div className="flex items-center justify-between w-full">
                <h2 className="text-lg font-bold">Profile</h2>
                <Edit className="cursor-pointer" size={20} />
            </div>
            <div className="mt-6 flex flex-col items-center">
                <Profile level={3} />
                <Calendar className="mt-4" />
            </div>
        </div>
    );
};

export default RightSidebar;
