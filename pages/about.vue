<template>
  <div class="about-page">
    <!-- About Me Section -->
    <section class="container py-5">
      <article class="mb-5 text-center">
        <h1>
          <span>#</span><span class="highlight-text" style="color: white;">about-me</span>
        </h1>
        <p class="path__description">Кто я такой</p>
      </article>

      <div class="about-content d-flex flex-column flex-md-row align-items-center justify-content-between">
        <!-- Text Section -->
        <article class="about-text col-md-6">
          <p>
            Я — <strong>{{ user.fullName }}</strong>, <strong>{{ user.position }}</strong> из Астаны. Я самоучка, и мне нравится создавать адаптивные веб-сайты с нуля, превращая их в удобные и современные интерфейсы.
            <br /><br />
            Веб-разработка — это моя настоящая страсть, которой я занимаюсь уже больше года. Я рад помогать клиентам раскрывать себя в интернете и всегда ищу новые интересные технологии и фреймворки, чтобы улучшать свои навыки.
          </p>
        </article>

        <!-- Image Section -->
        <aside class="about-img col-md-5">
          <img src="/assets/images/aboutme.png" alt="about me" class="img-fluid rounded">
        </aside>
      </div>
    </section>

    <!-- Timeline Section -->
    <div class="timeline-container">
      <div class="timeline">
        <div v-for="(event, index) in timelineEvents" :key="index" class="timeline-item">
          <h2>{{ event.year }}</h2>
          <p>{{ event.description }}</p>
        </div>
        <div class="progress-line"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user';
const user = useUserStore();

const timelineEvents = [
  { year: 2023, description: 'I have learned and struggled a lot. Difficult times make a person stronger' },
  { year: 2024, description: 'Completed my bachelor\'s degree' },
  { year: 2025, description: 'Focusing on backend development using Node.js and Solana blockchain.' },
];
</script>

<style scoped>
.about-page {
  color: #abb2bf;
}

.path__description {
  color: #abb2bf;
  font-style: italic;
}

.about-content {
  margin-top: 2rem;
}

.about-text {
  padding: 30px 0;
}

.about-img img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.timeline-container {
  padding: 40px 20px;
  margin-top: 10rem;
  margin-bottom: 5rem;
}

.timeline {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: auto;
  position: relative;
}

.timeline-item {
  text-align: center;
  width: 18%;
  margin: 0 10px; /* Отступ между элементами */
}

.timeline-item h2 {
  font-size: 1.5rem;
  color: #c470db;
  margin-bottom: 10px;
}

.timeline-item p {
  font-size: 1rem;
  line-height: 1.5;
}

.progress-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px; /* Толщина линии */
  background: linear-gradient(to right, #c470db 0%, rgba(196, 112, 219, 0) 75%);
  border-radius: 8px 0 0 8px; /* Закругление только на левом крае */
}
</style>
