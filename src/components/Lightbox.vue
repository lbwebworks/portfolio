<template>
  <teleport to="body">
    <div
      v-if="visible"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      @click.self="close"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <button @click.stop.prevent="prev" class="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-30 rounded-full p-3">◀</button>
      <div class="max-w-[90vw] max-h-[90vh]">
        <img :src="src" class="max-w-full max-h-full rounded" :alt="alt" />
      </div>
      <button @click.stop.prevent="next" class="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-30 rounded-full p-3">▶</button>
      <button @click="close" class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2">✕</button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{ src: string; visible: boolean; alt?: string }>()
const emit = defineEmits(['close', 'prev', 'next'])

const close = () => emit('close')
const prev = () => emit('prev')
const next = () => emit('next')

const onKey = (e: KeyboardEvent) => {
  if (!props.visible) return
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

let touchStartX = 0
let touchCurrentX = 0
let touchMoved = false

const onTouchStart = (e: TouchEvent) => {
  if (!props.visible) return
  const t = e.touches && e.touches[0]
  if (!t) return
  touchStartX = t.clientX
  touchCurrentX = touchStartX
  touchMoved = false
}

const onTouchMove = (e: TouchEvent) => {
  if (!props.visible) return
  const t = e.touches && e.touches[0]
  if (!t) return
  touchCurrentX = t.clientX
  touchMoved = true
}

const onTouchEnd = () => {
  if (!props.visible || !touchMoved) return
  const dx = touchCurrentX - touchStartX
  const threshold = 50
  if (dx > threshold) prev()
  else if (dx < -threshold) next()
  touchMoved = false
}
</script>
