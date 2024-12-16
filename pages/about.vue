<template>
  <div class="path">
  </div>   
    <section class="container py-5">
      <article>   
        <h1 class="mb-5">
          <span>/</span><span style="color: white;">about-me</span>
        </h1>
        <p class="path__description">Кто я такой</p>
      </article>
      <article>
      <p>
        Я — {{ user.fullName }}, {{ user.position }}. Мой опыт включает работу с Vue.js, Nuxt, TypeScript и многими другими современными технологиями.
      </p>
      </article>
    </section>
  </template>
  
  <script setup lang="ts">
  import { useUserStore } from '~/store/user'
  const user = useUserStore()
  </script>
  
  <style scoped>
  </style>
  