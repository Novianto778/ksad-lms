import { Submodule } from '@/hooks/course/useUserCourseProgress';
import { cn } from '@/lib/utils';
import { CheckCircle2, FileText, Link, PlaySquare } from 'lucide-react';

type Props = {
    submodule: Submodule;
    handleClickModule: (submoduleId: number) => void;
    submoduleId: string;
};

const SubmoduleAccordionItem = ({
    submodule,
    handleClickModule,
    submoduleId,
}: Props) => {
    const isActive = submoduleId === submodule.id.toString();
    const isFinished = submodule.status;
    return (
        <div
            className={cn(
                'flex items-center justify-between p-2 px-4',
                isActive && 'border-primary border bg-primary/20 rounded-sm'
            )}
            key={submodule.id}
            onClick={() => handleClickModule(submodule.id)}
        >
            <div className="flex items-center gap-2">
                {submodule.type === 'video' && <PlaySquare size={16} />}
                {submodule.type === 'pdf' && <FileText size={16} />}
                {submodule.type === 'resource' && <Link size={16} />}

                {submodule.submodule_title}
            </div>
            {isFinished && <CheckCircle2 size={16} className="text-primary" />}
        </div>
    );
};

export default SubmoduleAccordionItem;
