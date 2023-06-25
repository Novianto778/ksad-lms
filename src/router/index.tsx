import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout';
import ProtectedRoutes from './ProtectedRoutes';
import { Loader } from '@/components/ui';

const LazyDashboard = lazy(() => import('@/pages/Dashboard'));
const LazyChild = lazy(() => import('@/pages/Child'));
const LazyLogin = lazy(() => import('@/pages/Login'));
const LazyCourse = lazy(() => import('@/pages/course/UserCourse'));

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoutes allowedRoles={['admin', 'student', 'mentor']}>
                <DashboardLayout />
            </ProtectedRoutes>
        ),
        children: [
            {
                path: '/',
                element: <LazyDashboard />,
            },
            {
                path: 'child',
                element: (
                    <ProtectedRoutes allowedRoles={['admin']}>
                        <LazyChild />
                    </ProtectedRoutes>
                ),
            },
            {
                path: 'course/:id/submodule/:submoduleId',
                element: <LazyCourse />,
            },
        ],
    },
    {
        path: '/login',
        element: <LazyLogin />,
    },
    {
        path: '*',
        element: <div>Not Found</div>,
    },
]);

const AppRouter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
        </Suspense>
    );
};

export default AppRouter;
