import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
} from '@/components/form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';
import useSignIn from '@/hooks/auth/useSignIn';

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export type LoginFormValues = z.infer<typeof formSchema>;

const LoginForm = () => {
    const { signIn, signinLoading } = useSignIn();
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const onSubmit = (values: LoginFormValues) => {
        signIn(values);
    };
    return (
        <>
            <div className="h-full">
                <div className="flex h-full items-center py-16">
                    <div className="w-full max-w-md mx-auto p-6">
                        <div className="mt-7 bg-background border border-border rounded-xl shadow-sm">
                            <div className="p-4 sm:p-7">
                                <div className="text-center">
                                    <h1 className="block text-2xl font-bold text-foreground">
                                        Sign in
                                    </h1>
                                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-200">
                                        Don't have an account yet?{' '}
                                        <Link
                                            to="/signup"
                                            className="text-blue-600 decoration-2 hover:underline font-medium"
                                        >
                                            Sign up here
                                        </Link>
                                    </p>
                                </div>

                                <div className="mt-5">
                                    <Form {...form}>
                                        <form
                                            onSubmit={form.handleSubmit(
                                                onSubmit
                                            )}
                                            className="flex flex-col gap-6"
                                        >
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            Email
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="johndoe@example.com"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="password"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="flex items-center justify-between">
                                                            Password
                                                            <Link
                                                                to="/forgot-password"
                                                                className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                                                            >
                                                                Forgot password?
                                                            </Link>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="your password"
                                                                type="password"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <div className="grid gap-y-4">
                                                <div className="flex items-center">
                                                    <div className="flex">
                                                        <Input
                                                            id="remember-me"
                                                            name="remember-me"
                                                            type="checkbox"
                                                            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <label
                                                            htmlFor="remember-me"
                                                            className="text-sm dark:text-white"
                                                        >
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                                <Button
                                                    type="submit"
                                                    className="w-full"
                                                    isLoading={signinLoading}
                                                >
                                                    Sign in
                                                </Button>
                                            </div>
                                        </form>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
