import { useMutation } from '@tanstack/react-query';
import supabase from '@/lib/db';
import { LoginFormValues } from '@/components/form/LoginForm';
import Swal from 'sweetalert2';

const signin = async (values: LoginFormValues) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword(values);
        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

const useSignIn = () => {
    const { mutate, isLoading } = useMutation(signin, {
        onSuccess: (data) => {
            if (data) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully logged in',
                });
            }
        },
    });

    return {
        signIn: mutate,
        signinLoading: isLoading,
    };
};

export default useSignIn;
