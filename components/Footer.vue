<template>
  <footer class="py-3 border-top">
    <div class="container text-center">
      <p class="mb-0">
        © {{ new Date().getFullYear() }} {{ user.fullName }}. Все права защищены.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user'
const user = useUserStore()
</script>

<style scoped lang="scss">
footer {
  background-color: #0f1624; /* общий фон */
  border-color: #303030;     /* если хотите другую границу */
}
</style>
