import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import DashboardLayout from '../components/layout/DashboardLayout';
import Dashboard from '@/pages/Dashboard';

const LazyDashboard = lazy(() => import('@/pages/Dashboard'));
const LazyChild = lazy(() => import('@/pages/Child'));

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
                element: <Dashboard />,
            },
            {
                path: 'child',
                element: <LazyChild />,
            },
        ],
    },
    {
        path: '/about',
        element: <div>About</div>,
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
