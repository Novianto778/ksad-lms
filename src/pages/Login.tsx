import { LoginForm } from '@/components/form';
import useAuth from '@/hooks/auth/useAuth';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const { session, isLoading } = useAuth();

    if (!isLoading && !session) {
        return (
            <div className="bg-login h-screen bg-cover object-cover">
                <LoginForm />
            </div>
        );
    } else {
        return <Navigate to="/" replace />;
    }
};

export default Login;
