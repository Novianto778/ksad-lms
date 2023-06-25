import supabase from '@/lib/db';
import { CourseModule } from '@/types/collection';
import { useQuery } from '@tanstack/react-query';

const fetchCourseModule = async (id: number) => {
    const res = await supabase
        .from('course')
        .select('*, module(*, submodule(*))')
        .eq('id', id)
        .single();

    return res.data;
};

const useCourseModule = (id: number) => {
    const {
        data: courseModule,
        isLoading,
        isError,
    } = useQuery<CourseModule, Error>(
        ['courseModule', id],
        () => fetchCourseModule(id),
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

export default useCourseModule;
