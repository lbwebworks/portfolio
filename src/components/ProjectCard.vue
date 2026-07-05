<template>
  <article class="p-4 bg-white rounded shadow-sm">
    <div class="mb-3">
      <img
        v-if="project.thumbnail && showThumb"
        :src="thumbnailSrc"
        :alt="project.title + ' thumbnail'"
        class="w-full h-36 object-cover rounded cursor-pointer"
        @error="showThumb = false"
        @click="openAt(0)"
      />
      <div v-else class="w-full h-36 bg-slate-100 rounded flex items-center justify-center text-slate-400">
        <span>No preview</span>
      </div>
    </div>
    <h3 class="font-semibold">{{ project.title }}</h3>
    <p class="text-sm text-slate-600">{{ project.short }}</p>
    <div class="mt-3 flex items-center gap-3">
      <router-link :to="`/projects/${project.id}`" class="text-sm text-blue-600">View</router-link>
      <a v-if="project.live" :href="project.live" target="_blank" class="text-sm text-green-600">Live</a>
      <a v-if="project.repo" :href="project.repo" target="_blank" class="text-sm">Repo</a>
    </div>
  </article>
  <Lightbox
    v-if="showLightbox"
    :src="images[currentIndex]"
    :visible="showLightbox"
    :alt="project.title"
    @close="showLightbox = false"
    @prev="onPrev"
    @next="onNext"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Lightbox from './Lightbox.vue'
import { resolveAssetUrl } from '../utils/assetUrl'
const props = defineProps<{ project: any }>()
const project = props.project
const showThumb = ref(true)
const showLightbox = ref(false)
const currentIndex = ref(0)
const thumbnailSrc = computed(() => resolveAssetUrl(project.thumbnail))
const images = computed(() => {
  const source = project.images && project.images.length ? project.images : (project.thumbnail ? [project.thumbnail] : [])
  return source.map((img: string) => resolveAssetUrl(img))
})

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

