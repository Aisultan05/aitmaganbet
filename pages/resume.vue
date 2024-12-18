<template>
    <div class="min-vh-100 d-flex flex-column align-items-center">
      <!-- Шапка с кнопкой "Download CV" -->
        <div class="container d-flex justify-content-center mt-5 mb-3">
          <button class="btn btn-primary" @click="downloadCV">
            Скачать PDF резюме
          </button>
        </div>
  
      <!-- Основной контент -->
      <article
        class="container bg-white shadow-lg rounded p-4 my-5 mx-auto"
        style="max-width: 900px; color: black"
      >
        <!-- Заголовок и дата обновления -->
        <div class="mb-4">
          <h1 class="h3 fw-bold text-dark">Резюме — Айтмагамбет Айсултан</h1>
          <p class="text-muted mb-0">Обновлено: 16 декабря 2024, 00:28</p>
        </div>
  
        <!-- Личные данные -->
        <section class="mb-5">
          <h2 class="h5 fw-semibold mb-3 text-dark">Личные данные</h2>
          <ul class="list-unstyled">
            <li>Мужчина, 19 лет (дата рождения: 9 апреля 2005)</li>
            <li>Телефон: <strong>+7 (707) 7238‒960</strong></li>
            <li>
              E-mail:
              <a href="mailto:a.aytmaganbet@bk.ru" class="link-primary">
                a.aytmaganbet@bk.ru
              </a>
            </li>
            <li>Проживает: Астана. Гражданство: Казахстан</li>
            <li>Не готов к переезду, не готов к командировкам</li>
          </ul>
        </section>
  
        <!-- Желаемая должность -->
        <section class="mb-5">
          <h2 class="h5 fw-semibold mb-3 text-dark">Желаемая должность</h2>
          <p class="mb-1">Web-разработчик</p>
          <p>Специализации: Программист, разработчик</p>
          <p>Занятость: частичная, стажировка</p>
          <p>График работы: гибкий график, удаленная работа</p>
        </section>
  
        <!-- Опыт работы -->
        <section class="mb-5">
          <h2 class="h5 fw-semibold mb-3 text-dark">Опыт работы — 3 месяца</h2>
          <div class="card bg-light text-dark mb-3 border-0">
            <div class="card-body">
              <p class="fw-bold">Июнь 2024 — Август 2024 (3 месяца)</p>
              <p>
                <strong>ABC Design</strong>, Казахстан, <em>abc-design.kz</em>
              </p>
              <p>
                Должность: <strong>Frontend-разработчик</strong>
              </p>
              <p>
                В компании «ABC Design» я освоил верстку сайтов, оптимизацию веб-страниц
                и работу с базами данных. Разрабатывал проекты:
                <a href="https://snggroup.kz" class="link-primary">snggroup.kz</a> и
                <a href="https://acbgroup.kz" class="link-primary">acbgroup.kz</a>.
              </p>
            </div>
          </div>
        </section>
  
        <!-- Образование -->
        <section class="mb-5">
          <h2 class="h5 fw-semibold mb-3 text-dark">Образование</h2>
          <p>Неоконченное высшее (ожидаемый выпуск — 2025)</p>
          <p>
            <strong>Astana IT University</strong>, направление: Cyber Security
          </p>
        </section>
  
        <!-- Навыки -->
        <section class="mb-5">
          <h2 class="h5 fw-semibold mb-3 text-dark">Навыки</h2>
          <ul class="list-unstyled">
            <li>
              <strong>Языки:</strong> Казахский (родной), Английский (B1), Русский
              (C1)
            </li>
            <li>
              <strong>Технологии:</strong> JavaScript, HTML5, CSS3, Git, Bootstrap,
              Python, PostgreSQL, Vue.js, Django, PHP
            </li>
          </ul>
        </section>
  
        <!-- Дополнительная информация -->
        <section>
          <h2 class="h5 fw-semibold mb-3 text-dark">Дополнительная информация</h2>
          <p>
            <strong>GitHub:</strong>
            <a
              href="https://github.com/Aisultan05"
              target="_blank"
              rel="noopener noreferrer"
              class="link-primary"
            >
              github.com/Aisultan05
            </a>
          </p>
          <p>
            Специализируюсь на Frontend-разработке, но разрабатываю бэкенд на
            Flask/Python.
          </p>
        </section>
      </article>
  
      <!-- Нижняя кнопка "Download" -->
        <div class="container d-flex justify-content-center mb-5">
          <button class="btn btn-primary" @click="downloadCV">
            Скачать PDF резюме
          </button>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ResumePage',
    setup() {
      const downloadCV = (): void => {
        const pdfPath = '/Айтмагамбет Айсултан.pdf';
        window.open(pdfPath, '_blank'); 
      };
  
      return { downloadCV };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  section,.mb-4 {
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px; 
    margin-bottom: 20px; 
    padding-left: 40px;
}

  .card {
    border: none;
  }
  .link-primary {
    color: #0d6efd;
    &:hover {
      text-decoration: underline;
    }
  }
  </style>
  