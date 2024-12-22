import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
  ],

  css: [
    'bootstrap/dist/css/bootstrap.min.css', 
    '~/assets/styles/main.scss', 
  ],

  typescript: {
    strict: true,
  },

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-12-21',
});