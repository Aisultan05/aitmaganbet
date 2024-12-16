import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Айсултан Айтмаганбет',
    position: 'Frontend Developer',
    bio: 'Я веб-разработчик с опытом в Vue.js, Nuxt, TypeScript и других современных технологиях.',
    socialLinks: {
      github: 'https://github.com/Aisultan05',
      linkedin: 'https://linkedin.com/in/username',
      twitter: 'https://twitter.com/username'
    }
  }),
  getters: {
    fullName: (state) => state.name,
  }
})
