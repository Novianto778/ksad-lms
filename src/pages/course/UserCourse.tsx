import {
    CourseModuleAccordion,
    CourseSubmoduleContent,
} from '@/components/course';
import { Button } from '@/components/ui/button';
import useCurrentCourseModule from '@/hooks/course/useUserCourseProgress';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '@/components/ui';

const UserCourse = () => {
    const { id, submoduleId } = useParams<{
        id: string;
        submoduleId: string;
    }>();
    const [hideModule, setHideModule] = useState(false);
    const { courseModule, isLoading, isError } = useCurrentCourseModule(
        parseInt(id || '0')
    );

    const submodules = courseModule?.module.flatMap(
        (module) => module.submodule
    );

    const currentSubmodule = useMemo(
        () =>
            submodules?.find(
                (submodule) => submodule.id === parseInt(submoduleId || '0')
            ),
        [submoduleId, submodules]
    );

    const finishedSubmodules = submodules?.filter(
        (submodule) => submodule.status
    );

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <div>Error</div>;
    }

    const handleToggleModule = () => {
        setHideModule((prev) => !prev);
    };
    return (
        <>
            <div className="px-4 py-2.5 bg-background shadow border rounded-sm flex items-center justify-between">
                <h1 className="text-xl font-semibold">
                    Kelas {courseModule?.title}{' '}
                </h1>
                <p className="text-sm text-gray-800">
                    {finishedSubmodules?.length} /{submodules?.length} Materi
                </p>
            </div>
            <div className="flex gap-8 mt-4">
                <div
                    className={cn(
                        'flex-col gap-2 bg-background p-4 shadow border w-[400px] rounded-sm h-max relative duration-300 origin-left',
                        hideModule
                            ? 'w-0 p-0 overflow-hidden border-0 opacity-0'
                            : 'flex'
                    )}
                >
                    <h6 className="text-lg font-semibold">Modul Belajar</h6>
                    {courseModule && (
                        <CourseModuleAccordion
                            userModule={courseModule.module}
                        />
                    )}
                    <Menu
                        className={cn(
                            'absolute right-4 top-4 cursor-pointer',
                            hideModule && 'hidden'
                        )}
                        size={24}
                        onClick={handleToggleModule}
                    />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2 items-center">
                            <Menu
                                size={24}
                                className={cn(
                                    'cursor-pointer',
                                    !hideModule && 'hidden'
                                )}
                                onClick={handleToggleModule}
                            />
                            <h6 className="text-lg font-semibold">Materi</h6>
                        </div>
                        <Button size="sm">Lanjutkan</Button>
                    </div>
                    {currentSubmodule && (
                        <CourseSubmoduleContent
                            type={currentSubmodule?.type}
                            url={currentSubmodule?.moduleUrl}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default UserCourse;
