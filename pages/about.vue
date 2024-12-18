<template>
  <div class="path"></div>   
  <section class="container py-5">
    <article class="mb-5">
      <h1>
        <span>/</span><span style="color: white;">about-me</span>
      </h1>
      <p class="path__description" style="color: #abb2bf;">Кто я такой</p>
    </article>
    
    <!-- Flex container for text and image -->
    <div class="about-content d-flex align-items-center justify-content-between">
      <!-- Text section -->
      <article class="about-text col-md-6" style="padding-top: 30px; padding-bottom: 50px;">
        <p>
          Я — {{ user.fullName }}, {{ user.position }} из Астаны. Я самоучка, и мне нравится создавать адаптивные веб-сайты с нуля, превращая их в удобные и современные интерфейсы..
          <br><br>
          Веб-разработка — это моя настоящая страсть, которой я занимаюсь уже больше года. Я рад помогать клиентам раскрывать себя в интернете и всегда ищу новые интересные технологии и фреймворки, чтобы улучшать свои навыки.
        </p>
      </article>

      <!-- Image section -->
      <aside class="about-img col-md-5">
        <img src="/assets/images/aboutme.png" alt="about" class="img-fluid">
      </aside>
    </div>
  </section>
</template>

  
  <script setup lang="ts">
  import { useUserStore } from '~/store/user'
  const user = useUserStore()
  </script>
  
  <style scoped>
  </style>
  