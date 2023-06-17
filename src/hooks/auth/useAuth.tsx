import supabase from '@/lib/db';
import { useQuery } from '@tanstack/react-query';

const getUser = async () => {
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();
    if (error) {
        console.log(error);
        return null;
    } else {
        return user;
    }
};

const useAuth = () => {
    const { data, error, isLoading } = useQuery(['user'], getUser);

    return {
        user: data,
        error,
        isLoading,
    };
};

export default useAuth;
