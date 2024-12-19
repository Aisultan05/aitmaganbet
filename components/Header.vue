<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand">Aitmaganbet</NuxtLink>
        
        <ul class="navbar-nav ms-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/contact" class="nav-link">Contacts</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/resume" class="nav-link">Resume</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.nav-link:hover {
  color: #c470db;
}
</style>
