import supabase from '@/lib/db';
import { RPC_Get_Member_Progress } from '@/types/collection';
import { useQuery } from '@tanstack/react-query';

export type MemberCourseProgress = {
    title: string;
    total_module: number;
    level: number;
    module: Module[];
};

export type Module = {
    module_id: number;
    title: string;
    submodule: Submodule[];
};

export type Submodule = {
    id: number;
    status: boolean | null;
    type: string;
    moduleUrl: string;
    submodule_title: string;
};

const fetchCurrentCourseProgress = async (id: number) => {
    try {
        const res = await supabase.rpc('get_member_course_progress', {
            course_id: id,
        });

        const structuredMemberProgress = res.data.reduce(
            (acc: MemberCourseProgress, curr: RPC_Get_Member_Progress) => {
                const {
                    module_id,
                    module_title,
                    title,
                    total_module,
                    level,
                    ...rest
                } = curr;

                if (!acc.module) {
                    acc = { title: title, total_module, level, module: [] };
                }

                const found = acc.module?.find(
                    (item) => item.module_id === module_id
                );

                if (!found) {
                    acc.module.push({
                        module_id: module_id,
                        title: module_title,
                        submodule: [rest],
                    });
                } else {
                    found.submodule.push({
                        ...rest,
                    });
                }

                return acc;
            },
            {}
        );

        return structuredMemberProgress;
    } catch (err) {
        console.log(err);
    }
};

const useCurrentCourseModule = (id: number) => {
    const {
        data: courseModule,
        isLoading,
        isError,
    } = useQuery<MemberCourseProgress, Error>(
        ['member_course', id],
        () => fetchCurrentCourseProgress(id),
        {
            enabled: !!id,
        }
    );

    return {
        courseModule,
        isLoading,
        isError,
    };
};

export default useCurrentCourseModule;
