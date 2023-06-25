import { Database } from './supabase';

export type Assignment = Database['public']['Tables']['assignment']['Row'];
export type Course = Database['public']['Tables']['course']['Row'];
export type Member = Database['public']['Tables']['member']['Row'];
export type MemberAssignment =
    Database['public']['Tables']['member_assignment']['Row'];
export type MemberCourse = Database['public']['Tables']['member_course']['Row'];
export type MemberProgress =
    Database['public']['Tables']['member_progress']['Row'];
export type Mentor = Database['public']['Tables']['mentor']['Row'];
export type Module = Database['public']['Tables']['module']['Row'];
export type Submodule = Database['public']['Tables']['submodule']['Row'];

export type CourseModule = Course & {
    module: Module &
        {
            submodule: Submodule[];
        }[];
} & {
    member_course: MemberCourse &
        {
            member_progress: MemberProgress[];
        }[];
};

export type ModuleSubmodule = Module & {
    submodule: Submodule[];
};

export type MemberCourseProgress = {
    id: number;
    title: string;
    total_module: number;
    level: number;
    status: boolean | null;
    type: string;
    moduleUrl: string;
    module_title: string;
};

export type RPC_Get_Member_Progress = {
    id: number;
    title: string;
    total_module: number;
    level: number;
    status: boolean | null;
    type: string;
    moduleUrl: string;
    module_title: string;
    module_id: number;
    submodule_title: string;
};
