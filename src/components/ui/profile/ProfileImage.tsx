import { cn } from '@/lib/utils';

type Props = {
    level?: number;
    className?: string;
};

const ProfileImage = ({ level = 1, className, ...props }: Props) => {
    return (
        <div className={cn(className)} {...props}>
            <img
                src="/profile.png"
                alt=""
                className="absolute top-3 w-20 left-1/2 -translate-x-1/2"
            />
            <svg
                width="106"
                height="84"
                viewBox="0 0 106 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12.2761 81.5C5.27615 72.5 -4.52385 48.6 12.2761 25"
                    stroke="#94EBE5"
                    stroke-width="4"
                    stroke-linecap="round"
                    strokeOpacity={0}
                    className={cn('animate-dash', level > 0 && 'block')}
                />
                <path
                    d="M25 12.2761C34 5.27615 57.9 -4.52385 81.5 12.2761"
                    stroke="#68CEC7"
                    stroke-width="4"
                    stroke-linecap="round"
                    strokeOpacity={0}
                    className={cn(
                        'animate-dash delay-500 hidden',
                        level > 1 && 'block'
                    )}
                />
                <path
                    d="M94.0002 25C101 34 110.8 57.9 94.0002 81.5"
                    stroke="#4DA7A2"
                    stroke-width="4"
                    stroke-linecap="round"
                    strokeOpacity={0}
                    className={cn(
                        'animate-dash delay-1000 hidden',
                        level > 2 && 'block'
                    )}
                />
            </svg>
        </div>
    );
};

export default ProfileImage;
