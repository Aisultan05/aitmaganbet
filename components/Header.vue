<template>
  <header class="py-3 border-bottom">
    <nav class="container d-flex flex-wrap align-items-center justify-content-between">
      <NuxtLink to="/" class="fs-4 text-decoration-none">
        Aitmaganbet
      </NuxtLink>
      <ul class="nav">
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/about">About</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/projects">Projects</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/contact">Contacts</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/resume">Resume</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Никакой особой логики
</script>

<style scoped lang="scss">
/* При необходимости можно стилизовать */
header {
  background-color: #010409; /* Совпадает с глобальным фоном */
}
.nav-link {
  color: #fff !important;
  &:hover {
    color: #c470db !important;
  }
}
</style>
