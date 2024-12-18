<template>
  <div class="container my-5">
    <!-- HOME SECTION -->
    <section id="home">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h3>Hi There!👋</h3>
          <h1 class="display-4 text-white">
            I'm a
            <span style="color: #c470db;">front-end developer</span><br />
          </h1>
          <p class="lead text-muted">
            Я создаю адаптивные веб-сайты, где технологии встречаются с креативностью.
          </p>
          <router-link to="/contact" class="btn btn-primary">
            Contact me &raquo;
          </router-link>
        </div>
        <div class="col-lg-6 text-center">
          <img
            src="/assets/images/home.png"
            alt="Home illustration"
            class="img-fluid"
            style="max-height: 400px; margin: 150px;"
          />
        </div>
      </div>
    </section>

    <!-- QUOTE / HIGHLIGHT -->
    <section class="text-center">
      <blockquote class="blockquote fs-4">
        «With great power comes great electricity bill» <br />
        <span style="color: #c470db;">— Dr. Who</span>
      </blockquote>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="projects" class="section-gap">
      <h2 class="mb-4" style="text-align: left;"><span>#</span><span style="color: white;">projects</span></h2>
      <div class="row g-4">
        <div class="col-md-4">
          <ProjectCard
            :project="{
              title: 'Deplos',
              description: 'Game servers hosting',
              image: '/assets/images/deplos.png',
              techs: ['Pug', 'Stylus', 'Node.js'],
              liveLink: '#',
              githubLink: '#'
            }"
          />
        </div>
        <div class="col-md-4">
          <ProjectCard
            :project="{
              title: 'Pixel Battle',
              description: 'Pixel art battle game',
              image: '/assets/images/pixel-battle.png',
              techs: ['Preact', 'CSS', 'PixiJS', 'TypeScript'],
              liveLink: '#',
              githubLink: '#'
            }"
          />
        </div>
        <div class="col-md-4">
          <ProjectCard
            :project="{
              title: 'Feedrum',
              description: 'Ukrainian social network for developers',
              image: '/assets/images/feedrum.png',
              techs: ['Node.js', 'Next', 'React', 'Zod'],
              liveLink: '#',
              githubLink: '#'
            }"
          />
        </div>
      </div>
      <div class="mt-4">
        <router-link to="/projects" style="color: #c470db;">View all &raquo;</router-link>
      </div>
    </section>

    <!-- SKILLS SECTION -->
    <section id="skills" class="section-gap">
      <h2 class="mb-4" style="text-align: left;"><span>#</span><span style="color: white;">skills</span></h2>
      <div class="row gy-4">
        <div class="col-sm-6 col-md-3">
          <h4 class="text-white">Languages</h4>
          <ul class="list-unstyled text-muted">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3">
          <h4 class="text-white">Databases</h4>
          <ul class="list-unstyled text-muted">
            <li>SQLite</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3">
          <h4 class="text-white">Other</h4>
          <ul class="list-unstyled text-muted">
            <li>HTML, CSS, SASS, SCSS</li>
            <li>Stylus, LESS, LiJS</li>
            <li>Jinja2</li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3">
          <h4 class="text-white">Frameworks</h4>
          <ul class="list-unstyled text-muted">
            <li>Vue, Next, Gulp</li>
            <li>Express, Flask</li>
            <li>Dlango</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="section-gap">
      <h2 class="mb-4" style="text-align: left;"><span>#</span><span style="color: white;">about</span></h2>
      <div class="row align-items-center">
        <div class="col-md-6">
          <p class="text-muted">
            Я — {{ user.fullName }}, {{ user.position }} из Астаны. Я самоучка, и мне нравится
            создавать адаптивные веб-сайты с нуля, превращая их в удобные и современные интерфейсы.
          </p>
          <p class="text-muted">
            Веб-разработка — моя настоящая страсть, которой я занимаюсь уже больше года. Я рад
            помогать клиентам раскрывать себя в интернете и постоянно изучаю новые технологии и фреймворки,
            чтобы улучшать свои навыки.
          </p>
          <div class="mt-4">
            <router-link to="/about" style="color: #c470db;">View all &raquo;</router-link>
          </div>
        </div>
        <div class="col-md-6 text-center">
          <img
            src="/assets/images/aboutme.png"
            alt="about"
            class="img-fluid"
            style="max-height: 400px;"
          />
        </div>
      </div>
    </section>

    <section id="contacts" class="section-gap">
      <div class="row align-items-start">
        <!-- Левая колонка -->
        <div class="col-lg-6 mb-4 mb-lg-0">
          <h2 class="mb-3">
            <span>#</span><span class="text-white">contacts</span>
          </h2>
          <p class="text-muted" style="max-width: 700px;">
            Я заинтересован в возможностях фрилансера. Однако, если у вас есть другие пожелания или вопросы,
            не стесняйтесь обращаться ко мне.
          </p>
        </div>
        <!-- Правая колонка -->
        <div class="col-lg-6" style="margin-left: 100px; border: 2px solid #555; padding: 15px 10px; width: 300px; height: 150px; border-radius: 15px;">
          <p class="fw-semibold mb-2" style="color: #c470db;">Contact me:</p>
          <div class="d-flex flex-column text-white">
            <p class="mb-2">@EXlvl</p>
            <p class="mb-2">a.aytmaganbet@bk.ru</p>
            <p class="mb-0">8-(707)-723-8960</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user'
import ProjectCard from '~/components/ProjectCard.vue'

const user = useUserStore()
</script>

<style scoped lang="scss">
.section-gap {
  margin-top: 10rem;
  margin-bottom: 10rem;
}

/* Сброс боксовой модели */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Контейнер с рамкой */
.contact-container {
  border: 1px solid white; /* Белая граница */
  padding: 20px;
  width: 320px; /* Ширина контейнера */
  border-radius: 5px; /* Скругление углов */
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Легкая тень */
}

/* Заголовок */
.contact-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #c470db; /* Цвет заголовка */
}

/* Элементы контактов */
.contact-item p {
  margin: 5px 0;
  font-size: 14px;
  color: #d1d1e3; /* Светло-серый текст */
}
</style>
