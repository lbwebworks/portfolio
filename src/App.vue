<template>
  <div class="min-h-screen bg-gray-50 text-slate-900 app-shell">
    <Header />
    <main class="max-w-5xl mx-auto p-4 app-main">
      <router-view />
    </main>
    <footer class="site-footer">
      <div class="site-footer-inner">
        <p>© {{ year }} LB Webworks. All rights reserved.</p>
        <p>
          Contact: <a href="mailto:lee.budaden@gmail.com">lee.budaden@gmail.com</a>
        </p>
        <p>Built with Vue + Vite. Crafted for practical, client-ready solutions.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Header from './components/Header.vue'

const year = computed(() => new Date().getFullYear())
</script>
