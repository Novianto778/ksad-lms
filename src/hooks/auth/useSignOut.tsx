import { useMutation } from '@tanstack/react-query';
import supabase from '@/lib/db';
import Swal from 'sweetalert2';

const signout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        throw error;
    }
};

const useSignOut = () => {
    const { mutate } = useMutation(signout, {
        onSuccess: () => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'You have successfully logged out',
            });
        },
    });

    return {
        signOut: mutate,
    };
};

export default useSignOut;
