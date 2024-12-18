<template>
    <section class="container py-5">
     <article>
      <h2 class="mb-5" style="text-align: left;"><span>#</span><span style="color: white;">my-projects</span></h2>
     </article>    
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4 mb-4" v-for="project in projects" :key="project.title">
          <ProjectCard :project="project" />
        </div>
      </div>
    </section>
  </template>
  
  
  <script setup lang="ts">
  import ProjectCard from '~/components/ProjectCard.vue';
  
  interface Project {
    title: string;
    description: string;
    image: string;
    techs: string[];
    liveLink: string;
    githubLink: string;
  }
  
  const projects: Project[] = [
    {
      title: 'Pixel Battle',
      description: 'Клон r/place',
      image: '/images/projects/pixel-battle.webp',
      techs: ['Preact', 'CSS', 'PixiJS', 'TypeScript'],
      liveLink: 'https://pixelbattle.fun',
      githubLink: 'https://github.com/pixelate-it/pixelbattle-frontend',
    },
    {
      title: 'Task Manager',
      description: 'Приложение для управления задачами с использованием Vue и Pinia.',
      image: '/images/projects/task-manager.webp',
      techs: ['Vue.js', 'Pinia', 'Tailwind', 'TypeScript'],
      liveLink: 'https://taskmanager.example.com',
      githubLink: 'https://github.com/example/task-manager',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Полнофункциональная платформа для электронной коммерции.',
      image: '/images/projects/ecommerce.webp',
      techs: ['React', 'Redux', 'Sass', 'Node.js'],
      liveLink: 'https://ecommerce.example.com',
      githubLink: 'https://github.com/example/ecommerce',
    },
    {
      title: 'Weather App',
      description: 'Приложение для отображения прогноза погоды на основе API.',
      image: '/images/projects/weather-app.webp',
      techs: ['React', 'Bootstrap', 'OpenWeather API'],
      liveLink: 'https://weatherapp.example.com',
      githubLink: 'https://github.com/example/weather-app',
    },
    {
      title: 'Personal Portfolio',
      description: 'Мой персональный сайт-портфолио.',
      image: '/images/projects/portfolio.webp',
      techs: ['Nuxt.js', 'Tailwind CSS', 'TypeScript'],
      liveLink: 'https://portfolio.example.com',
      githubLink: 'https://github.com/example/portfolio',
    },
  ];
  </script>
  
  <style scoped>
  h2 {
    color: #c470db;
  }
  </style>
  