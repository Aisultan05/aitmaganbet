<template>
    <div class="project">
      <img :src="project.image" :alt="project.title" class="project__image">
  
      <ul class="project__techs">
        <li v-for="tech in project.techs" :key="tech" class="project__tech">{{ tech }}</li>
      </ul>
  
      <div class="project__content">
        <div class="project__name">{{ project.title }}</div>
        <div class="project__description">{{ project.description }}</div>
        <div class="project__links">
          <a :href="project.liveLink" target="_blank" class="button">Live =&gt;</a>
          <a :href="project.githubLink" target="_blank" class="button">Github =&gt;</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Project {
    title: string;
    description: string;
    image: string;
    techs: string[];
    liveLink: string;
    githubLink: string;
  }
  
  const props = defineProps<{
    project: Project;
  }>();
  </script>
  
  <style scoped>
  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(40, 44, 51, 0.9);
    border-radius: 8px;
    overflow: hidden;
    padding: 16px;
    color: white;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .project__image {
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 16px;
  }
  
  .project__techs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0 0 16px 0;
  }
  
  .project__tech {
    background-color: #c470db;
    color: black;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
  }
  
  .project__content {
    text-align: center;
  }
  
  .project__name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .project__description {
    font-size: 14px;
    margin-bottom: 16px;
  }
  
  .project__links {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  </style>
  