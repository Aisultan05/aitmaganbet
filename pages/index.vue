<template>
  <div class="app-container">
    <!-- HOME SECTION -->
    <section id="home" class="home-section d-flex align-items-center px-4 py-5">
      <div class="content col-md-7">
        <h1 class="home-title">
          Elias is a <span class="accent">web designer</span><br />
          and <span class="accent">front-end developer</span>
        </h1>
        <p class="home-description">
          Он создаёт адаптивные веб-сайты, где технологии встречаются с креативностью.
        </p>
        <button class="contact-button">
          Contact ME &raquo;
        </button>
        <!-- Блок с "мрачно-худи"-эффектом -->
        <div class="hoodie-image"></div>
      </div>
      <aside class="about-img col-md-5">
        <img src="/assets/images/home.png" alt="about" class="img-fluid" />
      </aside>
    </section>

    <!-- QUOTE / HIGHLIGHT -->
    <section class="quote-section px-4 py-4">
      <blockquote>
        «With great power comes great electricity bill» <br />
        <span class="accent">— Dr. Who</span>
      </blockquote>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="projects" class="projects-section px-4 py-5">
      <h2 class="section-title">#projects</h2>
      <div class="projects-grid d-flex flex-wrap gap-4 mt-4">
        <article class="project-card">
          <h3>Deplos</h3>
          <p class="subtitle">Game servers hosting</p>
          <p class="tags">Pug | Stylus | Node.js</p>
          <div class="project-links">
            <a href="#">Figma &raquo;</a>
            <a href="#">Live &raquo;</a>
            <a href="#">GitHub &raquo;</a>
          </div>
        </article>
        <article class="project-card">
          <h3>Pixel Battle</h3>
          <p class="subtitle">Pixel art battle game</p>
          <p class="tags">Preact | CSS | PixiJS | TypeScript</p>
          <div class="project-links">
            <a href="#">Live &raquo;</a>
            <a href="#">GitHub &raquo;</a>
          </div>
        </article>
        <article class="project-card">
          <h3>Feedrum</h3>
          <p class="subtitle">Ukrainian social network for developers</p>
          <p class="tags">Node.js | Next | React | Zod</p>
          <div class="project-links">
            <a href="#">GitHub &raquo;</a>
            <a href="#">Figma &raquo;</a>
          </div>
        </article>
      </div>
      <div class="view-all mt-4">
        <a href="#">View all &raquo;</a>
      </div>
    </section>

    <!-- SKILLS SECTION -->
    <section id="skills" class="skills-section px-4 py-5">
      <h2 class="section-title">#skills</h2>
      <div class="skills-grid d-flex flex-wrap gap-4 mt-4">
        <article class="skill-column">
          <h4>Languages</h4>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
          </ul>
        </article>
        <article class="skill-column">
          <h4>Databases</h4>
          <ul>
            <li>SQLite</li>
            <li>PostgreSQL</li>
          </ul>
        </article>
        <article class="skill-column">
          <h4>Other</h4>
          <ul>
            <li>HTML, CSS, SASS, SCSS</li>
            <li>Stylus, LESS, LiJS</li>
            <li>Jinja2, Pug</li>
          </ul>
        </article>
        <article class="skill-column">
          <h4>Frameworks</h4>
          <ul>
            <li>React, Next, Gulp</li>
            <li>Express, Flask</li>
            <li>Quart</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="about-section px-4 py-5">
      <h2 class="section-title">#about</h2>
      <div class="d-flex flex-row align-items-start justify-content-between mt-4">
        <!-- Текстовый блок -->
        <article class="about-text col-md-6">
          <p>
            Я — {{ user.fullName }}, {{ user.position }} из Астаны. Я самоучка, и мне нравится
            создавать адаптивные веб-сайты с нуля, превращая их в удобные и современные интерфейсы.
          </p>
          <p>
            Веб-разработка — моя настоящая страсть, которой я занимаюсь уже больше года. Я рад
            помогать клиентам раскрывать себя в интернете и постоянно изучаю новые технологии и фреймворки,
            чтобы улучшать свои навыки.
          </p>
        </article>

        <!-- Изображение -->
        <aside class="about-img col-md-5">
          <img src="/assets/images/aboutme.png" alt="about" class="img-fluid" />
        </aside>
      </div>
      <div class="view-all mt-4">
        <a href="#">View all &raquo;</a>
      </div>
    </section>

    <!-- CONTACTS SECTION -->
    <section id="contacts" class="contacts-section px-4 py-5">
      <h2 class="section-title">#contacts</h2>
      <p class="contact-description">
        I'm interested in freelance opportunities. However, if you have other requests or questions,
        don’t hesitate to contact me.
      </p>
      <div class="contact-info mt-4">
        <p>Message me here:</p>
        <p class="accent">elias.dev</p>
        <p class="accent">elias.devis@protonmail.com</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user'
const user = useUserStore()
</script>

<style scoped>
/* ---------------------
   Переменные
---------------------- */
:root {
  --bg-color: #1e1e1e;
  --text-color: #abb2bf;
  --accent-color: #56b6c2;
  --highlight-color: #c678dd;
  --secondary-color: #5c6370;
  --border-color: #303030;
}

/* ---------------------
   Базовые стили
---------------------- */
.app-container {
  background: var(--bg-color);
  color: var(--text-color);
  font-family: sans-serif;
}

a {
  color: var(--text-color);
  text-decoration: none;
}

a:hover {
  color: var(--accent-color);
}

/* ---------------------
   HOME SECTION
---------------------- */
#home {
  display: flex;
  align-items: center; /* Контролируем вертикальное выравнивание */
  flex-wrap: wrap;     /* Адаптивно переносим при уменьшении экрана */
}

.home-title {
  font-size: 2.5rem;
  color: var(--highlight-color);
}

.accent {
  color: var(--accent-color);
}

.home-description {
  max-width: 600px;
  font-size: 1rem;
  line-height: 1.5;
}

.contact-button {
  background: var(--highlight-color);
  color: #fff;
  padding: 10px 20px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
}

.content {
  flex: 1; /* Занимает доступное пространство */
  padding: 10px;
}

.hoodie-image {
  width: 300px;
  height: 400px;
  /* Убираем margin-top, чтобы не сдвигать изображение вниз */
  background: url('/assets/images/hoodie.png') center/cover no-repeat;
}

.about-img {
  flex: 1; /* Изображение займет оставшееся пространство */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.about-img img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

/* Медиа-запрос для адаптива */
@media (max-width: 768px) {
  #home {
    flex-direction: column;
    text-align: center;
  }
  .content, .about-img {
    flex: none;
    width: 100%;
  }
}

/* ---------------------
   QUOTE SECTION
---------------------- */
.quote-section {
  text-align: center;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}
.quote-section blockquote {
  font-size: 1.2rem;
}

/* ---------------------
   Projects Section
---------------------- */
.section-title {
  color: var(--highlight-color);
}

.projects-grid {
  gap: 1rem;
}

.project-card {
  background: #2c2c2c;
  padding: 16px;
  width: 280px;
  border-radius: 5px;
}

.project-card h3 {
  margin-top: 0;
}

.subtitle {
  font-size: 0.9rem;
}

.tags {
  font-size: 0.8rem;
  color: var(--secondary-color);
}

.project-links a {
  margin-right: 12px;
  color: var(--accent-color);
}

.view-all a {
  color: var(--accent-color);
}

/* ---------------------
   Skills Section
---------------------- */
.skills-grid {
  gap: 1rem;
}

.skill-column {
  width: 220px;
}

.skill-column h4 {
  margin-bottom: 8px;
}

/* ---------------------
   About Section
---------------------- */
.about-section .section-title {
  color: var(--highlight-color);
}

.about-text {
  padding-top: 30px;
  padding-bottom: 50px;
}

.about-img img {
  width: 100%;
  height: auto;
}

/* ---------------------
   Contacts Section
---------------------- */
.contacts-section .section-title {
  color: var(--highlight-color);
}

.contact-description {
  max-width: 600px;
}


/* ---------------------
   Utility Classes
---------------------- */
.d-flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.flex-row {
  flex-direction: row;
}
.align-items-center {
  align-items: center;
}
.align-items-start {
  align-items: flex-start;
}
.justify-content-between {
  justify-content: space-between;
}
.justify-content-center {
  justify-content: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.gap-4 {
  gap: 1rem;
}
.px-4 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-3 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.py-4 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.py-5 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.mt-4 {
  margin-top: 1.5rem;
}
.mb-5 {
  margin-bottom: 3rem;
}
.col-md-6 {
  width: 50%;
}
.col-md-5 {
  width: 41.6667%;
}
.project-card {
  border-radius: 5px;
}
</style>
