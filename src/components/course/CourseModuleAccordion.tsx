import { Accordion } from '@/components/ui';
import { Module } from '@/hooks/course/useUserCourseProgress';
import SubmoduleAccordion from './SubmoduleAccordion';

type Props = {
    userModule: Module[];
};

const CourseModuleAccordion = ({ userModule }: Props) => {
    return (
        <Accordion type="multiple">
            {userModule?.map((module) => (
                <SubmoduleAccordion key={module.module_id} module={module} />
            ))}
        </Accordion>
    );
};

export default CourseModuleAccordion;
