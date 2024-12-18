<template>
  <div class="app-container" style="background: #1e1e1e; color: #abb2bf; font-family: sans-serif;">
    <!-- HOME SECTION -->
    <section id="home" class="home-section d-flex flex-column align-items-start justify-content-center px-4 py-5">
      <h1 style="font-size: 2.5rem; color: #c678dd;">
        Elias is a <span style="color: #56b6c2;">web designer</span><br />
        and <span style="color: #56b6c2;">front-end developer</span>
      </h1>
      <p style="max-width: 600px; font-size: 1rem; line-height: 1.5;">
        Он создаёт адаптивные веб-сайты, где технологии встречаются с креативностью.
      </p>
      <button style="background: #c678dd; color: #fff; padding: 10px 20px; border: none; margin-top: 20px;">
        Contact ME &raquo;
      </button>
      <!-- Картинка или блок с "мрачно-худи"-эффектом справа (по аналогии) -->
      <div style="margin-top: 40px;">
        <div 
          style="width: 300px; height: 400px; background: url('/assets/images/hoodie.png') center/cover no-repeat;"
        ></div>
      </div>
    </section>

    <!-- QUOTE / HIGHLIGHT (промежуточный блок) -->
    <section class="quote-section px-4 py-4" style="text-align: center; border-top: 1px solid #303030; border-bottom: 1px solid #303030;">
      <blockquote style="font-size: 1.2rem;">
        «With great power comes great electricity bill» <br />
        <span style="color: #56b6c2;">— Dr. Who</span>
      </blockquote>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="projects" class="projects-section px-4 py-5">
      <h2 style="color: #c678dd;">#projects</h2>
      <div class="projects-grid d-flex flex-wrap gap-4 mt-4">
        <article class="project-card" style="background: #2c2c2c; padding: 16px; width: 280px;">
          <h3>Deplos</h3>
          <p style="font-size: 0.9rem;">Game servers hosting</p>
          <p style="font-size: 0.8rem; color: #5c6370;">Pug | Stylus | Node.js</p>
          <div style="margin-top: 8px;">
            <a href="#" style="margin-right: 12px; color: #56b6c2;">Figma &raquo;</a>
            <a href="#" style="margin-right: 12px; color: #56b6c2;">Live &raquo;</a>
            <a href="#" style="color: #56b6c2;">GitHub &raquo;</a>
          </div>
        </article>
        <article class="project-card" style="background: #2c2c2c; padding: 16px; width: 280px;">
          <h3>Pixel Battle</h3>
          <p style="font-size: 0.9rem;">Pixel art battle game</p>
          <p style="font-size: 0.8rem; color: #5c6370;">Preact | CSS | PixiJS | TypeScript</p>
          <div style="margin-top: 8px;">
            <a href="#" style="margin-right: 12px; color: #56b6c2;">Live &raquo;</a>
            <a href="#" style="color: #56b6c2;">GitHub &raquo;</a>
          </div>
        </article>
        <article class="project-card" style="background: #2c2c2c; padding: 16px; width: 280px;">
          <h3>Feedrum</h3>
          <p style="font-size: 0.9rem;">Ukrainian social network for developers</p>
          <p style="font-size: 0.8rem; color: #5c6370;">Node.js | Next | React | Zod</p>
          <div style="margin-top: 8px;">
            <a href="#" style="margin-right: 12px; color: #56b6c2;">GitHub &raquo;</a>
            <a href="#" style="color: #56b6c2;">Figma &raquo;</a>
          </div>
        </article>
      </div>
      <div class="view-all mt-4">
        <a href="#" style="color: #56b6c2;">View all &raquo;</a>
      </div>
    </section>

    <!-- SKILLS SECTION -->
    <section id="skills" class="skills-section px-4 py-5">
      <h2 style="color: #c678dd;">#skills</h2>
      <div class="skills-grid d-flex flex-wrap gap-4 mt-4">
        <article style="width: 220px;">
          <h4 style="margin-bottom: 8px;">Languages</h4>
          <ul style="list-style: none; margin: 0; padding: 0;">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
          </ul>
        </article>
        <article style="width: 220px;">
          <h4 style="margin-bottom: 8px;">Databases</h4>
          <ul style="list-style: none; margin: 0; padding: 0;">
            <li>SQLite</li>
            <li>PostgreSQL</li>
          </ul>
        </article>
        <article style="width: 220px;">
          <h4 style="margin-bottom: 8px;">Other</h4>
          <ul style="list-style: none; margin: 0; padding: 0;">
            <li>HTML, CSS, SASS, SCSS</li>
            <li>Stylus, LESS, LiJS</li>
            <li>Jinja2, Pug</li>
          </ul>
        </article>
        <article style="width: 220px;">
          <h4 style="margin-bottom: 8px;">Frameworks</h4>
          <ul style="list-style: none; margin: 0; padding: 0;">
            <li>React, Next, Gulp</li>
            <li>Express, Flask</li>
            <li>Quart</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="about-section px-4 py-5">
      <h2 style="color: #c678dd;">#about</h2>
      <div class="d-flex flex-row align-items-start justify-content-between mt-4">
        <!-- Текстовый блок -->
        <article class="about-text col-md-6" style="padding-top: 30px; padding-bottom: 50px;">
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
        <a href="#" style="color: #56b6c2;">View all &raquo;</a>
      </div>
    </section>

    <!-- CONTACTS SECTION -->
    <section id="contacts" class="contacts-section px-4 py-5">
      <h2 style="color: #c678dd;">#contacts</h2>
      <p style="max-width: 600px;">
        I'm interested in freelance opportunities. However, if you have other requests or questions, 
        don’t hesitate to contact me.
      </p>
      <div class="contact-info mt-4">
        <p>Message me here:</p>
        <p style="color: #56b6c2;">elias.dev</p>
        <p style="color: #56b6c2;">elias.devis@protonmail.com</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user'
const user = useUserStore()
</script>

<style scoped>
/* Пример упрощённых стилей. Можно заменить на ваши классы/препроцессор. */
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
