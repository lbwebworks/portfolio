<template>
  <section class="projects-page">
    <div class="projects-header">
      <h2 class="text-2xl font-semibold">Projects</h2>
    </div>

    <article
      v-for="(p, index) in themedProjects"
      :key="p.id"
      class="project-band"
      :style="{ '--row-bg': p.theme.bg, '--row-accent': p.theme.accent }"
    >
      <div class="project-band-inner" :class="{ 'is-reverse': index % 2 === 1 }">
        <div class="project-copy">
          <h3>{{ p.title }}</h3>
          <p>{{ p.description || p.short }}</p>
          <div class="project-actions">
            <router-link :to="`/projects/${p.id}`">View</router-link>
            <a v-if="p.repo" :href="p.repo" target="_blank" rel="noreferrer">Repo</a>
            <a v-if="p.live" :href="p.live" target="_blank" rel="noreferrer">Live</a>
          </div>
        </div>

        <div class="project-media">
          <img v-if="p.thumbnail" :src="p.thumbnail" :alt="`${p.title} banner`" />
          <div v-else class="project-media-fallback">No banner available</div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import projects from '../data/projects/sample.json'

const preferredOrder = ['photoprint', 'lkprint', 'familytree', 'eyewatch', 'cavitewisdom']

const rowThemes = [
  { bg: '#ffe9d8', accent: '#b45309' },
  { bg: '#e6f7ff', accent: '#0369a1' },
  { bg: '#ecfdf3', accent: '#047857' },
  { bg: '#f5f0ff', accent: '#6d28d9' },
  { bg: '#fff1f2', accent: '#be123c' }
]

const orderedProjects = computed(() => {
  return [...projects].sort((a, b) => {
    const aIndex = preferredOrder.indexOf(a.id)
    const bIndex = preferredOrder.indexOf(b.id)
    const aRank = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex
    const bRank = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex
    return aRank - bRank
  })
})

const themedProjects = computed(() => {
  return orderedProjects.value.map((project, index) => ({
    ...project,
    theme: rowThemes[index % rowThemes.length]
  }))
})
</script>
