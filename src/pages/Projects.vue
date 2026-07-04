<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">Projects</h2>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
      <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import projects from '../data/projects/sample.json'
</script>
