import { defineConfig } from 'vite';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
    plugins: [ghPages()],
    base: '/bank_website/' // e.g., '/bank_website/'
});