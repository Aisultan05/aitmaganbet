<template>
    <section class="index-page">
      <div class="content">
        <img :src="avatar" class="rounded-circle mb-3" style="width:150px;height:150px;">
        <h1>{{ user.fullName }}</h1>
        <p class="lead">{{ user.bio }}</p>
  
        <div class="mt-4">
            <a :href="user.socialLinks.github" target="_blank" class="button social-button">
              <i class="bi bi-github"></i> GitHub
            </a>
            <a :href="user.socialLinks.linkedin" target="_blank" class="button social-button">
              <i class="bi bi-linkedin"></i> LinkedIn
            </a>
            <a :href="user.socialLinks.twitter" target="_blank" class="button social-button">
              <i class="bi bi-twitter"></i> Twitter
            </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { useUserStore } from '~/store/user'
  const user = useUserStore()
  const avatar = '/avatar.jpg'
  </script>
  
  <style scoped>
  .index-page {
    height: 75vh; /* Фон занимает всю высоту экрана */
    background: linear-gradient(
        rgba(0, 0, 0, 0.6), 
        rgba(0, 0, 0, 0.6)
      ), 
      url('~/assets/images/i.webp') no-repeat center center;
    background-size: cover; /* Изображение покрывает весь фон */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white; /* Текст белый */
  }
  
  .social-button {
  margin-right: 8px; /* Отступ справа */
}

.social-button:last-child {
  margin-right: 0; /* Убираем отступ для последней кнопки */
}

  .content {
    text-align: center;
  }
  </style>
  