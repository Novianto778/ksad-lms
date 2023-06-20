import supabase from '@/lib/db';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';

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
    const { session, setSession } = useAuthStore();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    return {
        user: data,
        error,
        isLoading,
        session,
    };
};

export default useAuth;
