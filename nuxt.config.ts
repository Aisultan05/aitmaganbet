import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt'
  ],
  css: [
    '~/assets/styles/main.scss'
  ],
  build: {
    transpile: ['@nuxt/ui']
  },
  compatibilityDate: '2024-12-13',
  typescript: {
    strict: true
  }
})