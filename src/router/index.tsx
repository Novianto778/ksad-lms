import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout';
import ProtectedRoutes from './ProtectedRoutes';

const LazyDashboard = lazy(() => import('@/pages/Dashboard'));
const LazyChild = lazy(() => import('@/pages/Child'));
const LazyLogin = lazy(() => import('@/pages/Login'));

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
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    );
};

export default AppRouter;
