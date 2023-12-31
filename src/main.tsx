import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AppRouter />
        </QueryClientProvider>
    </React.StrictMode>
);
