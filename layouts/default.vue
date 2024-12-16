<template>
    <div class="d-flex flex-column min-vh-100">
      <Header />
      <main class="flex-grow-1">
        <NuxtPage />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  
  <style scoped>
  </style>
  