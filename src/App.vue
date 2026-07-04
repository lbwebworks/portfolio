<template>
  <div class="min-h-screen bg-gray-50 text-slate-900">
    <Header />
    <main class="max-w-5xl mx-auto p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>
