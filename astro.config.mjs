// @ts-check
import {defineConfig} from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: 'https://tapsystemriparazionesostituzionetapparellemilano.it',
    base: '/',
    vite: {
        plugins: [tailwindcss()],
    },
    output: 'static'
});