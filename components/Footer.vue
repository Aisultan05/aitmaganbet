<template>
    <footer class="py-3 border-top">
      <div class="container text-center">
        <p class="mb-0">© {{ new Date().getFullYear() }} {{ user.fullName }}. Все права защищены.</p>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { useUserStore } from '~/store/user'
  const user = useUserStore()
  </script>
  
  <style scoped>
  </style>
  