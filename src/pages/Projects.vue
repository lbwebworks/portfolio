<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">Projects</h2>
    <div class="grid gap-4 grid-cols-1">
      <ProjectCard v-for="p in orderedProjects" :key="p.id" :project="p" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import projects from '../data/projects/sample.json'

const preferredOrder = ['photoprint', 'lkprint', 'familytree', 'eyewatch', 'cavitewisdom']

const orderedProjects = computed(() => {
  return [...projects].sort((a, b) => {
    const aIndex = preferredOrder.indexOf(a.id)
    const bIndex = preferredOrder.indexOf(b.id)
    const aRank = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex
    const bRank = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex
    return aRank - bRank
  })
})
</script>
