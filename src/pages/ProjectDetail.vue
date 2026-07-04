<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">{{ project?.title || 'Project' }}</h2>
    <div v-if="(project?.thumbnail && showThumb) || (!project?.thumbnail && !showThumb)" class="mb-4">
      <img
        v-if="project?.thumbnail && showThumb"
        :src="project.thumbnail"
        :alt="project.title + ' thumbnail'"
        class="w-full max-h-96 object-contain rounded cursor-pointer"
        @error="showThumb = false"
        @click="openAt(0)"
      />
      <div v-else class="w-full h-48 bg-slate-100 rounded flex items-center justify-center text-slate-400">
        <span>No preview available</span>
      </div>
    </div>
    <p class="mb-4">{{ project?.description }}</p>
    <div class="mb-4">
      <a v-if="project?.live" :href="project.live" target="_blank" class="text-green-600 mr-4">Open Live Site</a>
      <a v-if="project?.repo" :href="project.repo" target="_blank" class="text-sm">Repository</a>
    </div>
    <PDFViewer v-if="project?.pdf" :src="project.pdf" />
    <Lightbox
      v-if="showLightbox"
      :src="images[currentIndex]"
      :visible="showLightbox"
      :alt="project?.title"
      @close="showLightbox = false"
      @prev="onPrev"
      @next="onNext"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import projects from '../data/projects/sample.json'
import PDFViewer from '../components/PDFViewer.vue'
import Lightbox from '../components/Lightbox.vue'

const route = useRoute()
const id = route.params.id as string
const project = ref(projects.find((p: any) => p.id === id))
const showThumb = ref(true)
const showLightbox = ref(false)
const currentIndex = ref(0)
const images = computed(() => project.value?.images && project.value.images.length ? project.value.images : (project.value?.thumbnail ? [project.value.thumbnail] : []))

const openAt = (i = 0) => {
  currentIndex.value = i
  showLightbox.value = true
}

const onPrev = () => {
  if (images.value.length === 0) return
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}
const onNext = () => {
  if (images.value.length === 0) return
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}
</script>
