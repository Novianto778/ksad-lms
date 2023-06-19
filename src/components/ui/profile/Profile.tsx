import { ProfileImage } from '.';

type Props = {
    level?: number;
};

const Profile = ({ level = 1 }: Props) => {
    return (
        <div className="relative w-max flex flex-col items-center">
            <ProfileImage level={level} />
            <div className="mt-4 flex flex-col items-center">
                <h6 className="font-bold text-lg">John Doe</h6>
                <p className="text-sm text-gray-600">Level {level}</p>
            </div>
        </div>
    );
};

export default Profile;
