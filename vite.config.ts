import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    define: {
        'process.env': process.env,
    },
});
