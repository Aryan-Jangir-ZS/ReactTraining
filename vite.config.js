import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  root: './reactPrac', 
  plugins: [react()],
});

