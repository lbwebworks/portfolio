<template>
  <div class="border rounded overflow-hidden">
    <iframe :src="src" class="w-full h-[600px]" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ src: string }>()
const src = props.src
</script>
