import { Module } from '@/hooks/course/useUserCourseProgress';
import { useNavigate, useParams } from 'react-router-dom';
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui';
import { SubmoduleAccordionItem } from '.';

type Props = {
    module: Module;
};

const SubmoduleAccordion = ({ module }: Props) => {
    const { id, submoduleId } = useParams<{
        id: string;
        submoduleId: string;
    }>();
    const navigate = useNavigate();

    const handleClickModule = (submoduleId: number) => {
        navigate(`/course/${id}/submodule/${submoduleId}`);
    };
    return (
        <AccordionItem value={module.module_id.toString()}>
            <AccordionTrigger>{module.title}</AccordionTrigger>
            <AccordionContent>
                {module.submodule.map((submodule) => {
                    return (
                        <SubmoduleAccordionItem
                            key={submodule.id}
                            submodule={submodule}
                            handleClickModule={handleClickModule}
                            submoduleId={submoduleId || ''}
                        />
                    );
                })}
            </AccordionContent>
        </AccordionItem>
    );
};

export default SubmoduleAccordion;
